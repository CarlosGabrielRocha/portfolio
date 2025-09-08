import type { ReactNode } from "react"

interface BoldProps {
  children?: ReactNode
  className?: string
}

export const Bold: React.FC<BoldProps> = ({ children, className='' }) => {
  return (
    <h1 className={`font-medium ${className}`}>
      {children}
    </h1>
  )
}