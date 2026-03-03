import SilverTitle from "../components/SilverTitle";
import {
  Timeline,
  TimelineDate,
  TimelineText,
  TimelineTitle,
} from "../components/Timeline";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const Education: React.FC = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="flex flex-col gap-25 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <SilverTitle className="text-center">
        {t("navbar.educationTag")}
      </SilverTitle>
      <div className="flex flex-col gap-20 w-full ps-8 sm:ps-20">
        <Timeline>
          <TimelineTitle>{t("education.degreeTitle")}</TimelineTitle>
          <TimelineText>{t("education.degreeDesc")}</TimelineText>
          <TimelineDate>2022/02 - 2024/07</TimelineDate>
        </Timeline>
        <Timeline>
          <TimelineTitle>{t("education.fullstackTitle")}</TimelineTitle>
          <TimelineText>{t("education.fullstackDesc")}</TimelineText>
          <TimelineDate>2024/07 - 2025/09</TimelineDate>
        </Timeline>
      </div>
    </motion.div>
  );
};

export default Education;
