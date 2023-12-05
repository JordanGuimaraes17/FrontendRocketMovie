import { Container, Form, Background } from './style'
import { useState } from 'react'
import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'
import { FiLock, FiMail } from 'react-icons/fi'
import { useAuth } from '../../hooks/auth'

import { Link } from 'react-router-dom'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()
  function handleSignIn() {
    signIn({ email, password })
  }
  return (
    <Container>
      <Form>
        <div>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </div>
        <h2>Faça seu login</h2>
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />
        <Button title="Entrar" onClick={handleSignIn} />
        <Link className="link" to="register">
          Criar conta
        </Link>
      </Form>
      <Background />
    </Container>
  )
}
