import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, MessageCircle, Heart, Plus, Eye, ThumbsUp, Send, Shield } from "lucide-react";

const CircleOfTrust = () => {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [newPost, setNewPost] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(true);

  const discussionRooms = [
    {
      id: "stress",
      title: "Stress Management",
      description: "Share your stress coping strategies",
      members: 234,
      activeNow: 12,
      gradient: "from-orange-100 to-yellow-100",
      icon: "😤"
    },
    {
      id: "anxiety",
      title: "Anxiety Support",
      description: "Understanding and managing anxiety together",
      members: 189,
      activeNow: 8,
      gradient: "from-blue-100 to-indigo-100",
      icon: "😰"
    },
    {
      id: "exams",
      title: "Exam Pressure",
      description: "Dealing with academic stress and exam anxiety",
      members: 312,
      activeNow: 15,
      gradient: "from-purple-100 to-pink-100",
      icon: "📚"
    },
    {
      id: "loneliness",
      title: "Loneliness & Connection",
      description: "Finding community and overcoming isolation",
      members: 156,
      activeNow: 6,
      gradient: "from-teal-100 to-green-100",
      icon: "😔"
    },
    {
      id: "family",
      title: "Family Expectations",
      description: "Navigating family pressures and expectations",
      members: 278,
      activeNow: 10,
      gradient: "from-rose-100 to-red-100",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      id: "future",
      title: "Career Anxiety",
      description: "Worries about future and career decisions",
      members: 195,
      activeNow: 7,
      gradient: "from-emerald-100 to-cyan-100",
      icon: "🎯"
    }
  ];

  const samplePosts = [
    {
      id: 1,
      author: "Anonymous Student",
      time: "2 hours ago",
      content: "I've been feeling overwhelmed with semester exams approaching. The pressure from family to perform well is adding to my stress. Anyone else going through something similar?",
      likes: 12,
      replies: 8,
      tags: ["#examstress", "#family"]
    },
    {
      id: 2,
      author: "Anonymous Helper",
      time: "4 hours ago",
      content: "Reminder: It's okay to take breaks. I've learned that 25-minute study sessions with 5-minute breaks work better than cramming for hours. Your mental health matters more than perfect grades. ✨",
      likes: 28,
      replies: 15,
      tags: ["#selfcare", "#motivation"]
    },
    {
      id: 3,
      author: "Anonymous Peer",
      time: "6 hours ago",
      content: "Started doing morning meditation following the pranayama techniques shared here last week. It's helping me feel more centered. Thank you to whoever suggested it! 🙏",
      likes: 19,
      replies: 6,
      tags: ["#meditation", "#gratitude"]
    }
  ];

  if (selectedRoom) {
    const room = discussionRooms.find(r => r.id === selectedRoom);
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-card border-b border-border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon" onClick={() => setSelectedRoom(null)}>
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className={`w-10 h-10 bg-gradient-to-br ${room?.gradient} rounded-full flex items-center justify-center text-lg`}>
                {room?.icon}
              </div>
              <div>
                <h1 className="font-semibold text-primary">{room?.title}</h1>
                <p className="text-sm text-muted-foreground">
                  {room?.members} members • {room?.activeNow} active now
                </p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-success/10 text-success">
              Anonymous
            </Badge>
          </div>
        </header>

        {/* Posts Feed */}
        <div className="p-4 space-y-4">
          {/* New Post */}
          <Card className="border-dashed border-2 border-primary/30">
            <CardContent className="p-4">
              <Textarea
                placeholder="Share your thoughts, experiences, or ask for support... (Anonymous posting enabled)"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                className="mb-3 border-none resize-none focus:ring-0"
                rows={3}
              />
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <Badge variant="outline" className="text-xs">Anonymous</Badge>
                  <Badge variant="outline" className="text-xs">Moderated</Badge>
                </div>
                <Button size="sm" className="btn-soft">
                  <Send className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Sample Posts */}
          {samplePosts.map((post) => (
            <Card key={post.id} className="card-feature">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{post.author}</p>
                      <p className="text-xs text-muted-foreground">{post.time}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">Anonymous</Badge>
                </div>
                
                <p className="text-sm mb-3 leading-relaxed">{post.content}</p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      {post.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      {post.replies}
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link to="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="w-10 h-10 bg-gradient-to-br from-secondary-accent to-wellness rounded-full flex items-center justify-center">
              <Users className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-primary">Circle of Trust</h1>
              <p className="text-sm text-muted-foreground">Anonymous peer support</p>
            </div>
          </div>
        </div>
      </header>

      <div className="p-4">
        {/* Welcome Message */}
        <div className="card-calm mb-6">
          <h2 className="text-lg font-semibold text-primary mb-2">
            Welcome to your safe space 🤗
          </h2>
          <p className="text-muted-foreground text-sm mb-3">
            All discussions are anonymous and moderated. Share your experiences, offer support, 
            and connect with peers who understand what you're going through.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-success/10 text-success">
              Anonymous
            </Badge>
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              Moderated 24/7
            </Badge>
            <Badge variant="secondary" className="bg-wellness/10 text-wellness">
              Stigma-free
            </Badge>
          </div>
        </div>

        {/* Discussion Rooms */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">Discussion Rooms</h3>
          <div className="grid gap-4">
            {discussionRooms.map((room) => (
              <Card
                key={room.id}
                className="card-feature cursor-pointer group"
                onClick={() => setSelectedRoom(room.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      <div className={`w-12 h-12 bg-gradient-to-br ${room.gradient} rounded-xl flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-300`}>
                        {room.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary mb-1">{room.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{room.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span>{room.members} members</span>
                          <span className="flex items-center">
                            <div className="w-2 h-2 bg-success rounded-full mr-1"></div>
                            {room.activeNow} active
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="opacity-50 group-hover:opacity-100">
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Guidelines */}
        <Card className="mt-6 border-dashed border-2 border-muted">
          <CardHeader>
            <CardTitle className="text-sm flex items-center">
              <Shield className="w-4 h-4 mr-2 text-primary" />
              Community Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-xs text-muted-foreground space-y-1">
              <p>• Be kind and respectful to all members</p>
              <p>• Keep discussions supportive and constructive</p>
              <p>• Respect anonymity - don't try to identify others</p>
              <p>• Report any inappropriate content to moderators</p>
              <p>• Seek professional help for crisis situations</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CircleOfTrust;