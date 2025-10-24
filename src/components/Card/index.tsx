import type { DefaultProps } from "../../types/defaultTypes";
import Button from "../Button";
import { motion } from "motion/react";

interface CardProps extends DefaultProps {
  btnProps?: { href?: string };
}

const Card: React.FC<CardProps> = ({ children, btnProps, className = "" }) => {
  return (
    <motion.div
      className={`flex flex-col justify-between items-center flex-1 gap-2 md:gap-5 min-w-73 max-w-83 min-h-125 pb-5 bg-gradient-to-b from-black/10 to-hlight-blue/10 rounded-2xl border-1 shadow-center ${className}`}
      whileHover={{ translateY: "-1rem" }}
      transition={{ type: "spring", duration: 0.5, stiffness: 120 }}
    >
      {children}
      <Button
        className={`py-2 w-25 text-xs drop-shadow-2xl/60 drop-shadow-white ${
          btnProps ?? "opacity-50 pointer-events-none"
        }`}
        href={btnProps?.href}
        target="_blank"
      >
        View
      </Button>
    </motion.div>
  );
};

export default Card;
