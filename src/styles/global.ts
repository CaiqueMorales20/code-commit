import { createGlobalStyle } from 'styled-components'

export const GlobalStlye = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${(props) => props.theme['base-background']};
  }

  body, textarea, input, button{
    font-size: 1rem;
    font-family: 'Nunito', sans-serif;
    color: white;
  }
`
