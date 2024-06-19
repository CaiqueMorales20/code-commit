import { useForm } from 'react-hook-form'
import { useGithubContext } from '../../../../hooks/use-github-context'
import { SearchBarContainer } from './style'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchBarSchema = z.object({
  query: z.string(),
})

type ISearchBar = z.infer<typeof searchBarSchema>

export function SearchBar() {
  const { issues, fetchIssues } = useGithubContext()

  const { register, handleSubmit } = useForm<ISearchBar>({
    resolver: zodResolver(searchBarSchema),
  })

  function handleQueryIssues({ query }: ISearchBar) {
    console.log(query)
    fetchIssues(query)
  }

  return (
    <SearchBarContainer onSubmit={handleSubmit(handleQueryIssues)}>
      <header>
        <h2>Publicações</h2>
        <span>
          {issues?.length} {issues?.length === 1 ? 'publicação' : 'publicações'}
        </span>
      </header>
      <input {...register('query')} placeholder="Buscar conteúdo" />
    </SearchBarContainer>
  )
}
