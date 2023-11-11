import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  justify-content: space-around;
  display: flex;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  padding: 2.4rem 12rem;
  gap: 0 6.4rem;
  > h1 {
    max-width: 16.4rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 2.4rem;
  }
`
export const Profile = styled.div`
  display: flex;
  align-items: center;
  .link {
    img {
      cursor: pointer;
      width: 5.6rem;
      height: 5.6rem;
      border-radius: 50%;
    }
  }
  > div {
    margin-right: 1.6rem;
    display: flex;
    align-items: flex-end;
    flex-direction: column;

    strong {
      white-space: nowrap;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
    button {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`
