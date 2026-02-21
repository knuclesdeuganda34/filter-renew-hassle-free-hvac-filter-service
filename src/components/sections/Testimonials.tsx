import React from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/lib/site-content";
export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-muted/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-base font-bold text-primary uppercase tracking-widest mb-3">Community Love</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold">Trusted by homeowners across Texas.</h3>
          </div>
          <div className="flex items-center gap-1 bg-background px-4 py-2 rounded-full border shadow-sm">
            <span className="font-bold">4.9/5</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <span className="text-muted-foreground text-sm ml-2">Rating</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <Card key={review.name} className="bg-background border-none shadow-soft rounded-3xl relative">
              <CardContent className="p-8 pt-12">
                <Quote className="absolute top-6 left-6 w-8 h-8 text-primary/10" />
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed italic mb-8">
                  "{review.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold">{review.name}</h5>
                    <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">{review.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}