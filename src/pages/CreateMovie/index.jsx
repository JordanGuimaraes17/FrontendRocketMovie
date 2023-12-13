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

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  function backNavigate() {
    navigate(-1)
  }

  function handleAddTag() {
    // Verificar se a nova tag não está vazia antes de adicioná-la
    if (newTag.trim() !== '') {
      setTags(prevState => [...prevState, newTag])
      setNewTag('')
    } else {
      // Exibir uma mensagem de erro ou tomar outra ação, se necessário
      alert(' tag não pode estar vazia.')
    }
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }
  async function handleNewMovie() {
    try {
      // Validação dos campos
      if (!title) throw new Error('Digite um título')

      // Validar e converter a nota para um número no intervalo de 0 a 5
      const numberRating = parseFloat(note) // note aqui é rating
      if (isNaN(numberRating) || numberRating < 0 || numberRating > 5) {
        throw new Error('Digite uma nota válida no intervalo de 0 a 5')
      }

      if (!tags || tags.length === 0) {
        throw new Error('Deixou uma tag sem adicionar.')
      }

      // Chamada assíncrona da API
      await api.post('/movie', {
        title,
        description,
        rating: numberRating, // ajustado aqui era note , mais foi para numberRating
        movie_tags: tags // Ajuste para corresponder aos parâmetros esperados pela função create
      })

      // Feedback ao usuário
      alert('Filme adicionado com sucesso!')

      // Redirecionamento
      navigate(-1)
    } catch (error) {
      // Tratamento de erro
      alert(`Erro ao adicionar filme: ${error.message}`)
    }
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <ButtonText
              icon={FiArrowLeft}
              title="voltar"
              onClick={backNavigate}
            />

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
            <Button title="Salvar alterações" onClick={handleNewMovie} />
          </footer>
        </Form>
      </main>
    </Container>
  )
}
