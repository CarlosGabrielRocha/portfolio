import SilverTitle from "../../components/SilverTitle"
import ExperienceCards from "./ExperienceCards"
import { motion } from "motion/react"
const Experience: React.FC = () => {

  return (
    <motion.div 
      className="w-full px-2 sm:px-5"
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ duration: 1, delay: 0.2}}
    >
      <SilverTitle className="text-center">{'<Experience />'}</SilverTitle>
      <ExperienceCards />
    </motion.div>
  )
}

export default Experience 