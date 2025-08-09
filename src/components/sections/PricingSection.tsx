import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

export const PricingSection = () => {
  const plans = [
    {
      name: "Casual Chat",
      price: "$9.99",
      period: "/month",
      description: "Perfect for occasional conversations",
      features: [
        "Up to 50 messages per month",
        "Basic AI personality",
        "Morning & evening texts",
        "Email support",
        "Basic customization",
      ],
      buttonText: "Start Free Trial",
      popular: false,
    },
    {
      name: "Daily Companion",
      price: "$19.99",
      period: "/month",
      description: "For those who want regular connection",
      features: [
        "Unlimited messages",
        "Advanced AI personality",
        "24/7 availability",
        "Custom scheduling",
        "Priority support",
        "Multiple personality options",
        "Mood tracking",
      ],
      buttonText: "Most Popular",
      popular: true,
    },
    {
      name: "Premium Soulmate",
      price: "$39.99",
      period: "/month",
      description: "The ultimate AI companion experience",
      features: [
        "Everything in Daily Companion",
        "Ultra-advanced AI with memory",
        "Voice message integration",
        "Photo sharing capability",
        "Relationship milestones",
        "Premium personalities",
        "1-on-1 support",
        "Early access to new features",
      ],
      buttonText: "Go Premium",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start with a free trial and find the plan that fits your needs. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative h-full bg-card border shadow-sm hover:shadow-lg transition-all duration-300 ${
                plan.popular ? 'border-primary shadow-primary/20 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  <Star className="w-3 h-3 mr-1" />
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-card-foreground mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-card-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-card-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                  size="lg"
                  asChild
                >
                  <a href="#get-started" aria-label={`Choose ${plan.name} plan`}>
                    {plan.buttonText}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-lg border p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-card-foreground mb-2">
              7-Day Money-Back Guarantee
            </h3>
            <p className="text-muted-foreground">
              Not satisfied? Get a full refund within 7 days, no questions asked. We're confident you'll love your AI companion.
            </p>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="mt-16 bg-card rounded-lg border p-8">
          <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-card-foreground mb-2">How realistic are the conversations?</h4>
              <p className="text-muted-foreground text-sm">Our AI uses advanced language models to create natural, contextual conversations that feel genuine and engaging.</p>
            </div>
            <div>
              <h4 className="font-semibold text-card-foreground mb-2">Can I customize my AI girlfriend?</h4>
              <p className="text-muted-foreground text-sm">Yes! Choose her personality, interests, communication style, and even her name to make her uniquely yours.</p>
            </div>
            <div>
              <h4 className="font-semibold text-card-foreground mb-2">Is my privacy protected?</h4>
              <p className="text-muted-foreground text-sm">Absolutely. Your conversations are encrypted and private. We never share your data with third parties.</p>
            </div>
            <div>
              <h4 className="font-semibold text-card-foreground mb-2">What if I want to cancel?</h4>
              <p className="text-muted-foreground text-sm">You can cancel anytime with no fees. Your subscription will continue until the end of your billing period.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};