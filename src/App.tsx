import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Showcase from "./pages/Showcase";
import SkillGraph from "./pages/SkillGraph";
import Leaderboards from "./pages/Leaderboards";
import DesignBriefs from "./pages/DesignBriefs";
import CareerPaths from "./pages/CareerPaths";
import Lessons from "./pages/Lessons";
import Assessments from "./pages/Assessments";
import Arcade from "./pages/Arcade";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/showcase" element={<Showcase />} />
            <Route path="/skill-graph" element={<SkillGraph />} />
            <Route path="/leaderboards" element={<Leaderboards />} />
            <Route path="/design-briefs" element={<DesignBriefs />} />
            <Route path="/career-paths" element={<CareerPaths />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/assessments" element={<Assessments />} />
            <Route path="/arcade" element={<Arcade />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
