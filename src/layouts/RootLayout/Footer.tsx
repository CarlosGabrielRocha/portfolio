import { Bold } from "../../components/Bold"
import { IconLink } from "../../components/icons/IconLink"
import { Light } from "../../components/Light"
import { Logo } from "../../components/Logo"

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col justify-between max-sm:items-center gap-8 px-2 sm:px-5 2xl:px-10 py-10 border-t-2">
      <div className="flex gap-3 items-center">
        <Logo />
        <Light>Carlos Gabriel Developer</Light>
      </div>
      <div className="flex items-center gap-14 flex-wrap justify-between p-3 sm:p-8">
        <div className="flex gap-6 px-3">
          <IconLink iconSrc="/icons/instagram-icon.svg" href="#" alt="Instagram" />
          <IconLink iconSrc="/icons/whatsapp-icon.svg" href="#" alt="Whatsapp" />
          <IconLink iconSrc="/icons/github-icon.svg" href="#" alt="Github" />
        </div>
        <div className="w-fit">
          <Bold className="mb-3 px-3">Send me an Email</Bold>
          <a href="#">
            <Light 
            className="bg-black/4 p-3 rounded-md shadow-2xl/10 shadow-white hover:shadow-hlight-blue">
              Carlosgabrieldesenvolvedor@gmail.com
            </Light>
          </a>
        </div>
      </div>
    </footer>    
  )
}

export default Footer