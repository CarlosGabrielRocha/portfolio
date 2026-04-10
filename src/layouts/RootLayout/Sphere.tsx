import type { ReactNode } from "react";
import Button from "../../components/Button";
import Icon from "../../components/icons/Icon";
import i18n from "../../i18n";

interface SphereProps {
  children?: ReactNode;
}

const Sphere: React.FC<SphereProps> = () => {
  return (
    <div className="sphere-container w-full">
      <div className="sphere flex items-start justify-center h-screen bg-black">
        <Button className="mt-20 max-md:text-xs 2xl:text-lg" href={i18n.language === "en" ? "/carlos-curriculo-english.pdf" : "/carlos-curriculo-portuguese.pdf"} download={true}>
          <Icon src="/icons/download-icon.svg" alt="download" />
          Download CV
        </Button>
      </div>
    </div>
  );
};

export default Sphere;
