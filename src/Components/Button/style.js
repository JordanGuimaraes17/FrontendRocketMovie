import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  height: 5.6rem;
  border: 0;
  padding: 0 1.6rem;
  border-radius: 1rem;
  font-weight: 500;
  &:disabled {
    opacity: 0.5;
  }
  > svg {
    margin-right: 1.6rem;
  }
`
