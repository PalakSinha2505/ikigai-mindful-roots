import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { ArrowLeft, Award, Star, Target, CheckCircle, Clock, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WellnessPassport = () => {
  const [completedChallenges, setCompletedChallenges] = useState<string[]>([]);
  const { toast } = useToast();

  const userStats = {
    level: 3,
    totalPoints: 245,
    pointsToNext: 55,
    streak: 7,
    totalChallenges: 15,
    badgesEarned: 8
  };

  const dailyChallenges = [
    {
      id: "meditation",
      title: "5 Min Meditation",
      description: "Practice mindfulness with guided meditation",
      points: 15,
      icon: "🧘‍♀️",
      difficulty: "Easy",
      completed: false
    },
    {
      id: "gratitude",
      title: "Gratitude Journal",
      description: "Write 3 things you're grateful for",
      points: 10,
      icon: "📝",
      difficulty: "Easy",
      completed: false
    },
    {
      id: "sleep",
      title: "8 Hours Sleep",
      description: "Get a full night's rest",
      points: 20,
      icon: "😴",
      difficulty: "Medium",
      completed: false
    },
    {
      id: "exercise",
      title: "20 Min Exercise",
      description: "Any physical activity counts!",
      points: 25,
      icon: "🏃‍♀️",
      difficulty: "Medium",
      completed: false
    }
  ];

  const weeklyChallenges = [
    {
      id: "social",
      title: "Connect with Friends",
      description: "Spend quality time with 3 different friends",
      points: 50,
      icon: "👥",
      progress: 2,
      total: 3
    },
    {
      id: "hobby",
      title: "Creative Time",
      description: "Engage in creative activities for 5 hours total",
      points: 40,
      icon: "🎨",
      progress: 3,
      total: 5
    }
  ];

  const badges = [
    { name: "Mindfulness Master", icon: "🧘‍♀️", earned: true, description: "Complete 7 days of meditation" },
    { name: "Early Bird", icon: "🌅", earned: true, description: "Wake up before 7 AM for a week" },
    { name: "Gratitude Guru", icon: "🙏", earned: true, description: "30 days of gratitude journaling" },
    { name: "Stress Buster", icon: "💪", earned: false, description: "Complete 10 stress relief activities" },
    { name: "Social Butterfly", icon: "🦋", earned: false, description: "Connect with 20 peers this month" },
    { name: "Academic Balance", icon: "⚖️", earned: true, description: "Maintain study-life balance for 2 weeks" }
  ];

  const completeChallenge = (challengeId: string, points: number, title: string) => {
    if (!completedChallenges.includes(challengeId)) {
      setCompletedChallenges([...completedChallenges, challengeId]);
      toast({
        title: "Challenge Completed! 🎉",
        description: `${title} - Earned ${points} points`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-accent-purple/20 to-primary-light/20 border-b border-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link to="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="w-10 h-10 bg-gradient-to-br from-accent-purple to-primary-light rounded-full flex items-center justify-center">
              <Award className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-primary">Wellness Passport</h1>
              <p className="text-sm text-muted-foreground">Level {userStats.level} • {userStats.totalPoints} points</p>
            </div>
          </div>
        </div>
      </header>

      <div className="p-4 space-y-6">
        {/* Progress Overview */}
        <Card className="bg-gradient-to-br from-accent-purple/10 to-primary-light/10 border-accent-purple/30">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-2xl font-bold text-primary">Level {userStats.level}</h3>
                <p className="text-muted-foreground">Wellness Explorer</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-accent-purple">{userStats.totalPoints}</p>
                <p className="text-sm text-muted-foreground">total points</p>
              </div>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span>Progress to Level {userStats.level + 1}</span>
                <span>{userStats.pointsToNext} points needed</span>
              </div>
              <Progress value={78} className="h-2" />
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-lg font-bold text-wellness">{userStats.streak}</p>
                <p className="text-xs text-muted-foreground">Day Streak</p>
              </div>
              <div>
                <p className="text-lg font-bold text-success">{userStats.totalChallenges}</p>
                <p className="text-xs text-muted-foreground">Challenges</p>
              </div>
              <div>
                <p className="text-lg font-bold text-accent-purple">{userStats.badgesEarned}</p>
                <p className="text-xs text-muted-foreground">Badges</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Daily Challenges */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">Today's Challenges</h3>
          <div className="space-y-3">
            {dailyChallenges.map((challenge) => {
              const isCompleted = completedChallenges.includes(challenge.id);
              return (
                <Card 
                  key={challenge.id} 
                  className={`card-feature transition-all duration-300 ${
                    isCompleted ? 'bg-success/5 border-success/30' : ''
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{challenge.icon}</div>
                        <div>
                          <h4 className="font-semibold text-primary">{challenge.title}</h4>
                          <p className="text-sm text-muted-foreground">{challenge.description}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {challenge.points} pts
                            </Badge>
                            <Badge 
                              variant="secondary" 
                              className={`text-xs ${
                                challenge.difficulty === 'Easy' ? 'bg-success/10 text-success' :
                                challenge.difficulty === 'Medium' ? 'bg-warning/10 text-warning' :
                                'bg-emergency/10 text-emergency'
                              }`}
                            >
                              {challenge.difficulty}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      {isCompleted ? (
                        <div className="flex items-center text-success">
                          <CheckCircle className="w-6 h-6" />
                        </div>
                      ) : (
                        <Button 
                          onClick={() => completeChallenge(challenge.id, challenge.points, challenge.title)}
                          size="sm"
                          className="btn-soft"
                        >
                          Complete
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Weekly Challenges */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">Weekly Goals</h3>
          <div className="space-y-3">
            {weeklyChallenges.map((challenge) => (
              <Card key={challenge.id} className="card-feature">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{challenge.icon}</div>
                      <div>
                        <h4 className="font-semibold text-primary">{challenge.title}</h4>
                        <p className="text-sm text-muted-foreground">{challenge.description}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {challenge.points} pts
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{challenge.progress}/{challenge.total}</span>
                    </div>
                    <Progress value={(challenge.progress / challenge.total) * 100} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Badges Collection */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">Badge Collection</h3>
          <div className="grid grid-cols-2 gap-3">
            {badges.map((badge, index) => (
              <Card 
                key={index} 
                className={`text-center p-4 transition-all duration-300 ${
                  badge.earned 
                    ? 'border-success/30 bg-success/5 hover:bg-success/10' 
                    : 'border-dashed border-muted opacity-60'
                }`}
              >
                <CardContent className="p-0">
                  <div className="text-3xl mb-2">{badge.icon}</div>
                  <h4 className="font-semibold text-sm text-primary mb-1">{badge.name}</h4>
                  <p className="text-xs text-muted-foreground">{badge.description}</p>
                  {badge.earned && (
                    <Badge className="mt-2 bg-success text-success-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Earned
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <Card className="border-dashed border-2 border-primary/30">
          <CardContent className="p-4 text-center">
            <Target className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold text-primary mb-2">Create Custom Challenge</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Set your own wellness goals and earn points
            </p>
            <Button variant="outline" className="btn-soft">
              <Zap className="w-4 h-4 mr-2" />
              Create Challenge
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WellnessPassport;