import type { ReactNode } from "react"

interface BoldProps {
  children?: ReactNode
  className?: string
}

export const Bold: React.FC<BoldProps> = (props) => {
  return (
    <h1 className={`font-medium ${props.className}`}>
      {props.children}
    </h1>
  )
}