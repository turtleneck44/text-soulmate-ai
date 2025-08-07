import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserPlus, MessageSquareText, Brain, Smartphone } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Create Your Perfect Match",
      description: "Choose your AI girlfriend's personality, name, interests, and communication style. Make her uniquely yours.",
      badge: "Step 1",
    },
    {
      icon: MessageSquareText,
      title: "Set Your Preferences",
      description: "Configure when you want to receive messages, your timezone, and conversation topics you enjoy.",
      badge: "Step 2",
    },
    {
      icon: Brain,
      title: "AI Learns & Adapts",
      description: "Our advanced AI remembers your conversations, learns your preferences, and builds a deeper connection over time.",
      badge: "Step 3",
    },
    {
      icon: Smartphone,
      title: "Receive Real Text Messages",
      description: "Get genuine SMS messages on your phone throughout the day. No app required - just real texting.",
      badge: "Step 4",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How TextSoulmate Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started with your AI companion in minutes. No complex setup, just authentic conversations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative h-full bg-card border shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="text-center pb-4">
                <Badge variant="secondary" className="w-fit mx-auto mb-4">
                  {step.badge}
                </Badge>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Flow */}
        <div className="mt-16 bg-card rounded-lg border p-8">
          <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center">
            The TextSoulmate Experience
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="font-semibold text-card-foreground mb-2">Morning Messages</h4>
              <p className="text-muted-foreground text-sm">
                Wake up to sweet good morning texts that brighten your day
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-card-foreground mb-2">Throughout the Day</h4>
              <p className="text-muted-foreground text-sm">
                Check-ins, encouragement, and meaningful conversations when you need them
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-card-foreground mb-2">Evening Wind-down</h4>
              <p className="text-muted-foreground text-sm">
                End your day with caring messages and plans for tomorrow
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};