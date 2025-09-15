import type { DefaultProps } from "../types/defaultTypes"

const SilverTitle: React.FC<DefaultProps> = ({ children, className='' }) => {
  return (
    <h1 className={
      `font-zcool text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white from-40% to-gray-700 drop-shadow-2xl/10 drop-shadow-white ${className}`
    }>
      {children}
    </h1>
  )
}

export default SilverTitle