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
  const [hasMoreAnswers, setHasMoreAnswers] = useState(false);
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const lang = i18n.language;
  const limitedBlogs = blogs.slice(0, 5);
  const searchQuery = searchParams.get("search") || "";

  const handleSearchChange = (value: string) => {
    const queryString = qs.stringify({ search: value }, { skipNulls: true });
    setSearchParams(queryString);
  };

  useEffect(() => {
    // if (!searchQuery) {
    //   setBlogs([]);
    //   return;
    // }

    const fetchBlogs = async () => {
      setLoading(true);

      try {
        const data = await getFilteredBlogs(searchQuery); // Use the Supabase function
        setBlogs(data);
        searchQuery.length > 0 && data.length > 5
          ? setHasMoreAnswers(true)
          : setHasMoreAnswers(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(fetchBlogs, 300); // Debounce API requests
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const handleViewAll = () => {
    const searchParam = searchQuery ? `?search=${searchQuery}` : "";
    navigate(`/result${searchParam}`); // Correctly formats the URL
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && searchQuery) {
      handleViewAll(); // Trigger the view all function on Enter
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <SearchIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96">
        <Command>
          <CommandInput
            placeholder="Search blogs..."
            value={searchQuery}
            onValueChange={handleSearchChange}
            onKeyDown={handleKeyDown}
          />
          <CommandList>
            {loading && <div className="p-4">Loading...</div>}
            <CommandEmpty>No blogs found.</CommandEmpty>
            {blogs.length > 0 && (
              <CommandGroup>
                {searchQuery
                  ? lang === "en"
                    ? limitedBlogs.map((blog) => {
                        const blogImgUrl = blog.image_url
                          ? `${import.meta.env.VITE_SUPABASE_BLOG_IMAGES_STORAGE_URL}/${blog.image_url}`
                          : "";
                        return (
                          <CommandItem key={blog.id}>
                            <div className="flex flex-col">
                              <div className="flex gap-2">
                                <img
                                  src={blogImgUrl}
                                  alt={
                                    blog.description_en || "Placeholder image"
                                  }
                                  className="h-8 w-8 rounded-lg object-cover"
                                />
                                <span className="font-medium">
                                  {blog.title_en}
                                </span>
                              </div>
                            </div>
                          </CommandItem>
                        );
                      })
                    : limitedBlogs.map((blog) => {
                        const blogImgUrl = blog.image_url
                          ? `${import.meta.env.VITE_SUPABASE_BLOG_IMAGES_STORAGE_URL}/${blog.image_url}`
                          : "";

                        return (
                          <CommandItem key={blog.id}>
                            <div className="flex flex-col">
                              <div className="flex gap-2">
                                <img
                                  src={blogImgUrl}
                                  alt={
                                    blog.description_ka || "Placeholder image"
                                  }
                                  className="h-8 w-8 rounded-lg object-cover"
                                />
                                <span className="font-medium">
                                  {blog.title_ka}
                                </span>
                              </div>
                            </div>
                          </CommandItem>
                        );
                      })
                  : ""}
              </CommandGroup>
            )}
            {hasMoreAnswers ? (
              <button
                onClick={handleViewAll}
                className="mt-4 text-blue-500 hover:underline"
              >
                View All Results
              </button>
            ) : (
              ""
            )}
          </CommandList>
        </Command>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Search;
