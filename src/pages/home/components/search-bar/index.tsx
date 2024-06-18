import { useIssues } from '../../../../hooks/use-issues'
import { SearchBarContainer } from './style'

export function SearchBar() {
  const issues = useIssues()

  return (
    <SearchBarContainer>
      <header>
        <h2>Publicações</h2>
        <span>{issues?.length} {issues?.length === 1 ? 'publicação' : 'publicações'}</span>
      </header>
      <input name="query" placeholder="Buscar conteúdo" />
    </SearchBarContainer>
  )
}
