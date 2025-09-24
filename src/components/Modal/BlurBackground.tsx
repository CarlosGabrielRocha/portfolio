import type { DefaultProps } from "../../types/defaultTypes";

interface BlurBackgroundProps extends DefaultProps {
  clickHandler?: () => void
}

const BlurBackground: React.FC<BlurBackgroundProps> = ({ className='', children, clickHandler }) => {
  return (
    <div 
      className={`fixed top-0 flex items-center justify-center md:flex-col md:justify-start md:pt-10 bg-black/70 w-full h-full z-100 ${className}`} 
      onClick={clickHandler}
    >
      {children}
    </div>
  )
} 

export default BlurBackground