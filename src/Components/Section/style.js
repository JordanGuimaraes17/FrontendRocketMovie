import styled from 'styled-components'

export const Container = styled.section`
  margin: 0 auto;
  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 3.2rem;
    font-weight: 400;
  }
`
