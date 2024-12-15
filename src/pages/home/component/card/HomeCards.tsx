import Cards from "@/components/reusable-components/cards";
import { getBlogs } from "@/supabase/blogs/get-blogs";
import { useQuery } from "@tanstack/react-query";

const HomeCards = () => {
  const { data: blogsData, error: blogsError } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  return <Cards blogsData={blogsData ?? []} error={blogsError} />;
};

export default HomeCards;
