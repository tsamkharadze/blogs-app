import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { BlogFormInputs } from "@/types/blog";
import { LanguageFields } from "./language-fields";
import { useCreateBlog } from "@/hooks/useCreateBlog";
import { ImageUpload } from "./image-upload";

const CreateBlogForm = () => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<BlogFormInputs>();
  const [georgian, setGeorgian] = useState(false);
  const { onCreateBlog, loading } = useCreateBlog(); // Access loading state here

  return (
    <form onSubmit={handleSubmit(onCreateBlog)}>
      <Card className="mx-auto mt-5 w-[350px]">
        <CardHeader>
          <CardTitle>Create Blog</CardTitle>
          <CardDescription>Create your new blog in one-click.</CardDescription>
        </CardHeader>

        <CardContent>
          <Button
            type="button"
            onClick={() => setGeorgian(!georgian)}
            className="mb-2"
          >
            {georgian ? "Enter English" : "Enter Georgian"}
          </Button>
          <div className="grid w-full items-center gap-4">
            <LanguageFields
              register={register}
              errors={errors}
              georgian={georgian}
            />
            <ImageUpload
              register={register}
              setValue={setValue}
              errors={errors}
            />
          </div>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? "Publishing..." : "Publish"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default CreateBlogForm;
