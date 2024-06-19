import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const HeaderContainer = styled.div`
  padding: 2rem 2.5rem;
  border-radius: 0.625rem;
  background-color: ${(props) => props.theme['base-profile']};
  margin-top: -6.225rem;
  margin-bottom: 4.5rem;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme.blue};
      text-transform: uppercase;
      ${mixins.fonts.link}
      margin-bottom: 0.75rem;

      svg {
        width: 0.7rem;
        height: 0.7rem;
        fill: ${(props) => props.theme.blue};
      }
    }
  }

  h1 {
    ${mixins.fonts.titleL};
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 1rem;
  }

  @media screen and (width <= 768px) {
    margin-top: -13.3rem;
    align-items: flex-start;
    flex-direction: column;
  }
`

export const SocialsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media screen and (width <= 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      width: 1.125rem;
      height: 1.125rem;
      fill: ${(props) => props.theme['base-label']};
    }

    span,
    time {
      ${mixins.fonts.textM}
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
