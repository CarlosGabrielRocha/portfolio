import type { DefaultProps } from "../../types/defaultTypes";

const CardHeader: React.FC<DefaultProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`h-63 w-full p-6 text-center border-b-2 border-white/20 ${className}`}
    >
      {children}
      <div className="mx-auto w-2/3 h-45 opacity-10">
        <img
          className="w-full h-full"
          src={"/icons/certificate-icon.svg"}
          alt={"certificate"}
        />
      </div>
    </div>
  );
};

const CardTitle: React.FC<DefaultProps> = ({ children }) => {
  return <h1 className="font-medium text-md 2xl:text-lg">{children}</h1>;
};

export { CardHeader, CardTitle };
