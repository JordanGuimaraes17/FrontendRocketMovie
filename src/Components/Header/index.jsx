import { Container, Profile } from './style'
import { Input } from '../../Components/Input'
import { FiSearch } from 'react-icons/fi'
import { ButtonText } from '../../Components/ButtonText'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header({ onSearch }) {
  const { signOut, user } = useAuth()
  const navigate = useNavigate()
  function handleSignOut() {
    navigate('/')
    signOut()
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input
        placeholder="Pesquisar pelo título"
        icon={FiSearch}
        onChange={e => onSearch(e.target.value)}
      />

      <Profile>
        <div>
          <strong>{user.name}</strong>
          <ButtonText title="sair" onClick={handleSignOut} />
        </div>
        <Link className="link" to="/profile">
          <img src={avatarUrl} alt="Foto do usário" />
        </Link>
      </Profile>
    </Container>
  )
}
