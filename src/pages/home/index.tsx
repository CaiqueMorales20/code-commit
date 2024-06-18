import { Article } from './components/article'
import { ProfileCard } from './components/profile-card'
import { SearchBar } from './components/search-bar'
import { ArticlesGrid } from './style'

export function Home() {
  return (
    <main>
      <ProfileCard />
      <SearchBar />
      <ArticlesGrid>
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </ArticlesGrid>
    </main>
  )
}
