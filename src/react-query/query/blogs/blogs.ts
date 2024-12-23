import { getBlogs, getSingleBlog } from "@/supabase/blogs/get-blogs";
import { Blog, BlogFormInputs } from "@/types/blog";
import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

export const useGetBlogs = <T = BlogFormInputs[]>({
  queryOptions = {},
}: {
  queryOptions?: Omit<UseQueryOptions<T, unknown, T>, "queryKey">;
} = {}): UseQueryResult<T, unknown> => {
  return useQuery<T, unknown, T>({
    queryKey: ["blogs"],
    queryFn: async () => (await getBlogs()) as unknown as T,
    ...queryOptions,
  });
};

export const useGetSingleBlog = <T = Blog | null>({
  id,
  queryOptions = {},
}: {
  id: string;
  queryOptions?: Omit<UseQueryOptions<T, unknown, T>, "queryKey">;
}): UseQueryResult<T, unknown> => {
  return useQuery<T, unknown, T>({
    queryKey: ["single-blog", id],
    queryFn: async () => {
      if (!id) throw new Error("Blog ID is missing");
      const blog = await getSingleBlog(id);
      return blog as T;
    },
    enabled: !!id,
    ...queryOptions,
  });
};
