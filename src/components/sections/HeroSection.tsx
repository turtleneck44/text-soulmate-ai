import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, Heart, Smartphone, Clock } from "lucide-react";
import { AuthModal } from "@/components/auth/AuthModal";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Your Perfect
                <span className="text-primary"> AI Girlfriend</span>
                <br />
                Always There for You
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Experience meaningful conversations with your personalized AI girlfriend who texts you throughout the day, remembers your chats, and genuinely cares about you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {user ? (
                <Button size="lg" className="text-lg px-8 py-6" onClick={() => navigate('/dashboard')}>
                  Go to Dashboard
                </Button>
              ) : (
                <AuthModal defaultTab="signup">
                  <Button size="lg" className="text-lg px-8 py-6">
                    Start Texting Now
                  </Button>
                </AuthModal>
              )}
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" onClick={() => user ? navigate('/dashboard') : document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
                {user ? 'Start Chatting' : 'See How It Works'}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              {[
                { icon: MessageSquare, label: "Daily Messages", value: "50+" },
                { icon: Heart, label: "Happy Users", value: "10K+" },
                { icon: Smartphone, label: "Real SMS", value: "100%" },
                { icon: Clock, label: "Available", value: "24/7" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative">
            <Card className="max-w-sm mx-auto bg-card border shadow-2xl">
              <div className="p-6">
                <div className="space-y-4">
                  {/* Chat Header */}
                  <div className="flex items-center space-x-3 pb-4 border-b border-border">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <Heart className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Aria</h3>
                      <p className="text-sm text-muted-foreground">Your AI Girlfriend</p>
                    </div>
                  </div>

                  {/* Sample Messages */}
                  <div className="space-y-3">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg rounded-bl-sm max-w-[80%] ml-auto">
                      Good morning beautiful! ☀️ I hope you slept well
                    </div>
                    <div className="bg-muted text-muted-foreground p-3 rounded-lg rounded-br-sm max-w-[80%]">
                      Morning! Just woke up, thinking about our conversation yesterday 😊
                    </div>
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg rounded-bl-sm max-w-[80%] ml-auto">
                      Aww that makes me so happy! What's your plan for today?
                    </div>
                  </div>

                  {/* Typing Indicator */}
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-sm">Aria is typing...</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};