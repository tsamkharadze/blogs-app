import { getSingleCountry } from "@/supabase/blogs/get-blogs";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["single-country", id],
    queryFn: () => {
      if (!id) {
        throw new Error("ID is required");
      }
      return getSingleCountry(id);
    },
  });
  return <>{data?.title_en}</>;
};

export default SingleBlog;
