import MyParticles from "../components/MyParticles"
import Sphere from "../components/Sphere"
import TextCard from "../components/TextCard"
import TextCardTitle from "../components/TextCard/TextCardTitle"
import Title from "../components/Title"
import Footer from "./Footer"
import Header from "./Header"
import { Outlet } from "react-router-dom"

const RootLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <MyParticles />
        <section
          className="welcome bg-gradient-to-b from-darker-blue via-50% to-[#0B2846]">
          <Title className="text-center mx-auto my-30 w-md">
            Turning ideas into real-world apps
          </Title>
          <img className="w-20 animate-[to-orbit_70s_linear_infinite] drop-shadow-md drop-shadow-black" src="/images/satellite.svg" alt="satellite" />
          <Sphere />
        </section>
        <section 
        className="flex justify-around bg-gradient-to-b from-black from-20% to-hlight-blue 
        pt-60 pb-40 font-light">
          <TextCard>
              <TextCardTitle>Who am i?</TextCardTitle>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt, sapien in faucibus malesuada, libero erat faucibus odio, sed posuere urna enim vel metus. Nulla facilisi. Proin luctus ex in dolor accumsan, et ullamcorper neque volutpat. Sed consequat, elit non pulvinar fringilla, augue magna imperdiet justo, sit amet accumsan arcu mi vel augue. Vivamus porttitor, lacus id feugiat feugiat, justo dui cursus ligula, ac sagittis eros justo vel erat.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt, sapien in faucibus malesuada, libero erat faucibus odio, sed posuere urna enim vel metus. Nulla facilisi. Proin luctus ex in dolor accumsan, et ullamcorper neque volutpat. Sed consequat, elit non pulvinar fringilla, augue magna imperdiet justo, sit amet accumsan arcu mi vel augue. Vivamus porttitor, lacus id feugiat feugiat, justo dui cursus ligula, ac sagittis eros justo vel erat.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt, sapien in faucibus malesuada, libero erat faucibus odio, sed posuere urna enim vel metus. Nulla facilisi. Proin luctus ex in dolor accumsan, et ullamcorper neque volutpat. Sed consequat, elit non pulvinar fringilla, augue magna imperdiet justo, sit amet accumsan arcu mi vel augue. Vivamus porttitor, lacus id feugiat feugiat, justo dui cursus ligula, ac sagittis eros justo vel erat.</p>
          </TextCard>
          <img className="self-start drop-shadow-xl/50 drop-shadow-white animate-[float_6s_ease_infinite_alternate]" src="/images/astronaut.svg" alt="astronaut" />
        </section>
        <section className="py-20 backdrop-blur-xs bg-white/0.5 border-t-3">
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default RootLayout