import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { GithubIssue } from '../@types/issue'
import { api } from '../lib/axios'

export interface IGithubContext {
  issues: GithubIssue[] | null
  fetchIssues: (query: string | undefined) => void
}

export const GithubContext = createContext<IGithubContext | null>(null)

export function GithubContextProvider({ children }: { children: ReactNode }) {
  const [issues, setIssues] = useState<GithubIssue[]>([])

  const loadIssues = useCallback(async (query?: string) => {
    const response = await api.get(
      '/repos/CaiqueMorales20/code-commit/issues',
      {
        params: {
          sort: 'updated',
          direction: 'desc',
        },
      },
    )
    const data: GithubIssue[] = response.data
    if (query) {
      const filteredData = data.filter((issue) =>
        issue.title.toLowerCase().includes(query.toLowerCase()),
      )
      return setIssues(filteredData)
    } else {
      setIssues(data)
    }
  }, [])

  useEffect(() => {
    loadIssues()
  }, [loadIssues])

  return (
    <GithubContext.Provider value={{ issues, fetchIssues: loadIssues }}>
      {children}
    </GithubContext.Provider>
  )
}
