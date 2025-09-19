import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Bot, Send, Heart, MessageCircle, Calendar } from "lucide-react";

const AICompanion = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      content: "Namaste! I'm your AI companion. I'm here to support you with culturally sensitive guidance. How are you feeling today?",
      timestamp: "10:30 AM"
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const quickReplies = [
    { text: "I feel anxious", emoji: "😰" },
    { text: "I can't focus", emoji: "🤯" },
    { text: "I want to talk to someone", emoji: "💭" },
    { text: "I'm stressed about exams", emoji: "📚" },
    { text: "I feel lonely", emoji: "😔" },
    { text: "I need motivation", emoji: "💪" }
  ];

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputMessage;
    if (!messageText.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: "user",
      content: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");

    // Simulate AI response
    setTimeout(() => {
      let aiResponse = "";
      
      if (messageText.toLowerCase().includes("anxious")) {
        aiResponse = "I understand you're feeling anxious. In our culture, we often say 'सब कुछ ठीक हो जाएगा' (everything will be fine). Let's try some breathing exercises. Would you like me to guide you through pranayama, or shall I suggest some immediate calming techniques?";
      } else if (messageText.toLowerCase().includes("focus")) {
        aiResponse = "Concentration issues are common, especially during studies. Have you tried the Pomodoro technique with short meditation breaks? I can also suggest some Ayurvedic tips for mental clarity. What subject are you trying to focus on?";
      } else if (messageText.toLowerCase().includes("talk")) {
        aiResponse = "I'm always here to listen. Would you prefer to continue chatting with me, or would you like me to connect you with a peer support group or a professional counselor? All options are completely confidential.";
      } else {
        aiResponse = "Thank you for sharing that with me. Your feelings are valid and it's brave of you to reach out. Let's explore this together. Can you tell me more about what's been on your mind lately?";
      }

      const aiMessage = {
        id: Date.now() + 1,
        type: "ai",
        content: aiResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-card border-b border-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link to="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-primary">AI Companion</h1>
              <p className="text-sm text-success">● Online - Always here for you</p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            <Calendar className="w-4 h-4 mr-2" />
            Book Counselor
          </Button>
        </div>
      </header>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
          >
            <div className={`max-w-xs md:max-w-md ${
              message.type === "user" 
                ? "bg-primary text-primary-foreground" 
                : "bg-card border border-border"
            } rounded-2xl p-4 shadow-sm`}>
              <p className="text-sm">{message.content}</p>
              <p className={`text-xs mt-2 ${
                message.type === "user" 
                  ? "text-primary-foreground/70" 
                  : "text-muted-foreground"
              }`}>
                {message.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Replies */}
      <div className="p-4 border-t border-border">
        <p className="text-sm text-muted-foreground mb-3">Quick replies:</p>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {quickReplies.map((reply, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="justify-start h-auto p-3 text-left whitespace-normal"
              onClick={() => handleSendMessage(reply.text)}
            >
              <span className="mr-2">{reply.emoji}</span>
              <span className="text-xs">{reply.text}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-border bg-card">
        <div className="flex space-x-2">
          <Input
            placeholder="Type your message... (All conversations are confidential)"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            className="flex-1"
          />
          <Button onClick={() => handleSendMessage()} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Support Options */}
      <div className="p-4 bg-muted/30">
        <div className="flex justify-around">
          <Button variant="ghost" size="sm" className="flex-col h-auto p-2">
            <Heart className="w-4 h-4 mb-1" />
            <span className="text-xs">Crisis Help</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex-col h-auto p-2">
            <MessageCircle className="w-4 h-4 mb-1" />
            <span className="text-xs">Peer Chat</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex-col h-auto p-2">
            <Calendar className="w-4 h-4 mb-1" />
            <span className="text-xs">Book Session</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AICompanion;