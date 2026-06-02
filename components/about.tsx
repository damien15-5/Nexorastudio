import Image from "next/image";
import Link from "next/link";
import { Check, Award, Star, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Fast & Reliable Delivery",
    description:
      "We respect your deadlines and deliver quality results on time, every time.",
  },
  {
    title: "Conversion-Focused Design",
    description:
      "Strategic layouts built to convert visitors into paying clients.",
  },
  {
    title: "Modern, Future-Ready Tech",
    description:
      "Built with clean HTML5, CSS3, and JavaScript for speed and performance.",
  },
  {
    title: "Ongoing Support Included",
    description:
      "We don't disappear after launch — we're with you for the long haul.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="absolute inset-0 bg-accent/10 translate-x-4 translate-y-4 rounded-2xl" />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden glow">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
                alt="Nexora Studio team collaborating"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating cards */}
            <div className="absolute -bottom-6 -right-6 bg-card p-5 rounded-xl border border-border hidden md:flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-2xl text-foreground">100+</p>
                <p className="text-xs text-muted-foreground">
                  Websites Delivered
                </p>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 bg-secondary p-4 rounded-xl border border-border hidden md:flex items-center gap-3">
              <Star className="w-5 h-5 text-accent" />
              <p className="text-xs text-foreground font-medium">
                Top-Rated Agency
              </p>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <span className="text-accent font-medium tracking-[0.2em] uppercase text-xs mb-4 block">
              About Nexora Studio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Your Partner in Digital Excellence.
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              We are a premium B2B web design agency dedicated to building
              high-impact digital experiences. We don&apos;t just build websites
              — we craft scalable digital assets that attract clients, build
              authority, and drive measurable revenue for your business.
            </p>

            <ul className="space-y-6 mb-10">
              {features.map((feature) => (
                <li key={feature.title} className="flex items-start gap-4">
                  <div className="mt-1 bg-accent/10 p-1.5 rounded-lg text-accent flex-shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-foreground block font-semibold text-sm">
                      {feature.title}
                    </strong>
                    <span className="text-sm text-muted-foreground">
                      {feature.description}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="#services"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:text-foreground transition-colors group"
            >
              Explore Our Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
