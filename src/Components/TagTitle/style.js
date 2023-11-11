import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 20rem;
  padding: 3.2rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 1rem;
  > div {
    display: flex;
    gap: 0.6rem;
    margin-top: 0.8rem;
    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`
