import { ArticleContainer } from './style'

export function Article() {
  return (
    <ArticleContainer to={'/post'}>
      <header>
        <h3>JavaScript data types and data structures</h3>
        <time dateTime="06-18-2024">Há 1 dia</time>
      </header>
      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in...
      </p>
    </ArticleContainer>
  )
}
