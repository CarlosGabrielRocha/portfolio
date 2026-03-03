import { useLocation } from "react-router-dom";
import { A } from "../../../components/A";
import { useContext } from "react";
import LayoutContext from "../../../contexts/LayoutContext";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const { contentSection } = useContext(LayoutContext);
  const location = useLocation().pathname;
  const selectedStyle = "hover:text-white after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-full after:h-[2px] after:bg-white";

  const handleClick = () => {
    contentSection?.current?.scrollIntoView();
  };


  return (
    <nav className="hidden md:flex gap-8 px-4 py-3 text-md 2xl:text-lg border-b-1 border-white/50">
      <div className="relative">
        <A
          className={location === "/" ? selectedStyle : ""}
          to="/"
          handler={handleClick}
        >
        {location === "/" ? t("navbar.experienceTag") : t("navbar.experience")}
      </A>
      </div>
      <div className="relative">
      <A
        className={location === "/stack" ? selectedStyle : ""}
        to="/stack"
        handler={handleClick}
      >
        {location === "/stack" ? t("navbar.stackTag") : t("navbar.stack")}
      </A>
      </div>
      <div className="relative">
      <A
        className={location === "/education" ? selectedStyle : ""}
        to="/education"
        handler={handleClick}
      >
        {location === "/education"
          ? t("navbar.educationTag")
          : t("navbar.education")}
      </A>
      </div>
    </nav>
  );
};

export default Navbar;
