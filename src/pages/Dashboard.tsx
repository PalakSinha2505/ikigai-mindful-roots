import { useContext } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Bot, Users, Shield, Award, Flower2 as Lotus, BookOpen, 
  TrendingUp, Library, Bell, User, Menu,
  Home, Globe, BarChart3, MoreHorizontal
} from "lucide-react";
import { AuthContext } from "@/App";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const quickAccessFeatures = [
    {
      title: "AI Companion",
      description: "Chat with your culturally-aware AI support",
      icon: Bot,
      path: "/ai-companion",
      gradient: "from-primary to-primary-dark",
    },
    {
      title: "Circle of Trust",
      description: "Connect with peers anonymously",
      icon: Users,
      path: "/circle-of-trust",
      gradient: "from-secondary-accent to-wellness",
    },
    {
      title: "Emergency Help",
      description: "Get immediate crisis support",
      icon: Shield,
      path: "/emergency-help",
      gradient: "from-emergency to-emergency-light",
    },
    {
      title: "Wellness Passport",
      description: "Track your mental health journey",
      icon: Award,
      path: "/wellness-passport",
      gradient: "from-accent-purple to-primary-light",
    },
    {
      title: "Cultural Healing Hub",
      description: "Traditional wellness practices",
      icon: Lotus,
      path: "/cultural-healing",
      gradient: "from-wellness to-secondary-accent",
    },
    {
      title: "Academic Support",
      description: "Stress-free learning tools",
      icon: BookOpen,
      path: "/academic-support",
      gradient: "from-primary-light to-accent",
    },
    {
      title: "Progress Tracking",
      description: "Monitor your wellness journey",
      icon: TrendingUp,
      path: "/progress-tracking",
      gradient: "from-success to-wellness",
    },
    {
      title: "Resource Library",
      description: "Videos, guides & wellness content",
      icon: Library,
      path: "/resource-library",
      gradient: "from-accent to-primary-light",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <header className="bg-card border-b border-border p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Lotus className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary">Ikigai</h1>
              <p className="text-xs text-muted-foreground">Welcome back, {user?.name}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-4">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="card-calm mb-6">
            <h2 className="text-2xl font-bold text-primary mb-2">
              Welcome to your wellness dashboard
            </h2>
            <p className="text-muted-foreground mb-4">
              Your Digital ID: <span className="font-mono text-primary">{user?.digitalId}</span>
            </p>
            <p className="text-muted-foreground">
              Take a moment to breathe. What would you like to focus on today?
            </p>
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {quickAccessFeatures.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <Link key={feature.path} to={feature.path}>
                <Card className="card-feature group cursor-pointer transition-all duration-300 hover:scale-105">
                  <CardHeader className="pb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-sm">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Emergency Button - Always Visible */}
        <div className="fixed bottom-20 right-4 z-50">
          <Link to="/emergency-help">
            <Button className="btn-emergency rounded-full w-16 h-16 shadow-2xl">
              <Shield className="w-8 h-8" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <Link to="/dashboard" className="flex flex-col items-center space-y-1">
            <Home className="w-5 h-5 text-primary" />
            <span className="text-xs text-primary font-medium">Home</span>
          </Link>
          <Link to="/resource-library" className="flex flex-col items-center space-y-1">
            <Library className="w-5 h-5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Resources</span>
          </Link>
          <Link to="/circle-of-trust" className="flex flex-col items-center space-y-1">
            <Globe className="w-5 h-5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Peer Support</span>
          </Link>
          <Link to="/progress-tracking" className="flex flex-col items-center space-y-1">
            <BarChart3 className="w-5 h-5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Progress</span>
          </Link>
          <Button variant="ghost" className="flex flex-col items-center space-y-1 p-0">
            <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">More</span>
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;