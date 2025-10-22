import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Target, Trophy, Clock } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-4 md:p-6 lg:p-8 bg-muted/30 min-h-screen">
      <div className="max-w-7xl mx-auto bg-background rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-sm">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Welcome back, Student! 👋</h1>
        <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
          Here's what's happening with your learning today
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          <Card className="p-4 md:p-6 rounded-xl md:rounded-2xl">
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg md:rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
            </div>
            <div className="text-xl md:text-2xl font-bold mb-1">12</div>
            <div className="text-xs md:text-sm text-muted-foreground">Active Courses</div>
          </Card>

          <Card className="p-4 md:p-6 rounded-xl md:rounded-2xl">
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-lg md:rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 md:w-6 md:h-6 text-accent" />
              </div>
            </div>
            <div className="text-xl md:text-2xl font-bold mb-1">68%</div>
            <div className="text-xs md:text-sm text-muted-foreground">Avg. Progress</div>
          </Card>

          <Card className="p-4 md:p-6 rounded-xl md:rounded-2xl">
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-success/10 rounded-lg md:rounded-xl flex items-center justify-center">
                <Trophy className="w-5 h-5 md:w-6 md:h-6 text-success" />
              </div>
            </div>
            <div className="text-xl md:text-2xl font-bold mb-1">24</div>
            <div className="text-xs md:text-sm text-muted-foreground">Achievements</div>
          </Card>

          <Card className="p-4 md:p-6 rounded-xl md:rounded-2xl">
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-warning/10 rounded-lg md:rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-warning" />
              </div>
            </div>
            <div className="text-xl md:text-2xl font-bold mb-1">32h</div>
            <div className="text-xs md:text-sm text-muted-foreground">Learning Time</div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          <Card className="p-4 md:p-6 rounded-xl md:rounded-2xl lg:col-span-2">
            <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Continue Learning</h2>
            <div className="space-y-3 md:space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg md:rounded-xl bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary to-accent rounded-lg md:rounded-xl flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm md:text-base font-semibold mb-1">UX Design Foundations</h3>
                    <p className="text-xs md:text-sm text-muted-foreground mb-2">Module 3: User Research</p>
                    <Progress value={45} className="h-1.5" />
                  </div>
                  <Button variant="ghost" size="sm" className="hidden sm:flex">Continue</Button>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-4 md:p-6 rounded-xl md:rounded-2xl">
            <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Upcoming Deadlines</h2>
            <div className="space-y-3 md:space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="pb-3 md:pb-4 border-b border-border last:border-0">
                  <div className="text-sm md:text-base font-semibold mb-1">Design Brief #{i}</div>
                  <div className="text-xs md:text-sm text-muted-foreground mb-2">Due in 2 days</div>
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
