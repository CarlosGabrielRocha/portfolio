import SilverTitle from "../../components/SilverTitle";
import ExperienceCards from "./ExperienceCards";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
const Experience: React.FC = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="w-full px-2 sm:px-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <SilverTitle className="text-center">
        {t("navbar.experienceTag")}
      </SilverTitle>
      <ExperienceCards />
    </motion.div>
  );
};

export default Experience;
