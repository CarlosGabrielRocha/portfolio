import type { ReactNode } from "react"
import { Link } from "react-router-dom"

interface AProps {
  children: ReactNode
  to: string
  className?: string
}

export const A: React.FC<AProps> = ({ to, className, children }) => {
  return (
      <Link className={`${className} hover:text-hlight-blue`} to={to}>
        {children}
      </Link>
  )
}