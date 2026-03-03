import TextCard from "../../components/TextCard";
import TextCardTitle from "../../components/TextCard/TextCardTitle";
import Astronaut from "./Astronaut";
import { useTranslation } from "react-i18next";
import Icon from "../../components/icons/Icon";

const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="flex flex-col items-center md:flex-row gap-30 justify-around sm:gap-13 md:gap-20 px-2 sm:px-10 bg-gradient-to-b from-black from-20% to-hlight-blue pt-60 pb-40 font-light">
        <TextCard className="flex-3 max-w-md md:max-w-lg 2xl:max-w-xl order-2 md:order-1">
          <TextCardTitle>{t("about.title")}</TextCardTitle>
          <p className="text-md md:text-lg 2xl:text-xl">{t("about.p1")}</p>
          <p className="text-md md:text-lg 2xl:text-xl">{t("about.p2")}</p>
          <div className="flex flex-col gap-10 items-center">
            <p className="mt-10 font-semibold text-md md:text-lg 2xl:text-xl text-start">
              {t("about.p3")}
            </p>
            <h2 className="w-full text-center text-md md:text-lg 2xl:text-xl">
              {t("about.contact")}
            </h2>
            <div className="flex flex-wrap items-center content-center gap-3">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=carlosgabrieldesenvolvedor@gmail.com"
                target="_blank"
                className="flex justify-center gap-2 items-center min-w-20 p-3 border-1 rounded-3xl text-sm shadow-md shadow-hlight-blue cursor-pointer font-medium hover:opacity-75 active:border-hlight-blue w-fit drop-shadow-lg/50 drop-shadow-darker-blue"
              >
                <span>Email</span>
                <Icon size="responsive" src="/icons/email-icon.svg" alt="email" />
              </a>
              <a
                href="https://wa.me/5581987083118"
                target="_blank"
                className="flex justify-center items-center gap-2 min-w-20 p-3 border-1 rounded-3xl text-sm shadow-md shadow-hlight-blue cursor-pointer font-medium hover:opacity-75 active:border-hlight-blue w-fit drop-shadow-lg/50 drop-shadow-darker-blue"
              >
                <span>Whatsapp</span>
                <Icon size="responsive" src="/icons/whatsapp-icon.svg" alt="whatsapp" />
              </a>
            </div>
          </div>
        </TextCard>
        <Astronaut />
      </div>
    </section>
  );
};

export default AboutSection;
