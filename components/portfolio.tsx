import Image from "next/image";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Nexora Studio",
    category: "Business Website",
    description:
      "Our own agency website — fully responsive B2B web agency site with portfolio, pricing and contact form.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    link: "https://rubyx270809.github.io/nexorastudio",
  },
  {
    title: "TechFlow Dashboard",
    category: "SaaS Platform",
    description:
      "A modern analytics dashboard with real-time data visualization and intuitive user interface.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    title: "Artisan Bakery",
    category: "E-Commerce",
    description:
      "Beautiful online store for a local bakery featuring online ordering and delivery integration.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-[0.2em] uppercase text-xs mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects.
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore some of the websites we&apos;ve designed and developed for
            modern businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-foreground rounded-full text-background hover:bg-accent hover:text-accent-foreground transition-colors"
                    aria-label={`View ${project.title}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-accent uppercase tracking-wider">
                  {project.category}
                </span>
                <h4 className="font-semibold text-foreground mt-2 mb-2">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
