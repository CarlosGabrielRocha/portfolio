import type { DefaultProps } from "../../types/defaultTypes"
import { Badge, type BadgeType } from "../Badge"
import { Bold } from "../Bold"

interface LandscapeProps extends DefaultProps {
  badges?: BadgeType[],
  imgSrc: string,
  imgAlt: string
}

const LandscapeCard: React.FC<LandscapeProps> = ({ children, className, badges, imgSrc, imgAlt }) => {
  const styles = `flex max-w-3xl gap-4 p-10 bg-black/30 shadow-sm shadow-black hover:bg-gradient-to-br hover:from-white/5 hover:to-hlight-blue/5 hover:outline hover:shadow-white/15 hover:shadow-md backdrop-blur-lg rounded-2xl ${className}`
  return (
    <div className={styles}>
        <LandscapeContent>
          { children }
          <div className="flex gap-3 justify-end px-9">
            { badges &&
              badges.map(badge => {
                const key = Math.floor(Math.random() * 1000000)
                return <Badge key={key} type={badge} />
              })
            }
          </div>
        </LandscapeContent>
        <div className="flex-1 h-full my-auto shadow-3">
          <img className="h-40 w-full object-cover" src={imgSrc} alt={imgAlt} />
        </div>
    </div>
  )
}

const LandscapeContent: React.FC<DefaultProps> = ({ children, className }) => {
  return (
    <div className={`flex flex-col flex-2 gap-4 w-full ${className}`}>{children}</div>
  )
}

const LandscapeText: React.FC<DefaultProps> = ({ children, className }) => {
  return (
    <p className={`font-light ${className}`}>{children}</p>
  )
}

const LandscapeTitle: React.FC<DefaultProps> = ({ children, className }) => {
  return (
    <Bold className={className}>{children}</Bold>
  )
}

export { LandscapeCard, LandscapeText, LandscapeTitle }