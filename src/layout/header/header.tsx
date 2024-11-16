import { SearchIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
import { ChangeLagunge } from "./lang-switcher";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="border-b-[1px] bg-white dark:bg-black">
      <div className="ml-auto mr-auto h-16 max-w-screen-md bg-inherit">
        <div className="mx-auto ml-2 mr-2 flex h-full max-w-7xl items-center justify-between">
          <Link to={"/home"}>
            <p className="text-2xl font-bold dark:text-white">BitBlogs</p>
          </Link>
          <div className="flex space-x-4 text-muted-foreground hover:text-foreground dark:hover:text-white">
            <Link to={"/home"}>
              <p className="cursor-pointer">{t("header-translation.home")}</p>
            </Link>
            <Link to={"/write"}>
              <p className="cursor-pointer">{t("header-translation.write")}</p>
            </Link>
            <Link to={"/about"}>
              <p className="cursor-pointer">{t("header-translation.about")}</p>
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <SearchIcon />
            <Link to={"/signin"}>
              <Button className="bg-primary">
                {t("header-translation.sign_in")}
              </Button>
            </Link>
            <ChangeLagunge />
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
