import { useParams } from 'react-router-dom'
import { Header } from './components/header'
import { useIssueByNumber } from '../../hooks/use-issue-by-number'
import Markdown from 'react-markdown'
import { PostContainer } from './style'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import styles from './style.module.css'
import { HTMLAttributes, ReactNode } from 'react'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CodeBlock = ({
  children,
}: { children?: ReactNode } & HTMLAttributes<HTMLElement>) => {
  return (
    <SyntaxHighlighter language={'typescript'} style={dracula}>
      {typeof children === 'string' ? children : ''}
    </SyntaxHighlighter>
  )
}

const Paragraph = ({ children }: { children?: ReactNode }) => (
  <div className="p">{children}</div>
)

export function Post() {
  const { id } = useParams()
  const issue = useIssueByNumber(Number(id))

  if (!issue) return null

  return (
    <PostContainer>
      <Header {...issue} />
      <section>
        <Markdown
          className={styles['line-break']}
          components={{
            code: CodeBlock,
            p: Paragraph,
          }}
        >
          {issue.body}
        </Markdown>
      </section>
    </PostContainer>
  )
}
