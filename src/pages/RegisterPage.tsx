import { useState, useContext } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useNavigate } from "react-router-dom";
import { Flower2 as Lotus, ArrowLeft } from "lucide-react";
import { AuthContext } from "@/App";
import { useToast } from "@/hooks/use-toast";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    college: "",
    year: "",
    language: "English",
    agreeTerms: false,
  });
  
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password && formData.agreeTerms) {
      const digitalId = `IKG-${Date.now()}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
      
      setUser({
        id: digitalId,
        name: formData.name,
        email: formData.email,
        college: formData.college,
        year: formData.year,
        language: formData.language,
        digitalId,
      });
      
      toast({
        title: "Welcome to Ikigai!",
        description: `Your digital ID: ${digitalId}`,
      });
      
      navigate("/dashboard");
    } else {
      toast({
        title: "Please complete all required fields",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-healing flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link to="/" className="flex items-center text-primary hover:text-primary-dark mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to home
        </Link>

        <Card className="shadow-xl border-0">
          <CardHeader className="text-center pb-6">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Lotus className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-primary">Begin Your Journey</CardTitle>
            <CardDescription>Create your Ikigai account</CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="border-primary-light focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@college.edu"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="border-primary-light focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password *</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="border-primary-light focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="college">College/University</Label>
                <Input
                  id="college"
                  placeholder="Your institution name"
                  value={formData.college}
                  onChange={(e) => setFormData({...formData, college: e.target.value})}
                  className="border-primary-light focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label>Academic Year</Label>
                <Select onValueChange={(value) => setFormData({...formData, year: value})}>
                  <SelectTrigger className="border-primary-light focus:border-primary">
                    <SelectValue placeholder="Select your year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="first">First Year</SelectItem>
                    <SelectItem value="second">Second Year</SelectItem>
                    <SelectItem value="third">Third Year</SelectItem>
                    <SelectItem value="fourth">Fourth Year</SelectItem>
                    <SelectItem value="postgrad">Post Graduate</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Preferred Language</Label>
                <Select onValueChange={(value) => setFormData({...formData, language: value})}>
                  <SelectTrigger className="border-primary-light focus:border-primary">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="Hindi">हिंदी (Hindi)</SelectItem>
                    <SelectItem value="Tamil">தமிழ் (Tamil)</SelectItem>
                    <SelectItem value="Bengali">বাংলা (Bengali)</SelectItem>
                    <SelectItem value="Telugu">తెలుగు (Telugu)</SelectItem>
                    <SelectItem value="Marathi">मराठी (Marathi)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) => 
                    setFormData({...formData, agreeTerms: checked as boolean})
                  }
                />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the terms of service and privacy policy *
                </Label>
              </div>

              <Button type="submit" className="w-full btn-hero">
                Create Account
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:text-primary-dark font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;