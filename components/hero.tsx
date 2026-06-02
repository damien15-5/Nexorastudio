import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm font-medium mb-8 border border-border animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-muted-foreground">Premium B2B Web Agency</span>
            <Sparkles className="w-4 h-4 text-accent" />
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8 animate-fade-up animate-delay-100">
            We Build
            <br />
            <span className="gradient-text">Professional</span>
            <br />
            Websites.
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up animate-delay-200 leading-relaxed">
            From startups to established companies — we craft fast, secure, and
            high-converting websites that turn visitors into paying clients.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-up animate-delay-300">
            <Link
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-foreground text-background rounded-xl font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Request a Website
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-4 bg-secondary text-foreground border border-border rounded-xl font-semibold hover:border-accent hover:text-accent transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 animate-fade-up animate-delay-400">
            {[
              { value: "100%", label: "Client Focused" },
              { value: "48hr", label: "Response Time" },
              { value: "SEO", label: "Optimized" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-bold text-3xl md:text-4xl text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
