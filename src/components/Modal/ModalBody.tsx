import type { DefaultProps } from "../../types/defaultTypes";

export interface ModalBodyAreaProps extends DefaultProps {
  imgSrc?: string;
  imgAlt?: string;
  href?: string;
}

export interface ModalBodyProps {
  deploy?: ModalBodyAreaProps;
  planning?: ModalBodyAreaProps;
}

export const ModalBody: React.FC<ModalBodyProps> = ({ deploy, planning }) => {
  return (
    <div className="flex justify-between items-center gap-1 w-full h-55 sm:h-65 md:h-80 2xl:h-95 bg-gradient-to-br from-hlight-blue/25 to-darker-blue/70 to-70% shadow-xl/24">
      <ModalBodyArea
        imgSrc={planning?.imgSrc}
        imgAlt={planning?.imgAlt}
        href={planning?.href}
      >
        Planning
      </ModalBodyArea>
      <div className="bg-white/10 w-[1px] h-9/10"></div>
      <ModalBodyArea
        imgSrc={deploy?.imgSrc}
        imgAlt={deploy?.imgAlt}
        href={deploy?.href}
      >
        Deploy
      </ModalBodyArea>
    </div>
  );
};

const ModalBodyArea: React.FC<ModalBodyAreaProps> = ({
  imgSrc,
  imgAlt,
  href,
  children,
}) => {
  return (
    <div className="flex-1 flex flex-col gap-3 items-center md:px-10">
      <h2 className="font-zcool pb-5 py-1 text-2xl sm:text-3xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white from-40% to-gray-700 drop-shadow-lg/50">
        {children}
      </h2>
      <div className="w-4/5 md:w-full h-30 sm:h-38 md:h-48 2xl:h-55 shadow-center bg-black/20">
        {imgSrc && href && (
          <a href={href} target="_brank" className="w-full h-full">
            <img
              className="w-full h-full opacity-50 grayscale hover:grayscale-0 hover:opacity-100 object-cover"
              src={imgSrc}
              alt={imgAlt}
            />
          </a>
        )}
      </div>
    </div>
  );
};
