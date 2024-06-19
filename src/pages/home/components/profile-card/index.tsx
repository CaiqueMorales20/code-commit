import { Building } from '../../../../assets/icons/building'
import { Github } from '../../../../assets/icons/github'
import { Link } from '../../../../assets/icons/link'
import { People } from '../../../../assets/icons/people'
import { ProfileCardContainer, SocialsContainer } from './style'
import { useUser } from '../../../../hooks/use-user'

export function ProfileCard() {
  const user = useUser()

  if (!user) return <></>

  return (
    <ProfileCardContainer>
      <img src={user.avatar_url} alt="" />
      <div>
        <header>
          <h1>{user.name}</h1>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            github <Link />
          </a>
        </header>
        <p>{user.bio}</p>
        <SocialsContainer>
          <div>
            <Github />
            <span>{user.login}</span>
          </div>
          {user.company ? (
            <div>
              <Building />
              <span>{user.company}</span>
            </div>
          ) : (
            <></>
          )}

          <div>
            <People />
            <span>{user.followers} seguidores</span>
          </div>
        </SocialsContainer>
      </div>
    </ProfileCardContainer>
  )
}
