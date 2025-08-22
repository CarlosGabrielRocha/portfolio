import { Bold } from "../components/Bold"
import { IconLink } from "../components/IconLink"
import { Light } from "../components/Light"
import { Logo } from "../components/Logo"

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col justify-between h-50 mt-10 p-5 border-t-2">
      <div className="flex gap-3 items-center">
        <Logo />
        <Light>Carlos Gabriel Portfolio</Light>
      </div>
      <div className="flex items-center justify-between px-8">
        <div className="flex gap-6">
          <IconLink iconSrc="/instagram-icon.svg" href="#" alt="Instagram" />
          <IconLink iconSrc="/whatsapp-icon.svg" href="#" alt="Whatsapp" />
          <IconLink iconSrc="/github-icon.svg" href="#" alt="Github" />
        </div>
        <div className="text-center w-fit">
          <Bold>Me envie um Email</Bold>
          <a href="#">
            <Light className="hover:border-b-1">Carlosgabrieldesenvolvedor@gmail.com</Light>
          </a>
        </div>
      </div>
    </footer>    
  )
}

export default Footer