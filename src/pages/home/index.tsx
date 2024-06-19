import { useGithubContext } from '../../hooks/use-github-context'
import { Article } from './components/article'
import { ProfileCard } from './components/profile-card'
import { SearchBar } from './components/search-bar'
import { ArticlesGrid } from './style'

export function Home() {
  const { issues } = useGithubContext()

  return (
    <main>
      <ProfileCard />
      <SearchBar />
      <ArticlesGrid>
        {issues?.map((issue) => (
          <Article
            key={issue.id}
            title={issue.title}
            description={issue.body}
            number={issue.number}
            updatedAt={issue.updated_at}
          />
        ))}
      </ArticlesGrid>
    </main>
  )
}
