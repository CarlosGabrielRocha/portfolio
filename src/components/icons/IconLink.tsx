import type { ReactNode } from "react"

interface IconLinkProps {
  href: string
  iconSrc: string
  alt: string
  children?: ReactNode
  className?: string
}

export const IconLink: React.FC<IconLinkProps> = ({href, iconSrc, alt, children, className=''}) => {
  return (
    <a href={href} className={`w-6 2xl:w-7 ${className}`}>
      <img className="hover:drop-shadow-xl/50 drop-shadow-hlight-blue" src={iconSrc} alt={alt} />
      {children}
    </a>
  )
}