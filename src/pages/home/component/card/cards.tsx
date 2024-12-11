import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getBlogs } from "@/supabase/blogs/get-blogs";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

const Cards = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const { data: blogsData, error: blogsError } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });
  console.log(blogsData);

  if (blogsError) {
    return <div>error loading Blogs</div>;
  }

  return (
    <div className="mb-8 flex flex-col gap-4">
      {blogsData?.map((blog, index: number) => {
        const blogImgUrl = blog.image_url
          ? `${import.meta.env.VITE_SUPABASE_BLOG_IMAGES_STORAGE_URL}/${blog.image_url}`
          : "";
        return (
          <Card key={index} className="cursor-pointer">
            <CardHeader>
              {blog.image_url ? (
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
