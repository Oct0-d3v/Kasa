import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'

function Header () {
  return  (
  <header className="header">
    <div className="header-content">
      <img src={Logo} alt="Logo du site" className="Logo" />
      <nav className="nav">
        <Link to="/" className="nav-link">Accueil</Link>
        <Link to="/about" className="nav-link">A Propos</Link>
      </nav>
    </div>
  </header>
)
}

export default Header