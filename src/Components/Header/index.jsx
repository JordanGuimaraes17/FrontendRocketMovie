import { Container, Profile } from './style'
import { Input } from '../../Components/Input'
import { FiSearch } from 'react-icons/fi'
import { ButtonText } from '../../Components/ButtonText'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

export function Header() {
  const { signOut } = useAuth()
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquisar pelo título" icon={FiSearch} />

      <Profile>
        <div>
          <strong>Jordan Guimarães</strong>
          <ButtonText title="sair" onClick={signOut} />
        </div>
        <Link className="link" to="/profile">
          <img
            src="https://github.com/jordanguimaraes17.png"
            alt="Foto do usário"
          />
        </Link>
      </Profile>
    </Container>
  )
}
