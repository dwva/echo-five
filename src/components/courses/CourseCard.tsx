import { Clock, Layers } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface CourseCardProps {
  title: string;
  description: string;
  progress: number;
  timeLeft: string;
  icon?: string;
}

export function CourseCard({ title, description, progress, timeLeft }: CourseCardProps) {
  return (
    <div className="bg-background rounded-2xl p-6 border border-border hover:shadow-md transition-all duration-300 cursor-pointer">
      <div className="w-16 h-16 bg-gradient-to-br from-primary via-primary to-accent rounded-2xl mb-4 flex items-center justify-center relative">
        <Layers className="w-8 h-8 text-white" />
      </div>

      <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>

      <div className="space-y-2">
        <Progress value={progress} className="h-2" />
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">{progress}% Complete •</span>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{timeLeft}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
