import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Flower2 as Lotus, Globe, Shield } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-calm">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Lotus className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">Ikigai</h1>
              <p className="text-sm text-muted-foreground">The Reason for Being</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <Link to="/login">
              <Button variant="outline" className="btn-soft">
                Login
              </Button>
            </Link>
            <Link to="/admin">
              <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                Admin
              </Button>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Discover your purpose.<br />
              Build resilience.<br />
              <span className="text-secondary-accent">Heal together.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A stigma-free, culturally sensitive mental health platform designed for Indian college students. 
              Your journey to wellness starts here.
            </p>
            <Link to="/register">
              <Button className="btn-hero text-lg px-12 py-6">
                Begin Your Journey
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Preview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="card-feature text-center">
            <div className="icon-primary mx-auto">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg mb-2">AI Companion</h3>
            <p className="text-muted-foreground text-sm">
              Culturally aware AI support available 24/7
            </p>
          </div>
          
          <div className="card-feature text-center">
            <div className="icon-primary mx-auto">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Circle of Trust</h3>
            <p className="text-muted-foreground text-sm">
              Anonymous peer support communities
            </p>
          </div>
          
          <div className="card-feature text-center">
            <div className="icon-emergency mx-auto">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Emergency Help</h3>
            <p className="text-muted-foreground text-sm">
              Immediate crisis support when you need it
            </p>
          </div>
          
          <div className="card-feature text-center">
            <div className="icon-primary mx-auto">
              <Lotus className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Cultural Healing</h3>
            <p className="text-muted-foreground text-sm">
              Traditional wellness practices & regional support
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="card-calm text-center py-12">
          <h3 className="text-3xl font-bold text-primary mb-4">
            Ready to start your healing journey?
          </h3>
          <p className="text-muted-foreground mb-6 text-lg">
            Join thousands of students who've found their ikigai
          </p>
          <Link to="/register">
            <Button className="btn-hero">
              Create Your Account
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;