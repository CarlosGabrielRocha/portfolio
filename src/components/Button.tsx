import type { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  target,
  className = "",
}) => {
  const styles = `flex justify-center gap-2 min-w-20 p-3 border-1 rounded-3xl text-sm shadow-md shadow-hlight-blue cursor-pointer font-medium hover:opacity-75 active:border-hlight-blue ${className}`;
  return (
    <a href={href} target={target} className={styles}>
      {children}
    </a>
  );
};

export default Button;
