import type { DefaultProps } from "../../types/defaultTypes"

const TextCard: React.FC<DefaultProps> = ({ children, className='' }) => {
  return (
    <div className={`flex flex-col gap-4 px-5 py-7 w-2/5 bg-black/10 border-2 rounded-2xl drop-shadow-xl/15 drop-shadow-white shadow-2xl/30 shadow-white text-sm backdrop-blur-lg
    ${className}`}>
      {children}
    </div>
  )
}

export default TextCard