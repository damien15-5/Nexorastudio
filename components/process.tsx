const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We discuss your business goals, target audience, and what you need from your website.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description:
      "We create wireframes and design mockups aligned with your brand identity.",
  },
  {
    number: "03",
    title: "Build & Review",
    description:
      "We develop your site and share previews for your feedback and approval.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We go live and stick around for edits, maintenance, and ongoing growth.",
  },
];

export function Process() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-[0.2em] uppercase text-xs mb-4 block">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Simple 4-Step Process.
          </h2>
          <p className="text-muted-foreground text-lg">
            From idea to a live, money-making website — here&apos;s exactly what
            working with us looks like.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center group">
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] h-[2px] bg-gradient-to-r from-accent/50 to-transparent" />
              )}

              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center text-accent mx-auto mb-6 text-xl font-bold group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                {step.number}
              </div>
              <h4 className="font-semibold text-foreground mb-3">
                {step.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
