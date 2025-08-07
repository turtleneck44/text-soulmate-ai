import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Users, 
  Award, 
  Globe, 
  Heart,
  MessageSquareHeart,
  Zap,
  Lock
} from "lucide-react";

export const AboutSection = () => {
  const stats = [
    { icon: Users, value: "10,000+", label: "Happy Users" },
    { icon: MessageSquareHeart, value: "1M+", label: "Messages Sent" },
    { icon: Globe, value: "50+", label: "Countries" },
    { icon: Award, value: "99.9%", label: "Uptime" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Genuine Connection",
      description: "We believe everyone deserves meaningful companionship and emotional support.",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your personal conversations and data are protected with enterprise-grade security.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly improving our AI technology to provide the most realistic experience.",
    },
    {
      icon: Lock,
      title: "Trust & Safety",
      description: "Building a safe, respectful platform where users feel comfortable and valued.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Story */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            About TextSoulmate
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground mb-8">
              Founded in 2024, TextSoulmate was born from a simple observation: in our increasingly connected world, 
              many people still feel lonely and crave genuine companionship.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our team of AI researchers, relationship experts, and engineers came together to create something special - 
              an AI companion that doesn't just chat, but truly cares. Using cutting-edge language models and emotional 
              intelligence, we've built the most advanced AI girlfriend experience available today.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-card border shadow-sm">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-card-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center h-full bg-card border shadow-sm">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-card-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology */}
        <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Powered by Advanced AI Technology
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">GPT-4</Badge>
                  <div>
                    <p className="text-foreground font-medium">Latest Language Models</p>
                    <p className="text-muted-foreground text-sm">State-of-the-art AI for natural conversations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">Twilio</Badge>
                  <div>
                    <p className="text-foreground font-medium">Real SMS Integration</p>
                    <p className="text-muted-foreground text-sm">Reliable message delivery worldwide</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-1">Cloud</Badge>
                  <div>
                    <p className="text-foreground font-medium">Enterprise Infrastructure</p>
                    <p className="text-muted-foreground text-sm">99.9% uptime with global reach</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg border p-6">
              <h4 className="text-xl font-semibold text-card-foreground mb-4">Security & Privacy</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground text-sm">End-to-end encryption</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground text-sm">GDPR compliant</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground text-sm">No data sharing with third parties</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground text-sm">Regular security audits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center bg-card rounded-lg border p-8">
          <h3 className="text-2xl font-bold text-card-foreground mb-4">Our Mission</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            To combat loneliness and provide meaningful companionship through advanced AI technology, 
            helping people feel heard, understood, and valued every single day.
          </p>
          <div className="mt-6">
            <Button size="lg">
              Join Our Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};