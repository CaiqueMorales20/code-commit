import styled from 'styled-components'

export const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media screen and (width <= 768px) {
    grid-template-columns: 1fr;
  }
`
