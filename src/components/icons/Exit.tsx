import type React from "react";
import type { DefaultProps } from "../../types/defaultTypes";

interface ExitProps extends DefaultProps {
  action?: () => void
}

const Exit: React.FC<ExitProps> = ({ className, action }) => {
  return (
    <img
      className={`cursor-pointer hover:opacity-85 w-6 ${className}`} 
      src="/icons/close-icon.svg" 
      alt="close"
      onClick={action}
    />
  )
}

export default Exit