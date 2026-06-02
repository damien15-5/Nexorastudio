import { Triangle, Hexagon, CircleDashed, Box, Activity, Zap } from "lucide-react";

const clients = [
  { name: "Vertex", icon: Triangle },
  { name: "HexaCorp", icon: Hexagon },
  { name: "Orbit Inc.", icon: CircleDashed },
  { name: "BlockTech", icon: Box },
  { name: "Pulse", icon: Activity },
  { name: "SwiftPay", icon: Zap },
];

export function TrustedBy() {
  return (
    <section className="py-16 border-y border-border bg-card/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <p className="text-center text-xs font-medium text-muted-foreground mb-8 uppercase tracking-[0.2em]">
          Trusted by innovative businesses
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center gap-2 text-muted-foreground/50 hover:text-foreground transition-colors duration-300"
            >
              <client.icon className="w-5 h-5" />
              <span className="font-semibold text-sm">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
