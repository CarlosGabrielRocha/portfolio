import { Link, useLocation } from "react-router-dom"
import { A } from "../components/A"
import { Logo } from "../components/Logo"

const Header: React.FC = () => {
  const location = useLocation().pathname

  return (
    <header className='flex justify-between py-6 px-9'>
      <Link to='/'><Logo /></Link>
      <nav className="flex gap-8 px-4 border-b-1">
        <A 
          className={location==='/'?'border-b-2':''} 
          to='/'>
            {location==='/'?'<Experience />':'Experience'}
          </A>
        <A 
        className={location==='/stack'?'border-b-2':''} 
        to='/stack'>
          {location==='/stack'?'<Stack />':'Stack'}
        </A>
        <A 
        className={location==='/education'?'border-b-2':''} 
        to='/education'>
          {location==='/education'?'<Eductation />':'Education'}
        </A>
      </nav>
    </header>
  )
}

export default Header
