import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BlogFormInputs } from "@/types/blog";
import { X } from "lucide-react";
import { useState } from "react";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";

type ImageUploadProps = {
  register: UseFormRegister<BlogFormInputs>;
  setValue: UseFormSetValue<BlogFormInputs>;
  errors: FieldErrors<BlogFormInputs>;
};

export const ImageUpload = ({
  register,
  setValue,
  errors,
}: ImageUploadProps) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setValue("file", undefined as any);
  };

  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="file">Choose an image</Label>
      {preview ? (
        <div className="relative aspect-video w-full">
          <img
            src={preview}
            alt="Preview"
            className="h-full w-full rounded-md object-cover"
          />
          <Button
            type="button"
            variant="destructive"
            size="icon"
            className="absolute right-2 top-2 h-8 w-8"
            onClick={handleRemoveImage}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <Input
          id="file"
          type="file"
          accept="image/*"
          {...register("file", {
            required: "Image is required",
            onChange: handleImageChange,
          })}
        />
      )}
      {errors.file && (
        <span className="text-sm text-red-500">{errors.file.message}</span>
      )}
    </div>
  );
};
