import { Home, Grid, BarChart3, Trophy, BookOpen, FileText, Map, Book, ClipboardList, Gamepad2, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Sidebar as SidebarUI,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

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
  const { open } = useSidebar();

  return (
    <SidebarUI collapsible="icon">
      <div className="p-4 border-b border-sidebar-border flex items-center justify-between">
        {open && (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">E</span>
            </div>
            <span className="font-bold text-lg">EduPlatform</span>
          </div>
        )}
        {!open && (
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mx-auto">
            <span className="text-primary-foreground font-bold text-lg">E</span>
          </div>
        )}
        <SidebarTrigger className={cn(!open && "mx-auto mt-2")} />
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Student</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {studentNavItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        cn(
                          "flex items-center gap-3",
                          isActive && "bg-sidebar-accent text-sidebar-accent-foreground"
                        )
                      }
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                      {item.badge && open && (
                        <span className="ml-auto px-2 py-0.5 bg-accent text-accent-foreground text-xs rounded-md">
                          {item.badge}
                        </span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Learn</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {learnNavItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        cn(
                          "flex items-center gap-3",
                          isActive && "bg-sidebar-accent text-sidebar-accent-foreground"
                        )
                      }
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                      {item.badge && open && (
                        <span className="ml-auto px-2 py-0.5 bg-accent text-accent-foreground text-xs rounded-md">
                          {item.badge}
                        </span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      cn(
                        "flex items-center gap-3",
                        isActive && "bg-sidebar-accent text-sidebar-accent-foreground"
                      )
                    }
                  >
                    <User className="w-5 h-5" />
                    <span>Profile</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </SidebarUI>
  );
}
