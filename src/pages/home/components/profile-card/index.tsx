import { Building } from '../../../../assets/icons/building'
import { Github } from '../../../../assets/icons/github'
import { Link } from '../../../../assets/icons/link'
import { People } from '../../../../assets/icons/people'
import { ProfileCardContainer, SocialsContainer } from './style'

export function ProfileCard() {
  return (
    <ProfileCardContainer>
      <img src={'/avatar.png'} alt="" />
      <div>
        <header>
          <h1>Cameron Williamson</h1>
          <a href="">
            github <Link />
          </a>
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <SocialsContainer>
          <div>
            <Github />
            <span>cameronwll</span>
          </div>
          <div>
            <Building />
            <span>Rocketseat</span>
          </div>
          <div>
            <People />
            <span>32 seguidores</span>
          </div>
        </SocialsContainer>
      </div>
    </ProfileCardContainer>
  )
}
