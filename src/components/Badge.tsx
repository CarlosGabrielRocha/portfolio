import type React from "react";
import type { DefaultProps } from "../types/defaultTypes";
import Icon from "./icons/Icon";

export type BadgeType = 'js' | 'react' | 'node' | 'prisma' | 'ts' | 'css' | 'express' | 'next' | 'html' | 'bootstrap' | 'github' | 'git' | 'postgresql' | 'tailwind'

type BadgePropsType = { 
  [key: string]: { iconSrc: string, alt: string, shadowColor: string, background: string }
}

const badgeProps: BadgePropsType = {
  js: { iconSrc: '/icons/javascript-icon.svg', alt: 'javascript', shadowColor: 'shadow-amber-300', background: 'bg-amber-300/5' },
  react: { iconSrc: '/icons/react-icon.svg', alt: 'react', shadowColor: 'shadow-cyan-300', background: 'bg-cyan-300/5' },
  node: { iconSrc: '/icons/nodejs-icon.svg', alt: 'nodejs', shadowColor: 'shadow-green-300', background: 'bg-green-300/5' },
  prisma: { iconSrc: '/icons/prisma-icon.svg', alt: 'prisma orm', shadowColor: 'shadow-slate-500', background: 'bg-slate-900/5' },
  ts: { iconSrc: '/icons/typescript-icon.svg', alt: 'typescript', shadowColor: 'shadow-blue-500', background: 'bg-blue-500/5' },
  css: { iconSrc: '/icons/css3-icon.svg', alt: 'css3', shadowColor: 'shadow-sky-400', background: 'bg-sky-400/5' },
  express: { iconSrc: '/icons/express-icon.svg', alt: 'express', shadowColor: 'shadow-lime-300', background: 'bg-lime-300/5' },
  next: { iconSrc: '/icons/nextjs-icon.svg', alt: 'next js', shadowColor: 'shadow-white', background: 'bg-white/15' },
  html: { iconSrc: '/icons/html5-icon.png', alt: 'html5', shadowColor: 'shadow-orange-400', background: 'bg-orange-400/5' },
  bootstrap: { iconSrc: '/icons/bootstrap-icon.svg', alt: 'bootstrap', shadowColor: 'shadow-violet-500', background: 'bg-violet-500/5' },
  github: { iconSrc: '/icons/github-icon.svg', alt: 'github', shadowColor: 'shadow-white', background: 'bg-white/5' },
  git: { iconSrc: '/icons/git-icon.svg', alt: 'git', shadowColor: 'shadow-red-500', background: 'bg-red-500/5' },
  postgresql: { iconSrc: '/icons/postgresql-icon.svg', alt: 'postgresql', shadowColor: 'shadow-blue-700', background: 'bg-blue-700/5' },
  tailwind: { iconSrc: '/icons/tailwindcss-icon.svg', alt: 'tailwind', shadowColor: 'shadow-cyan-400', background: 'bg-cyan-400/5'}
}


interface BadgeProps extends DefaultProps {
  type: BadgeType,
  size?: 'small' | 'medium' | 'big'
}

export const Badge: React.FC<BadgeProps> = ({ type, size, className='' }) => {
  const badge = badgeProps[type]
  
  const shadow = size==='big'?'shadow-md':'shadow-sm'
  const styles = `p-1 sm:p-2 rounded-sm sm:rounded-md ${badge.background} ${badge.shadowColor} ${shadow} ${className}`
  
  return (
    <div className={styles}>
      <Icon size={size} src={badge.iconSrc} alt={badge.alt} />
    </div>
  )
}
