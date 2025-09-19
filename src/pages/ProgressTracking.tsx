import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, TrendingUp, Calendar, Heart, Brain, Moon, Zap, Smile, Frown, Meh } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProgressTracking = () => {
  const [currentMood, setCurrentMood] = useState([7]);
  const [journalEntry, setJournalEntry] = useState("");
  const { toast } = useToast();

  const moodHistory = [
    { date: "Dec 15", mood: 8, notes: "Good study session, felt confident" },
    { date: "Dec 14", mood: 6, notes: "Stressed about upcoming exam" },
    { date: "Dec 13", mood: 9, notes: "Great day with friends, relaxed" },
    { date: "Dec 12", mood: 5, notes: "Feeling overwhelmed with assignments" },
    { date: "Dec 11", mood: 7, notes: "Meditation helped with anxiety" },
    { date: "Dec 10", mood: 8, notes: "Productive day, good sleep" },
    { date: "Dec 9", mood: 6, notes: "Family pressure about grades" }
  ];

  const wellnessMetrics = [
    {
      name: "Sleep Quality",
      value: 7.2,
      trend: "+0.5",
      icon: Moon,
      color: "text-accent-purple",
      bgColor: "bg-accent-purple/10"
    },
    {
      name: "Stress Level",
      value: 4.1,
      trend: "-0.8",
      icon: Brain,
      color: "text-warning",
      bgColor: "bg-warning/10"
    },
    {
      name: "Energy Level",
      value: 6.8,
      trend: "+0.3",
      icon: Zap,
      color: "text-wellness",
      bgColor: "bg-wellness/10"
    },
    {
      name: "Social Connection",
      value: 8.2,
      trend: "+1.2",
      icon: Heart,
      color: "text-success",
      bgColor: "bg-success/10"
    }
  ];

  const insights = [
    {
      title: "Best Study Days",
      finding: "You feel most focused on Tuesdays and Thursdays",
      suggestion: "Schedule important studying during these times",
      type: "positive"
    },
    {
      title: "Stress Pattern",
      finding: "Stress levels peak before weekends",
      suggestion: "Try Friday evening relaxation sessions",
      type: "neutral"
    },
    {
      title: "Sleep Impact",
      finding: "7+ hours sleep correlates with better mood",
      suggestion: "Maintain consistent bedtime of 10:30 PM",
      type: "positive"
    },
    {
      title: "Social Support",
      finding: "Mood improves after peer support interactions",
      suggestion: "Engage with Circle of Trust more regularly",
      type: "positive"
    }
  ];

  const weeklyGoals = [
    { goal: "Sleep 8 hours daily", progress: 6, total: 7, completed: false },
    { goal: "Meditate 10 minutes", progress: 4, total: 7, completed: false },
    { goal: "Connect with 3 friends", progress: 3, total: 3, completed: true },
    { goal: "Exercise 30 minutes", progress: 3, total: 5, completed: false }
  ];

  const getMoodEmoji = (mood: number) => {
    if (mood >= 8) return { emoji: "😊", color: "text-success" };
    if (mood >= 6) return { emoji: "😐", color: "text-wellness" };
    if (mood >= 4) return { emoji: "😔", color: "text-warning" };
    return { emoji: "😢", color: "text-emergency" };
  };

  const saveMoodEntry = () => {
    toast({
      title: "Mood logged successfully! 📝",
      description: `Mood: ${currentMood[0]}/10 recorded for today`,
    });
    setJournalEntry("");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-success/20 to-wellness/20 border-b border-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link to="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="w-10 h-10 bg-gradient-to-br from-success to-wellness rounded-full flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-primary">Progress Tracking</h1>
              <p className="text-sm text-muted-foreground">Monitor your wellness journey</p>
            </div>
          </div>
        </div>
      </header>

      <div className="p-4 space-y-6">
        {/* Daily Mood Check-in */}
        <Card className="card-calm">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Heart className="w-5 h-5 mr-2 text-primary" />
              Daily Mood Check-in
            </CardTitle>
            <CardDescription>How are you feeling today? (1 = Very Low, 10 = Excellent)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="px-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl">😢</span>
                <span className="text-4xl">{getMoodEmoji(currentMood[0]).emoji}</span>
                <span className="text-2xl">😊</span>
              </div>
              <Slider
                value={currentMood}
                onValueChange={setCurrentMood}
                max={10}
                min={1}
                step={1}
                className="mb-4"
              />
              <div className="text-center">
                <span className="text-2xl font-bold text-primary">{currentMood[0]}/10</span>
              </div>
            </div>
            
            <Textarea
              placeholder="Optional: What's influencing your mood today? (Private notes)"
              value={journalEntry}
              onChange={(e) => setJournalEntry(e.target.value)}
              className="resize-none"
              rows={3}
            />
            
            <Button onClick={saveMoodEntry} className="w-full btn-hero">
              Save Today's Entry
            </Button>
          </CardContent>
        </Card>

        {/* Wellness Metrics */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">Wellness Overview</h3>
          <div className="grid grid-cols-2 gap-4">
            {wellnessMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <Card key={index} className="card-feature">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-10 h-10 ${metric.bgColor} rounded-lg flex items-center justify-center`}>
                        <IconComponent className={`w-5 h-5 ${metric.color}`} />
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          metric.trend.startsWith('+') ? 'text-success' : 'text-warning'
                        }`}
                      >
                        {metric.trend}
                      </Badge>
                    </div>
                    <h4 className="text-sm font-medium text-primary">{metric.name}</h4>
                    <p className="text-2xl font-bold text-primary">{metric.value}/10</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Mood History */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">Recent Mood History</h3>
          <div className="space-y-2">
            {moodHistory.slice(0, 5).map((entry, index) => {
              const { emoji, color } = getMoodEmoji(entry.mood);
              return (
                <Card key={index} className="border-dashed">
                  <CardContent className="p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{emoji}</span>
                        <div>
                          <p className="text-sm font-medium text-primary">{entry.date}</p>
                          <p className="text-xs text-muted-foreground">{entry.notes}</p>
                        </div>
                      </div>
                      <div className={`text-lg font-bold ${color}`}>
                        {entry.mood}/10
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Weekly Goals */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">This Week's Goals</h3>
          <div className="space-y-3">
            {weeklyGoals.map((goal, index) => {
              const progress = (goal.progress / goal.total) * 100;
              return (
                <Card key={index} className="card-feature">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-primary">{goal.goal}</h4>
                      {goal.completed && (
                        <Badge className="bg-success text-success-foreground">
                          ✓ Completed
                        </Badge>
                      )}
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Progress</span>
                        <span>{goal.progress}/{goal.total}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-300 ${
                            goal.completed ? 'bg-success' : 'bg-primary'
                          }`}
                          style={{ width: `${Math.min(progress, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* AI Insights */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">Personalized Insights</h3>
          <div className="space-y-3">
            {insights.map((insight, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-sm font-semibold text-primary">{insight.title}</h4>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        insight.type === 'positive' ? 'text-success' : 'text-muted-foreground'
                      }`}
                    >
                      {insight.type === 'positive' ? '👍' : '💡'}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{insight.finding}</p>
                  <p className="text-sm font-medium text-primary">{insight.suggestion}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Export Data */}
        <Card className="border-dashed border-2 border-primary/30">
          <CardContent className="p-4 text-center">
            <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold text-primary mb-2">Export Your Data</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Download your wellness data to share with counselors or for personal records
            </p>
            <Button variant="outline" className="btn-soft">
              <TrendingUp className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProgressTracking;