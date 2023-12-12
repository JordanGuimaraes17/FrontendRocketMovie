import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 10.5rem 10.5rem auto;
  grid-template-areas:
    'header'
    'section'
    'content';
  > section {
    width: 80%;
    grid-area: section;
    display: flex;
    align-items: center;

    justify-content: space-between;

    button {
      width: 20.7rem;
      height: 4.8rem;
    }
  }

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 0rem 12rem;
  }
`
export const Content = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  gap: 2.4rem;
`
