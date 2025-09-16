import type { DefaultProps } from "../../types/defaultTypes"

const TextCard: React.FC<DefaultProps> = ({ children, className='' }) => {
  return (
    <div className={`flex flex-col gap-4 px-2 sm:px-5 py-7 w-full text-center bg-black/10 border-1 rounded-2xl drop-shadow-xl/15 drop-shadow-white shadow-2xl/30 shadow-white text-xs sm:text-sm backdrop-blur-lg
    ${className}`}>
      {children}
    </div>
  )
}

export default TextCard