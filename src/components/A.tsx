import type { ReactNode } from "react"
import { Link } from "react-router-dom"

interface AProps {
  children: ReactNode
  to: string
  className?: string
  handler?: () => void
}

export const A: React.FC<AProps> = ({ to, className='', handler, children }) => {
  return (
      <Link 
        className={`${className} hover:text-hlight-blue`} 
        to={to}
        onClick={handler}>
        {children}
      </Link>
  )
}