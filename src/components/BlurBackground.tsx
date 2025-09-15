import type { DefaultProps } from "../types/defaultTypes";

interface BlurBackgroundProps extends DefaultProps {
  clickHandler?: () => void
}

const BlurBackground: React.FC<BlurBackgroundProps> = ({ clickHandler }) => {
  return (
    <div 
      className="fixed top-0 bg-black/70 w-screen h-screen" 
      onClick={clickHandler}
    />
  )
} 

export default BlurBackground