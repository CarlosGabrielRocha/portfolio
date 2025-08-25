import type { ReactNode } from "react"

interface LightProps {
  children?: ReactNode
  className?: string
}

export const Light: React.FC<LightProps> = (props) => {
  return (
    <p className={`font-light ${props.className}`}>
      {props.children}
    </p>
  )
}