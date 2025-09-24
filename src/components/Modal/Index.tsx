import type { DefaultProps } from "../../types/defaultTypes"
import ModalHeader from "./ModalHeader"
import ModalFooter from "./ModalFooter"
import { useContext } from "react"
import ModalContext from "../../contexts/ModalContext"
import { ModalBody } from "./ModalBody"
import { motion } from "motion/react"


const Modal: React.FC<DefaultProps> = () => {
  const { modalProps } = useContext(ModalContext)
  const { name, planning, deploy, sourceCodeHref } = modalProps
  return (
    <motion.div 
      initial={{ y: -10 }} 
      animate={{ y: 0}} 
      className={`flex flex-col w-9/10 max-w-3xl 2xl:max-w-4xl text-center rounded-2xl border-1 border-white/10 bg-darker-blue/90 backdrop-blur-xs`}
    >
      <ModalHeader>{name}</ModalHeader>

      <ModalBody
        planning={planning}
        deploy={deploy}
      />

      <ModalFooter sourceCodeHref={sourceCodeHref} />
    </motion.div>
  )
}

export default Modal