import { useEffect, useState } from "react";
import { Logo } from "../../../components/Logo";
import DropdownNav from "./DropdownNav";
import Navbar from "./Navbar";

const Header: React.FC = () => {
  const [conditionalStyle, setConditionalStyle] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      const contentSection = document.getElementById("content") as HTMLElement;
      const presentationSection = document.getElementById(
        "presentation",
      ) as HTMLElement;
      const contentSectionRect = contentSection.getBoundingClientRect();
      const presentationSectionRect =
        presentationSection.getBoundingClientRect();
      if (contentSectionRect.top <= 200) {
        setConditionalStyle("pt-4 pb-4 bg-black/10 backdrop-blur-md");
      } else if (presentationSectionRect.top < -40) {
        setConditionalStyle("opacity-0 pointer-events-none bg-black/50");
        setOpen(false);
      } else {
        setConditionalStyle("");
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  return (
      <header
        className={`fixed flex justify-between items-center w-full py-6 px-4 md:px-8 2xl:px-11 z-50 ${conditionalStyle}`}
      >
        <a href="#presentation">
          <Logo />
        </a>
        <div className="flex items-center md:gap-10">
          <Navbar />
          <DropdownNav open={open} setOpen={setOpen}/>
        </div>
      </header>
  );
};

export default Header;
