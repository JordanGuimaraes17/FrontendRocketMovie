import { Container, Form, Background } from './style'
import { api } from '../../services/api'
import { useState } from 'react'
import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'
import { BsPerson } from 'react-icons/bs'
import { FiLock, FiMail, FiArrowLeft } from 'react-icons/fi'
import { ButtonText } from '../../Components/ButtonText'
import { Link, useNavigate } from 'react-router-dom'

export function SignUP() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('prencha todos campos!')
    }
    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso!')
        navigate(-1)
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('não foi possivel cadastar')
        }
      })
  }
  return (
    <Container>
      <Background />
      <Form>
        <div>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </div>
        <h2>Crie sua conta</h2>
        <Input
          placeholder="Nome"
          type="text"
          icon={BsPerson}
          onChange={e => setName(e.target.value)}
        />
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
        <Button title="Cadastrar" onClick={handleSignUp} />

        <Link className="link" to="/">
          <ButtonText icon={FiArrowLeft} title="Voltar para o login" />
        </Link>
      </Form>
    </Container>
  )
}
