import { NavLink } from 'react-router-dom'
import { ArrowBack } from '../../../../assets/icons/arrow-back'
import { Calendar } from '../../../../assets/icons/calendar'
import { Comments } from '../../../../assets/icons/comments'
import { Github } from '../../../../assets/icons/github'
import { Link } from '../../../../assets/icons/link'
import { HeaderContainer, SocialsContainer } from './style'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to={'/'}>
          <ArrowBack />
          voltar
        </NavLink>
        <a href="">
          github <Link />
        </a>
      </nav>
      <h1>JavaScript data types and data structures</h1>
      <SocialsContainer>
        <div>
          <Github />
          <span>cameronwll</span>
        </div>
        <div>
          <Calendar />
          <span>Há 1 dia</span>
        </div>
        <div>
          <Comments />
          <span>5 comentários</span>
        </div>
      </SocialsContainer>
    </HeaderContainer>
  )
}
