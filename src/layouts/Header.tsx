import { Link, useLocation } from "react-router-dom"
import { A } from "../components/A"

const Header: React.FC = () => {
  const location = useLocation().pathname

  return (
    <header className='flex justify-between py-4 px-9'>
      <Link to='/'><h1 className='font-zcool text-4xl'>CG</h1></Link>
      <nav className="flex gap-8 font-poppins px-4 border-b-1">
        <A className={location==='/'?'border-b-2':''} to='/'>{'<'}Projects{'/>'}</A>
        <A className={location==='/stack'?'border-b-2':''} to='/stack'>Stack</A>
        <A className={location==='/education'?'border-b-2':''} to='/education'>Education</A>
      </nav>
    </header>
  )
}

export default Header
