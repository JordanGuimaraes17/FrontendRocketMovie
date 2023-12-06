import { FiArrowLeft, FiLock, FiMail, FiCamera } from 'react-icons/fi'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { ButtonText } from '../../Components/ButtonText'
import { Container, Form, Avatar } from './style'
import { Button } from '../../Components/Button'
import { Input } from '../../Components/Input'
import { useAuth } from '../../hooks/auth'
import { BsPerson } from 'react-icons/bs'
import { api } from '../../services/api'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState()
  const [passwordNew, setPasswordNew] = useState()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate() {
    const user = {
      name,
      email,
      old_password: passwordOld,
      password: passwordNew
    }
    await updateProfile({ user, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <ButtonText icon={FiArrowLeft} title="Voltar" />
        </Link>
      </header>
      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do usário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" onChange={handleChangeAvatar} />
          </label>
        </Avatar>

        <Input
          icon={BsPerson}
          type="text"
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          icon={FiMail}
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          icon={FiLock}
          type="password"
          placeholder="Senha atual"
          onChange={e => setPasswordOld(e.target.value)}
        />
        <Input
          icon={FiLock}
          type="password"
          placeholder="Nova senha"
          onChange={e => setPasswordNew(e.target.value)}
        />
        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  )
}
