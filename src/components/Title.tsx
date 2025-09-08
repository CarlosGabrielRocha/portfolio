import type React from "react";
import type { DefaultProps } from "../types/defaultTypes";



const Title: React.FC<DefaultProps> = ({ children, className='' }) => {
  return (
    <h1 className={`font-zcool text-5xl ${className}`}>
      {children}
    </h1>
  )
}

export default Title