import type React from "react"
import type { DefaultProps } from "../types/defaultTypes"
import { Bold } from "./Bold"

const Timeline: React.FC<DefaultProps> = ({ className, children }) => {
  return (
    <div className={`relative max-w-3xl ${className}`}>
      <div className="absolute left-[-1rem] w-[0.1rem] h-full bg-white/50"></div>
      <ul className="flex flex-col py-4 gap-10 list-disc marker:text-4xl marker:leading-0">
        {children}
      </ul>
    </div>
  )
}

const TimelineTitle: React.FC<DefaultProps> = ({ className, children }) => {
  return (
    <li className={`flex items-center gap-4 ${className}`}>
      <span className="w-3 h-3 rounded-full bg-white"></span>
      <Bold className="text-2xl">{children}</Bold>
    </li>
  )
}

const TimelineText: React.FC<DefaultProps> = ({ className, children }) => {
  return (
    <li className={`flex items-center gap-4 ml-5 ${className}`}>
      <span className="block w-2 h-2 rounded-full bg-white"></span>
      <p className="font-extralight w-5/6">
        {children}
      </p>
    </li>
  )
}

const TimelineDate: React.FC<DefaultProps> = ({ className, children }) => {
  return (
    <li className={`flex items-center gap-4 ml-5 ${className}`}>
      <span className="w-2 h-2 rounded-full bg-white"></span>
      <p className="text-sm">{children}</p>
    </li>
  )
}

export { Timeline, TimelineTitle, TimelineText, TimelineDate }