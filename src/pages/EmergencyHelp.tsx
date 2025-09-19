import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, MessageSquare, Shield, AlertTriangle, Heart, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EmergencyHelp = () => {
  const [isEmergencyActivated, setIsEmergencyActivated] = useState(false);
  const { toast } = useToast();

  const emergencyOptions = [
    {
      title: "Call Helpline",
      description: "Connect to 24/7 mental health crisis hotline",
      icon: Phone,
      action: () => {
        toast({
          title: "Connecting to helpline...",
          description: "National Mental Health Helpline: 1800-599-0019",
        });
      },
      urgent: true
    },
    {
      title: "One-Tap SOS",
      description: "Send alert to emergency contacts",
      icon: AlertTriangle,
      action: () => {
        setIsEmergencyActivated(true);
        toast({
          title: "SOS Alert Sent",
          description: "Emergency contacts have been notified",
        });
      },
      urgent: true
    },
    {
      title: "Silent Alarm",
      description: "Discreet alert for immediate help",
      icon: Shield,
      action: () => {
        toast({
          title: "Silent alarm activated",
          description: "Campus security has been discreetly notified",
        });
      },
      urgent: true
    },
    {
      title: "Crisis Chat",
      description: "Anonymous text support with counselor",
      icon: MessageSquare,
      action: () => {
        toast({
          title: "Connecting to crisis counselor...",
          description: "You'll be connected within 2 minutes",
        });
      },
      urgent: false
    }
  ];

  const localSupport = [
    {
      name: "Campus Counseling Center",
      type: "On-Campus",
      availability: "9 AM - 6 PM",
      contact: "Ext: 2345",
      description: "Professional counselors available for students"
    },
    {
      name: "Peer Support Mentors",
      type: "Student-led",
      availability: "24/7",
      contact: "WhatsApp: +91-98765-43210",
      description: "Trained student volunteers for immediate support"
    },
    {
      name: "Medical Emergency",
      type: "Health Center",
      availability: "24/7",
      contact: "Ext: 911",
      description: "For physical health emergencies"
    }
  ];

  const nationalHelplines = [
    { name: "NIMHANS Helpline", number: "080-46110007", available: "24/7" },
    { name: "Vandrevala Foundation", number: "9999666555", available: "24/7" },
    { name: "iCall Helpline", number: "9152987821", available: "10 AM - 8 PM" },
    { name: "Sneha India", number: "044-24640050", available: "24/7" }
  ];

  if (isEmergencyActivated) {
    return (
      <div className="min-h-screen bg-gradient-emergency flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center border-emergency">
          <CardContent className="p-8">
            <div className="w-20 h-20 bg-emergency/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <Heart className="w-10 h-10 text-emergency" />
            </div>
            <h2 className="text-2xl font-bold text-emergency mb-4">
              Help is on the way
            </h2>
            <p className="text-muted-foreground mb-6">
              Your emergency alert has been sent. A counselor will contact you within 10 minutes.
            </p>
            <div className="space-y-3">
              <Button 
                className="w-full bg-emergency text-emergency-foreground hover:bg-emergency/90"
                onClick={() => toast({ title: "Calling emergency helpline..." })}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now: 1800-599-0019
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setIsEmergencyActivated(false)}
              >
                Cancel Alert
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              If this is a medical emergency, please call 108
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-emergency/10 to-emergency-light/10 border-b border-emergency/20 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link to="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="w-10 h-10 bg-emergency rounded-full flex items-center justify-center">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-emergency">Emergency Help</h1>
              <p className="text-sm text-muted-foreground">Crisis support available 24/7</p>
            </div>
          </div>
        </div>
      </header>

      <div className="p-4 space-y-6">
        {/* Crisis Banner */}
        <Card className="border-emergency/30 bg-emergency-light/10">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3 mb-3">
              <AlertTriangle className="w-6 h-6 text-emergency" />
              <h3 className="font-semibold text-emergency">Crisis Support</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              If you're having thoughts of self-harm or suicide, please reach out immediately. 
              You are not alone, and help is available.
            </p>
            <div className="flex space-x-2">
              <Button 
                className="btn-emergency"
                onClick={() => toast({ title: "Calling emergency helpline...", description: "1800-599-0019" })}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Crisis Line
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Actions */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">Immediate Help</h3>
          <div className="grid gap-4">
            {emergencyOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <Card 
                  key={index}
                  className={`card-feature cursor-pointer ${
                    option.urgent ? 'border-emergency/30 hover:border-emergency/50' : ''
                  }`}
                  onClick={option.action}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        option.urgent 
                          ? 'bg-emergency/10 text-emergency' 
                          : 'bg-primary/10 text-primary'
                      }`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary">{option.title}</h4>
                        <p className="text-sm text-muted-foreground">{option.description}</p>
                      </div>
                      {option.urgent && (
                        <Clock className="w-4 h-4 text-emergency" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Local Support Directory */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">Campus Support</h3>
          <div className="space-y-3">
            {localSupport.map((support, index) => (
              <Card key={index} className="card-feature">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-primary">{support.name}</h4>
                      <p className="text-sm text-muted-foreground">{support.description}</p>
                    </div>
                    <span className="text-xs bg-success/10 text-success px-2 py-1 rounded">
                      {support.type}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">📞 {support.contact}</span>
                    <span className="text-success">⏰ {support.availability}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* National Helplines */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">National Helplines</h3>
          <div className="space-y-2">
            {nationalHelplines.map((helpline, index) => (
              <Card key={index} className="border-dashed">
                <CardContent className="p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-sm">{helpline.name}</p>
                      <p className="text-xs text-muted-foreground">{helpline.available}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      📞 {helpline.number}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Safety Note */}
        <Card className="bg-muted/30">
          <CardContent className="p-4 text-center">
            <p className="text-sm text-muted-foreground">
              🔒 All emergency services are confidential. Your privacy and safety are our priority.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmergencyHelp;