import { Container, Form, Avatar } from './style'
import { FiArrowLeft, FiLock, FiMail, FiCamera } from 'react-icons/fi'
import { BsPerson } from 'react-icons/bs'
import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'
import { ButtonText } from '../../Components/ButtonText'
import { Link } from 'react-router-dom'

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <ButtonText icon={FiArrowLeft} title="Voltar" />
        </Link>
      </header>
      <Form>
        <Avatar>
          <img
            src="https://github.com/jordanguimaraes17.png"
            alt="Foto do usário"
          />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input icon={BsPerson} type="text" placeholder="Nome" />
        <Input icon={FiMail} type="email" placeholder="E-mail" />

        <Input icon={FiLock} type="password" placeholder="Senha atual" />
        <Input icon={FiLock} type="password" placeholder="Nova senha" />
        <Button title="Salvar" />
      </Form>
    </Container>
  )
}
