import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Target, Trophy, Clock } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-8 bg-muted/30 min-h-screen">
      <div className="max-w-7xl mx-auto bg-background rounded-3xl p-8 shadow-sm">
        <h1 className="text-4xl font-bold mb-2">Welcome back, Student! 👋</h1>
        <p className="text-muted-foreground mb-8">
          Here's what's happening with your learning today
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="text-2xl font-bold mb-1">12</div>
            <div className="text-sm text-muted-foreground">Active Courses</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-accent" />
              </div>
            </div>
            <div className="text-2xl font-bold mb-1">68%</div>
            <div className="text-sm text-muted-foreground">Avg. Progress</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
                <Trophy className="w-6 h-6 text-success" />
              </div>
            </div>
            <div className="text-2xl font-bold mb-1">24</div>
            <div className="text-sm text-muted-foreground">Achievements</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-warning/10 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-warning" />
              </div>
            </div>
            <div className="text-2xl font-bold mb-1">32h</div>
            <div className="text-sm text-muted-foreground">Learning Time</div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="p-6 lg:col-span-2">
            <h2 className="text-xl font-bold mb-4">Continue Learning</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold mb-1">UX Design Foundations</h3>
                    <p className="text-sm text-muted-foreground mb-2">Module 3: User Research</p>
                    <Progress value={45} className="h-1.5" />
                  </div>
                  <Button variant="ghost" size="sm">Continue</Button>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Upcoming Deadlines</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="pb-4 border-b border-border last:border-0">
                  <div className="font-semibold mb-1">Design Brief #{i}</div>
                  <div className="text-sm text-muted-foreground mb-2">Due in 2 days</div>
                  <div className="text-xs text-primary">High Priority</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
