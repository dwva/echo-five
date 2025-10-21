import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Users, Trophy, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">E</span>
          </div>
          <span className="font-bold text-xl">EduPlatform</span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate("/login")}>Login</Button>
          <Button onClick={() => navigate("/signup")}>Get Started</Button>
        </div>
      </nav>

      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Transform Your Learning Journey
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Master new skills with interactive courses, real-world projects, and personalized learning paths
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" className="text-lg px-8" onClick={() => navigate("/signup")}>
            Start Learning Free
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8">
            Watch Demo
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Expert Courses</h3>
            <p className="text-muted-foreground">Learn from industry professionals</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2">Collaborative Learning</h3>
            <p className="text-muted-foreground">Connect with peers worldwide</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-success" />
            </div>
            <h3 className="text-xl font-bold mb-2">Achievements</h3>
            <p className="text-muted-foreground">Earn certificates and badges</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-warning/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-warning" />
            </div>
            <h3 className="text-xl font-bold mb-2">Track Progress</h3>
            <p className="text-muted-foreground">Monitor your learning journey</p>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <Card className="p-12 text-center bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of students already transforming their careers
          </p>
          <Button size="lg" className="text-lg px-8" onClick={() => navigate("/signup")}>
            Create Free Account
          </Button>
        </Card>
      </section>

      <footer className="container mx-auto px-6 py-8 border-t border-border">
        <div className="text-center text-muted-foreground">
          <p>&copy; 2025 EduPlatform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
