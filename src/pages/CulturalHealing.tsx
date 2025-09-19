import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, Flower2 as Lotus, Heart, Calendar, Play, BookOpen, Globe } from "lucide-react";

const CulturalHealing = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const yogaMeditation = [
    {
      title: "Morning Surya Namaskara",
      description: "Traditional sun salutation for energy and focus",
      duration: "15 mins",
      difficulty: "Beginner",
      language: "Hindi/English",
      thumbnail: "🌅"
    },
    {
      title: "Pranayama Breathing",
      description: "Ancient breathing techniques for anxiety relief",
      duration: "10 mins",
      difficulty: "All levels",
      language: "Sanskrit/English",
      thumbnail: "🫁"
    },
    {
      title: "Chakra Meditation",
      description: "Balance your energy centers for inner peace",
      duration: "20 mins",
      difficulty: "Intermediate",
      language: "English/Tamil",
      thumbnail: "🌈"
    },
    {
      title: "Yoga Nidra",
      description: "Deep relaxation for better sleep",
      duration: "30 mins",
      difficulty: "All levels",
      language: "Hindi/English",
      thumbnail: "🌙"
    }
  ];

  const ayurvedaTips = [
    {
      title: "Daily Routine (Dinacharya)",
      description: "Align your daily habits with natural rhythms",
      category: "Lifestyle",
      dosha: "All",
      tips: ["Wake up before sunrise", "Oil pulling with sesame oil", "Warm water with lemon"]
    },
    {
      title: "Stress-Relief Herbs",
      description: "Natural adaptogens for managing study stress",
      category: "Herbal",
      dosha: "Vata",
      tips: ["Ashwagandha tea", "Brahmi for memory", "Jatamansi for sleep"]
    },
    {
      title: "Mindful Eating",
      description: "Food as medicine for mental wellness",
      category: "Nutrition",
      dosha: "All",
      tips: ["Eat warm, cooked foods", "Avoid eating when stressed", "Mindful chewing"]
    }
  ];

  const festivalHealing = [
    {
      festival: "Diwali",
      theme: "Light over Darkness",
      activities: ["Diya lighting meditation", "Gratitude journaling", "Community seva"],
      mentalHealth: "Combats seasonal depression, builds hope"
    },
    {
      festival: "Holi",
      theme: "Joy & Renewal",
      activities: ["Color therapy", "Community dancing", "Forgiveness rituals"],
      mentalHealth: "Releases stress, promotes social connection"
    },
    {
      festival: "Karva Chauth",
      theme: "Relationships & Care",
      activities: ["Moon gazing", "Partner appreciation", "Community bonding"],
      mentalHealth: "Strengthens relationships, reduces loneliness"
    },
    {
      festival: "Navratri",
      theme: "Inner Strength",
      activities: ["Fasting meditation", "Dance therapy", "Spiritual reflection"],
      mentalHealth: "Builds discipline, boosts confidence"
    }
  ];

  const spiritualResources = [
    {
      title: "Bhagavad Gita for Students",
      description: "Ancient wisdom for modern academic stress",
      format: "Audio/Text",
      language: "Sanskrit/English/Hindi",
      chapters: ["Dealing with Anxiety", "Finding Purpose", "Overcoming Fear"]
    },
    {
      title: "Buddhist Mindfulness",
      description: "Meditation practices from Buddhist tradition",
      format: "Guided Audio",
      language: "English/Pali",
      chapters: ["Loving Kindness", "Body Scan", "Walking Meditation"]
    },
    {
      title: "Sikh Healing Prayers",
      description: "Peaceful shabads for mental clarity",
      format: "Audio/Text",
      language: "Punjabi/English",
      chapters: ["Morning Prayers", "Evening Reflection", "Healing Mantras"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-wellness/20 to-secondary-accent/20 border-b border-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link to="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="w-10 h-10 bg-gradient-to-br from-wellness to-secondary-accent rounded-full flex items-center justify-center">
              <Lotus className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-primary">Cultural Healing Hub</h1>
              <p className="text-sm text-muted-foreground">Traditional wellness for modern minds</p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            <Globe className="w-4 h-4 mr-2" />
            {selectedLanguage}
          </Button>
        </div>
      </header>

      <div className="p-4">
        {/* Welcome Section */}
        <div className="card-calm mb-6">
          <div className="flex items-center space-x-3 mb-3">
            <Lotus className="w-6 h-6 text-wellness" />
            <h2 className="text-xl font-bold text-primary">स्वागतम् - Welcome</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Discover the healing wisdom of Indian traditions. Our ancestors understood the deep connection 
            between mind, body, and spirit. These practices have helped millions find peace for thousands of years.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-wellness/10 text-wellness">Culturally Rooted</Badge>
            <Badge className="bg-secondary-accent/10 text-secondary-accent">Scientifically Backed</Badge>
            <Badge className="bg-primary/10 text-primary">Stigma-Free</Badge>
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="yoga" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="yoga">Yoga & Meditation</TabsTrigger>
            <TabsTrigger value="ayurveda">Ayurveda Tips</TabsTrigger>
            <TabsTrigger value="festivals">Festival Healing</TabsTrigger>
            <TabsTrigger value="spiritual">Spiritual Resources</TabsTrigger>
          </TabsList>

          {/* Yoga & Meditation Tab */}
          <TabsContent value="yoga" className="space-y-4">
            <div className="grid gap-4">
              {yogaMeditation.map((practice, index) => (
                <Card key={index} className="card-feature">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{practice.thumbnail}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-primary">{practice.title}</h4>
                          <Button size="sm" variant="outline">
                            <Play className="w-4 h-4 mr-2" />
                            Start
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{practice.description}</p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-xs">⏱️ {practice.duration}</Badge>
                          <Badge variant="outline" className="text-xs">📊 {practice.difficulty}</Badge>
                          <Badge variant="outline" className="text-xs">🗣️ {practice.language}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Ayurveda Tips Tab */}
          <TabsContent value="ayurveda" className="space-y-4">
            <div className="space-y-4">
              {ayurvedaTips.map((tip, index) => (
                <Card key={index} className="card-feature">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{tip.title}</CardTitle>
                      <Badge className="bg-wellness/10 text-wellness">{tip.dosha}</Badge>
                    </div>
                    <CardDescription>{tip.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-primary">Practical Tips:</p>
                      <ul className="space-y-1">
                        {tip.tips.map((item, tipIndex) => (
                          <li key={tipIndex} className="text-sm text-muted-foreground flex items-center">
                            <span className="w-2 h-2 bg-wellness rounded-full mr-2"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Festival Healing Tab */}
          <TabsContent value="festivals" className="space-y-4">
            <div className="grid gap-4">
              {festivalHealing.map((festival, index) => (
                <Card key={index} className="card-feature">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{festival.festival}</CardTitle>
                      <Badge className="bg-secondary-accent/10 text-secondary-accent">{festival.theme}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-primary mb-2">Healing Activities:</p>
                      <div className="flex flex-wrap gap-1">
                        {festival.activities.map((activity, actIndex) => (
                          <Badge key={actIndex} variant="outline" className="text-xs">
                            {activity}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-primary mb-1">Mental Health Benefits:</p>
                      <p className="text-sm text-muted-foreground">{festival.mentalHealth}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Spiritual Resources Tab */}
          <TabsContent value="spiritual" className="space-y-4">
            <div className="space-y-4">
              {spiritualResources.map((resource, index) => (
                <Card key={index} className="card-feature">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-primary mb-1">{resource.title}</h4>
                        <p className="text-sm text-muted-foreground">{resource.description}</p>
                      </div>
                      <Button size="sm" variant="outline">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Access
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs">
                        <Badge variant="outline">📱 {resource.format}</Badge>
                        <Badge variant="outline">🗣️ {resource.language}</Badge>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-primary mb-1">Available Sections:</p>
                        <div className="flex flex-wrap gap-1">
                          {resource.chapters.map((chapter, chapterIndex) => (
                            <Badge key={chapterIndex} variant="secondary" className="text-xs">
                              {chapter}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Language Support Banner */}
        <Card className="mt-6 border-dashed border-2 border-primary/30">
          <CardContent className="p-4 text-center">
            <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold text-primary mb-2">Available in Multiple Languages</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Access healing wisdom in your preferred language
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {["English", "हिंदी", "தமிழ்", "বাংলা", "తెలుగు", "मराठी"].map((lang) => (
                <Button 
                  key={lang} 
                  variant="outline" 
                  size="sm"
                  onClick={() => setSelectedLanguage(lang)}
                  className={selectedLanguage === lang ? "bg-primary text-primary-foreground" : ""}
                >
                  {lang}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CulturalHealing;