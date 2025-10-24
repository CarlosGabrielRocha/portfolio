import type { ReactNode } from "react";

interface LogoProps {
  className?: string;
  children?: ReactNode;
}

export const Logo: React.FC<LogoProps> = ({ children, className = "" }) => {
  return (
    <h1 className={`font-zcool text-3xl lg:text-4xl 2xl:text-5xl ${className}`}>
      CG
      {children}
    </h1>
  );
};
