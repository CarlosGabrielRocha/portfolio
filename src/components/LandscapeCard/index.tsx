import type { DefaultProps } from "../../types/defaultTypes"
import { Badge, type BadgeType } from "../Badge"
import { Bold } from "../Bold"
import { Light } from "../Light"

interface LandscapeProps extends DefaultProps {
  badges?: BadgeType[],
  imgSrc: string,
  imgAlt: string
}

const LandscapeCard: React.FC<LandscapeProps> = ({ children, className='', badges, imgSrc, imgAlt }) => {
  const styles = `flex flex-col sm:flex-row gap-6 py-6 px-3 sm:p-10 max-w-sm sm:max-w-3xl 2xl:max-w-4xl bg-black/30 shadow-white/5 shadow-lg hover:bg-gradient-to-br hover:from-white/5 hover:to-hlight-blue/35 backdrop-blur-lg rounded-2xl hover:outline outline-white/40 hover:**:opacity-100 ${className}`
  return (
    <div className={styles}>
        <LandscapeContent>
          { children }
          <div className="flex gap-3 sm:self-end sm:py-2 sm:px-5">
            { badges &&
              badges.map(badge => {
                const key = Math.floor(Math.random() * 1000000)
                return <Badge key={key} type={badge} />
              })
            }
          </div>
        </LandscapeContent>
        <div className="max-sm:order-1 flex-1 h-full w-6/10 sm:w-full my-auto mx-auto shadow-3">
          <img className="h-full w-full object-cover opacity-50 drop-shadow-lg/15" src={imgSrc} alt={imgAlt} />
        </div>
    </div>
  )
}

const LandscapeContent: React.FC<DefaultProps> = ({ children, className='' }) => {
  return (
    <div 
      className={`flex flex-col max-sm:items-center flex-2 max-sm:order-2 gap-6 ${className}`}
    >
      {children}
    </div>
  )
}

const LandscapeText: React.FC<DefaultProps> = ({ children, className='' }) => {
  return (
    <Light 
      className={`max-sm:text-[0.6rem] max-sm:text-center ${className}`}
    >
      {children}
    </Light>
  )
}

const LandscapeTitle: React.FC<DefaultProps> = ({ children, className='' }) => {
  return (
    <Bold className={className}>{children}</Bold>
  )
}

export { LandscapeCard, LandscapeText, LandscapeTitle }