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
      <img className="hover:drop-shadow-xl/50 drop-shadow-hlight-blue" src={props.iconSrc} alt={props.alt} />
      {props.children}
    </a>
  )
}