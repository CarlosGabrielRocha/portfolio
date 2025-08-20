import { Link } from "react-router-dom"

const Header: React.FC = () => {
  return (
    <header>
      <h1><Link to='/'>CG</Link></h1>
      <nav>
        <Link to='/'>{'</'}Projects{'>'}</Link>
        <Link to='/stack'>Stack</Link>
        <Link to='/education'>Education</Link>
      </nav>
    </header>
  )
}

export default Header
