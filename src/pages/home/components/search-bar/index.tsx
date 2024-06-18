import { SearchBarContainer } from './style'

export function SearchBar() {
  return (
    <SearchBarContainer>
      <header>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </header>
      <input placeholder="Buscar conteúdo" />
    </SearchBarContainer>
  )
}
