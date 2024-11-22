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
import { fillProfileInfo } from "@/supabase/account";
import { useAtomValue } from "jotai";
import { ChangeEvent, FormEvent, useState } from "react";

const Profile = () => {
  const [nameEn, setNameEn] = useState("");
  const [nameKa, setNameKa] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [avatar, setAvatar] = useState("");
  const user = useAtomValue(userAtom);

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

  const handleSubmitLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isNameKaFilled = !!nameKa;
    const isNameEnFilled = !!nameEn;
    const isPhoneNumberFilled = !!phoneNumber;

    if (isNameKaFilled && isNameEnFilled && isPhoneNumberFilled) {
      fillProfileInfo({
        id: user.user.id,
        name_Ka: nameKa,
        Name_En: nameEn,
        phone_Number: phoneNumber,
        avatar_url: avatar,
      });
    }
  };

  return (
    <div className="flex h-[500px] min-h-screen items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Edit profile info</CardTitle>
          <CardDescription>Please fill all fields </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmitLogin} className="space-y-2">
          <CardContent>
            <div className="space-y-1">
              <Label htmlFor="nameEn">Name English</Label>
              <Input
                type="text"
                id="nameEn"
                placeholder="Enter your name"
                onChange={handleNameEn}
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
