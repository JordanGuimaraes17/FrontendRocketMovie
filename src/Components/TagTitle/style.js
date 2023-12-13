import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border: none;
  border-radius: 1rem;

  padding: 2.2rem;
  margin-bottom: 1.6rem;

  > h1 {
    display: flex;
    flex-direction: column;
    text-align: left;
    font-weight: 700;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    svg {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  > h2 {
    word-wrap: break-word;
    margin-top: 1rem;
    text-align: justify;
    font-weight: 400;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 2.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`
