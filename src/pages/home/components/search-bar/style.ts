import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const SearchBarContainer = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;

    h2 {
      ${mixins.fonts.titleS};
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      ${mixins.fonts.textS}
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    padding: 0.75rem 1rem;
    border-radius: 0.375rem;
    width: 100%;

    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};

    ${mixins.fonts.textM};
    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      border-color: ${(props) => props.theme.blue};
    }
  }
`
