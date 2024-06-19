import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/default'
import { GlobalStlye } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import { GithubContextProvider } from './context/provider'

export function App() {
  return (
    <BrowserRouter>
      <GithubContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <Router />
          <GlobalStlye />
        </ThemeProvider>
      </GithubContextProvider>
    </BrowserRouter>
  )
}
