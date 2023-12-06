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
  }
  .tags {
    display: flex;
    flex-wrap: wrap;

    padding: 2rem;
    border-radius: 0.8rem;
    overflow-y: auto;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
    margin: 2.4rem 0 4rem;
  }
`

export const Form = styled.form`
  padding: 0 12rem;
  margin: 3.8rem auto;

  > header {
    h2 {
      margin: 2.4rem 0 4rem;
    }
  }
  > div {
    display: flex;
    gap: 4rem;
  }
  > h3 {
    margin: 4rem 0 2.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  > footer {
    display: flex;
    gap: 4rem;
    button:nth-child(1) {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`
