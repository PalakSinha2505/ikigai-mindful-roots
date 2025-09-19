import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, Library, Search, Play, Headphones, FileText, Video, Download, Globe, Eye } from "lucide-react";

const ResourceLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  const relaxationAudios = [
    {
      title: "Ocean Waves & Sanskrit Chants",
      description: "Calming ocean sounds with traditional mantras",
      duration: "15 mins",
      language: "Sanskrit/English",
      category: "Meditation",
      thumbnail: "🌊",
      downloads: 1234
    },
    {
      title: "Guided Pranayama Practice",
      description: "Step-by-step breathing exercises for anxiety",
      duration: "12 mins",
      language: "Hindi/English",
      category: "Breathing",
      thumbnail: "🫁",
      downloads: 892
    },
    {
      title: "Bollywood Stress Relief Mix",
      description: "Uplifting songs for mood enhancement",
      duration: "25 mins",
      language: "Hindi",
      category: "Music Therapy",
      thumbnail: "🎵",
      downloads: 2156
    },
    {
      title: "Forest Sounds & Flute",
      description: "Nature sounds with Indian classical flute",
      duration: "20 mins",
      language: "Instrumental",
      category: "Nature",
      thumbnail: "🌲",
      downloads: 1567
    }
  ];

  const wellnessGuides = [
    {
      title: "Student's Guide to Managing Exam Stress",
      description: "Comprehensive strategies for academic pressure",
      pages: 24,
      language: "English/Hindi",
      category: "Academic",
      format: "PDF",
      author: "Dr. Priya Sharma"
    },
    {
      title: "Understanding Depression in Indian Context",
      description: "Cultural perspectives on mental health",
      pages: 18,
      language: "English/Tamil",
      category: "Mental Health",
      format: "PDF",
      author: "Prof. Rajesh Kumar"
    },
    {
      title: "Ayurvedic Wellness for Modern Students",
      description: "Traditional healing adapted for college life",
      pages: 32,
      language: "English/Sanskrit",
      category: "Ayurveda",
      format: "PDF",
      author: "Dr. Meera Nair"
    },
    {
      title: "Building Resilience: A Student's Journey",
      description: "Personal stories and practical advice",
      pages: 28,
      language: "English/Bengali",
      category: "Self-Help",
      format: "PDF",
      author: "Anita Roy"
    }
  ];

  const mentalHealthVideos = [
    {
      title: "Breaking Mental Health Stigma in India",
      description: "Panel discussion with students and experts",
      duration: "35 mins",
      language: "English",
      category: "Education",
      views: "15K",
      thumbnail: "🎬"
    },
    {
      title: "Yoga for Anxiety Relief",
      description: "Simple poses for immediate stress relief",
      duration: "18 mins",
      language: "Hindi/English",
      category: "Yoga",
      views: "28K",
      thumbnail: "🧘‍♀️"
    },
    {
      title: "Study-Life Balance Tips",
      description: "Time management and self-care strategies",
      duration: "22 mins",
      language: "English",
      category: "Academic",
      views: "12K",
      thumbnail: "⚖️"
    },
    {
      title: "Meditation for Beginners",
      description: "5-minute daily practice for students",
      duration: "8 mins",
      language: "Tamil/English",
      category: "Meditation",
      views: "33K",
      thumbnail: "🧘"
    }
  ];

  const languages = ["All", "English", "Hindi", "Tamil", "Bengali", "Telugu", "Marathi"];

  const filteredContent = (content: any[]) => {
    return content.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLanguage = selectedLanguage === "All" || 
                             item.language.includes(selectedLanguage);
      return matchesSearch && matchesLanguage;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-accent/20 to-primary-light/20 border-b border-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link to="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary-light rounded-full flex items-center justify-center">
              <Library className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-primary">Resource Library</h1>
              <p className="text-sm text-muted-foreground">Wellness content in your language</p>
            </div>
          </div>
        </div>
      </header>

      <div className="p-4">
        {/* Search and Filters */}
        <div className="space-y-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            <span className="text-sm font-medium text-primary whitespace-nowrap">Language:</span>
            {languages.map((lang) => (
              <Button
                key={lang}
                variant={selectedLanguage === lang ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedLanguage(lang)}
                className="whitespace-nowrap"
              >
                {lang}
              </Button>
            ))}
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="audio" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="audio">Relaxation Audios</TabsTrigger>
            <TabsTrigger value="guides">Wellness Guides</TabsTrigger>
            <TabsTrigger value="videos">Mental Health Videos</TabsTrigger>
          </TabsList>

          {/* Relaxation Audios Tab */}
          <TabsContent value="audio" className="space-y-4">
            <div className="grid gap-4">
              {filteredContent(relaxationAudios).map((audio, index) => (
                <Card key={index} className="card-feature">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{audio.thumbnail}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-primary">{audio.title}</h4>
                          <Button size="sm" className="btn-soft">
                            <Play className="w-4 h-4 mr-2" />
                            Play
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{audio.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="text-xs">
                              <Headphones className="w-3 h-3 mr-1" />
                              {audio.duration}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              <Globe className="w-3 h-3 mr-1" />
                              {audio.language}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {audio.category}
                            </Badge>
                          </div>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Download className="w-3 h-3 mr-1" />
                            {audio.downloads}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Wellness Guides Tab */}
          <TabsContent value="guides" className="space-y-4">
            <div className="grid gap-4">
              {filteredContent(wellnessGuides).map((guide, index) => (
                <Card key={index} className="card-feature">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-primary">{guide.title}</h4>
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{guide.description}</p>
                        <p className="text-xs text-muted-foreground mb-3">By {guide.author}</p>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-xs">
                            📄 {guide.pages} pages
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            🗣️ {guide.language}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {guide.category}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {guide.format}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Mental Health Videos Tab */}
          <TabsContent value="videos" className="space-y-4">
            <div className="grid gap-4">
              {filteredContent(mentalHealthVideos).map((video, index) => (
                <Card key={index} className="card-feature">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{video.thumbnail}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-primary">{video.title}</h4>
                          <Button size="sm" className="btn-soft">
                            <Video className="w-4 h-4 mr-2" />
                            Watch
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{video.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="text-xs">
                              ⏱️ {video.duration}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              🗣️ {video.language}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {video.category}
                            </Badge>
                          </div>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Eye className="w-3 h-3 mr-1" />
                            {video.views} views
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Featured Collection */}
        <div className="mt-8">
          <Card className="border-dashed border-2 border-accent/30">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Library className="w-5 h-5 mr-2 text-accent-purple" />
                Featured Collection: Exam Season Support
              </CardTitle>
              <CardDescription>
                Curated resources to help you navigate exam stress with confidence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-primary/5 rounded-lg">
                  <div className="text-2xl mb-2">📚</div>
                  <p className="text-sm font-medium">Study Guides</p>
                  <p className="text-xs text-muted-foreground">12 resources</p>
                </div>
                <div className="text-center p-3 bg-success/5 rounded-lg">
                  <div className="text-2xl mb-2">🧘‍♀️</div>
                  <p className="text-sm font-medium">Relaxation</p>
                  <p className="text-xs text-muted-foreground">8 audios</p>
                </div>
                <div className="text-center p-3 bg-wellness/5 rounded-lg">
                  <div className="text-2xl mb-2">💪</div>
                  <p className="text-sm font-medium">Motivation</p>
                  <p className="text-xs text-muted-foreground">6 videos</p>
                </div>
                <div className="text-center p-3 bg-accent/5 rounded-lg">
                  <div className="text-2xl mb-2">🎯</div>
                  <p className="text-sm font-medium">Focus Tips</p>
                  <p className="text-xs text-muted-foreground">10 guides</p>
                </div>
              </div>
              <Button className="w-full mt-4 btn-soft">
                Explore Collection
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Request Content */}
        <Card className="mt-6 border-dashed border-2 border-primary/30">
          <CardContent className="p-4 text-center">
            <h4 className="font-semibold text-primary mb-2">Need specific content?</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Request resources in your preferred language or topic
            </p>
            <Button variant="outline" className="btn-soft">
              Request Content
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResourceLibrary;