import { ModalTrigger } from "../../components/Modal/ModalTrigger";
import {
  LandscapeCard,
  LandscapeText,
  LandscapeTitle,
} from "../../components/LandscapeCard";

const ExperienceCards: React.FC = () => {
  return (
    <div className="flex flex-col gap-20 items-center justify-center mt-20">
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
          <LandscapeTitle>Portfolio</LandscapeTitle>
          <LandscapeText>
            The interface combines subtle animations, dark tones, and luminous
            details inspired by the universe and the stars to create an engaging
            visual experience. The website showcases my journey as a developer,
            completed projects, and contact options, all within a responsive and
            optimized layout, built with typed and scalable code.
          </LandscapeText>
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
          <LandscapeTitle>Supermarket API</LandscapeTitle>
          <LandscapeText>
            REST API for a supermarket application, built using the MVC
            architecture pattern. It includes token-based authentication and
            role-based authorization for protected routes.
          </LandscapeText>
        </LandscapeCard>
      </ModalTrigger>

      <LandscapeCard
        imgSrc="/images/real-state-deploy.webp"
        imgAlt="projeto corretor"
        badges={["bootstrap", "ts", "express", "node", "prisma"]}
      >
        <LandscapeTitle>Project in progress</LandscapeTitle>
        <LandscapeText>
          An application developed for a real estate promotion company, designed
          to streamline property management and client interactions. The main
          goal is to increase sales by up to 200% after launch.
        </LandscapeText>
        <LandscapeText>
          The platform will feature user authentication, contact options for
          team members, an administration panel, a dashboard, guides, and a
          document digitization area. All built in full compliance with the LGPD
          (Brazilian General Data Protection Law).
        </LandscapeText>
      </LandscapeCard>
    </div>
  );
};

export default ExperienceCards;
