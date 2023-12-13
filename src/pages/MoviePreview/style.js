import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
    'header'
    'content';
  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 4rem 12rem;
  }
`

export const Content = styled.div`
  margin: 0 auto;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  > header {
    display: flex;
    justify-content: space-around;
  }

  > footer {
    > section {
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-bottom: 2.4rem;
      h1 {
        font-weight: 500;
        font-size: 3.6rem;
      }
      svg {
        font-size: 2rem;
        margin-left: 1rem;
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }
    > div {
      svg {
        color: ${({ theme }) => theme.COLORS.PINK};
      }
      padding-bottom: 4rem;
      display: flex;
      align-items: center;
      img {
        height: 1.6rem;
        width: 1.6rem;
        border-radius: 50%;
      }
    }

    p {
      font-weight: 400;
      padding: 4rem 0 4rem;
      text-align: justify;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`
