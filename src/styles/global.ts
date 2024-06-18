import { createGlobalStyle } from 'styled-components'

export const GlobalStlye = createGlobalStyle`
  :root {
    font-size: 16px;
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${(props) => props.theme['base-background']};
    padding-bottom: 14.625rem;
  }

  body, textarea, input, button{
    font-size: 1rem;
    font-family: 'Nunito', sans-serif;
    color: white;
    outline: none;
  }

  a{
    text-decoration: none;
  }

  @media screen and (width <= 768px) {
    :root {
      font-size: 80%;
    }
  }
`
