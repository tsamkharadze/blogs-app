import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Cards = () => {
  return (
    <div>
      <Card className="cursor-pointer">
        <CardHeader>
          <img
            src="https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=200&width=400"
            className="max-w-100% w-full rounded-lg"
          />
          <CardTitle className="font-bold">Card Title</CardTitle>
          <CardDescription className="text-sm">
            Card Description
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter className="max-h-80 p-6">
          <Badge variant={"secondary"}>Blockchain</Badge>
          <Badge variant={"secondary"}>Technology</Badge>
          <Badge variant={"secondary"}>Future</Badge>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Cards;
