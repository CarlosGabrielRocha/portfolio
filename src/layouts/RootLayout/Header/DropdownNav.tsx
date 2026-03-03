import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import Icon from "../../../components/icons/Icon";
import { A } from "../../../components/A";
import { useLocation } from "react-router-dom";
import React, { useContext } from "react";
import LayoutContext from "../../../contexts/LayoutContext";
import { useTranslation } from "react-i18next";

const DropdownNav: React.FC<{ open: boolean, setOpen: (open: boolean) => void }> = ({ open, setOpen }) => {
  const { t, i18n } = useTranslation();
  const { contentSection } = useContext(LayoutContext);
  const location = useLocation().pathname;
  const selectedStyle =
    "text-hlight-blue drop-shadow-md/50 drop-shadow-hlight-blue";

  const languageTrigger = (
    <div className={`flex items-center gap-2 cursor-pointer`}>
      <span>{t("navbar.language")}</span>
      <Icon
        src={
          i18n.language === "en"
            ? "/icons/english-icon.svg"
            : "/icons/ptbr-icon.svg"
        }
        alt={i18n.language === "en" ? "English" : "PT-BR"}
      />
    </div>
  );

  const englishJsx = (
    <div
      className={`flex items-center gap-2 cursor-pointer ${i18n.language === "en" ? selectedStyle : ""}`}
    >
      <span>{t("navbar.en")}</span>
      <Icon src="/icons/english-icon.svg" alt="English" />
    </div>
  );

  const ptbrJsx = (
    <div
      className={`flex items-center gap-2 cursor-pointer ${i18n.language === "ptBR" ? selectedStyle : ""}`}
    >
      <span>{t("navbar.ptBR")}</span>
      <Icon src="/icons/ptbr-icon.svg" alt="PT-BR" />
    </div>
  );

  const handleClick = () => {
    contentSection?.current?.scrollIntoView();
  };

  return (
    <DropdownMenu modal={false} open={open}>
      <DropdownMenuTrigger className="cursor-pointer outline-none" onClick={() => setOpen(true)}>
        <div
          className="rounded-full bg-darker-blue shadow-md shadow-hlight-blue hover:shadow-md/30 w-fit p-2"
          aria-label="Navigation Menu"
        >
          <Icon
            src="/icons/hamburger-menu-icon.svg"
            alt="menu"
            className="text-white w-5"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          className="flex flex-col gap-1 text-sm sm:text-md font-light p-3 mt-4 mr-3 bg-white/1 rounded-md z-60 backdrop-blur-2xl show-up"
          loop
          side="bottom"
          onPointerDownOutside={() => setOpen(false)}
        >
          <div className="md:hidden">
            <DropdownMenuItem
              className="py-1 px-2 outline-none hover:text-hlight-blue"
              onSelect={(e) => e.preventDefault()}
            >
              <A
                className={location === "/" ? selectedStyle : "block w-full"}
                to="/"
                handler={handleClick}
              >
                {t("navbar.experience")}
              </A>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="h-px bg-white/5" />
            <DropdownMenuItem
              className="py-1 px-2 outline-none hover:text-hlight-blue"
              onSelect={(e) => e.preventDefault()}
            >
              <A
                className={
                  location === "/stack" ? selectedStyle : "block w-full"
                }
                to="/stack"
                handler={handleClick}
              >
                {t("navbar.stack")}
              </A>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="h-px bg-white/5" />
            <DropdownMenuItem
              className="py-1 px-2 outline-none hover:text-hlight-blue"
              onSelect={(e) => e.preventDefault()}
            >
              <A
                className={
                  location === "/education" ? selectedStyle : "block w-full"
                }
                to="/education"
                handler={handleClick}
              >
                {t("navbar.education")}
              </A>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="h-px bg-white/5" />
          </div>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="flex items-center gap-3 cursor-pointer py-1 px-2 outline-none hover:text-hlight-blue">
              <ChevronLeftIcon className="size-4 2xl:size-5" />
              <DropdownMenuLabel>{languageTrigger}</DropdownMenuLabel>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent
                sideOffset={15}
                alignOffset={-12}
                className="flex flex-col gap-1 text-sm sm:text-md font-light p-1 sm:p-3 bg-white/1 rounded-md z-60 backdrop-blur-2xl"
                id="dropdown-menu-sub"
              >
                <DropdownMenuItem className="py-1 px-2 outline-none hover:text-hlight-blue">
                  <button onClick={() => i18n.changeLanguage("ptBR")}>
                    {ptbrJsx}
                  </button>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="h-px bg-white/5" />
                <DropdownMenuItem className="py-1 px-2 outline-none hover:text-hlight-blue">
                  <button onClick={() => i18n.changeLanguage("en")}>
                    {englishJsx}
                  </button>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};

export default DropdownNav;
