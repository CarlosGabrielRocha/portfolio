import { useContext } from "react"
import type { DefaultProps } from "../../types/defaultTypes"
import { Bold } from "../Bold"
import Exit from "../icons/Exit"
import ModalContext from "../../contexts/ModalContext"

const ModalHeader: React.FC<DefaultProps> = ({ children }) => {
  const { setVisible } = useContext(ModalContext)

  return (
    <div className="flex justify-between items-center py-2 px-3 md:py-3 md:px-4">
      <Bold className="text-white/90 capitalize drop-shadow-2xl drop-shadow-white/70 text-sm sm:text-md 2xl:text-lg">
        {children}
      </Bold>
      <Exit action={() => setVisible(false)} />
    </div>
  )
}

export default ModalHeader