import { createContext } from "react"

interface LayoutContextValue {
  contentSection: React.RefObject<HTMLElement | null> 
}

const LayoutContext = createContext({} as LayoutContextValue)

export default LayoutContext