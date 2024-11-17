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

export function Authorization() {
  return (
    <div className="flex h-[500px] min-h-screen items-center justify-center">
      <div className="h-[500px]">
        <Tabs defaultValue="LogIn" className="w-[400px]">
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
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Email</Label>
                  <Input
                    type="email"
                    id="name"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Password</Label>
                  <Input
                    id="username"
                    type="password"
                    placeholder="Enter your Password"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Log in</Button>
              </CardFooter>
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
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Name</Label>
                  <Input placeholder="Your Name" id="current" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">Email</Label>
                  <Input placeholder="john@example.com" id="new" type="email" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">Password</Label>
                  <Input
                    placeholder="Enter your Password"
                    id="new"
                    type="password"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">Confirm Password</Label>
                  <Input
                    placeholder="Confirm your Password"
                    id="new"
                    type="password"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Sign up</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
