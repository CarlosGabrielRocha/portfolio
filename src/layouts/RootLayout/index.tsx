import MyParticles from "../../components/MyParticles"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import PresentationSection from "./PresentationSection"
import AboutSection from "./AboutSection"
import Header from "./Header"

const RootLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <MyParticles />
        <PresentationSection /> 
        <AboutSection />
{/*         <section className="py-20 w-full backdrop-blur-xs shadow-xl/8 shadow-white bg-white/0.5 border-t-3">
          <Outlet />
        </section> */}
      </main>
      <Footer />
    </>
  )
}

export default RootLayout