import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AvatarComp from "@/pages/profile/components/avatar";
import { avatarAtom, userAtom } from "@/store/auth";
import { fillProfileInfo, getProfileInfo } from "@/supabase/account";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type fieldInputs = {
  full_name_en: string;
  full_name_ka: string;
  phone_number: string;
};

const Profile = () => {
  const [avatar_url, setAvatar] = useState("");
  const user = useAtomValue(userAtom);
  const setAtomAvatar = useSetAtom(avatarAtom);
  const userId = user?.user?.id;

  const { register, handleSubmit, formState } = useForm<fieldInputs>();

  // Fetch profile
  const {
    data: userProfile,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["profileInfo", userId],
    queryFn: () => getProfileInfo(userId!),
    enabled: !!userId,
    select: (data) => data?.data?.[0],
  });

  const handleAvatarSelect = (avatarSvg: string) => {
    setAvatar(avatarSvg);
  };

  const { mutate: updateProfile } = useMutation({
    mutationFn: fillProfileInfo,
    onSuccess: () => {
      refetch();
    },
  });

  const onSubmit: SubmitHandler<fieldInputs> = (fieldInputs) => {
    updateProfile({
      ...fieldInputs,
      id: userId ?? "",
      avatar_url,
    });
    setAtomAvatar(avatar_url);
  };
  console.log(userProfile);
  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <div className="flex h-[500px] min-h-min items-center justify-center">
      <Card className="my-3">
        <CardHeader>
          <CardTitle>Edit profile info</CardTitle>
          <CardDescription>Please fill all fields </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <CardContent>
            <div className="space-y-1">
              <Label htmlFor="nameEn">Name English</Label>
              <Input
                type="text"
                placeholder="Enter your name"
                {...register("full_name_en", {
                  required: true,
                  value: userProfile?.full_name_en || "",
                })}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="nameKa">Name Georgian</Label>
              <Input
                type="text"
                placeholder="შეიყვანეთ თქვენი სახელი"
                {...register("full_name_ka", {
                  required: true,
                  value: userProfile?.full_name_ka || "",
                })}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="phoneNumber">Phone number</Label>
              {formState.errors.phone_number ? (
                <div className="text-red-300">Min 9 number </div>
              ) : (
                ""
              )}
              <Input
                type="number"
                autoComplete="username"
                placeholder="Enter your phone number"
                {...register("phone_number", {
                  required: true,
                  value: userProfile?.phone_number || "",
                  minLength: 9,
                })}
              />
            </div>
            <div className="space-y-1">
              <AvatarComp onAvatarSelect={handleAvatarSelect} />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Confirm</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Profile;
