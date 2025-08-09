import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquareHeart, ArrowRight, Sparkles } from "lucide-react";

export const CTASection = () => {
  return (
    <section id="get-started" className="py-20 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto bg-card border shadow-xl">
          <div className="p-8 md:p-12 text-center">
            {/* Icon */}
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageSquareHeart className="h-8 w-8 text-primary" />
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
              Ready to Meet Your Perfect AI Companion?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of people who've found meaningful connection, daily support, and genuine companionship with TextSoulmate.
            </p>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="text-card-foreground font-medium">7-Day Free Trial</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="text-card-foreground font-medium">No Setup Required</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="text-card-foreground font-medium">Cancel Anytime</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 group" asChild>
                <a href="#pricing">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <a href="#how-it-works">See Live Demo</a>
              </Button>
            </div>

            {/* Trust Elements */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-card-foreground">4.9★</div>
                  <div className="text-sm text-muted-foreground">User Rating</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-card-foreground">10K+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-card-foreground">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-card-foreground">SSL</div>
                  <div className="text-sm text-muted-foreground">Secure</div>
                </div>
              </div>
            </div>

            {/* Final Assurance */}
            <p className="text-muted-foreground text-sm mt-6">
              Start texting with your AI companion in under 2 minutes. No credit card required for trial.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};