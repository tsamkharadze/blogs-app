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
import { login, registerUser } from "@/supabase/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

type LoginInputs = {
  email: string;
  password: string;
};

type RegisterInputs = {
  newEmail: string;
  newName: string;
  newPassword: string;
  confirmNewPassword: string;
};

export function Authorization() {
  const location = useLocation();
  const toNavigate =
    location?.state?.from.pathname + location?.state?.from.search || "/";
  const { t } = useTranslation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const loginForm = useForm<LoginInputs>();
  const registerForm = useForm<RegisterInputs>();

  const newPassword = registerForm.watch("newPassword");

  const { mutate: handleLogin } = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: () => {
      queryClient.invalidateQueries();
      navigate(toNavigate);
    },
  });

  const { mutate: handleRegister } = useMutation({
    mutationKey: ["register"],
    mutationFn: registerUser,
  });

  const onLoginSubmit: SubmitHandler<LoginInputs> = (data) => {
    handleLogin(data);
  };

  const onRegisterSubmit: SubmitHandler<RegisterInputs> = (data) => {
    handleRegister({
      email: data.newEmail,
      password: data.newPassword,
    });
  };

  return (
    <div className="flex h-[500px] min-h-screen items-center justify-center">
      <div className="h-[500px]">
        <Tabs defaultValue="LogIn" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="LogIn">
              {t("authorization-translation.tabs.logIn")}
            </TabsTrigger>
            <TabsTrigger value="register">
              {t("authorization-translation.tabs.register")}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="LogIn">
            <Card>
              <CardHeader>
                <CardTitle>
                  {t("authorization-translation.card.loginTitle")}
                </CardTitle>
                <CardDescription>
                  {t("authorization-translation.card.loginDescription")}
                </CardDescription>
              </CardHeader>
              <form
                onSubmit={loginForm.handleSubmit(onLoginSubmit)}
                className="space-y-2"
              >
                <CardContent>
                  <div className="space-y-1">
                    <Label htmlFor="email">
                      {t("authorization-translation.form.email")}
                    </Label>
                    {loginForm.formState.errors.email?.message && (
                      <span className="block text-sm text-red-500">
                        {loginForm.formState.errors.email.message}
                      </span>
                    )}
                    <Input
                      id="email"
                      type="email"
                      placeholder={t(
                        "authorization-translation.form.placeholders.email",
                      )}
                      {...loginForm.register("email", {
                        required: t("error-translation.emailRequired"),
                        pattern: {
                          value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                          message: t("error-translation.emailPattern"),
                        },
                      })}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">
                      {" "}
                      {t("authorization-translation.form.password")}
                    </Label>
                    {loginForm.formState.errors.password?.message && (
                      <span className="block text-sm text-red-500">
                        {loginForm.formState.errors.password.message}
                      </span>
                    )}
                    <Input
                      id="password"
                      type="password"
                      placeholder={t(
                        "authorization-translation.form.placeholders.password",
                      )}
                      {...loginForm.register("password", {
                        required: t("error-translation.passwordRequired"),
                        minLength: {
                          value: 6,
                          message: t("error-translation.minPassword"),
                        },
                        maxLength: {
                          value: 15,
                          message: t("error-translation.maxPassword"),
                        },
                      })}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit">
                    {" "}
                    {t("authorization-translation.form.buttons.logIn")}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>
                  {t("authorization-translation.card.registerTitle")}
                </CardTitle>
                <CardDescription>
                  {t("authorization-translation.card.registerDescription")}
                </CardDescription>
              </CardHeader>
              <form
                onSubmit={registerForm.handleSubmit(onRegisterSubmit)}
                className="space-y-2"
              >
                <CardContent>
                  <div className="space-y-1">
                    <Label className="block" htmlFor="newName">
                      {t("authorization-translation.form.name")}
                    </Label>
                    <Input
                      id="newName"
                      placeholder={t(
                        "authorization-translation.form.placeholders.name",
                      )}
                      {...registerForm.register("newName", { required: true })}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="newEmail">
                      {t("authorization-translation.form.email")}
                    </Label>
                    {registerForm.formState.errors.newEmail?.message && (
                      <span className="block text-sm text-red-500">
                        {registerForm.formState.errors.newEmail.message}
                      </span>
                    )}
                    <Input
                      id="newEmail"
                      type="email"
                      placeholder={t(
                        "authorization-translation.form.placeholders.email",
                      )}
                      {...registerForm.register("newEmail", {
                        required: t("error-translation.emailRequired"),
                        pattern: {
                          value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                          message: t("error-translation.emailPattern"),
                        },
                      })}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="newPassword">
                      {" "}
                      {t("authorization-translation.form.password")}
                    </Label>
                    {registerForm.formState.errors.newPassword?.message && (
                      <span className="block text-sm text-red-500">
                        {registerForm.formState.errors.newPassword.message}
                      </span>
                    )}
                    <Input
                      id="newPassword"
                      type="password"
                      placeholder={t(
                        "authorization-translation.form.placeholders.password",
                      )}
                      {...registerForm.register("newPassword", {
                        required: t("error-translation.passwordRequired"),
                        minLength: {
                          value: 6,
                          message: t("error-translation.minPassword"),
                        },
                        maxLength: {
                          value: 15,
                          message: t("error-translation.maxPassword"),
                        },
                      })}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="confirmNewPassword">
                      {t("authorization-translation.form.confirmPassword")}
                    </Label>
                    {registerForm.formState.errors.confirmNewPassword
                      ?.message && (
                      <span className="block text-sm text-red-500">
                        {
                          registerForm.formState.errors.confirmNewPassword
                            .message
                        }
                      </span>
                    )}
                    <Input
                      id="confirmNewPassword"
                      type="password"
                      placeholder={t(
                        "authorization-translation.form.placeholders.confirmPassword",
                      )}
                      {...registerForm.register("confirmNewPassword", {
                        required: t(
                          "error-translation.passwordConfirmRequired",
                        ),
                        validate: (value) =>
                          value === newPassword ||
                          t("error-translation.passwordNotMatch"),
                      })}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit">
                    {t("authorization-translation.form.buttons.signUp")}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
