import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { TabsCustom } from "@/components/ui/tabs-custom";
import { useState } from "react";
import { Trophy, Medal, Award, TrendingUp } from "lucide-react";

const leaderboardData = [
  { rank: 1, name: "Sarah Johnson", points: 12450, badge: "gold", streak: 45, change: "up" },
  { rank: 2, name: "Mike Chen", points: 11230, badge: "silver", streak: 38, change: "up" },
  { rank: 3, name: "Emma Williams", points: 10890, badge: "bronze", streak: 42, change: "same" },
  { rank: 4, name: "Alex Thompson", points: 9450, badge: "", streak: 28, change: "down" },
  { rank: 5, name: "Jessica Lee", points: 8920, badge: "", streak: 31, change: "up" },
  { rank: 6, name: "David Park", points: 8450, badge: "", streak: 25, change: "up" },
  { rank: 7, name: "Lisa Anderson", points: 7890, badge: "", streak: 22, change: "down" },
  { rank: 8, name: "James Wilson", points: 7340, badge: "", streak: 19, change: "same" },
];

const tabs = [
  { label: "All Time", value: "all" },
  { label: "This Month", value: "month" },
  { label: "This Week", value: "week" },
  { label: "Today", value: "today" },
];

export default function Leaderboards() {
  const [activeTab, setActiveTab] = useState("all");

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-5 h-5 md:w-6 md:h-6 text-warning" />;
    if (rank === 2) return <Medal className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground" />;
    if (rank === 3) return <Medal className="w-5 h-5 md:w-6 md:h-6 text-warning/70" />;
    return <span className="text-base md:text-lg font-bold text-muted-foreground">{rank}</span>;
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-muted/30 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="bg-background rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-sm">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Leaderboards</h1>
          <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
            See how you rank against other students
          </p>

          <TabsCustom tabs={tabs} activeTab={activeTab} onChange={setActiveTab} className="mb-6 md:mb-8" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
            <Card className="p-4 md:p-6 rounded-xl md:rounded-2xl">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Trophy className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold">#24</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Your Rank</div>
                </div>
              </div>
            </Card>

            <Card className="p-4 md:p-6 rounded-xl md:rounded-2xl">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-warning/10 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 md:w-7 md:h-7 text-warning" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold">7,240</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Your Points</div>
                </div>
              </div>
            </Card>

            <Card className="p-4 md:p-6 rounded-xl md:rounded-2xl">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-success/10 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-success" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold">+5</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Rank Change</div>
                </div>
              </div>
            </Card>

            <Card className="p-4 md:p-6 rounded-xl md:rounded-2xl">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                  <span className="text-xl md:text-2xl">🔥</span>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold">18</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Day Streak</div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-4 md:p-6 rounded-xl md:rounded-2xl">
            <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Top Students</h2>
            <div className="space-y-3 md:space-y-4">
              {leaderboardData.map((user) => (
                <div
                  key={user.rank}
                  className={`flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg md:rounded-xl transition-colors ${
                    user.rank <= 3 ? "bg-muted/50" : "hover:bg-muted/30"
                  }`}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                    {getRankIcon(user.rank)}
                  </div>
                  
                  <Avatar className="w-10 h-10 md:w-12 md:h-12">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white font-semibold">
                      {user.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm md:text-base font-semibold">{user.name}</h3>
                      {user.badge && (
                        <Badge variant="outline" className="text-xs">
                          {user.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {user.streak} day streak 🔥
                    </p>
                  </div>

                  <div className="text-right">
                    <div className="text-base md:text-lg font-bold">{user.points.toLocaleString()}</div>
                    <div className={`text-xs md:text-sm ${
                      user.change === "up" ? "text-success" :
                      user.change === "down" ? "text-destructive" :
                      "text-muted-foreground"
                    }`}>
                      {user.change === "up" ? "↑" : user.change === "down" ? "↓" : "−"} pts
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
