import { getSingleCountry } from "@/supabase/blogs/get-blogs";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const { id } = useParams();
  dayjs.extend(relativeTime);
  dayjs.locale(lang === "ka" ? "ka" : "en");
  const {
    data: blog,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["single-country", id],
    queryFn: () => {
      if (!id) {
        throw new Error("ID is required");
      }
      return getSingleCountry(id);
    },
  });

  // Handle loading and error states
  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error || !blog) {
    return <div className="text-center text-red-500">Error loading blog.</div>;
  }

  const createdAt = dayjs(blog.created_at);
  const isLessThanOneDay = createdAt.isAfter(dayjs().subtract(1, "day"));
  const formattedDate = isLessThanOneDay
    ? createdAt.fromNow()
    : createdAt.format("HH:mm - DD/MM/YYYY");

  return (
    <div className="mx-auto my-10 max-w-3xl">
      <div className="mb-4">
        <img
          src={`${import.meta.env.VITE_SUPABASE_BLOG_IMAGES_STORAGE_URL}/${blog.image_url}`}
          alt={
            lang === "ka"
              ? blog.title_ka || "Blog Title"
              : blog.title_en || "Blog Title"
          }
          className="h-64 w-full rounded-md object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-gray-800">
          {lang === "ka" ? blog.title_ka : blog.title_en}
        </h1>
        <p className="text-sm text-gray-500">{formattedDate}</p>
        <p className="text-lg text-gray-700">
          {lang === "ka" ? blog.description_ka : blog.description_en}
        </p>
      </div>
    </div>
  );
};

export default SingleBlog;
