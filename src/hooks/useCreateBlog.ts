import { userAtom } from "@/store/auth";
import { supabase } from "@/supabase";
import { BlogFormInputs } from "@/types/blog";
import { useAtomValue } from "jotai";
import { useNavigate } from "react-router-dom";

export const useCreateBlog = () => {
  const user = useAtomValue(userAtom);
  const navigate = useNavigate();

  const onCreateBlog = async (formValues: BlogFormInputs) => {
    try {
      if (!formValues?.file || !(formValues.file instanceof FileList)) {
        throw new Error("Invalid file input");
      }

      const file = formValues?.file[0] || undefined;
      if (!file) {
        throw new Error("Please select an image");
      }

      // Upload image with original filename
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("blog_images")
        .upload(file.name, file);

      if (uploadError) throw uploadError;

      const { error: insertError } = await supabase.from("blogs").insert({
        title_ka: formValues.title_ka,
        title_en: formValues.title_en,
        description_ka: formValues.description_ka,
        description_en: formValues.description_en,
        image_url: uploadData?.path,
        user_id: user?.user.id,
      });

      if (insertError) throw insertError;

      console.log("Blog created successfully!");
    } catch (error) {
      console.error("Error creating blog:", error);
    } finally {
      navigate("/");
    }
  };

  return { onCreateBlog };
};
