import { useContext } from "react"
import type { DefaultProps } from "../../types/defaultTypes"
import { Bold } from "../Bold"
import Exit from "../icons/Exit"
import ModalContext from "../../contexts/ModalContext"

const ModalHeader: React.FC<DefaultProps> = ({ children }) => {
  const { setVisible } = useContext(ModalContext)

  return (
    <div className="flex justify-between items-center py-3 px-4">
      <Bold className="text-white/90 capitalize drop-shadow-2xl drop-shadow-white/70">
        {children}
      </Bold>
      <Exit action={() => setVisible(false)} />
    </div>
  )
}

export default ModalHeader