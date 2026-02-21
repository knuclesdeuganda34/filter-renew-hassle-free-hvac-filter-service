import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-emerald-50/50 rounded-full blur-3xl opacity-50" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Welcome to Filter Renew
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 text-foreground max-w-4xl mx-auto leading-[1.1]">
            Cleaner Air, <span className="text-blue-500">Zero Effort.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            We handle your HVAC filter replacements on a schedule that works for you.
            Professional installation, high-quality filters, and smart reminders.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={scrollToContact} className="w-full sm:w-auto rounded-full text-lg h-14 px-8 shadow-lg shadow-blue-500/20">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToPricing} className="w-full sm:w-auto rounded-full text-lg h-14 px-8">
              View Pricing
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4">
            {[
              "No Contracts",
              "Expert Technicians",
              "American Made Filters"
            ].map((text) => (
              <div key={text} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                {text}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}