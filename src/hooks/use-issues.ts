import { useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { GithubIssue } from '../@types/issue'

export function useIssues() {
  const [issues, setIssues] = useState<GithubIssue[] | null>(null)

  async function loadIssues() {
    const response = await api.get('/repos/CaiqueMorales20/code-commit/issues')
    const data = response.data
    setIssues(data)
  }

  useEffect(() => {
    loadIssues()
  }, [])

  return issues
}
