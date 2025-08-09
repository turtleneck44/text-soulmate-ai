import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";
import { FAQSection } from "@/components/sections/FAQSection";
import { CompanyDetailsSection } from "@/components/sections/CompanyDetailsSection";
import SEO from "@/components/seo/SEO";

const Index = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "TextSoulmate",
      url: window.location.origin,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How realistic are the conversations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our AI uses advanced language models and memory to create natural, contextual conversations that feel genuine and engaging.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to install an app?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No app required. You receive real SMS messages directly on your phone number—works with iPhone, Android, or basic phones.",
          },
        },
        {
          "@type": "Question",
          name: "Is my privacy protected?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We prioritize privacy. Your conversations are private and secure, and you stay in control of your data.",
          },
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="TextSoulmate – AI Girlfriend via Real SMS"
        description="Create your AI girlfriend and get real SMS messages. Learn how it works, why to use it, pricing, and FAQs."
        jsonLd={jsonLd}
      />
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <AboutSection />
      <FAQSection />
      <CompanyDetailsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
