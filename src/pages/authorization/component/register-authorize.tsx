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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { login, register } from "@/supabase/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Authorization() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // ლოგინის სთეითები
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // რეგისრტარიის სთეითები
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  // ლოგინის ჰენდლერები

  const { mutate: handleLogin } = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: () => {
      queryClient.invalidateQueries();
      navigate("/home");
    },
  });

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  };
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleSubmitLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isEmaillfilled = !!email;
    const isPaswordFilled = !!password;

    if (isEmaillfilled && isPaswordFilled) {
      handleLogin({ email: email, password: password });
    }
  };

  // რეგისტრაციის ჰენდლერები

  const { mutate: handleRegister } = useMutation({
    mutationKey: ["register"],
    mutationFn: register,
  });

  console.log(newName);
  const handleNewName = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewName(value);
  };

  const handleNewEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewEmail(value);
  };
  const handleNewPassword = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewPassword(value);
  };
  const handleConfirmNewPassword = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmNewPassword(value);
  };
  const handleSubmitNewUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isEmaillfilled = !!newEmail;
    const isPaswordFilled = !!newPassword;

    if (
      isEmaillfilled &&
      isPaswordFilled &&
      newPassword === confirmNewPassword
    ) {
      handleRegister({ email: newEmail, password: newPassword });
    }
  };

  return (
    <div className="flex h-[500px] min-h-screen items-center justify-center">
      <div className="h-[500px]">
        <Tabs
          defaultValue="LogIn"
          className="w-[400px]"
          // onValueChange={handleTabChange}
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="LogIn">Log in</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="LogIn">
            <Card>
              <CardHeader>
                <CardTitle>Log in to BitBlogs</CardTitle>
                <CardDescription>
                  Enter your credentials to access your account
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmitLogin} className="space-y-2">
                <CardContent>
                  <div className="space-y-1">
                    <Label htmlFor="name">Email</Label>
                    <Input
                      type="email"
                      id="name"
                      placeholder="john@example.com"
                      onChange={handleEmail}
                      autoComplete="username"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="username">Password</Label>
                    <Input
                      id="username"
                      type="password"
                      placeholder="Enter your Password"
                      onChange={handlePassword}
                      autoComplete="current-password"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Log in</Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Sign Up for BitBlogs</CardTitle>
                <CardDescription>
                  Create your account to start blogging
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmitNewUser} className="space-y-2">
                <CardContent>
                  <div className="space-y-1">
                    <Label htmlFor="current">Name</Label>
                    <Input
                      placeholder="Your Name"
                      id="current"
                      onChange={handleNewName}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="newEmail">Email</Label>
                    <Input
                      placeholder="john@example.com"
                      id="newEmail"
                      type="email"
                      onChange={handleNewEmail}
                      autoComplete="username"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="newPassword">Password</Label>
                    <Input
                      placeholder="Enter your Password"
                      id="newPassword"
                      type="password"
                      onChange={handleNewPassword}
                      autoComplete="new-password"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="confirmNewPassword">Confirm Password</Label>
                    {newPassword !== confirmNewPassword && (
                      <span className="text-lg text-red-950">
                        Password not match
                      </span>
                    )}

                    <Input
                      placeholder="Confirm your Password"
                      id="confirmNewPassword"
                      type="password"
                      onChange={handleConfirmNewPassword}
                      autoComplete="confirm-password"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit">Sign up</Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
