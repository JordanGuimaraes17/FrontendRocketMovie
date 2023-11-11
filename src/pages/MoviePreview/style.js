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

  > section {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-top: 2.4rem;
    margin-bottom: 2.4rem;
    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    h2 {
      margin-right: 1.9rem;
    }
  }

  > footer {
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
      padding: 4rem 0 4rem;
      text-align: justify;
    }
  }
`
