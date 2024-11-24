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
import { userAtom } from "@/store/auth";
import { fillProfileInfo, getProfileInfo } from "@/supabase/account";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

const Profile = () => {
  const [nameEn, setNameEn] = useState("");
  const [nameKa, setNameKa] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [avatar, setAvatar] = useState("");
  // const [userData, setUserData] = useState({});
  const user = useAtomValue(userAtom);
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
    // onSuccess:()=>{refetch()}
  });

  const handleUpdateInfo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isNameKaFilled = !!nameKa;
    const isNameEnFilled = !!nameEn;
    const isPhoneNumberFilled = !!phoneNumber;

    if (isNameKaFilled && isNameEnFilled && isPhoneNumberFilled) {
      // fillProfileInfo({
      //   id: user.user.id,
      //   name_Ka: nameKa,
      //   Name_En: nameEn,
      //   phone_Number: phoneNumber,
      //   avatar_url: avatar,
      // });
      updateProfile({
        id: userId,
        name_Ka: nameKa,
        Name_En: nameEn,
        phone_Number: phoneNumber,
        avatar_url: avatar,
      });
      refetch();
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
                value={nameEn}
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
                value={nameKa}
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
                value={phoneNumber}
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
