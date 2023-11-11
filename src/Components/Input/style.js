import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border-radius: 1rem;
  > input {
    height: 5.6rem;
    width: 100%;
    padding: 1.9rem 2.4rem 1.9rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;
    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
  > svg {
    margin-left: 2rem;
  }
`
