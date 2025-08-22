import type { ReactNode } from "react"

interface IconLinkProps {
  href: string
  iconSrc: string
  alt: string
  children?: ReactNode
  className?: string
}

export const IconLink: React.FC<IconLinkProps> = (props) => {
  return (
    <a href={props.href} className={`w-6 ${props.className}`}>
      <img src={props.iconSrc} alt={props.alt} />
      {props.children}
    </a>
  )
}