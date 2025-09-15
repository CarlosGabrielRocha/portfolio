import type { ReactNode } from "react"
import Button from "./Button"
import Icon from "./icons/Icon"

interface SphereProps {
  children?: ReactNode
}

const Sphere: React.FC<SphereProps> = () => {
  return (
    <div className="sphere-container mx-auto">
      <div className="flex items-start justify-center sphere w-full h-screen bg-black">
        <Button className="mt-20">
          <Icon src="/icons/download-icon.svg" alt="download" />
          Download CV
        </Button>
      </div>
    </div>
  )
}

export default Sphere