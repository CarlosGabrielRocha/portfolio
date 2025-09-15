import type React from "react"
import type { DefaultProps } from "../../types/defaultTypes"
import Button from "../Button"

interface CardContentProps extends DefaultProps {
  btnProps: { href?: string }
}

const CardContent: React.FC<CardContentProps> = ({ children, className, btnProps }) => {
  return (
    <div className={`flex flex-col items-center text-xs gap-5 font-light ${className}`}>
      { children }
      <a href={btnProps.href} target="brank">
        <Button className="py-1 text-xs drop-shadow-2xl/60 drop-shadow-white">View</Button>
      </a>
    </div>
  )
}

const CardText: React.FC<DefaultProps> = ({ children, className }) => {
  return (
    <p className={`px-5 py-7 bg-darker-blue/50 ${className}`}>
      { children }
    </p>
  )
}

export { CardContent, CardText }