
interface IconProps {
  src: string
  alt: string
  className?: string
}

const Icon: React.FC<IconProps> = ({ src, alt, className}) => {
  return (
    <img className={`w-5 ${className}`} src={src} alt={alt} />
  )
}

export default Icon