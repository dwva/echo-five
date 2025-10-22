import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share2, Eye } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Mobile App Redesign",
    author: "Sarah Johnson",
    likes: 234,
    comments: 45,
    views: 1200,
    tags: ["UI/UX", "Mobile", "E-commerce"],
    image: "gradient-1",
  },
  {
    id: 2,
    title: "Dashboard Analytics Platform",
    author: "Mike Chen",
    likes: 189,
    comments: 32,
    views: 980,
    tags: ["Dashboard", "Data Viz", "SaaS"],
    image: "gradient-2",
  },
  {
    id: 3,
    title: "Social Media App Concept",
    author: "Emma Williams",
    likes: 321,
    comments: 67,
    views: 1450,
    tags: ["Social", "Mobile", "Branding"],
    image: "gradient-3",
  },
  {
    id: 4,
    title: "Banking App Interface",
    author: "Alex Thompson",
    likes: 156,
    comments: 28,
    views: 760,
    tags: ["Fintech", "Mobile", "Security"],
    image: "gradient-4",
  },
];

export default function Showcase() {
  return (
    <div className="p-4 md:p-6 lg:p-8 bg-muted/30 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="bg-background rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-foreground">Showcase</h1>
              <p className="text-sm md:text-base text-muted-foreground">
                Discover amazing projects from our design community
              </p>
            </div>
            <Button className="self-start md:self-auto">Upload Project</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer rounded-xl md:rounded-2xl">
                <div className={`h-48 md:h-56 bg-gradient-to-br ${
                  project.image === "gradient-1" ? "from-primary to-accent" :
                  project.image === "gradient-2" ? "from-accent to-success" :
                  project.image === "gradient-3" ? "from-success to-warning" :
                  "from-warning to-primary"
                }`}></div>
                <div className="p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-4">by {project.author}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs md:text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                        <Heart className="w-4 h-4" />
                        <span>{project.likes}</span>
                      </button>
                      <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span>{project.comments}</span>
                      </button>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{project.views}</span>
                      </div>
                    </div>
                    <button className="hover:text-foreground transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
