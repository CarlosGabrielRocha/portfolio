import Sphere from "./Sphere";
import Title from "../../components/Title";
import Satellite from "./Satellite";
import { Trans, useTranslation } from "react-i18next";

const PresentationSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      className="w-full pt-15 2xl:pt-20 bg-gradient-to-b from-darker-blue via-50% to-[#0B2846] overflow-x-hidden"
      id="presentation"
    >
      <Title className="text-center mx-auto my-30 2xl:my-48 w-fit">
        <Trans t={t} i18nKey="presentation.title" components={{ br: <br /> }} />
      </Title>
      <Satellite />
      <Sphere />
    </section>
  );
};

export default PresentationSection;
