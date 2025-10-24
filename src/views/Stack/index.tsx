import AutoScrollCard from "../../components/AutoScrollCard";
import Certificates from "./Certificates";
import { motion } from "motion/react";

const Stack: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col items-center w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <AutoScrollCard />
      <Certificates />
    </motion.div>
  );
};

export default Stack;
