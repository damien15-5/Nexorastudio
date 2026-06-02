import {
  LayoutTemplate,
  ShoppingCart,
  MousePointerClick,
  RefreshCw,
  Search,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: LayoutTemplate,
    title: "Business Websites",
    description:
      "Corporate sites that communicate your brand value, showcase services, and generate qualified leads for your business.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Stores",
    description:
      "Beautiful, secure, and easy-to-manage online stores designed to maximize sales and improve customer retention.",
  },
  {
    icon: MousePointerClick,
    title: "Landing Pages",
    description:
      "High-converting single pages built for campaigns, product launches, or specific service offerings that drive action.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    description:
      "Transform your outdated website into a modern, fast, and mobile-friendly platform that meets today's standards.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Technical and on-page SEO setup to rank your business higher on Google and attract consistent organic traffic.",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Support",
    description:
      "Regular updates, security monitoring, backups, and content changes so your website stays fast, safe, and current.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-[0.2em] uppercase text-xs mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comprehensive Web Solutions.
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything your business needs to establish a dominant online
            presence, from design to launch and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card p-8 rounded-2xl border border-border hover:border-accent/50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center text-muted-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 mb-6">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
