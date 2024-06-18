import { Outlet } from 'react-router-dom'
import { Header } from '../../components/header'
import { OutletContainer } from './style'

export function DefaultLayout() {
  return (
    <main>
      <Header />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </main>
  )
}
