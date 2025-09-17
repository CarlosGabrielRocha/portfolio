import type { DefaultProps } from "../../types/defaultTypes";


const Card: React.FC<DefaultProps> = ({ children, className }) => {
  return (
    <div className={`flex flex-col gap-2 md:gap-5 max-w-xs pb-5 bg-gradient-to-b from-black/10 to-hlight-blue/10 rounded-2xl border-1 shadow-center ${className}`}>
      {children}
    </div>
  )
}

export default Card