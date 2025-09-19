import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Clock, Target, Brain, Calendar, Users, Lightbulb } from "lucide-react";

const AcademicSupport = () => {
  const [focusTime, setFocusTime] = useState(25);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const timeManagementTools = [
    {
      title: "Pomodoro Timer",
      description: "25-minute focused study sessions with breaks",
      icon: "🍅",
      action: "Start Timer",
      benefits: ["Improved focus", "Reduced burnout", "Better time awareness"]
    },
    {
      title: "Priority Matrix",
      description: "Organize tasks by importance and urgency",
      icon: "📊",
      action: "Create Matrix",
      benefits: ["Clear priorities", "Reduced overwhelm", "Better decisions"]
    },
    {
      title: "Study Schedule Builder",
      description: "Balanced timetable with break optimization",
      icon: "📅",
      action: "Build Schedule",
      benefits: ["Consistent routine", "Balanced workload", "Stress reduction"]
    }
  ];

  const studySkills = [
    {
      title: "Active Reading Techniques",
      description: "SQ3R method for better comprehension",
      duration: "15 mins",
      difficulty: "Beginner",
      topics: ["Survey", "Question", "Read", "Recite", "Review"]
    },
    {
      title: "Memory Palace Method",
      description: "Ancient technique for remembering complex information",
      duration: "20 mins",
      difficulty: "Intermediate",
      topics: ["Visualization", "Location mapping", "Association", "Practice"]
    },
    {
      title: "Note-Taking Systems",
      description: "Cornell method and mind mapping",
      duration: "12 mins",
      difficulty: "Beginner",
      topics: ["Cornell notes", "Mind maps", "Digital tools", "Review systems"]
    },
    {
      title: "Exam Strategies",
      description: "Stress-free approach to test taking",
      duration: "18 mins",
      difficulty: "All levels",
      topics: ["Preparation", "Time management", "Anxiety control", "Review techniques"]
    }
  ];

  const campusResources = [
    {
      name: "Academic Writing Center",
      service: "Essay and research paper support",
      availability: "Mon-Fri, 9 AM - 5 PM",
      location: "Library, 2nd Floor",
      contact: "Ext: 3456",
      specialties: ["Research skills", "Citation help", "Grammar support"]
    },
    {
      name: "Math Help Center",
      service: "Tutoring for all math subjects",
      availability: "Daily, 10 AM - 8 PM",
      location: "Science Building, Room 201",
      contact: "Ext: 2789",
      specialties: ["Calculus", "Statistics", "Algebra", "Problem solving"]
    },
    {
      name: "Study Groups Network",
      service: "Peer learning communities",
      availability: "24/7 (Online platform)",
      location: "Online + Study halls",
      contact: "studygroups@college.edu",
      specialties: ["Group study", "Peer teaching", "Exam prep", "Project collaboration"]
    },
    {
      name: "Learning Disability Support",
      service: "Accommodations and specialized help",
      availability: "Mon-Fri, 8 AM - 4 PM",
      location: "Student Services, Room 150",
      contact: "Ext: 1234",
      specialties: ["Testing accommodations", "Note-taking support", "Technology assistance"]
    }
  ];

  const stressRelief = [
    {
      technique: "5-4-3-2-1 Grounding",
      description: "Calm pre-exam anxiety using your senses",
      steps: ["5 things you see", "4 things you touch", "3 things you hear", "2 things you smell", "1 thing you taste"]
    },
    {
      technique: "Progressive Muscle Relaxation",
      description: "Release physical tension before studying",
      steps: ["Tense and release each muscle group", "Start with toes, work up", "Hold for 5 seconds", "Notice the relaxation"]
    },
    {
      technique: "Study Break Activities",
      description: "Recharge between study sessions",
      steps: ["5-minute walk", "Deep breathing", "Light stretching", "Healthy snack"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary-light/20 to-accent/20 border-b border-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link to="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="w-10 h-10 bg-gradient-to-br from-primary-light to-accent rounded-full flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-primary">Academic Support</h1>
              <p className="text-sm text-muted-foreground">Stress-free learning tools</p>
            </div>
          </div>
        </div>
      </header>

      <div className="p-4">
        {/* Quick Focus Timer */}
        <Card className="mb-6 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="p-6">
            <div className="text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">Focus Session</h3>
              <div className="text-4xl font-mono text-primary mb-4">
                {Math.floor(focusTime / 60)}:{(focusTime % 60).toString().padStart(2, '0')}
              </div>
              <div className="flex justify-center space-x-4">
                <Button 
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className={isTimerRunning ? "bg-emergency" : "btn-hero"}
                >
                  {isTimerRunning ? "Pause" : "Start Focus"}
                </Button>
                <Button variant="outline" onClick={() => setFocusTime(25)}>
                  Reset
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="time" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="time">Time Management</TabsTrigger>
            <TabsTrigger value="skills">Study Skills</TabsTrigger>
            <TabsTrigger value="resources">Campus Resources</TabsTrigger>
          </TabsList>

          {/* Time Management Tab */}
          <TabsContent value="time" className="space-y-4">
            <div className="grid gap-4">
              {timeManagementTools.map((tool, index) => (
                <Card key={index} className="card-feature">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{tool.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-primary">{tool.title}</h4>
                          <Button size="sm" className="btn-soft">
                            {tool.action}
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{tool.description}</p>
                        <div>
                          <p className="text-xs font-medium text-primary mb-1">Benefits:</p>
                          <div className="flex flex-wrap gap-1">
                            {tool.benefits.map((benefit, benefitIndex) => (
                              <span key={benefitIndex} className="text-xs bg-success/10 text-success px-2 py-1 rounded">
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Stress Relief Techniques */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-primary mb-4">Quick Stress Relief</h3>
              <div className="space-y-3">
                {stressRelief.map((technique, index) => (
                  <Card key={index} className="border-dashed border-2 border-wellness/30">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-wellness mb-2">{technique.technique}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{technique.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {technique.steps.map((step, stepIndex) => (
                          <span key={stepIndex} className="text-xs bg-wellness/10 text-wellness px-2 py-1 rounded">
                            {stepIndex + 1}. {step}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Study Skills Tab */}
          <TabsContent value="skills" className="space-y-4">
            <div className="space-y-4">
              {studySkills.map((skill, index) => (
                <Card key={index} className="card-feature">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{skill.title}</CardTitle>
                      <Button size="sm" variant="outline">
                        <Brain className="w-4 h-4 mr-2" />
                        Learn
                      </Button>
                    </div>
                    <CardDescription>{skill.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {skill.duration}
                      </span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {skill.difficulty}
                      </span>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-primary mb-2">What you'll learn:</p>
                      <div className="flex flex-wrap gap-1">
                        {skill.topics.map((topic, topicIndex) => (
                          <span key={topicIndex} className="text-xs bg-accent/10 text-accent-foreground px-2 py-1 rounded">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Campus Resources Tab */}
          <TabsContent value="resources" className="space-y-4">
            <div className="space-y-4">
              {campusResources.map((resource, index) => (
                <Card key={index} className="card-feature">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{resource.name}</CardTitle>
                      <Button size="sm" variant="outline">
                        <Users className="w-4 h-4 mr-2" />
                        Contact
                      </Button>
                    </div>
                    <CardDescription>{resource.service}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-primary">Location:</p>
                        <p className="text-muted-foreground">{resource.location}</p>
                      </div>
                      <div>
                        <p className="font-medium text-primary">Contact:</p>
                        <p className="text-muted-foreground">{resource.contact}</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-medium text-primary mb-1">Available:</p>
                      <p className="text-sm text-success">{resource.availability}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-primary mb-2">Specialties:</p>
                      <div className="flex flex-wrap gap-1">
                        {resource.specialties.map((specialty, specialtyIndex) => (
                          <span key={specialtyIndex} className="text-xs bg-secondary/10 text-secondary-foreground px-2 py-1 rounded">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Study Tips Banner */}
        <Card className="mt-6 border-dashed border-2 border-accent/30">
          <CardContent className="p-4 text-center">
            <Lightbulb className="w-8 h-8 text-accent-purple mx-auto mb-3" />
            <h4 className="font-semibold text-primary mb-2">Pro Study Tip</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Take a 5-minute break every 25 minutes of studying. Your brain needs time to process and consolidate information!
            </p>
            <Button variant="outline" className="btn-soft">
              <Target className="w-4 h-4 mr-2" />
              More Study Tips
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AcademicSupport;