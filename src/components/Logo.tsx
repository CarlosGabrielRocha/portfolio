import type { ReactNode } from "react"

interface LogoProps {
  className?: string
  children?: ReactNode
}

export const Logo: React.FC<LogoProps> = (props) => {
  return (
    <h1 className={`font-zcool text-4xl ${props.className}`}>
      CG
      {props.children}
    </h1>
  )
}
