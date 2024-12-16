import React, { useEffect, useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SearchIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "qs";
import { getFilteredBlogs } from "@/supabase/blogs/get-blogs";
import { useTranslation } from "react-i18next";

type Blog = {
  id: number;
  title_en: string | null;
  title_ka: string | null;
  author?: string;
  created_at: string;
  description_en: string | null;
  description_ka: string | null;
  image_url: string | null;
  user_id: string | null;
};

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const lang = i18n.language;
  const limitedBlogs = blogs.slice(0, 3);
  const searchQuery = searchParams.get("search") || "";
  const hasMoreAnswers = blogs.length > 3;

  const handleSearchChange = (value: string) => {
    const queryString = qs.stringify({ search: value }, { skipNulls: true });
    setSearchParams(queryString);
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      if (!searchQuery.trim()) {
        setBlogs([]);
        return;
      }

      setLoading(true);
      try {
        const data = await getFilteredBlogs(searchQuery);
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(fetchBlogs, 300);
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const handleViewAll = () => {
    const searchParam = searchQuery ? `?search=${searchQuery}` : "";
    navigate(`/result${searchParam}`);
    setOpen(false);
  };

  const handleSelect = (blogId: number) => {
    navigate(`/blog/${blogId}`);
    setOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && searchQuery) {
      e.preventDefault();
      handleViewAll();
    }
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center gap-2 rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          aria-label="Search blogs"
        >
          <SearchIcon className="h-5 w-5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[300px] p-0" align="end" sideOffset={5}>
        <Command shouldFilter={false}>
          <CommandInput
            placeholder="Search blogs..."
            value={searchQuery}
            onValueChange={handleSearchChange}
            onKeyDown={handleKeyDown}
          />
          <CommandList>
            {loading && (
              <div className="p-4 text-center text-sm text-muted-foreground">
                Loading...
              </div>
            )}
            <CommandEmpty className="p-4 text-center text-sm">
              No blogs found.
            </CommandEmpty>
            {blogs.length > 0 && searchQuery && (
              <CommandGroup>
                {limitedBlogs.map((blog) => {
                  const blogImgUrl = blog.image_url
                    ? `${import.meta.env.VITE_SUPABASE_BLOG_IMAGES_STORAGE_URL}/${blog.image_url}`
                    : "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=164&h=164&fit=crop&auto=format";
                  const title = lang === "en" ? blog.title_en : blog.title_ka;
                  const description =
                    lang === "en" ? blog.description_en : blog.description_ka;

                  return (
                    <CommandItem
                      key={blog.id}
                      onSelect={() => handleSelect(blog.id)}
                      className="flex items-center gap-3 px-4 py-3"
                    >
                      <img
                        src={blogImgUrl}
                        alt={description || "Blog thumbnail"}
                        className="h-10 w-10 rounded-lg object-cover"
                      />
                      <div className="flex flex-col gap-1">
                        <span className="line-clamp-1 font-medium">
                          {title}
                        </span>
                        <span className="line-clamp-1 text-xs text-muted-foreground">
                          {description}
                        </span>
                      </div>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            )}
            {hasMoreAnswers && (
              <div className="border-t p-2">
                <button
                  onClick={handleViewAll}
                  className="w-full rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90"
                >
                  View All Results
                </button>
              </div>
            )}
          </CommandList>
        </Command>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Search;
