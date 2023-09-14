import './Header.css'
import { Link, NavLink } from 'react-router-dom'
import Button from '../ui/Button'

const Header = () => {
  return (
    <header>
        <h1>Coffee & Mountain</h1>
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/quem-somos">Quem Somos</NavLink></li>
                <li><NavLink to="/contato">Contato</NavLink></li>
                <li><Button variant="primary">login</Button></li>
                <li><Button variant="secondary">cadastre-se</Button></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header