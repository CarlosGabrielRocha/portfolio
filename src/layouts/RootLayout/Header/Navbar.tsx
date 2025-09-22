import { useLocation } from "react-router-dom"
import { A } from "../../../components/A"

const Navbar: React.FC = () => {
  const location = useLocation().pathname
  const selectedStyle = 'border-b-2 cursor-default hover:text-white'
  return (
    <nav className="hidden md:flex gap-8 px-4 text-md 2xl:text-lg border-b-1 border-white/50">
      <A
        className={location === '/' ? selectedStyle : ''}
        to='/'>
        {location === '/' ? '<Experience />' : 'Experience'}
      </A>
      <A
        className={location === '/stack' ? selectedStyle : ''}
        to='/stack'>
        {location === '/stack' ? '<Stack />' : 'Stack'}
      </A>
      <A
        className={location === '/education' ? selectedStyle : ''}
        to='/education'>
        {location === '/education' ? '<Eductation />' : 'Education'}
      </A>
    </nav>
  )
}

export default Navbar