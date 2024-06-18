import { useIssues } from '../../hooks/use-issues'
import { Article } from './components/article'
import { ProfileCard } from './components/profile-card'
import { SearchBar } from './components/search-bar'
import { ArticlesGrid } from './style'

export function Home() {
  const issues = useIssues()

  return (
    <main>
      <ProfileCard />
      <SearchBar />
      <ArticlesGrid>
        {issues?.map((issue) => (
          <Article key={issue.id} title={issue.title} description={issue.body} number={issue.number} updatedAt={issue.updated_at} />
        ))}
      </ArticlesGrid>
    </main>
  )
}
