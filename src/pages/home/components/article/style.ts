import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

import { NavLink } from 'react-router-dom'

export const ArticleContainer = styled(NavLink)`
  border-radius: 0.625rem;
  background-color: ${(props) => props.theme['base-profile']};
  padding: 2rem;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    h3 {
      ${mixins.fonts.titleM};
      color: ${(props) => props.theme['base-title']};
      max-width: 17.6rem;
    }

    time {
      flex: 1;
      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    ${mixins.fonts.textM};
    color: ${(props) => props.theme['base-text']};
  }
`
