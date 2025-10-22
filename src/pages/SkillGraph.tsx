import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Award, Target } from "lucide-react";

const skills = [
  { name: "UI Design", level: 85, category: "Design", trend: "+5%" },
  { name: "UX Research", level: 72, category: "Design", trend: "+8%" },
  { name: "Prototyping", level: 90, category: "Design", trend: "+3%" },
  { name: "Typography", level: 78, category: "Design", trend: "+6%" },
  { name: "Color Theory", level: 82, category: "Design", trend: "+4%" },
  { name: "Figma", level: 88, category: "Tools", trend: "+7%" },
  { name: "Adobe XD", level: 65, category: "Tools", trend: "+2%" },
  { name: "Sketch", level: 70, category: "Tools", trend: "+5%" },
];

const achievements = [
  { title: "Design Master", description: "Complete 50 design challenges", earned: true },
  { title: "Research Pro", description: "Conduct 20 user interviews", earned: true },
  { title: "Collaboration King", description: "Work on 10 team projects", earned: false },
  { title: "Speed Designer", description: "Complete 5 speed challenges", earned: true },
];

export default function SkillGraph() {
  return (
    <div className="p-4 md:p-6 lg:p-8 bg-muted/30 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="bg-background rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-sm">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Skill Graph</h1>
          <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
            Track your progress and master new skills
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            <Card className="p-4 md:p-6 rounded-xl md:rounded-2xl">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold">78%</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Overall Progress</div>
                </div>
              </div>
            </Card>

            <Card className="p-4 md:p-6 rounded-xl md:rounded-2xl">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-success/10 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-success" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold">+12%</div>
                  <div className="text-xs md:text-sm text-muted-foreground">This Month</div>
                </div>
              </div>
            </Card>

            <Card className="p-4 md:p-6 rounded-xl md:rounded-2xl">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-warning/10 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 md:w-7 md:h-7 text-warning" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold">15</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Skills Mastered</div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            <Card className="lg:col-span-2 p-4 md:p-6 rounded-xl md:rounded-2xl">
              <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Your Skills</h2>
              <div className="space-y-4 md:space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-sm md:text-base font-semibold">{skill.name}</span>
                        <Badge variant="secondary" className="text-xs">{skill.category}</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs md:text-sm text-success">{skill.trend}</span>
                        <span className="text-sm md:text-base font-bold">{skill.level}%</span>
                      </div>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-4 md:p-6 rounded-xl md:rounded-2xl">
              <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Achievements</h2>
              <div className="space-y-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.title}
                    className={`p-3 md:p-4 rounded-lg md:rounded-xl border ${
                      achievement.earned
                        ? "bg-success/5 border-success/20"
                        : "bg-muted/30 border-border"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center ${
                        achievement.earned ? "bg-success/20" : "bg-muted"
                      }`}>
                        <Award className={`w-4 h-4 md:w-5 md:h-5 ${
                          achievement.earned ? "text-success" : "text-muted-foreground"
                        }`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm md:text-base font-semibold mb-1">{achievement.title}</h3>
                        <p className="text-xs md:text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
