import Sphere from "./Sphere"
import Title from "../../components/Title"
import Satellite from "./Satellite"

const PresentationSection: React.FC = () => {
  return (
    <section
      className="w-full bg-gradient-to-b from-darker-blue via-50% to-[#0B2846] overflow-x-hidden">
      <Title className="text-center mx-auto my-30 2xl:my-48 w-fit">
        Turning ideas into <br /> real-world apps
      </Title>
      <Satellite />
      <Sphere />
    </section>
  )
}

export default PresentationSection