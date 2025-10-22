import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Award, Calendar } from "lucide-react";
import { TabsCustom } from "@/components/ui/tabs-custom";
import { useState } from "react";

const briefs = [
  {
    id: 1,
    title: "Mobile Banking App Redesign",
    difficulty: "Advanced",
    duration: "2 weeks",
    participants: 45,
    reward: 500,
    deadline: "5 days left",
    status: "active",
    tags: ["Mobile", "Fintech", "UX"],
  },
  {
    id: 2,
    title: "E-learning Platform Dashboard",
    difficulty: "Intermediate",
    duration: "1 week",
    participants: 78,
    reward: 300,
    deadline: "3 days left",
    status: "active",
    tags: ["Dashboard", "Education"],
  },
  {
    id: 3,
    title: "Food Delivery App UI",
    difficulty: "Beginner",
    duration: "5 days",
    participants: 120,
    reward: 150,
    deadline: "1 week left",
    status: "new",
    tags: ["Mobile", "UI", "Food"],
  },
  {
    id: 4,
    title: "Healthcare Portal Design",
    difficulty: "Advanced",
    duration: "3 weeks",
    participants: 32,
    reward: 750,
    deadline: "2 weeks left",
    status: "active",
    tags: ["Web", "Healthcare", "Accessibility"],
  },
];

const tabs = [
  { label: "All Briefs", value: "all" },
  { label: "Active", value: "active" },
  { label: "Completed", value: "completed" },
  { label: "My Submissions", value: "submissions" },
];

export default function DesignBriefs() {
  const [activeTab, setActiveTab] = useState("all");

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-success/10 text-success";
      case "Intermediate": return "bg-warning/10 text-warning";
      case "Advanced": return "bg-destructive/10 text-destructive";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-muted/30 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="bg-background rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Design Briefs</h1>
              <p className="text-sm md:text-base text-muted-foreground">
                Take on real-world design challenges and earn rewards
              </p>
            </div>
          </div>

          <TabsCustom tabs={tabs} activeTab={activeTab} onChange={setActiveTab} className="mb-6 md:mb-8" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {briefs.map((brief) => (
              <Card key={brief.id} className="p-4 md:p-6 rounded-xl md:rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-base md:text-lg font-semibold">{brief.title}</h3>
                      {brief.status === "new" && (
                        <Badge variant="default" className="text-xs">New</Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {brief.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Badge className={`${getDifficultyColor(brief.difficulty)} text-xs`}>
                    {brief.difficulty}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{brief.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{brief.deadline}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{brief.participants} participating</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-warning">
                    <Award className="w-4 h-4" />
                    <span className="font-semibold">{brief.reward} points</span>
                  </div>
                </div>

                <div className="flex gap-2 md:gap-3">
                  <Button className="flex-1" size="sm">View Brief</Button>
                  <Button variant="outline" className="flex-1" size="sm">Learn More</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
