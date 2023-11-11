import { Container, Form, Background } from './style'
import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'
import { BsPerson } from 'react-icons/bs'
import { FiLock, FiMail, FiArrowLeft } from 'react-icons/fi'
import { ButtonText } from '../../Components/ButtonText'
import { Link } from 'react-router-dom'

export function SignUP() {
  return (
    <Container>
      <Background />
      <Form>
        <div>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </div>
        <h2>Crie sua conta</h2>
        <Input placeholder="Nome" type="text" icon={BsPerson} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />
        <Button title="Cadastrar" />

        <Link className="link" to="/">
          <ButtonText icon={FiArrowLeft} title="Voltar para o login" />
        </Link>
      </Form>
    </Container>
  )
}
