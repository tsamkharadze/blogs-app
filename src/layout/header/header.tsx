import { Button } from "../../components/ui/button";
import { NavLink } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
import { ChangeLagunge } from "./lang-switcher";
import { useTranslation } from "react-i18next";
import Search from "./search";

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="border-b-[1px] bg-white dark:bg-black">
      <div className="ml-auto mr-auto h-16 max-w-screen-md bg-inherit">
        <div className="mx-auto ml-2 mr-2 flex h-full max-w-7xl items-center justify-between">
          <NavLink to={"/home"}>
            <p className="text-2xl font-bold dark:text-white">BitBlogs</p>
          </NavLink>
          <div className="flex space-x-4 text-muted-foreground">
            <NavLink to={"/home"}>
              <p className="cursor-pointer hover:text-foreground dark:hover:text-white">
                {t("header-translation.home")}
              </p>
            </NavLink>
            <NavLink to={"/write"}>
              <p className="cursor-pointer hover:text-foreground dark:hover:text-white">
                {t("header-translation.write")}
              </p>
            </NavLink>
            <NavLink to={"/about"}>
              <p className="cursor-pointer hover:text-foreground dark:hover:text-white">
                {t("header-translation.about")}
              </p>
            </NavLink>
          </div>
          <div className="flex items-center gap-5">
            <Search />
            <NavLink to={"/authorization"}>
              <Button className="bg-primary">
                {t("header-translation.sign_in")}
              </Button>
            </NavLink>
            <ChangeLagunge />
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
