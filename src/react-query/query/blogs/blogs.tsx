import { getBlogs, getSingleBlog } from "@/supabase/blogs/get-blogs";
import { useQuery } from "@tanstack/react-query";

export const useGetBlogs = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });
};

export const useGetSingleBlog = (id: string) => {
  return useQuery({
    queryKey: ["single-country", id],
    queryFn: () => {
      if (!id) {
        throw new Error("ID is required");
      }
      return getSingleBlog(id);
    },
  });
};
