import Title from "../Title"
import type { DefaultProps } from "../../types/defaultTypes"



const TextCardTitle: React.FC<DefaultProps> = ({ children, className='' }) => {
  return (
    <Title className={`text-center py-2 md:py-5 max-sm:text-2xl ${className}`}>
      {children}
    </Title>
  )
}

export default TextCardTitle