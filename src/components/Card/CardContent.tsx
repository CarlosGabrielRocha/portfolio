import type React from "react";
import type { DefaultProps } from "../../types/defaultTypes";

const CardContent: React.FC<DefaultProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`flex flex-col items-center justify-between gap-5 w-full text-xs 2xl:text-md font-light ${className}`}
    >
      {children}
    </div>
  );
};

const CardText: React.FC<DefaultProps> = ({ children, className = "" }) => {
  return (
    <p
      className={`w-full px-3 py-4 md:px-5 md:py-7 bg-darker-blue/50 ${className}`}
    >
      {children}
    </p>
  );
};

export { CardContent, CardText };
