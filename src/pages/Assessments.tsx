import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ClipboardList, Clock, Award, CheckCircle2, AlertCircle } from "lucide-react";

const assessments = [
  {
    id: 1,
    title: "UX Design Fundamentals Quiz",
    type: "Quiz",
    questions: 20,
    duration: "30 min",
    status: "completed",
    score: 85,
    passingScore: 70,
    attempts: 1,
    maxAttempts: 3,
  },
  {
    id: 2,
    title: "User Research Practical Exam",
    type: "Practical",
    questions: 5,
    duration: "2 hours",
    status: "in-progress",
    score: null,
    passingScore: 75,
    attempts: 1,
    maxAttempts: 2,
  },
  {
    id: 3,
    title: "Wireframing Challenge",
    type: "Assignment",
    questions: 3,
    duration: "1 week",
    status: "available",
    score: null,
    passingScore: 80,
    attempts: 0,
    maxAttempts: 1,
  },
  {
    id: 4,
    title: "Design Principles Test",
    type: "Quiz",
    questions: 15,
    duration: "20 min",
    status: "completed",
    score: 92,
    passingScore: 70,
    attempts: 1,
    maxAttempts: 3,
  },
  {
    id: 5,
    title: "Prototyping Skills Assessment",
    type: "Practical",
    questions: 4,
    duration: "90 min",
    status: "failed",
    score: 65,
    passingScore: 75,
    attempts: 1,
    maxAttempts: 2,
  },
];

const stats = [
  { label: "Total Completed", value: "12", icon: CheckCircle2, color: "success" },
  { label: "In Progress", value: "2", icon: Clock, color: "warning" },
  { label: "Average Score", value: "82%", icon: Award, color: "primary" },
  { label: "Certifications", value: "3", icon: Award, color: "accent" },
];

export default function Assessments() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-success/10 text-success";
      case "in-progress": return "bg-warning/10 text-warning";
      case "failed": return "bg-destructive/10 text-destructive";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-success" />;
      case "in-progress": return <Clock className="w-5 h-5 md:w-6 md:h-6 text-warning" />;
      case "failed": return <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-destructive" />;
      default: return <ClipboardList className="w-5 h-5 md:w-6 md:h-6 text-primary" />;
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-muted/30 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="bg-background rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-sm">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Assessments</h1>
          <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
            Test your knowledge and earn certifications
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
            {stats.map((stat) => (
              <Card key={stat.label} className="p-4 md:p-6 rounded-xl md:rounded-2xl">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className={`w-12 h-12 md:w-14 md:h-14 bg-${stat.color}/10 rounded-xl flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 md:w-7 md:h-7 text-${stat.color}`} />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold">{stat.value}</div>
                    <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="space-y-4 md:space-y-6">
            {assessments.map((assessment) => (
              <Card key={assessment.id} className="p-4 md:p-6 rounded-xl md:rounded-2xl hover:shadow-lg transition-all">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center ${
                    assessment.status === "completed" ? "bg-success/20" :
                    assessment.status === "in-progress" ? "bg-warning/20" :
                    assessment.status === "failed" ? "bg-destructive/20" :
                    "bg-primary/10"
                  }`}>
                    {getStatusIcon(assessment.status)}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-base md:text-lg font-semibold">{assessment.title}</h3>
                      <Badge variant="secondary" className="text-xs">{assessment.type}</Badge>
                      <Badge className={`${getStatusColor(assessment.status)} text-xs`}>
                        {assessment.status.replace("-", " ")}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-3 text-xs md:text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <ClipboardList className="w-4 h-4" />
                        <span>{assessment.questions} questions</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{assessment.duration}</span>
                      </div>
                      <div>
                        Pass: <span className="font-semibold text-foreground">{assessment.passingScore}%</span>
                      </div>
                      <div>
                        Attempts: <span className="font-semibold text-foreground">{assessment.attempts}/{assessment.maxAttempts}</span>
                      </div>
                    </div>

                    {assessment.score !== null && (
                      <div className="mb-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs md:text-sm text-muted-foreground">Your Score</span>
                          <span className={`text-sm md:text-base font-bold ${
                            assessment.score >= assessment.passingScore ? "text-success" : "text-destructive"
                          }`}>
                            {assessment.score}%
                          </span>
                        </div>
                        <Progress 
                          value={assessment.score} 
                          className="h-2"
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2 md:gap-3 md:flex-col md:w-32">
                    {assessment.status === "available" && (
                      <Button size="sm" className="flex-1 md:flex-none">Start</Button>
                    )}
                    {assessment.status === "in-progress" && (
                      <Button size="sm" className="flex-1 md:flex-none">Continue</Button>
                    )}
                    {assessment.status === "completed" && (
                      <Button size="sm" variant="outline" className="flex-1 md:flex-none">Review</Button>
                    )}
                    {assessment.status === "failed" && assessment.attempts < assessment.maxAttempts && (
                      <Button size="sm" className="flex-1 md:flex-none">Retry</Button>
                    )}
                    <Button size="sm" variant="outline" className="flex-1 md:flex-none">Details</Button>
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
