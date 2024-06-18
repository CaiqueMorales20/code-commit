import { GithubUser } from './user'

interface GithubIssue {
  url: string
  repository_url: string
  labels_url: string
  comments_url: string
  events_url: string
  html_url: string
  id: number
  node_id: string
  number: number
  title: string
  user: GithubUser
  labels: any[]
  state: string
  locked: boolean
  assignee: GithubUser | null
  assignees: GithubUser[]
  milestone: any | null
  comments: number
  created_at: string
  updated_at: string
  closed_at: string | null
  author_association: string
  active_lock_reason: any | null
  body: string
  reactions: {
    url: string
    total_count: number
    '+1': number
    '-1': number
    laugh: number
    hooray: number
    confused: number
    heart: number
    rocket: number
    eyes: number
  }
  timeline_url: string
  performed_via_github_app: any | null
  state_reason: any | null
}

export type { GithubIssue }
