import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, Zap, Users, Trophy, Star } from "lucide-react";

const games = [
  {
    id: 1,
    title: "Color Match Challenge",
    description: "Test your color theory knowledge in this fast-paced matching game",
    difficulty: "Easy",
    players: 1234,
    rating: 4.8,
    points: 50,
    thumbnail: "gradient-1",
  },
  {
    id: 2,
    title: "Typography Duel",
    description: "Compete with others to identify fonts and pair them perfectly",
    difficulty: "Medium",
    players: 892,
    rating: 4.6,
    points: 100,
    thumbnail: "gradient-2",
  },
  {
    id: 3,
    title: "Layout Sprint",
    description: "Create the perfect layout under time pressure",
    difficulty: "Hard",
    players: 567,
    rating: 4.9,
    points: 200,
    thumbnail: "gradient-3",
  },
  {
    id: 4,
    title: "Icon Designer",
    description: "Design icons that match the given style and requirements",
    difficulty: "Medium",
    players: 1045,
    rating: 4.7,
    points: 150,
    thumbnail: "gradient-4",
  },
  {
    id: 5,
    title: "UX Flow Master",
    description: "Arrange screens to create the optimal user flow",
    difficulty: "Hard",
    players: 423,
    rating: 4.5,
    points: 250,
    thumbnail: "gradient-1",
  },
  {
    id: 6,
    title: "Brand Battle",
    description: "Create brand identities faster than your opponents",
    difficulty: "Medium",
    players: 756,
    rating: 4.8,
    points: 175,
    thumbnail: "gradient-2",
  },
];

const achievements = [
  { title: "Speedster", description: "Complete 10 games in under 5 minutes", earned: true },
  { title: "Perfectionist", description: "Get 100% score in 5 games", earned: true },
  { title: "Social Gamer", description: "Play 20 multiplayer games", earned: false },
];

export default function Arcade() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-success/10 text-success";
      case "Medium": return "bg-warning/10 text-warning";
      case "Hard": return "bg-destructive/10 text-destructive";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-muted/30 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="bg-background rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-sm">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Arcade</h1>
          <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
            Learn through fun and interactive design games
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
            <Card className="p-4 md:p-6 rounded-xl md:rounded-2xl">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Gamepad2 className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold">47</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Games Played</div>
                </div>
              </div>
            </Card>

            <Card className="p-4 md:p-6 rounded-xl md:rounded-2xl">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-warning/10 rounded-xl flex items-center justify-center">
                  <Trophy className="w-6 h-6 md:w-7 md:h-7 text-warning" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold">3,450</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Total Points</div>
                </div>
              </div>
            </Card>

            <Card className="p-4 md:p-6 rounded-xl md:rounded-2xl">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-success/10 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 md:w-7 md:h-7 text-success" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold">12</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Win Streak</div>
                </div>
              </div>
            </Card>

            <Card className="p-4 md:p-6 rounded-xl md:rounded-2xl">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 md:w-7 md:h-7 text-accent" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold">4.7</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Avg. Rating</div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="lg:col-span-2">
              <h2 className="text-lg md:text-xl font-bold mb-4">Available Games</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {games.map((game) => (
                  <Card key={game.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer rounded-xl md:rounded-2xl">
                    <div className={`h-32 md:h-40 bg-gradient-to-br ${
                      game.thumbnail === "gradient-1" ? "from-primary to-accent" :
                      game.thumbnail === "gradient-2" ? "from-accent to-success" :
                      game.thumbnail === "gradient-3" ? "from-success to-warning" :
                      "from-warning to-primary"
                    } flex items-center justify-center`}>
                      <Gamepad2 className="w-12 h-12 md:w-16 md:h-16 text-white/80" />
                    </div>
                    <div className="p-4 md:p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-base md:text-lg font-semibold flex-1">{game.title}</h3>
                        <Badge className={`${getDifficultyColor(game.difficulty)} text-xs ml-2`}>
                          {game.difficulty}
                        </Badge>
                      </div>
                      <p className="text-xs md:text-sm text-muted-foreground mb-4 line-clamp-2">
                        {game.description}
                      </p>

                      <div className="flex items-center justify-between text-xs md:text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{game.players}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-warning fill-warning" />
                          <span>{game.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 font-semibold text-primary">
                          <Zap className="w-4 h-4" />
                          <span>{game.points} pts</span>
                        </div>
                      </div>

                      <Button className="w-full" size="sm">Play Now</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <Card className="p-4 md:p-6 rounded-xl md:rounded-2xl mb-4 md:mb-6">
                <h2 className="text-lg md:text-xl font-bold mb-4">Recent Activity</h2>
                <div className="space-y-3 md:space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="pb-3 md:pb-4 border-b border-border last:border-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Gamepad2 className="w-4 h-4 text-primary" />
                        <span className="text-sm md:text-base font-semibold">Color Match</span>
                      </div>
                      <div className="text-xs md:text-sm text-muted-foreground mb-1">
                        Score: <span className="text-success font-semibold">95%</span>
                      </div>
                      <div className="text-xs text-muted-foreground">2 hours ago</div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-4 md:p-6 rounded-xl md:rounded-2xl">
                <h2 className="text-lg md:text-xl font-bold mb-4">Achievements</h2>
                <div className="space-y-3 md:space-y-4">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.title}
                      className={`p-3 md:p-4 rounded-lg md:rounded-xl border ${
                        achievement.earned
                          ? "bg-success/5 border-success/20"
                          : "bg-muted/30 border-border"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center ${
                          achievement.earned ? "bg-success/20" : "bg-muted"
                        }`}>
                          <Trophy className={`w-4 h-4 md:w-5 md:h-5 ${
                            achievement.earned ? "text-success" : "text-muted-foreground"
                          }`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm md:text-base font-semibold mb-1">{achievement.title}</h3>
                          <p className="text-xs md:text-sm text-muted-foreground">{achievement.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
