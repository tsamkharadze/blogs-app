import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Aside = () => {
  return (
    <aside className="flex flex-col gap-10">
      <div className="max-w-96 rounded-xl border-[1px] shadow-md">
        <p className="p-4 font-semibold leading-none tracking-tight">
          Popular Tags
        </p>
        <div className="p-4">
          <Badge className="mr-2 cursor-pointer"> BlockChain</Badge>
          <Badge className="mr-2 cursor-pointer"> Cryptocurrency</Badge>
          <Badge className="mr-2 cursor-pointer"> Technology</Badge>
          <Badge className="mr-2 cursor-pointer"> Programming</Badge>
          <Badge className="mr-2 cursor-pointer"> AI</Badge>
          <Badge className="mr-2 cursor-pointer"> Machine Learning</Badge>
        </div>
      </div>

      <div className="max-w-96 rounded-xl border-[1px] shadow-md">
        <p className="p-4 font-semibold leading-none tracking-tight">
          Featured Authors
        </p>
        <div className="p-4">
          <div className="flex cursor-pointer gap-4">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback></AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold hover:underline">Alice Johnson</p>
              <p className="text-sm text-muted-foreground">
                Blockchain Enthusiast
              </p>
            </div>
          </div>
          <div className="flex cursor-pointer gap-4">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback></AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold hover:underline">Alice Johnson</p>
              <p className="text-sm text-muted-foreground">
                Blockchain Enthusiast
              </p>
            </div>
          </div>
          <div className="flex cursor-pointer gap-4">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback></AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold hover:underline">Alice Johnson</p>
              <p className="text-sm text-muted-foreground">
                Blockchain Enthusiast
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
