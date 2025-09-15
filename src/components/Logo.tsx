import type { ReactNode } from "react"

interface LogoProps {
  className?: string
  children?: ReactNode
}

export const Logo: React.FC<LogoProps> = ({ children, className='' }) => {
  return (
    <h1 className={`font-zcool text-4xl ${className}`}>
      CG
      {children}
    </h1>
  )
}
