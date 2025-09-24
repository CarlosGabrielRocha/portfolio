import type { DefaultProps } from "../../types/defaultTypes"
import { motion } from "motion/react"

const TextCard: React.FC<DefaultProps> = ({ children, className='' }) => {
  return (
    <motion.div 
      className={`flex flex-col gap-4 px-2 sm:px-5 py-7 w-full text-center bg-black/10 border-1 rounded-2xl drop-shadow-xl/15 drop-shadow-white shadow-2xl/30 shadow-white text-xs sm:text-sm backdrop-blur-lg ${className}`}
      initial={{ opacity: 0, x: -70 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}

export default TextCard