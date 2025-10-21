import { Home, Grid, BarChart3, Trophy, BookOpen, FileText, Map, Book, ClipboardList, Gamepad2 } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const studentNavItems = [
  { icon: Home, label: "Home", path: "/dashboard" },
  { icon: Grid, label: "Showcase", path: "/showcase", badge: "New" },
  { icon: BarChart3, label: "Skill Graph", path: "/skill-graph" },
  { icon: Trophy, label: "Leaderboards", path: "/leaderboards" },
];

const learnNavItems = [
  { icon: BookOpen, label: "Courses", path: "/courses" },
  { icon: FileText, label: "Design Briefs", path: "/design-briefs", badge: "New" },
  { icon: Map, label: "Career Paths", path: "/career-paths" },
  { icon: Book, label: "Lessons", path: "/lessons" },
  { icon: ClipboardList, label: "Assessments", path: "/assessments" },
  { icon: Gamepad2, label: "Arcade", path: "/arcade" },
];

export function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-sidebar border-r border-sidebar-border flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">E</span>
          </div>
          <span className="font-bold text-lg">EduPlatform</span>
        </div>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {studentNavItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50"
              )
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
            {item.badge && (
              <span className="ml-auto px-2 py-0.5 bg-accent text-accent-foreground text-xs rounded-md">
                {item.badge}
              </span>
            )}
          </NavLink>
        ))}

        <div className="pt-6 pb-2">
          <span className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Learn
          </span>
        </div>

        {learnNavItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50"
              )
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
            {item.badge && (
              <span className="ml-auto px-2 py-0.5 bg-accent text-accent-foreground text-xs rounded-md">
                {item.badge}
              </span>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
