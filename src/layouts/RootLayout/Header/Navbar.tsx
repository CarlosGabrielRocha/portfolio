import { useLocation } from "react-router-dom"
import { A } from "../../../components/A"

const Navbar: React.FC = () => {
  const location = useLocation().pathname

  return (
    <nav className="hidden md:flex gap-8 px-4 text-md 2xl:text-lg border-b-1">
      <A
        className={location === '/' ? 'border-b-2' : ''}
        to='/'>
        {location === '/' ? '<Experience />' : 'Experience'}
      </A>
      <A
        className={location === '/stack' ? 'border-b-2' : ''}
        to='/stack'>
        {location === '/stack' ? '<Stack />' : 'Stack'}
      </A>
      <A
        className={location === '/education' ? 'border-b-2' : ''}
        to='/education'>
        {location === '/education' ? '<Eductation />' : 'Education'}
      </A>
    </nav>
  )
}

export default Navbar