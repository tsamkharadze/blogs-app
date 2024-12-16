import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogFormInputs } from "@/types/blog";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ka";
import { useNavigate } from "react-router-dom";

interface CardsProps {
  blogsData: BlogFormInputs[];
  error: unknown;
}

const Cards = ({ blogsData, error }: CardsProps) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const lang = i18n.language;
  dayjs.extend(relativeTime);
  dayjs.locale(lang === "ka" ? "ka" : "en");

  if (error) {
    return <div>Error loading blogs</div>;
  }

  return (
    <div className="mb-8 flex flex-col gap-4">
      {blogsData?.map((blog, index) => {
        const blogImgUrl = blog?.image_url
          ? `${import.meta.env.VITE_SUPABASE_BLOG_IMAGES_STORAGE_URL}/${blog.image_url}`
          : "";

        const createdAt = dayjs(blog.created_at);
        const isLessThanOneDay = createdAt.isAfter(dayjs().subtract(1, "day"));
        const formattedDate = isLessThanOneDay
          ? createdAt.fromNow()
          : createdAt.format("HH:mm - DD/MM/YYYY");

        return (
          <Card
            key={index}
            className="cursor-pointer md:min-w-[700px] lg:min-w-[900px]"
            onClick={() => navigate(`/blog/${blog.id}`)}
          >
            <CardHeader>
              {blog?.image_url ? (
                <img
                  src={blogImgUrl}
                  alt={blog.description_en || "Placeholder image"}
                  className="max-w-100% h-[200px] w-full rounded-lg object-cover"
                />
              ) : (
                <div className="h-[200px] w-full rounded-lg bg-gray-200" />
              )}
              <CardTitle className="font-bold">
                {lang === "en" ? blog.title_en : blog.title_ka}
              </CardTitle>
              {/* Display formatted date */}
              <p className="text-sm text-gray-500">{formattedDate}</p>
            </CardHeader>
            <CardContent>
              <p>{lang === "en" ? blog.description_en : blog.description_ka}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default Cards;
