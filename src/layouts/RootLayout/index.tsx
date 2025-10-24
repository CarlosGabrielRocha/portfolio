import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import PresentationSection from "./PresentationSection";
import AboutSection from "./AboutSection";
import Header from "./Header";
import LayoutContext from "../../contexts/LayoutContext";
import { useRef } from "react";
import { motion } from "motion/react";

const RootLayout: React.FC = () => {
  const contentSection = useRef<HTMLElement>(null);

  return (
    <>
      <LayoutContext.Provider value={{ contentSection }}>
        <Header />
        <main>
          <PresentationSection />
          <AboutSection />
          <motion.section
            ref={contentSection}
            id="content"
            className="pt-20 pb-40 w-full shadow-xl/8 shadow-white bg-white/0.5 border-t-3 backdrop-blur-xs"
            initial={{ opacity: 0 }}
            layout
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Outlet />
          </motion.section>
        </main>
        <Footer />
      </LayoutContext.Provider>
    </>
  );
};

export default RootLayout;
