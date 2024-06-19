import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const PostContainer = styled.section`
  & > section {
    margin: 2.5rem 2rem;

    h1 {
      ${mixins.fonts.titleXL}
      color: ${(props) => props.theme.blue};
    }

    h2 {
      ${mixins.fonts.titleL}
      color: ${(props) => props.theme['base-title']};
    }

    div.p {
      ${mixins.fonts.textM};
      color: ${(props) => props.theme['base-text']};
      pre {
        background-color: red;
      }
    }
  }
`
