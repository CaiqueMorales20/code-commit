import { useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { GithubUser } from '../@types/user'

export function useUser() {
  const [user, setUser] = useState<GithubUser | null>(null)

  async function loadUserInfo() {
    const response = await api.get('/users/CaiqueMorales20')
    const data = response.data
    setUser(data)
  }

  useEffect(() => {
    loadUserInfo()
  }, [])

  return user
}
