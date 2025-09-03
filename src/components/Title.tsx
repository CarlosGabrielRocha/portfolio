import type { ReactNode } from "react";
import type React from "react";

interface TitleProps {
  children?: ReactNode
  className?: string
}

const Title: React.FC<TitleProps> = (props) => {
  return (
    <h1 className={`font-zcool text-5xl ${props.className}`}>
      {props.children}
    </h1>
  )
}

export default Title