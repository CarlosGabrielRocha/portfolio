import { Logo } from "../../../components/Logo"
import DropdownNav from "./DropdownNav"
import Navbar from "./Navbar"
import { useEffect, useState } from "react"
import { motion } from "motion/react"

const Header: React.FC = () => {
  const [conditionalStyle, setConditionalStyle] = useState('')

  const scrollHandler = () => {
    const contentSection = document.getElementById('content')
    const rect = contentSection?.getBoundingClientRect()
    if (rect && rect.top <= 200) setConditionalStyle('fixed pt-5 pb-5 bg-black/10 backdrop-blur-md')
    else setConditionalStyle('false')
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  return (
    <motion.header 
      className={`flex justify-between w-full py-6 px-4 md:px-8 2xl:px-11 2xl:my-10 z-50 ${conditionalStyle}`}
      layout
      transition={{ duration: 0.3, type: 'tween'}}
    >
      <a href="#presentation"><Logo /></a>
      <Navbar />
      <DropdownNav />
    </motion.header>
  )
}

export default Header