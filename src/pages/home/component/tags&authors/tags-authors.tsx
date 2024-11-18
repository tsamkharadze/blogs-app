import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

type Author = {
  name: string;
  status: string;
};

const Aside = () => {
  const { t } = useTranslation();

  const badges = t("tags-translation", { returnObjects: true }) as string[];
  const authors = t("authors-translation", { returnObjects: true }) as Author[];
  return (
    <aside className="flex flex-col gap-10">
      <div className="max-w-96 rounded-xl border-[1px] shadow-md">
        <p className="p-4 font-semibold leading-none tracking-tight">
          Popular Tags
        </p>
        <div className="p-4">
          {badges.map((tag, index) => (
            <Badge key={index} className="mr-2 cursor-pointer">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="max-w-96 rounded-xl border-[1px] shadow-md">
        <p className="p-4 font-semibold leading-none tracking-tight">
          Featured Authors
        </p>
        <div className="p-4">
          {authors.map((author, index) => (
            <div key={index} className="flex cursor-pointer gap-4">
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold hover:underline">{author.name}</p>
                <p className="text-sm text-muted-foreground">{author.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Aside;
