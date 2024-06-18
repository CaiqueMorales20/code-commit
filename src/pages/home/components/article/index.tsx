import { formatDistance } from 'date-fns'
import { ArticleContainer } from './style'
import { ptBR } from 'date-fns/locale'
import Markdown from 'react-markdown'

interface ArticleProps {
  title: string
  description: string
  number: number
  updatedAt: string
}

export function Article({title, description, updatedAt}: ArticleProps) {
  const dateDistance = formatDistance(new Date(updatedAt), new Date(), {addSuffix: true, locale: ptBR})
  const formattedDescription =  description.length > 30 ? description.substring(0, 300).split(" ").slice(0, -1).join(" ") + "..." : description

  return (
    <ArticleContainer to={`/post`}>
      <header>
        <h3>{title}</h3>
        <time dateTime={updatedAt}>{dateDistance}</time>
      </header>
      <Markdown components={{
          p: ({node, ...props}) => <p {...props} />,
          h1: (): null => null,
          h2: (): null => null,
          code: (): null => null,
        }}>
          {formattedDescription}
        </Markdown>
    </ArticleContainer>
  )
}
