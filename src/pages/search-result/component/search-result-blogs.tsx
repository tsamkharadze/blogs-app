import Cards from "@/components/reusable-components/cards";
import { getFilteredBlogs } from "@/supabase/blogs/get-blogs";
import { BlogFormInputs } from "@/types/blog";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchResult = () => {
  const [searchParams] = useSearchParams(); // `setSearchParams` is removed since it's unused.
  const [blogs, setBlogs] = useState<BlogFormInputs[]>([]);
  const [error, setError] = useState<string>(""); // Explicitly define `string` type for `error`.
  const [loading, setLoading] = useState(false);
  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);

      try {
        const data = await getFilteredBlogs(searchQuery);
        setBlogs(data);
        setError(""); // Reset error if data fetch is successful.
      } catch (err) {
        setError((err as Error).message || "An unexpected error occurred");
        setBlogs([]); // Clear blogs if there's an error.
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(fetchBlogs, 300); // Debounce API requests
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  if (loading) {
    return <div>Loading blogs...</div>;
  }

  return (
    <div className="mx-auto my-3 max-w-5xl">
      <Cards blogsData={blogs} error={error} />
    </div>
  );
};

export default SearchResult;
