import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Briefcase, TrendingUp, Clock, CheckCircle2 } from "lucide-react";

const careerPaths = [
  {
    id: 1,
    title: "UI/UX Designer",
    description: "Create beautiful and intuitive user interfaces",
    progress: 65,
    level: "Intermediate",
    duration: "6 months",
    modules: 12,
    completed: 8,
    salary: "$75k - $120k",
    demand: "High",
  },
  {
    id: 2,
    title: "Product Designer",
    description: "Design end-to-end product experiences",
    progress: 40,
    level: "Advanced",
    duration: "8 months",
    modules: 15,
    completed: 6,
    salary: "$90k - $150k",
    demand: "Very High",
  },
  {
    id: 3,
    title: "Visual Designer",
    description: "Craft stunning visual identities and brands",
    progress: 85,
    level: "Intermediate",
    duration: "5 months",
    modules: 10,
    completed: 9,
    salary: "$65k - $110k",
    demand: "High",
  },
  {
    id: 4,
    title: "Interaction Designer",
    description: "Design engaging interactive experiences",
    progress: 20,
    level: "Advanced",
    duration: "7 months",
    modules: 14,
    completed: 3,
    salary: "$80k - $130k",
    demand: "High",
  },
];

const skills = [
  { name: "User Research", completed: true },
  { name: "Wireframing", completed: true },
  { name: "Prototyping", completed: true },
  { name: "Design Systems", completed: false },
  { name: "Accessibility", completed: false },
];

export default function CareerPaths() {
  return (
    <div className="p-4 md:p-6 lg:p-8 bg-muted/30 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="bg-background rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-sm">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Career Paths</h1>
          <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
            Choose your path and build your dream career in design
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            <Card className="p-4 md:p-6 rounded-xl md:rounded-2xl">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold">4</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Active Paths</div>
                </div>
              </div>
            </Card>

            <Card className="p-4 md:p-6 rounded-xl md:rounded-2xl">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-success/10 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-success" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold">26</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Modules Completed</div>
                </div>
              </div>
            </Card>

            <Card className="p-4 md:p-6 rounded-xl md:rounded-2xl">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-warning/10 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-warning" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold">52%</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Avg. Progress</div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="lg:col-span-2 space-y-4 md:space-y-6">
              {careerPaths.map((path) => (
                <Card key={path.id} className="p-4 md:p-6 rounded-xl md:rounded-2xl">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-base md:text-lg font-semibold">{path.title}</h3>
                        <Badge variant="outline" className="text-xs">{path.level}</Badge>
                      </div>
                      <p className="text-xs md:text-sm text-muted-foreground mb-3">{path.description}</p>
                      
                      <div className="grid grid-cols-2 gap-2 md:gap-3 text-xs md:text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{path.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Briefcase className="w-4 h-4" />
                          <span>{path.salary}</span>
                        </div>
                        <div className="text-muted-foreground">
                          <span className="font-semibold text-foreground">{path.completed}</span>/{path.modules} modules
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4 text-success" />
                          <span className="text-success font-semibold">{path.demand}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-xs md:text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-semibold">{path.progress}%</span>
                    </div>
                    <Progress value={path.progress} className="h-2" />
                  </div>

                  <div className="flex gap-2 md:gap-3">
                    <Button size="sm" className="flex-1">Continue</Button>
                    <Button size="sm" variant="outline" className="flex-1">View Details</Button>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-4 md:p-6 rounded-xl md:rounded-2xl h-fit">
              <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Skills to Master</h2>
              <div className="space-y-3 md:space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3">
                    <div className={`w-6 h-6 md:w-8 md:h-8 rounded-lg flex items-center justify-center ${
                      skill.completed ? "bg-success/20" : "bg-muted"
                    }`}>
                      {skill.completed && <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-success" />}
                    </div>
                    <span className={`text-sm md:text-base ${
                      skill.completed ? "text-foreground" : "text-muted-foreground"
                    }`}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

              <Button className="w-full mt-6" variant="outline" size="sm">
                Explore All Skills
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
