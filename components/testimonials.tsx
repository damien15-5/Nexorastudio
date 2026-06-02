import Link from "next/link";
import { Clock, Heart, ShieldCheck, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Clock,
    title: "Fast Delivery",
    description:
      "We deliver your website on time without compromising on quality.",
  },
  {
    icon: Heart,
    title: "Client First",
    description:
      "Your satisfaction is our priority. We work until you are completely happy.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Quality",
    description:
      "Every website we build is professional, secure, and built to last.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <span className="text-accent font-medium tracking-[0.2em] uppercase text-xs mb-4 block">
          Client Satisfaction
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Our Work Speaks For Itself.
        </h2>
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          We are passionate about delivering websites that genuinely grow
          businesses. Every project we take on is treated with the same
          dedication, attention to detail, and commitment to excellence.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-card p-8 rounded-2xl border border-border"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center text-accent mx-auto mb-5">
                <value.icon className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                {value.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="p-8 bg-secondary rounded-2xl border border-border">
          <p className="text-foreground text-xl font-semibold mb-4">
            &ldquo;Be our next success story — let&apos;s build something
            remarkable together.&rdquo;
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl font-semibold hover:bg-accent/90 transition-colors group"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
