import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuPortal, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@radix-ui/react-dropdown-menu"
import Icon from "../../../components/icons/Icon"
import { A } from "../../../components/A"
import { useLocation } from "react-router-dom"
import { useContext } from "react"
import LayoutContext from "../../../contexts/LayoutContext"

const DropdownNav: React.FC = () => {
  const { contentSection } = useContext(LayoutContext)
  const location = useLocation().pathname
  const selectedStyle = 'text-hlight-blue drop-shadow-md/50 drop-shadow-hlight-blue'

  const handleClick = () => {
    contentSection?.current?.scrollIntoView()
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="block md:hidden cursor-pointer outline-none">
        <div
          className="rounded-full bg-darker-blue shadow-md shadow-hlight-blue hover:shadow-md/30 w-fit p-2"
          aria-label="Navigation Menu"
        >
          <Icon
            src="/icons/hamburger-menu-icon.svg"
            alt="menu"
            className="text-white w-5"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          className="flex flex-col gap-1 text-sm sm:text-md font-light p-3 mt-4 mr-3 bg-white/1 rounded-md md:hidden z-60 backdrop-blur-2xl show-up"
          loop
          side="left"
        >
          <DropdownMenuLabel className="opacity-40">Navigation Menu</DropdownMenuLabel>
          <DropdownMenuSeparator className="h-px bg-white/5" />
          <DropdownMenuItem
            className="py-1 px-2 outline-none hover:text-hlight-blue"
            onSelect={(e) => e.preventDefault()}
          >
            <A
              className={location === '/' ? selectedStyle : 'block w-full'}
              to='/'
              handler={handleClick}
            >
              Experience
            </A>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="h-px bg-white/5" />
          <DropdownMenuItem
            className="py-1 px-2 outline-none hover:text-hlight-blue"
            onSelect={(e) => e.preventDefault()}
          >
            <A
              className={location === '/stack' ? selectedStyle : 'block w-full'}
              to="/stack"
              handler={handleClick}
            >
              Stack
            </A>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="h-px bg-white/5" />
          <DropdownMenuItem
            className="py-1 px-2 outline-none hover:text-hlight-blue"
            onSelect={(e) => e.preventDefault()}
          >
            <A
              className={location === '/education' ? selectedStyle : 'block w-full'}
              to='/education'
              handler={handleClick}
            >
              Education
            </A>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  )
}

export default DropdownNav