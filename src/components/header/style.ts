import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-image: url('/cover.png');
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 296px;

  padding-top: 4rem;
  display: flex;
  justify-content: center;

  @media screen and (width <= 768px) {
    padding-top: 2rem;
  }

  img {
    width: 9.25rem;
    height: 6.125rem;
  }
`
