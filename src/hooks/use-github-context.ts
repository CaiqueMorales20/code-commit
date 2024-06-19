import { useContext } from 'react'
import { GithubContext, IGithubContext } from '../context/provider'

export const useGithubContext = () =>
  useContext(GithubContext) as IGithubContext
