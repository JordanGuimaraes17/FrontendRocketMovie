import { Container, Content } from './style'
import { Header } from '../../Components/Header'
import { Button } from '../../Components/Button'
import { Section } from '../../Components/Section'
import { IoAddOutline } from 'react-icons/io5'
import { api } from '../../services/api'
import { useState, useEffect } from 'react'
import { TagTitle } from '../../Components/TagTitle'
import { Link, useNavigate } from 'react-router-dom'

export function Home() {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])
  const [tags, setTags] = useState([])

  const navigate = useNavigate()

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function handleTags() {
      const response = await api.get('/tags')

      setTags(response.data)
    }
    handleTags()
  }, [])

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movie?title=${search}`)

      setMovies(response.data)
    }

    fetchMovies()
  }, [search])

  return (
    <Container>
      <Header />

      <Section title="Meus filmes">
        <Link to="/create/:id">
          <Button title="Adicionar filme" icon={IoAddOutline} />
        </Link>
      </Section>

      <main>
        <Content>
          {movies.map(movie => (
            <TagTitle key={String(movie.id)} data={movie} />
          ))}
        </Content>
      </main>
    </Container>
  )
}
