import { Button } from "../../components/ui/button";
import { Link, NavLink } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
import { ChangeLagunge } from "./lang-switcher";
import { useTranslation } from "react-i18next";
import Search from "./search";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAtomValue } from "jotai";
import { avatarAtom, userAtom } from "@/store/auth";
import { useMutation } from "@tanstack/react-query";
import { logout } from "@/supabase/auth";
import AddBlog from "./create-button";

const Header = () => {
  const { t } = useTranslation();

  const user = useAtomValue(userAtom);
  const avatar = useAtomValue(avatarAtom);

  const { mutate: handleLogout } = useMutation({
    mutationKey: ["logout"],
    mutationFn: logout,
  });

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
            <NavLink to={"/createBlog"}>
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

            {!user ? (
              <NavLink to={"/authorization"}>
                <Button className="bg-primary">
                  {t("header-translation.sign_in")}
                </Button>
              </NavLink>
            ) : (
              <div className="flex gap-3">
                <AddBlog />
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    {" "}
                    <Avatar>
                      {avatar ? (
                        <div
                          className="aspect-square w-full"
                          dangerouslySetInnerHTML={{
                            __html: avatar,
                          }}
                        />
                      ) : (
                        <AvatarImage />
                      )}
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Link to={"/profile"}>
                      <DropdownMenuItem>Edit Profile</DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem>Help and support </DropdownMenuItem>
                    <DropdownMenuItem>Give Feedback</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleLogout()}>
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
            <ChangeLagunge />
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
