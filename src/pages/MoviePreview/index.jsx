import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { ButtonText } from '../../Components/ButtonText'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { Header } from '../../Components/Header'
import { FiArrowLeft } from 'react-icons/fi'
import { Container, Content } from './style'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'

export function MoviePreview() {
  const navigate = useNavigate()
  const [data, setData] = useState(null)
  const params = useParams()
  const { user } = useAuth()
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  function backNavigate() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movie/${params.id}`)
      console.log('dados:', response.data)
      setData(response.data)
    }
    fetchMovies()
  }, [])

  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText
            title="Voltar"
            icon={FiArrowLeft}
            onClick={backNavigate}
          />

          <footer>
            <div>
              <img src={avatarUrl} alt="Foto do usário" />
              &nbsp; por {user.name} &nbsp;
              <AiOutlineClockCircle />
              &nbsp;05/11/2023 às 8:00
            </div>
            <h1>Homem Aranha</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              hic est odio commodi distinctio aliquam quod, dicta assumenda
              veritatis voluptatem soluta non reprehenderit fugit excepturi
              placeat rerum? Perspiciatis, asperiores quos.
            </p>
          </footer>
        </Content>
      </main>
    </Container>
  )
}
