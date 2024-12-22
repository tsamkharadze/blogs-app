import Cards from "@/components/reusable-components/cards";
import { useGetBlogs } from "@/react-query/query/blogs/blogs";

const HomeCards = () => {
  const { data: blogsData, error: blogsError } = useGetBlogs();
  return <Cards blogsData={blogsData ?? []} error={blogsError} />;
};

export default HomeCards;
