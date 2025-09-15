import { useState } from "react"
import { createPortal } from "react-dom"
import Modal from "./Index"
import type { DefaultProps } from "../../types/defaultTypes"
import ModalContext from "../../contexts/ModalContext"
import type { ModalBodyAreaProps } from "./ModalBody"
import BlurBackground from "../BlurBackground"

export interface ModalProps {
  name: string,
  deploy: ModalBodyAreaProps
  planning?: ModalBodyAreaProps
  sourceCodeHref?: string
}

interface ModalTriggerProps extends DefaultProps {
  modalProps: ModalProps
}

export const ModalTrigger: React.FC<ModalTriggerProps> = ({ modalProps, children }) => {
  const [visible, setVisible] = useState(false)

  return (
    <ModalContext.Provider value={{ visible, setVisible, modalProps }}>
      <div className="cursor-pointer" onClick={() => setVisible(true)}>
      {children}
      </div>
        {visible &&
          createPortal(
            <>
              <BlurBackground clickHandler={() => setVisible(false)} />
              <Modal />
            </>,
            document.body
          )
        }
    </ModalContext.Provider>
  )
}