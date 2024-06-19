import { NavLink } from 'react-router-dom'
import { ArrowBack } from '../../../../assets/icons/arrow-back'
import { Calendar } from '../../../../assets/icons/calendar'
import { Comments } from '../../../../assets/icons/comments'
import { Github } from '../../../../assets/icons/github'
import { Link } from '../../../../assets/icons/link'
import { HeaderContainer, SocialsContainer } from './style'
import { GithubIssue } from '../../../../@types/issue'

export function Header(issue: GithubIssue) {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to={'/'}>
          <ArrowBack />
          voltar
        </NavLink>
        <a href={issue.html_url} target="_blank" rel="noreferrer">
          github <Link />
        </a>
      </nav>
      <h1>{issue.title}</h1>
      <SocialsContainer>
        <div>
          <Github />
          <span>{issue.user.login}</span>
        </div>
        <div>
          <Calendar />
          <span>Há 1 dia</span>
        </div>
        <div>
          <Comments />
          <span>
            {issue.comments}{' '}
            {issue.comments === 1 ? 'comentário' : 'comentários'}
          </span>
        </div>
      </SocialsContainer>
    </HeaderContainer>
  )
}
