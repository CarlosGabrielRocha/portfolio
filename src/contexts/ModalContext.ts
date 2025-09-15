import { createContext, type Dispatch, type SetStateAction } from "react";
import type { ModalProps } from "../components/Modal/ModalTrigger";

interface ModalContextValue {
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
  modalProps: ModalProps
}

const ModalContext = createContext({} as ModalContextValue)

export default ModalContext