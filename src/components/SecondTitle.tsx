import type { DefaultProps } from "../types/defaultTypes"

const SecondTitle: React.FC<DefaultProps> = ({ children, className='' }) => {
  return (
    <h1 className={
      `font-zcool text-5xl bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-300 
      ${className}`
    }>
      {children}
    </h1>
  )
}

export default SecondTitle