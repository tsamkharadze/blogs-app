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
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

const Profile = () => {
  const [full_name_en, setNameEn] = useState("");
  const [full_name_ka, setNameKa] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [avatar_url, setAvatar] = useState("");
  // const [userData, setUserData] = useState({});
  const user = useAtomValue(userAtom);
  const setAtomAvatar = useSetAtom(avatarAtom);
  const userId = user?.user?.id;

  // Fetch profile data
  const { data: userProfile, refetch } = useQuery({
    queryKey: ["profileInfo", userId],
    queryFn: () => getProfileInfo(userId),
    enabled: !!userId,
    select: (data) => data?.data?.[0],
  });

  useEffect(() => {
    if (userProfile) {
      setNameEn(userProfile.full_name_en || "");
      setNameKa(userProfile.full_name_ka || "");
      setPhoneNumber(userProfile.phone_number || "");
      setAvatar(userProfile.avatar_url || "");
    }
  }, [userProfile]);

  const handleNameEn = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNameEn(value);
  };
  const handleNameKa = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNameKa(value);
  };
  const handlePhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneNumber(value);
  };
  const handleAvatarSelect = (avatarSvg: string) => {
    setAvatar(avatarSvg);
  };

  const { mutate: updateProfile } = useMutation({
    mutationFn: fillProfileInfo,
    onSuccess: () => {
      refetch();
    },
  });

  const handleUpdateInfo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isNameKaFilled = !!full_name_ka;
    const isNameEnFilled = !!full_name_en;
    const isPhoneNumberFilled = !!phone_number;

    if (isNameKaFilled && isNameEnFilled && isPhoneNumberFilled) {
      updateProfile({
        id: userId,
        full_name_ka,
        full_name_en,
        avatar_url,
        phone_number,
      });
      setAtomAvatar(avatar_url);
    }
  };

  return (
    <div className="flex h-[500px] min-h-min items-center justify-center">
      <Card className="my-3">
        <CardHeader>
          <CardTitle>Edit profile info</CardTitle>
          <CardDescription>Please fill all fields </CardDescription>
        </CardHeader>
        <form onSubmit={handleUpdateInfo} className="space-y-2">
          <CardContent>
            <div className="space-y-1">
              <Label htmlFor="nameEn">Name English</Label>
              <Input
                type="text"
                id="nameEn"
                placeholder="Enter your name"
                onChange={handleNameEn}
                value={full_name_en}
                autoComplete="username"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="nameKa">Name Georgian</Label>
              <Input
                type="text"
                id="nameKa"
                placeholder="შეიყვანეთ თქვენი სახელი"
                onChange={handleNameKa}
                value={full_name_ka}
                autoComplete="username"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="phoneNumber">Phone number</Label>
              <Input
                type="number"
                id="honeNumber"
                placeholder="Enter your phone number"
                onChange={handlePhoneNumber}
                value={phone_number}
                autoComplete="username"
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
