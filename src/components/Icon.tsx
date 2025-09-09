interface IconProps {
  src: string
  alt: string
  size?: 'small' | 'medium' | 'big'
  className?: string
}

enum IconSize {
  small = 'w-4',
  medium = 'w-7',
  big = 'w-10'
}

const Icon: React.FC<IconProps> = ({ src, alt, size, className='' }) => {
  if (!size) className += ` ${IconSize.small}`
    else className = ` ${IconSize[size]}`

  return (
    <img className={`${className}`} src={src} alt={alt} />
  )
}

export default Icon