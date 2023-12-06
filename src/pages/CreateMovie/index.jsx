import { ButtonText } from '../../Components/ButtonText'
import { MovieItem } from '../../Components/MovieItem'
import { Link, useNavigate } from 'react-router-dom'
import { TextArea } from '../../Components/TextArea'
import { Header } from '../../Components/Header'
import { Button } from '../../Components/Button'
import { Input } from '../../Components/Input'
import { FiArrowLeft } from 'react-icons/fi'
import { Container, Form } from './style'
import { api } from '../../services/api'
import { useState } from 'react'

export function CreateMovie() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [description, setDescription] = useState('')

  const [tags, setTgas] = useState([])
  const [newTag, setNewTag] = useState('')

  function handleAddTag() {
    setTgas(prevState => [...prevState, newTag])
    setNewTag('')
  }
  function handleRemoveTag(deleted) {
    setTgas(prevState => prevState.filter(tag => tag !== deleted))
  }
  async function handleNewMovie() {
    try {
      // Validação de entrada
      if (!title || !description || !note || !tags) {
        alert('Por favor, preencha todos os campos.')
        return
      }

      // Chamada assíncrona da API
      await api.post(`/movie`, {
        title,
        description,
        rating: note,
        movie_tags: tags // Ajuste para corresponder aos parâmetros esperados pela função create
      })

      // Feedback ao usuário
      alert('Filme adicionado com sucesso!')

      // Redirecionamento
      navigate(-1)
    } catch (error) {
      // Lidar com erros
      console.error('Erro ao adicionar filme:', error)
      alert('Erro ao adicionar filme. Tente novamente mais tarde.')
    }
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <Link to="/">
              <ButtonText icon={FiArrowLeft} title="voltar" />
            </Link>
            <h2>Novo filme</h2>
          </header>
          <div>
            <Input
              placeholder="Título"
              onChange={e => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              onChange={e => setNote(e.target.value)}
            />
          </div>
          <TextArea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />
          <h3>Marcadores</h3>
          <div className="tags">
            {tags.map((tag, index) => (
              <MovieItem
                key={String(index)}
                value={tag}
                onClick={() => handleRemoveTag(tag)}
              />
            ))}

            <MovieItem
              isNew
              placeholder="Novo marcador"
              onChange={e => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTag}
            />
          </div>
          <footer>
            <Button title="Excluir filme" />
            <Button title="Salvar alterações" onClick={handleNewMovie} />
          </footer>
        </Form>
      </main>
    </Container>
  )
}
