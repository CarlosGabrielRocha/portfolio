import AutoScrollCard from "../../components/AutoScrollCard"
import Certificates from "./Certificates"

const Stack: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <AutoScrollCard />
      <Certificates />
    </div>
  )
}

export default Stack