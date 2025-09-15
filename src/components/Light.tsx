import type { ReactNode } from "react"

interface LightProps {
  children?: ReactNode
  className?: string
}

export const Light: React.FC<LightProps> = ({ children, className='' }) => {
  return (
    <p className={`font-light ${className}`}>
      {children}
    </p>
  )
}