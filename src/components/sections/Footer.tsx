import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useRef } from "react";
import { MessageSquareHeart, Twitter, Instagram, Facebook, Mail } from "lucide-react";

export const Footer = () => {
  const footerLinks = {
    product: [
      { name: "How It Works", href: "#how-it-works" },
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "AI Personalities", href: "#features" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "#contact" },
      { name: "Status", href: "#" },
      { name: "Safety", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Data Protection", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  const emailRef = useRef<HTMLInputElement>(null);

  return (
    <footer className="bg-muted/20 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <MessageSquareHeart className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold text-foreground">TextSoulmate</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-sm">
                The most advanced AI companion experience. Find meaningful connection and emotional support through authentic conversations.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button key={index} variant="ghost" size="icon" asChild>
                    <a href={social.href} aria-label={social.label}>
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-border">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">Get the latest news and updates about TextSoulmate features.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                ref={emailRef}
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button onClick={() => {
                const value = emailRef.current?.value?.trim();
                if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                  toast({ title: "Please enter a valid email" });
                  return;
                }
                toast({ title: "Subscribed!", description: `We'll keep you updated at ${value}.` });
                if (emailRef.current) emailRef.current.value = "";
              }}>Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2024 TextSoulmate. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-muted-foreground">Made with ❤️ for meaningful connections</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};