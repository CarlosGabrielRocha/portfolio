import { ModalTrigger } from "../../components/Modal/ModalTrigger";
import {
  LandscapeCard,
  LandscapeText,
  LandscapeTitle,
} from "../../components/LandscapeCard";
import { useTranslation } from "react-i18next";

const ExperienceCards: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-20 items-center justify-center mt-20">
      <ModalTrigger
        modalProps={{
          name: "real state",
          deploy: {
            imgSrc: "/images/real-state-deploy.webp",
            imgAlt: "Real state deploy",
            href: "https://reginacaeli.vercel.app",
          },
          planning: {
            imgSrc: "/images/real-state-figma.webp",
            imgAlt: "Real state figms",
            href: "https://www.figma.com/design/mu0n1AG86y6UEoTXJ5LOwM/Untitled?node-id=0-1&p=f&t=o63WivgXdwJxNjDm-0",
          },
          sourceCodeHref: "https://github.com/CarlosGabrielRocha/regina-caeli"
        }}
      >
        <LandscapeCard
          imgSrc="/images/real-state-deploy.webp"
          imgAlt="projeto corretor"
          badges={["tailwind", "ts", "express", "node", "prisma"]}
        >
          <LandscapeTitle>{t("experience.progressTitle")}</LandscapeTitle>
          <LandscapeText>{t("experience.progressDesc1")}</LandscapeText>
          <LandscapeText>{t("experience.progressDesc2")}</LandscapeText>
        </LandscapeCard>
      </ModalTrigger>
      <ModalTrigger
        modalProps={{
          name: "supermarket API",
          sourceCodeHref:
            "https://github.com/CarlosGabrielRocha/api-supermarket",
        }}
      >
        <LandscapeCard badges={["express", "ts", "node"]}>
          <LandscapeTitle>{t("experience.supermarketTitle")}</LandscapeTitle>
          <LandscapeText>{t("experience.supermarketDesc")}</LandscapeText>
        </LandscapeCard>
      </ModalTrigger>
      <ModalTrigger
        modalProps={{
          name: "Portfolio",
          deploy: {
            imgSrc: "/images/portfolio-deploy.webp",
            imgAlt: "Carlos Gabriel Portfolio",
            href: "#",
          },
          planning: {
            imgSrc: "/images/portfolio-figma.webp",
            imgAlt: "Carlos Gabriel Portfolio",
            href: "https://www.figma.com/design/HiTUi0DHt3JjadLK0lw7NL/Untitled?node-id=8-66&t=sx9MidqHqtcPUYvt-1",
          },
          sourceCodeHref: "https://github.com/CarlosGabrielRocha/portfolio",
        }}
      >
        <LandscapeCard
          imgSrc="/images/portfolio-deploy.webp"
          imgAlt="Carlos Gabriel Portfolio"
          badges={["react", "ts", "tailwind"]}
        >
          <LandscapeTitle>{t("experience.portfolioTitle")}</LandscapeTitle>
          <LandscapeText>{t("experience.portfolioDesc")}</LandscapeText>
        </LandscapeCard>
      </ModalTrigger>
    </div>
  );
};

export default ExperienceCards;
