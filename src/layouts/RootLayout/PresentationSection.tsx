import Sphere from "./Sphere";
import Satellite from "./Satellite";
import { useTranslation } from "react-i18next";
import SilverTitle from "../../components/SilverTitle";

const PresentationSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      className="w-full pt-15 2xl:pt-20 bg-gradient-to-b from-darker-blue via-50% to-[#0B2846] overflow-x-hidden"
      id="presentation"
    >
      <SilverTitle className="text-center font-semibold lg:leading-16 2xl:leading-20 px-2 mx-auto my-30 2xl:my-48 max-w-120 lg:max-w-140 2xl:max-w-170">
        {t("presentation.title")}
      </SilverTitle>
      <Satellite />
      <Sphere />
    </section>
  );
};

export default PresentationSection;
