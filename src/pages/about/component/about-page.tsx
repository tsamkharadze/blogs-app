import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const About = () => {
  return (
    <div className="mx-auto max-w-[896px] px-4 py-8">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-white">About bitBlogs</h1>
        <p className="text-xl text-muted-foreground">
          Empowering tech enthusiasts to share knowledge and inspire innovation.
        </p>
      </div>

      <div className="mt-12 flex">
        <div className="m-auto">
          <h2 className="text-3xl font-semibold">Our Mission</h2>
          <p className="text-muted-foreground">
            At bitBlogs, we believe in the power of shared knowledge. Our
            mission is to create a platform where tech enthusiasts, developers,
            and innovators can come together to share ideas, learn from each
            other, and push the boundaries of what's possible in the world of
            technology.
          </p>
        </div>

        <div className="">
          <img
            src="https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=400&amp;width=400"
            alt="Team collaboration"
            className="max-w-[432px] rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* cards */}

      <div>
        <h1 className="my-12 text-center text-3xl font-semibold">
          What We Offer
        </h1>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="rounded-xl border bg-card text-card-foreground shadow">
            <CardHeader className="pb-4">
              <div className="flex flex-col space-y-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  className="mb-2 h-10 w-10"
                >
                  <path d="M12 7v14"></path>
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                </svg>
                <div className="font-semibold leading-none tracking-tight">
                  Rich Content
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Access a wide range of articles, tutorials, and insights on the
                latest tech trends and best practices.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-xl border bg-card text-card-foreground shadow">
            <CardHeader className="pb-4">
              <div className="flex flex-col space-y-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  className="mb-2 h-10 w-10"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <div className="font-semibold leading-none tracking-tight">
                  Rich Content
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Access a wide range of articles, tutorials, and insights on the
                latest tech trends and best practices.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-xl border bg-card text-card-foreground shadow">
            <CardHeader className="pb-4">
              <div className="flex flex-col space-y-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  className="mb-2 h-10 w-10"
                >
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
                <div className="font-semibold leading-none tracking-tight">
                  Rich Content
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Access a wide range of articles, tutorials, and insights on the
                latest tech trends and best practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* our story */}

      <div className="mt-12 rounded-lg bg-muted p-8">
        <h2 className="mb-4 text-3xl font-semibold">Our Story</h2>
        <p className="mb-4 text-muted-foreground">
          Founded in 2023, bitBlogs started as a small project by a group of
          passionate developers who wanted to create a space for sharing their
          experiences and learning from others. What began as a simple blog
          quickly grew into a thriving community of tech enthusiasts from all
          around the world.
        </p>
        <p className="text-muted-foreground">
          Today, bitBlogs is proud to be a leading platform for
          technology-focused content, fostering innovation and collaboration in
          the ever-evolving world of tech.
        </p>
      </div>

      {/* join us */}

      <section className="mt-12 text-center">
        <h2 className="mb-4 text-3xl font-semibold">Join Us on Our Journey</h2>
        <p className="mb-6 text-muted-foreground">
          Whether you're a seasoned developer, a curious beginner, or somewhere
          in between, there's a place for you at bitBlogs. Let's shape the
          future of technology together.
        </p>

        <Button>Get Started Today</Button>
      </section>
    </div>
  );
};

export default About;
