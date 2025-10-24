import { useLocation } from "react-router-dom";
import { A } from "../../../components/A";
import { useContext } from "react";
import LayoutContext from "../../../contexts/LayoutContext";

const Navbar: React.FC = () => {
  const { contentSection } = useContext(LayoutContext);
  const location = useLocation().pathname;
  const selectedStyle = "border-b-2 hover:text-white";

  const handleClick = () => {
    contentSection?.current?.scrollIntoView();
  };

  return (
    <nav className="hidden md:flex gap-8 px-4 text-md 2xl:text-lg border-b-1 border-white/50">
      <A
        className={location === "/" ? selectedStyle : ""}
        to="/"
        handler={handleClick}
      >
        {location === "/" ? "<Experience />" : "Experience"}
      </A>
      <A
        className={location === "/stack" ? selectedStyle : ""}
        to="/stack"
        handler={handleClick}
      >
        {location === "/stack" ? "<Stack />" : "Stack"}
      </A>
      <A
        className={location === "/education" ? selectedStyle : ""}
        to="/education"
        handler={handleClick}
      >
        {location === "/education" ? "<Eductation />" : "Education"}
      </A>
    </nav>
  );
};

export default Navbar;
