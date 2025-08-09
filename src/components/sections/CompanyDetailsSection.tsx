import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Shield, Clock8, Globe, MessageSquareHeart } from "lucide-react";

export const CompanyDetailsSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Company Details & Contact</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn about TextSoulmate and how to get in touch. We’re here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-card border">
            <CardHeader>
              <CardTitle className="text-card-foreground flex items-center gap-2">
                <MessageSquareHeart className="h-5 w-5 text-primary" /> About Us
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              TextSoulmate provides authentic AI companionship via real SMS. Customize personality, schedule, and topics to fit your life.
            </CardContent>
          </Card>

          <Card className="bg-card border">
            <CardHeader>
              <CardTitle className="text-card-foreground flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" /> Support Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a href="mailto:support@textsoulmate.com" className="text-primary">support@textsoulmate.com</a>
              <p className="text-muted-foreground text-sm mt-2">We typically respond within 24 hours.</p>
            </CardContent>
          </Card>

          <Card className="bg-card border">
            <CardHeader>
              <CardTitle className="text-card-foreground flex items-center gap-2">
                <Clock8 className="h-5 w-5 text-primary" /> Support Hours
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Monday–Sunday, 24/7. Priority support for Premium plans.
            </CardContent>
          </Card>

          <Card className="bg-card border">
            <CardHeader>
              <CardTitle className="text-card-foreground flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" /> Privacy & Safety
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Your data stays private and secure. You control what’s stored and can request deletion anytime.
            </CardContent>
          </Card>

          <Card className="bg-card border">
            <CardHeader>
              <CardTitle className="text-card-foreground flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" /> Availability
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Works in most countries that support SMS delivery. Message frequency and costs may vary by region.
            </CardContent>
          </Card>

          <Card className="bg-card border">
            <CardHeader>
              <CardTitle className="text-card-foreground">Get Started</CardTitle>
            </CardHeader>
            <CardContent>
              <Button size="lg" className="w-full" asChild><a href="#pricing">Start Your Free Trial</a></Button>
              <p className="text-muted-foreground text-xs mt-3">No credit card required for the trial. Cancel anytime.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CompanyDetailsSection;
