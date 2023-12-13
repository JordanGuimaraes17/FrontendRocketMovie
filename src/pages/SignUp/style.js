import styled from 'styled-components'
import BackgroundImg from '../../assets/movie.jpg'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`
export const Form = styled.form`
  padding: 0 13.6rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  > div {
    h1 {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
    p {
      font-size: 1.4rem;
      margin-bottom: 2.8rem;
    }
  }
  > h2 {
    margin-bottom: 2.8rem;
  }
  > button {
    margin-top: 4rem;
  }
`
export const Background = styled.div`
  flex: 1;
  background: url(${BackgroundImg}) no-repeat center center;
  background-size: cover;
`
