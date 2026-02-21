import React from "react";
import { motion } from "framer-motion";
import { Hammer, Bell, Wind, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FEATURES } from "@/lib/site-content";
const iconMap = {
  Ladder: Hammer,
  Bell: Bell,
  Wind: Wind,
};
export function Features() {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-bold text-primary uppercase tracking-widest mb-3">Why Us?</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">The Filter Renew Advantage</h3>
          <p className="text-muted-foreground text-lg">
            We've simplified air maintenance. Forget climbing ladders or searching for rare filter sizes—we handle everything.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] || ShieldCheck;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full border-none shadow-soft hover:shadow-xl transition-all duration-300 group rounded-3xl overflow-hidden bg-background">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                      <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}