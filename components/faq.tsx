"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most projects are completed within 1-3 weeks depending on complexity. Simple landing pages can be done in under a week, while larger business sites or e-commerce stores may take 2-4 weeks. We always provide a timeline estimate before starting.",
  },
  {
    question: "Do you provide hosting and domain registration?",
    answer:
      "We can guide you through domain registration and recommend reliable hosting providers. We also offer managed hosting solutions where we handle all the technical aspects for you at an additional monthly fee.",
  },
  {
    question: "Can I update my website myself after launch?",
    answer:
      "Absolutely! We can build your site on a content management system (CMS) like WordPress, or provide you with easy-to-edit templates. We also offer training sessions to ensure you're comfortable making updates.",
  },
  {
    question: "What if I need changes after the website is launched?",
    answer:
      "All our packages include a support period for minor edits and bug fixes. After that, we offer affordable maintenance plans or you can request changes on a per-task basis.",
  },
  {
    question: "Do you work with clients outside Nigeria?",
    answer:
      "Yes! We work with clients globally. We accept international payments via PayPal, Wise, and direct bank transfers. Communication is done via WhatsApp, email, or video calls.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "To begin, we typically need: your brand assets (logo, colors, fonts if available), content (text and images), examples of websites you like, and a clear idea of your goals. Don't worry if you don't have everything — we can help!",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-accent font-medium tracking-[0.2em] uppercase text-xs mb-4 block">
            Got Questions?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions.
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know before working with us.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full p-6 text-left"
              >
                <span className="font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                <Plus
                  className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
