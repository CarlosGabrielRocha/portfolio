import SilverTitle from "../../components/SilverTitle"
import ExperienceCards from "./ExperienceCards"

const Experience: React.FC = () => {

  return (
    <div className="w-full px-2 sm:px-5">
      <SilverTitle className="text-center">{'<Experience />'}</SilverTitle>
      <ExperienceCards />
    </div>
  )
}

export default Experience 