import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, BarChart3, Users, TrendingUp, AlertTriangle, 
  Eye, Download, Calendar, Shield, Heart 
} from "lucide-react";

const AdminDashboard = () => {
  const [timeRange, setTimeRange] = useState("7d");

  const overviewStats = {
    totalUsers: 1247,
    activeUsers: 892,
    dailyLogins: 234,
    avgSessionTime: "12 mins",
    crisisAlerts: 8,
    resourceViews: 3456,
    supportRequests: 23,
    wellnessScore: 7.2
  };

  const usageTrends = [
    { feature: "AI Companion", usage: 85, trend: "+12%" },
    { feature: "Circle of Trust", usage: 68, trend: "+8%" },
    { feature: "Wellness Passport", usage: 72, trend: "+15%" },
    { feature: "Emergency Help", usage: 23, trend: "+5%" },
    { feature: "Cultural Healing", usage: 56, trend: "+20%" },
    { feature: "Progress Tracking", usage: 79, trend: "+10%" }
  ];

  const stressLevels = {
    low: 34,
    moderate: 52,
    high: 14
  };

  const peakStressFactors = [
    { factor: "Exam Periods", percentage: 78, color: "bg-emergency" },
    { factor: "Assignment Deadlines", percentage: 65, color: "bg-warning" },
    { factor: "Family Expectations", percentage: 52, color: "bg-accent-purple" },
    { factor: "Career Uncertainty", percentage: 48, color: "bg-primary" },
    { factor: "Financial Concerns", percentage: 41, color: "bg-secondary-accent" }
  ];

  const interventionRecommendations = [
    {
      priority: "High",
      title: "Increase Exam Support Resources",
      description: "78% of stress reports correlate with exam periods",
      action: "Deploy additional AI companion prompts for exam anxiety",
      impact: "Expected 15% reduction in crisis alerts",
      status: "Pending Review"
    },
    {
      priority: "Medium",
      title: "Enhance Peer Support Moderation",
      description: "Circle of Trust participation up 8% but needs more moderators",
      action: "Recruit 5 additional peer moderators",
      impact: "Improved response time and community safety",
      status: "In Progress"
    },
    {
      priority: "Medium",
      title: "Cultural Content Expansion",
      description: "High engagement with cultural healing content (+20%)",
      action: "Add more regional language resources",
      impact: "Better cultural accessibility and engagement",
      status: "Planning"
    }
  ];

  const anonymizedInsights = [
    {
      insight: "Students report 23% better mood after using AI Companion",
      dataPoints: "2,847 interactions analyzed",
      confidence: "95%"
    },
    {
      insight: "Peer support participation reduces isolation scores by 31%",
      dataPoints: "1,234 peer interactions tracked",
      confidence: "92%"
    },
    {
      insight: "Cultural healing practices show 40% better retention rates",
      dataPoints: "856 practice sessions recorded",
      confidence: "89%"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "text-emergency bg-emergency/10";
      case "Medium": return "text-warning bg-warning/10";
      case "Low": return "text-success bg-success/10";
      default: return "text-muted-foreground bg-muted";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary/20 to-accent/20 border-b border-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <BarChart3 className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-primary">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground">Ikigai Platform Analytics</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button 
              variant={timeRange === "7d" ? "default" : "outline"} 
              size="sm"
              onClick={() => setTimeRange("7d")}
            >
              7 Days
            </Button>
            <Button 
              variant={timeRange === "30d" ? "default" : "outline"} 
              size="sm"
              onClick={() => setTimeRange("30d")}
            >
              30 Days
            </Button>
          </div>
        </div>
      </header>

      <div className="p-4">
        {/* Overview Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Users</p>
                  <p className="text-2xl font-bold text-primary">{overviewStats.totalUsers}</p>
                </div>
                <Users className="w-8 h-8 text-primary/30" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Today</p>
                  <p className="text-2xl font-bold text-success">{overviewStats.activeUsers}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-success/30" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Crisis Alerts</p>
                  <p className="text-2xl font-bold text-emergency">{overviewStats.crisisAlerts}</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-emergency/30" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Wellness Score</p>
                  <p className="text-2xl font-bold text-wellness">{overviewStats.wellnessScore}/10</p>
                </div>
                <Heart className="w-8 h-8 text-wellness/30" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="usage" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="usage">Usage Analytics</TabsTrigger>
            <TabsTrigger value="stress">Stress Patterns</TabsTrigger>
            <TabsTrigger value="insights">AI Insights</TabsTrigger>
            <TabsTrigger value="interventions">Interventions</TabsTrigger>
          </TabsList>

          {/* Usage Analytics Tab */}
          <TabsContent value="usage" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Feature Usage Trends</CardTitle>
                <CardDescription>Anonymized usage data for platform optimization</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {usageTrends.map((feature, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{feature.feature}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">{feature.usage}%</span>
                        <Badge variant="outline" className={`text-xs ${
                          feature.trend.startsWith('+') ? 'text-success' : 'text-warning'
                        }`}>
                          {feature.trend}
                        </Badge>
                      </div>
                    </div>
                    <Progress value={feature.usage} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Stress Patterns Tab */}
          <TabsContent value="stress" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Current Stress Distribution</CardTitle>
                  <CardDescription>Anonymous stress level reporting</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Low Stress</span>
                      <span className="text-sm font-bold text-success">{stressLevels.low}%</span>
                    </div>
                    <Progress value={stressLevels.low} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Moderate Stress</span>
                      <span className="text-sm font-bold text-warning">{stressLevels.moderate}%</span>
                    </div>
                    <Progress value={stressLevels.moderate} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">High Stress</span>
                      <span className="text-sm font-bold text-emergency">{stressLevels.high}%</span>
                    </div>
                    <Progress value={stressLevels.high} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Stress Factors</CardTitle>
                  <CardDescription>Most reported stress triggers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {peakStressFactors.map((factor, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">{factor.factor}</span>
                        <span className="text-sm font-bold">{factor.percentage}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${factor.color}`}
                          style={{ width: `${factor.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* AI Insights Tab */}
          <TabsContent value="insights" className="space-y-4">
            <div className="space-y-4">
              {anonymizedInsights.map((insight, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-primary mb-2">{insight.insight}</h4>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>📊 {insight.dataPoints}</span>
                      <Badge className="bg-success/10 text-success">
                        {insight.confidence} confidence
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-dashed border-2 border-primary/30">
              <CardContent className="p-4 text-center">
                <Eye className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-primary mb-2">Privacy First Analytics</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  All data is anonymized and aggregated. No individual student information is accessible.
                </p>
                <Button variant="outline" className="btn-soft">
                  <Shield className="w-4 h-4 mr-2" />
                  Privacy Policy
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Interventions Tab */}
          <TabsContent value="interventions" className="space-y-4">
            <div className="space-y-4">
              {interventionRecommendations.map((rec, index) => (
                <Card key={index} className="card-feature">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{rec.title}</CardTitle>
                      <Badge className={`${getPriorityColor(rec.priority)}`}>
                        {rec.priority} Priority
                      </Badge>
                    </div>
                    <CardDescription>{rec.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-primary mb-1">Recommended Action:</p>
                      <p className="text-sm text-muted-foreground">{rec.action}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary mb-1">Expected Impact:</p>
                      <p className="text-sm text-muted-foreground">{rec.impact}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="text-xs">
                        Status: {rec.status}
                      </Badge>
                      <Button size="sm" variant="outline">
                        Review Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Export Options */}
        <Card className="mt-6 border-dashed border-2 border-accent/30">
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-semibold text-primary mb-1">Export Analytics Report</h4>
                <p className="text-sm text-muted-foreground">
                  Generate comprehensive report for institutional review
                </p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Monthly Report
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export Data
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;