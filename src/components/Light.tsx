import type { ReactNode } from "react"

interface LightProps {
  children?: ReactNode
  className?: string
}

export const Light: React.FC<LightProps> = ({ children, className='' }) => {
  return (
    <p className={`font-light text-sm md:text-md 2xl:text-lg ${className}`}>
      {children}
    </p>
  )
}