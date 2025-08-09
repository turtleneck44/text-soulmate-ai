import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      q: "How realistic are the conversations?",
      a: "Our AI uses advanced language models and memory to create natural, contextual conversations that feel genuine and engaging.",
    },
    {
      q: "Do I need to install an app?",
      a: "No app required. You receive real SMS messages directly on your phone number—works with iPhone, Android, or basic phones.",
    },
    {
      q: "Can I customize my AI girlfriend?",
      a: "Yes. Choose her name, personality, interests, tone, and message schedule. You can adjust settings anytime.",
    },
    {
      q: "Is my privacy protected?",
      a: "We prioritize privacy. Your conversations are private and secure, and you stay in control of your data.",
    },
    {
      q: "What happens if I cancel?",
      a: "You can cancel anytime. Your plan will remain active until the end of your billing period.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about TextSoulmate and how it works.
          </p>
        </div>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faqs.map((item, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left text-foreground">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
