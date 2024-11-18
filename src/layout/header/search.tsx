import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SearchIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

type Author = {
  name: string;
  status: string;
};

const Search = () => {
  const { t } = useTranslation();

  const badges = t("tags-translation", { returnObjects: true }) as string[];
  const authors = t("authors-translation", { returnObjects: true }) as Author[];

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>{<SearchIcon />}</DropdownMenuTrigger>
        <DropdownMenuContent className="w-96">
          <Command>
            <CommandInput placeholder="Type to search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Tags">
                {badges.map((tag, index) => (
                  <CommandItem key={index}>
                    <Badge className="mr-2 cursor-pointer dark:bg-muted">
                      {tag}
                    </Badge>
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Authors">
                {authors.map((author, index) => (
                  <CommandItem key={index}>
                    <Badge className="mr-2 cursor-pointer dark:bg-muted">
                      {author.name}
                    </Badge>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default Search;
