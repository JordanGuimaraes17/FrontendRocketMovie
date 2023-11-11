import { Container, Form } from './style'
import { Header } from '../../Components/Header'
import { ButtonText } from '../../Components/ButtonText'
import { FiArrowLeft } from 'react-icons/fi'
import { TextArea } from '../../Components/TextArea'
import { Button } from '../../Components/Button'
import { MovieItem } from '../../Components/MovieItem'
import { Link } from 'react-router-dom'

import { Input } from '../../Components/Input'
export function CreateMovie() {
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
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>
          <TextArea placeholder="Observações" />
          <h3>Marcadores</h3>
          <div className="tags">
            <MovieItem value="React" />
            <MovieItem isNew placeholder="Novo marcador" />
          </div>
          <footer>
            <Button title="Excluir filme" />
            <Button title="Salvar alterações" />
          </footer>
        </Form>
      </main>
    </Container>
  )
}
