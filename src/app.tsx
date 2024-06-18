import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/default'
import { GlobalStlye } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <GlobalStlye />
      </ThemeProvider>
    </BrowserRouter>
  )
}
