import type { ReactNode } from "react"

interface BoldProps {
  children?: ReactNode
  className?: string
}

export const Bold: React.FC<BoldProps> = ({ children, className='' }) => {
  console.log(className)
  return (
    <h1 className={`font-medium text-sm md:text-md 2xl:text-lg ${className}`}>
      {children}
    </h1>
  )
}