import type { DefaultProps } from "../types/defaultTypes";
import { Badge } from "./Badge";
import SilverTitle from "./SilverTitle";

const AutoScrollCard: React.FC<DefaultProps> = () => {
  return (
    <div className="w-full max-w-2xl bg-tranparent-white backdrop-blur-md spread-shadow-center rounded-3xl">
      <SilverTitle className="text-center p-3 md:p-6">Stack</SilverTitle>
      <div
        className="w-full overflow-x-hidden bg-gradient-to-r from-black/7 to-hlight-blue/7 
      to-60% rounded-3xl border-1"
      >
        <div className="flex w-fit scroll">
          <div className="flex justify-between px-5 py-8 md:py-15 w-5xl md:w-7xl">
            <Badge size="big" type="js" />
            <Badge size="big" type="react" />
            <Badge size="big" type="html" />
            <Badge size="big" type="ts" />
            <Badge size="big" type="css" />
            <Badge size="big" type="bootstrap" />
            <Badge size="big" type="tailwind" />
            <Badge size="big" type="node" />
            <Badge size="big" type="express" />
            <Badge size="big" type="git" />
            <Badge size="big" type="postgresql" />
            <Badge size="big" type="prisma" />
            <Badge size="big" type="next" />
          </div>
          <div className="flex justify-between px-5 py-8 md:py-15 w-5xl md:w-7xl">
            <Badge size="big" type="js" />
            <Badge size="big" type="react" />
            <Badge size="big" type="html" />
            <Badge size="big" type="ts" />
            <Badge size="big" type="css" />
            <Badge size="big" type="bootstrap" />
            <Badge size="big" type="tailwind" />
            <Badge size="big" type="node" />
            <Badge size="big" type="express" />
            <Badge size="big" type="git" />
            <Badge size="big" type="postgresql" />
            <Badge size="big" type="prisma" />
            <Badge size="big" type="next" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoScrollCard;
