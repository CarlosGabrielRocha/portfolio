import type { DefaultProps } from "../../types/defaultTypes";
import { Bold } from "../Bold";

interface CardHeaderProps extends DefaultProps {
  src: string
  alt: string
}

const CardHeader: React.FC<CardHeaderProps> = ({ children, className, src, alt }) => {
  return (
    <div className={`pb-6 text-center border-b-2 border-white/20 ${className}`}>
      {children}
      <div className="mx-auto w-2/3">
        <img src={src} alt={alt} />
      </div>
    </div>
  )
}

const CardTitle: React.FC<DefaultProps> = ({ children, className }) => {
  return (
    <Bold className={`text-md p-5 ${className}`}>
      {children}
    </Bold>
  )
}

export { CardHeader, CardTitle }