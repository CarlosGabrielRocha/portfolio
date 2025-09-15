import type { ReactNode } from "react"

interface ButtonProps {
  children?: ReactNode
  className?: string
}

const Button: React.FC<ButtonProps> = ({ children, className='' }) => {
  return (
    <>
      <button className={
        `flex justify-center gap-2 min-w-20 p-3 border-1 rounded-3xl text-sm shadow-md shadow-hlight-blue cursor-pointer font-medium hover:opacity-75 active:border-hlight-blue ${className}`
      }>
        {children}
      </button>
    </>
  )
}

export default Button