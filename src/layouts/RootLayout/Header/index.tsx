import { Link } from "react-router-dom"
import { Logo } from "../../../components/Logo"

import DropdownNav from "./DropdownNav"
import Navbar from "./Navbar"

const Header: React.FC = () => {
  return (
    <header className='flex justify-between py-6 px-4 md:px-8 2xl:px-11 2xl:py-10'>
      <Link to='/'><Logo /></Link>
      <Navbar />
      <DropdownNav />
    </header>
  )
}

export default Header