import { Light } from "../../components/Light"
import TextCard from "../../components/TextCard"
import TextCardTitle from "../../components/TextCard/TextCardTitle"
import Astronaut from "./Astronaut"

const AboutSection: React.FC = () => {
  return (
    <section
      className="flex justify-center md:justify-around gap-5 sm:gap-13 md:gap-20 px-3 sm:px-10 bg-gradient-to-b from-black from-20% to-hlight-blue pt-60 pb-40 font-light">
      <TextCard className="flex-3 max-w-lg 2xl:max-wxl">
        <TextCardTitle>Who am i?</TextCardTitle>
        <Light>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt, sapien in faucibus malesuada, libero erat faucibus odio, sed posuere urna enim vel metus. Nulla facilisi. Proin luctus ex in dolor accumsan, et ullamcorper neque volutpat. Sed consequat, elit non pulvinar fringilla, augue magna imperdiet justo, sit amet accumsan arcu mi vel augue. Vivamus porttitor, lacus id feugiat feugiat, justo dui cursus ligula, ac sagittis eros justo vel erat.
        </Light>
        <Light>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt, sapien in faucibus malesuada, libero erat faucibus odio, sed posuere urna enim vel metus. Nulla facilisi. Proin luctus ex in dolor accumsan, et ullamcorper neque volutpat. Sed consequat, elit non pulvinar fringilla, augue magna imperdiet justo, sit amet accumsan arcu mi vel augue. Vivamus porttitor, lacus id feugiat feugiat, justo dui cursus ligula, ac sagittis eros justo vel erat.
        </Light>
        <Light>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt, sapien in faucibus malesuada, libero erat faucibus odio, sed posuere urna enim vel metus. Nulla facilisi. Proin luctus ex in dolor accumsan, et ullamcorper neque volutpat. Sed consequat, elit non pulvinar fringilla, augue magna imperdiet justo, sit amet accumsan arcu mi vel augue. Vivamus porttitor, lacus id feugiat feugiat, justo dui cursus ligula, ac sagittis eros justo vel erat.
          </Light>
      </TextCard>
      <Astronaut />
    </section>
  )
}

export default AboutSection