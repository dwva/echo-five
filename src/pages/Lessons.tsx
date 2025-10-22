import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Play, Clock, BookOpen, CheckCircle2, Lock } from "lucide-react";

const lessons = [
  {
    id: 1,
    title: "Introduction to UX Design",
    duration: "12 min",
    type: "Video",
    completed: true,
    locked: false,
    module: "Getting Started",
  },
  {
    id: 2,
    title: "Design Thinking Fundamentals",
    duration: "18 min",
    type: "Video",
    completed: true,
    locked: false,
    module: "Getting Started",
  },
  {
    id: 3,
    title: "User Research Methods",
    duration: "25 min",
    type: "Interactive",
    completed: false,
    locked: false,
    module: "Research",
    progress: 45,
  },
  {
    id: 4,
    title: "Creating User Personas",
    duration: "15 min",
    type: "Exercise",
    completed: false,
    locked: false,
    module: "Research",
  },
  {
    id: 5,
    title: "Wireframing Basics",
    duration: "20 min",
    type: "Video",
    completed: false,
    locked: true,
    module: "Design",
  },
  {
    id: 6,
    title: "Advanced Prototyping",
    duration: "30 min",
    type: "Interactive",
    completed: false,
    locked: true,
    module: "Design",
  },
];

const modules = [
  { name: "Getting Started", lessons: 5, completed: 5, progress: 100 },
  { name: "Research", lessons: 8, completed: 3, progress: 37 },
  { name: "Design", lessons: 12, completed: 0, progress: 0 },
  { name: "Testing", lessons: 6, completed: 0, progress: 0 },
];

export default function Lessons() {
  return (
    <div className="p-4 md:p-6 lg:p-8 bg-muted/30 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="bg-background rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-sm">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Lessons</h1>
          <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
            Learn through structured lessons and hands-on exercises
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
            {modules.map((module) => (
              <Card key={module.name} className="p-4 md:p-6 rounded-xl md:rounded-2xl">
                <h3 className="text-sm md:text-base font-semibold mb-2">{module.name}</h3>
                <div className="text-xs md:text-sm text-muted-foreground mb-3">
                  {module.completed}/{module.lessons} lessons
                </div>
                <Progress value={module.progress} className="h-2" />
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="lg:col-span-2">
              <Card className="p-4 md:p-6 rounded-xl md:rounded-2xl mb-4 md:mb-6">
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                  <div className="w-full md:w-48 h-32 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                    <Play className="w-12 h-12 md:w-16 md:h-16 text-white" />
                  </div>
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-2 text-xs">Currently Watching</Badge>
                    <h2 className="text-lg md:text-xl font-bold mb-2">User Research Methods</h2>
                    <p className="text-xs md:text-sm text-muted-foreground mb-4">
                      Learn essential research techniques to understand your users better
                    </p>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>25 min</span>
                      </div>
                      <Badge variant="outline" className="text-xs">Interactive</Badge>
                    </div>
                    <Progress value={45} className="mb-2" />
                    <div className="flex gap-2 md:gap-3">
                      <Button size="sm">Continue Learning</Button>
                      <Button size="sm" variant="outline">Reset Progress</Button>
                    </div>
                  </div>
                </div>
              </Card>

              <h2 className="text-lg md:text-xl font-bold mb-4">All Lessons</h2>
              <div className="space-y-3 md:space-y-4">
                {lessons.map((lesson) => (
                  <Card
                    key={lesson.id}
                    className={`p-4 md:p-6 rounded-xl md:rounded-2xl ${
                      lesson.locked ? "opacity-60" : "hover:shadow-md transition-all"
                    }`}
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center ${
                        lesson.completed ? "bg-success/20" :
                        lesson.locked ? "bg-muted" :
                        "bg-primary/10"
                      }`}>
                        {lesson.completed ? (
                          <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-success" />
                        ) : lesson.locked ? (
                          <Lock className="w-6 h-6 md:w-7 md:h-7 text-muted-foreground" />
                        ) : (
                          <Play className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-sm md:text-base font-semibold">{lesson.title}</h3>
                          <Badge variant="secondary" className="text-xs">{lesson.type}</Badge>
                        </div>
                        <div className="flex items-center gap-3 text-xs md:text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 md:w-4 md:h-4" />
                            {lesson.duration}
                          </span>
                          <span>•</span>
                          <span>{lesson.module}</span>
                        </div>
                        {lesson.progress && !lesson.completed && (
                          <Progress value={lesson.progress} className="h-1.5 mt-2" />
                        )}
                      </div>

                      {!lesson.locked && !lesson.completed && (
                        <Button size="sm" variant="outline">
                          {lesson.progress ? "Continue" : "Start"}
                        </Button>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="p-4 md:p-6 rounded-xl md:rounded-2xl h-fit">
              <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Your Progress</h2>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs md:text-sm text-muted-foreground">Overall Completion</span>
                    <span className="text-sm md:text-base font-bold">34%</span>
                  </div>
                  <Progress value={34} className="h-2" />
                </div>

                <div className="pt-4 border-t border-border space-y-3 md:space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-success/20 rounded-xl flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-success" />
                    </div>
                    <div>
                      <div className="text-lg md:text-xl font-bold">11</div>
                      <div className="text-xs md:text-sm text-muted-foreground">Completed</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                      <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-lg md:text-xl font-bold">2</div>
                      <div className="text-xs md:text-sm text-muted-foreground">In Progress</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-muted rounded-xl flex items-center justify-center">
                      <Lock className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="text-lg md:text-xl font-bold">18</div>
                      <div className="text-xs md:text-sm text-muted-foreground">Locked</div>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-4" variant="outline" size="sm">
                  View All Modules
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
