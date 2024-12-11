import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BlogFormInputs } from "@/types/blog";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type LanguageFieldsProps = {
  register: UseFormRegister<BlogFormInputs>;
  errors: FieldErrors<BlogFormInputs>;
  georgian: boolean;
};

export const LanguageFields = ({
  register,
  errors,
  georgian,
}: LanguageFieldsProps) => {
  return (
    <>
      {/* English Fields */}
      <div className={georgian ? "hidden" : "block"}>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="title_en">Title</Label>
          <Input
            id="title_en"
            placeholder="Name of your blog"
            {...register("title_en", { required: "Title is required" })}
          />
          {errors.title_en && (
            <span className="text-sm text-red-500">
              {errors.title_en.message}
            </span>
          )}
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="description_en">Description</Label>
          <Textarea
            id="description_en"
            placeholder="Type your message here."
            {...register("description_en", {
              required: "Description is required",
            })}
          />
          {errors.description_en && (
            <span className="text-sm text-red-500">
              {errors.description_en.message}
            </span>
          )}
        </div>
      </div>

      {/* Georgian Fields */}
      <div className={georgian ? "block" : "hidden"}>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="title_ka">სათაური</Label>
          <Input
            id="title_ka"
            placeholder="მიუთითეთ სტატიის სათაური"
            {...register("title_ka", { required: "Title is required" })}
          />
          {errors.title_ka && (
            <span className="text-sm text-red-500">
              {errors.title_ka.message}
            </span>
          )}
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="description_ka">აღწერა</Label>
          <Textarea
            id="description_ka"
            placeholder="მიუთითეთ სტატიის აღწერა."
            {...register("description_ka", {
              required: "Description is required",
            })}
          />
          {errors.description_ka && (
            <span className="text-sm text-red-500">
              {errors.description_ka.message}
            </span>
          )}
        </div>
      </div>
    </>
  );
};
