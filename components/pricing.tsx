import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "80,000",
    description: "One-time payment",
    features: [
      "Up to 5 Pages",
      "Mobile Responsive",
      "Contact Form",
      "Basic SEO Setup",
      "1 Week Free Support",
    ],
    popular: false,
    highlighted: false,
  },
  {
    name: "Professional",
    price: "180,000",
    description: "One-time payment",
    features: [
      "Up to 10 Pages",
      "Mobile Responsive",
      "Contact & Booking Forms",
      "Full SEO Optimization",
      "Custom Animations",
      "1 Month Free Support",
    ],
    popular: true,
    highlighted: false,
  },
  {
    name: "Premium",
    price: "350,000",
    description: "One-time payment",
    features: [
      "Unlimited Pages",
      "Mobile Responsive",
      "Full SEO Optimization",
      "E-Commerce Integration",
      "Custom Animations",
      "Priority Support",
      "Google Analytics Setup",
      "3 Months Free Maintenance",
    ],
    popular: false,
    highlighted: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-[0.2em] uppercase text-xs mb-4 block">
            Transparent Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, Clear Packages.
          </h2>
          <p className="text-muted-foreground text-lg">
            No hidden charges. Pick a plan that fits your business, or contact
            us for a custom quote.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlighted
                  ? "bg-secondary border-2 border-accent"
                  : "bg-card border border-border"
              } hover:-translate-y-1 transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-accent to-cyan-400 text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              {plan.highlighted && !plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-accent to-cyan-400 text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full">
                    Best Value
                  </span>
                </div>
              )}

              <div className="mb-8">
                <p
                  className={`text-sm font-medium uppercase tracking-wider mb-2 ${
                    plan.highlighted ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  {plan.name}
                </p>
                <p className="font-bold text-4xl text-foreground">
                  <span className="text-lg">&#8358;</span>
                  {plan.price}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-3 text-sm ${
                      plan.highlighted
                        ? "text-foreground/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={`block w-full text-center px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-foreground text-background hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        {/* Custom quote section */}
        <div className="mt-16 rounded-2xl bg-card border border-border p-8 text-center">
          <p className="font-bold text-xl text-foreground mb-2">
            Need Something Beyond Our Packages?
          </p>
          <p className="text-muted-foreground text-sm mb-6 max-w-xl mx-auto">
            We build fully custom solutions tailored to your exact business
            needs — unique features, special integrations, or anything specific
            to your industry.
          </p>
          <a
            href="https://wa.me/2349035623261"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-secondary border border-border text-foreground rounded-xl font-semibold hover:border-accent hover:text-accent transition-all duration-300 text-sm"
          >
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          All prices are in Nigerian Naira. USD/other currencies available.{" "}
          <Link href="#contact" className="text-accent underline">
            Talk to us
          </Link>{" "}
          for a custom quote.
        </p>
      </div>
    </section>
  );
}
