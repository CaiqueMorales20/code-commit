import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { DefaultLayout } from './layout/default'
import { Post } from './pages/post'

const defaultLayoutInstance = <DefaultLayout />
const homeInstance = <Home />
const postInstance = <Post />

export function Router() {
  return (
    <Routes>
      <Route path="/" element={defaultLayoutInstance}>
        <Route path="/" element={homeInstance} />
        <Route path="/post">
          <Route path=":id" element={postInstance} />
        </Route>
      </Route>
    </Routes>
  )
}
