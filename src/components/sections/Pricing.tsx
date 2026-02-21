import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { PRICING_PLANS } from "@/lib/site-content";
import { cn } from "@/lib/utils";
export function Pricing() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-6 border border-emerald-100"
          >
            Value Focused
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Transparent Pricing</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We believe in honest service. We match the price of filters from major retailers and charge a flat installation fee. No hidden costs or complex contracts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card
                className={cn(
                  "h-full relative overflow-hidden rounded-[2.5rem] border-2 transition-all duration-300",
                  plan.highlighted
                    ? "border-primary shadow-lg scale-105 z-10"
                    : "border-border shadow-soft"
                )}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1.5 text-xs font-bold rounded-bl-2xl uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <CardHeader className="p-8 pb-4">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mt-4">
                    <span className="text-3xl sm:text-4xl font-display font-bold">{plan.price}</span>
                    <span className="text-muted-foreground text-sm font-medium">{plan.fee}</span>
                  </div>
                  <p className="text-sm font-semibold text-primary mt-1">{plan.feeLabel}</p>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                    {plan.description}
                  </p>
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <div className="mt-0.5 bg-primary/10 rounded-full p-0.5">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-8 pt-0">
                  <Button
                    onClick={scrollToContact}
                    variant={plan.highlighted ? "default" : "outline"}
                    className="w-full rounded-2xl h-12 text-md font-bold group"
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-muted/30 rounded-3xl p-8 border border-border max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6"
        >
          <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center shrink-0">
            <Zap className="w-8 h-8 text-blue-500" />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-bold mb-1">Did you know?</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Replacing dirty filters can reduce your HVAC unit's energy consumption by <strong>5% to 15%</strong>.
              Our service often pays for itself through lower utility bills and extended system life.
            </p>
          </div>
          <div className="shrink-0">
            <Button variant="link" className="text-primary font-bold h-auto p-0" onClick={scrollToContact}>
              Calculate My Savings
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}