import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslation } from "react-i18next";

interface Article {
  title: string;
  description: string[];
  content: string;
  tags: string[];
}

const Cards = () => {
  const { t } = useTranslation();
  const articles = t("card-translation", { returnObjects: true }) as Article[];

  return (
    <div className="mb-8 flex flex-col gap-4">
      {/* მთლიანი ქარდის მეპი */}
      {articles.map((article: Article, index: number) => (
        <Card key={index} className="cursor-pointer">
          <CardHeader>
            <img
              src="https://g-zwkebgiacpe.vusercontent.net/placeholder.svg?height=200&width=400"
              alt={article.title}
              className="max-w-100% h-[200px] w-full rounded-lg object-cover"
            />
            <CardTitle className="font-bold">{article.title}</CardTitle>

            {/*map დესქრიფშენისთვის  */}
            <CardDescription className="text-sm">
              {article.description.map((desc, descIndex) => (
                <span key={descIndex}>
                  {desc}
                  {descIndex < article.description.length - 1 && " • "}
                </span>
              ))}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p>{article.content}</p>
          </CardContent>

          {/* თეგების მეპი */}
          <CardFooter className="flex max-h-80 gap-1 p-6">
            {article.tags.map((tag, tagIndex) => (
              <Badge key={tagIndex} variant="secondary">
                {tag}
              </Badge>
            ))}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
