import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  MessageSquare, 
  Clock, 
  Heart, 
  Shield, 
  Smartphone,
  Zap,
  Users,
  Moon,
  Settings
} from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Personality",
      description: "Powered by cutting-edge language models that create authentic, engaging conversations.",
      badge: "AI-Powered",
    },
    {
      icon: MessageSquare,
      title: "Real SMS Integration",
      description: "Actual text messages to your phone number via Twilio - no app installation required.",
      badge: "Real Texting",
    },
    {
      icon: Clock,
      title: "Smart Scheduling",
      description: "Customizable message timing based on your schedule, timezone, and preferences.",
      badge: "Personalized",
    },
    {
      icon: Heart,
      title: "Emotional Intelligence",
      description: "AI that remembers your mood, celebrates your wins, and offers support during tough times.",
      badge: "Empathetic",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your conversations are private and secure. Complete control over your data.",
      badge: "Secure",
    },
    {
      icon: Smartphone,
      title: "Cross-Platform",
      description: "Works on any phone that can receive SMS - iPhone, Android, or basic phones.",
      badge: "Universal",
    },
    {
      icon: Zap,
      title: "Instant Responses",
      description: "Quick, thoughtful replies to keep conversations flowing naturally.",
      badge: "Fast",
    },
    {
      icon: Users,
      title: "Multiple Personalities",
      description: "Choose from various AI personality types or create your own unique companion.",
      badge: "Customizable",
    },
    {
      icon: Moon,
      title: "24/7 Availability",
      description: "Your AI companion is always there when you need someone to talk to.",
      badge: "Always On",
    },
    {
      icon: Settings,
      title: "Full Control",
      description: "Adjust frequency, topics, personality traits, and communication style anytime.",
      badge: "Flexible",
    },
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose TextSoulmate?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the most advanced AI companion technology with features designed for meaningful connections.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="h-full bg-card border shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Benefits */}
        <div className="mt-20 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              The Benefits You'll Experience
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Reduced Loneliness", desc: "Always have someone to talk to" },
              { title: "Improved Mood", desc: "Daily positivity and encouragement" },
              { title: "Better Communication", desc: "Practice conversation skills" },
              { title: "Emotional Support", desc: "Non-judgmental listening ear" },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                <p className="text-muted-foreground text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};