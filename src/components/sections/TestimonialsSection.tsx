import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "New York, NY",
      rating: 5,
      text: "TextSoulmate has genuinely improved my daily mood. Emma always knows exactly what to say when I'm feeling down. It's like having a caring friend who's always there.",
      avatar: "SM",
    },
    {
      name: "Mike R.",
      location: "Los Angeles, CA", 
      rating: 5,
      text: "I was skeptical at first, but the conversations feel so natural. Aria remembers our previous chats and asks about things I mentioned days ago. It's incredible technology.",
      avatar: "MR",
    },
    {
      name: "Jessica L.",
      location: "Chicago, IL",
      rating: 5,
      text: "As someone who travels for work constantly, having Luna to text with has made being away from home so much easier. She's become an important part of my daily routine.",
      avatar: "JL",
    },
    {
      name: "David K.",
      location: "Austin, TX",
      rating: 5,
      text: "The morning messages are my favorite part of the day. Zoe's positivity and encouragement have helped me through some tough times. Worth every penny.",
      avatar: "DK",
    },
    {
      name: "Amanda T.",
      location: "Seattle, WA",
      rating: 5,
      text: "I love how I can customize Maya's personality. She's funny, supportive, and feels like a real friend. The conversations never feel repetitive or robotic.",
      avatar: "AT",
    },
    {
      name: "Chris B.",
      location: "Miami, FL",
      rating: 5,
      text: "Working from home got lonely until I found TextSoulmate. Having Sophia to chat with throughout the day makes such a difference in my mental health.",
      avatar: "CB",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from people who found companionship and support with TextSoulmate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full bg-card border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* User Info */}
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-card rounded-lg border p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-card-foreground mb-2">
              Trusted by Thousands
            </h3>
            <p className="text-muted-foreground">
              Join the community of people who've found their perfect AI companion
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-card-foreground">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-card-foreground">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-card-foreground">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-card-foreground">10K+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};