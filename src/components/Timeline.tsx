import type React from "react"
import type { DefaultProps } from "../types/defaultTypes"

const Timeline: React.FC<DefaultProps> = ({ className='', children }) => {
  return (
    <div className={`relative max-w-3xl lg:max-w-5xl 2xl:max-w-6xl ${className}`}>
      <div className="absolute left-[-1rem] w-[0.2rem] h-full bg-white/70"></div>
      <ul className="flex flex-col py-4 gap-10 2xl:gap-15 list-disc marker:text-4xl marker:leading-0">
        {children}
      </ul>
    </div>
  )
}

const TimelineTitle: React.FC<DefaultProps> = ({ className='', children }) => {
  return (
    <li className={`flex items-center gap-4 ${className}`}>
      <span className="w-3 h-3 rounded-full bg-white"></span>
      <h1 className="font-medium sm:text-2xl md:text-2xl 2xl:text-3xl">{children}</h1>
    </li>
  )
}

const TimelineText: React.FC<DefaultProps> = ({ className='', children }) => {
  return (
    <li className={`flex items-center gap-4 ml-5 ${className}`}>
      <span className="block w-2 h-2 rounded-full bg-white"></span>
      <p className="w-5/6 font-light text-sm sm:text-md md:text-lg 2xl:text-lg">
        {children}
      </p>
    </li>
  )
}

const TimelineDate: React.FC<DefaultProps> = ({ className, children }) => {
  return (
    <li className={`flex items-center gap-4 ml-5 ${className}`}>
      <span className="w-2 h-2 rounded-full bg-white"></span>
      <p className="text-xs font-bold sm:text-md md:text-lg 2xl:text-lg">{children}</p>
    </li>
  )
}

export { Timeline, TimelineTitle, TimelineText, TimelineDate }