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
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Tag } from '../../Components/Tag'

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
  async function handleRemove() {
    const confirm = window.confirm(
      'Tem certeza de que deseja remover? Esta ação não pode ser desfeita.'
    )

    if (confirm) {
      await api.delete(`/movie/${params.id}`)
      navigate(-1)
    }
  }
  const renderStars = () => {
    const filledStars = Math.floor(data.rating)
    const remainingStars = 5 - filledStars

    const stars = []

    for (let i = 0; i < filledStars; i++) {
      stars.push(<AiFillStar key={i} />)
    }

    for (let i = 0; i < remainingStars; i++) {
      stars.push(<AiOutlineStar key={filledStars + i} />)
    }

    return <span>{stars}</span>
  }
  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await api.get(`/movie/${params.id}`)
        setData(response.data)
      } catch (error) {
        console.error('Erro ao buscar os dados:', error)
      }
    }
    fetchMovies()
  }, [])

  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <header>
              {' '}
              <ButtonText
                title="Voltar"
                icon={FiArrowLeft}
                onClick={backNavigate}
              />
              <ButtonText title="Excluir Filme" onClick={handleRemove} />
            </header>

            <footer>
              <section>
                <h1>{data.title}</h1>
                {renderStars()}
              </section>

              <div>
                <img src={avatarUrl} alt="Foto do usário" />
                &nbsp; por {user.name} &nbsp;
                <AiOutlineClockCircle />
                &nbsp;05/11/2023 às 8:00
              </div>
              {data.tags && (
                <span>
                  {data.tags.map(tag => (
                    <Tag key={String(tag.id)} title={tag.name} />
                  ))}
                </span>
              )}
              <p>{data.description}</p>
            </footer>
          </Content>
        </main>
      )}
    </Container>
  )
}
