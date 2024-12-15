import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Cards from "@/pages/home/component/card/HomeCards";

const Author = () => {
  return (
    <div className="mx-auto min-h-screen max-w-4xl px-4 py-8">
      <div className="mb-12 flex rounded-lg bg-card p-8">
        <div className="relative mb-4 flex h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-primary md:mb-0 md:mr-8">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-muted">
            JD
          </div>
        </div>
        <div className="flex-grow text-center md:text-left">
          <h1 className="mb-2 text-3xl font-bold">Jane Doe</h1>
          <p className="mb-4 text-muted-foreground">
            Tech enthusiast, software engineer, and avid blogger. Passionate
            about AI, web development, and the future of technology.
          </p>
          <div className="mb-4 flex justify-center space-x-4 md:justify-start">
            <button className="[&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 inline-flex h-9 w-9 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-input bg-background text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter h-4 w-4"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              <span className="sr-only">Twitter</span>
            </button>
            <button className="[&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 inline-flex h-9 w-9 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-input bg-background text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook h-4 w-4"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span className="sr-only">Facebook</span>
            </button>
            <button className="[&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 inline-flex h-9 w-9 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-input bg-background text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin h-4 w-4"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span className="sr-only">LinkedIn</span>
            </button>
            <button className="[&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 inline-flex h-9 w-9 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-input bg-background text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github h-4 w-4"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              <span className="sr-only">GitHub</span>
            </button>
          </div>
          <div className="flex justify-center space-x-4 text-sm text-muted-foreground md:justify-start">
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-users mr-1 h-4 w-4"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>{" "}
              1234 Followers
            </span>
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-users mr-1 h-4 w-4"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>{" "}
              567 Following
            </span>
          </div>
        </div>
      </div>
      <div>
        <Tabs defaultValue="articles">
          <TabsList className="mb-12 grid w-full grid-cols-2">
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          <TabsContent value="articles">
            <Cards />
          </TabsContent>
          <TabsContent value="about">
            <div className="rounded-xl border bg-card text-card-foreground shadow">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="font-semibold leading-none tracking-tight">
                  About Jane Doe
                </div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-muted-foreground">
                  Jane Doe is a seasoned software engineer with over a decade of
                  experience in web development. She specializes in JavaScript,
                  React, and Node.js, and has a keen interest in emerging
                  technologies like AI and blockchain. Jane is a frequent
                  speaker at tech conferences and contributes to various
                  open-source projects.
                </p>
                <h3 className="mb-2 font-semibold">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-black hover:bg-black dark:bg-black">
                    JavaScript
                  </Badge>
                  <Badge className="bg-black hover:bg-black dark:bg-black">
                    React
                  </Badge>{" "}
                  <Badge className="bg-black hover:bg-black dark:bg-black">
                    Node.js
                  </Badge>{" "}
                  <Badge className="bg-black hover:bg-black dark:bg-black">
                    Python
                  </Badge>{" "}
                  <Badge className="bg-black hover:bg-black dark:bg-black">
                    AI
                  </Badge>{" "}
                  <Badge className="bg-black hover:bg-black dark:bg-black">
                    Blockchain
                  </Badge>{" "}
                  <Badge className="bg-black hover:bg-black dark:bg-black">
                    Web development{" "}
                  </Badge>{" "}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Author;
