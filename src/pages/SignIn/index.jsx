import { Container, Form, Background } from './style'
import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'
import { FiLock, FiMail } from 'react-icons/fi'

import { Link } from 'react-router-dom'

export function SignIn() {
  return (
    <Container>
      <Form>
        <div>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </div>
        <h2>Faça seu login</h2>
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />
        <Button title="Entrar" />
        <Link className="link" to="register">
          Criar conta
        </Link>
      </Form>
      <Background />
    </Container>
  )
}
