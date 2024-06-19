import { useCallback, useEffect, useState } from 'react'
import { GithubIssue } from '../@types/issue'
import { api } from '../lib/axios'

export function useIssueByNumber(number: number) {
  const [issue, setIssue] = useState<GithubIssue>()

  const loadIssue = useCallback(async () => {
    const response = await api.get(
      `/repos/CaiqueMorales20/code-commit/issues/${number}`,
    )
    const data = response.data
    setIssue(data)
  }, [number])

  useEffect(() => {
    loadIssue()
  }, [loadIssue])

  return issue
}
