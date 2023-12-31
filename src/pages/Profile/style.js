import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  > header {
    width: 100%;
    height: 14.4rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    display: flex;
    align-items: center;
    padding: 0 12.4rem;
    svg {
      margin-right: 1rem;
      font-size: 2.4rem;
    }
  }
`
export const Form = styled.form`
  max-width: 34rem;
  margin: -8.4rem auto 0;
  div:nth-child(1) {
    margin-bottom: 4rem;
  }

  div {
    margin-bottom: 0.8rem;
  }
  div:nth-child(3) {
    margin-bottom: 2.4rem;
  }
  button {
    margin-top: 2.4rem;
  }
`
export const Avatar = styled.div`
  position: relative;
  margin: 0 auto 3.2rem;
  height: 18.6rem;
  width: 18.6rem;
  > img {
    border-radius: 50%;
    height: 18.6rem;
    width: 18.6rem;
  }
  > label {
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    bottom: 0.7rem;
    right: 0.7rem;
    cursor: pointer;
    input {
      display: none;
    }
    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`
