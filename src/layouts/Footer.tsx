import { Bold } from "../components/Bold"
import { IconLink } from "../components/icons/IconLink"
import { Light } from "../components/Light"
import { Logo } from "../components/Logo"

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col justify-between gap-8 px-5 py-10 border-t-2">
      <div className="flex gap-3 items-center">
        <Logo />
        <Light>Carlos Gabriel Developer</Light>
      </div>
      <div className="flex items-center justify-between p-8">
        <div className="flex gap-6">
          <IconLink iconSrc="/icons/instagram-icon.svg" href="#" alt="Instagram" />
          <IconLink iconSrc="/icons/whatsapp-icon.svg" href="#" alt="Whatsapp" />
          <IconLink iconSrc="/icons/github-icon.svg" href="#" alt="Github" />
        </div>
        <div className="text-center w-fit">
          <Bold className="mb-3">Me envie um Email</Bold>
          <a href="#">
            <Light 
            className="hover:drop-shadow-xl/50 drop-shadow-hlight-blue" >
              Carlosgabrieldesenvolvedor@gmail.com
            </Light>
          </a>
        </div>
      </div>
    </footer>    
  )
}

export default Footer