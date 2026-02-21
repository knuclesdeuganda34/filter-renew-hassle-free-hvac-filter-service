import React from "react";
import { Play, Home, Building2 } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
export function VideoShowcase() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">See It In Action</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether it's your family home or your commercial office, our process is fast, clean, and effective.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Residential */}
          <VideoCard
            title="Residential Service"
            description="Perfect for single-family homes and apartments."
            icon={<Home className="w-5 h-5" />}
            image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
          />
          {/* Commercial */}
          <VideoCard
            title="Commercial Service"
            description="Scalable maintenance for office buildings and shops."
            icon={<Building2 className="w-5 h-5" />}
            image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop"
          />
        </div>
      </div>
    </section>
  );
}
function VideoCard({ title, description, icon, image }: { title: string; description: string; icon: React.ReactNode; image: string }) {
  return (
    <div className="group cursor-pointer">
      <Dialog>
        <DialogTrigger asChild>
          <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-video mb-6">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-white fill-white" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white">
              {icon}
              <span className="text-sm font-semibold">{title}</span>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-4xl p-0 overflow-hidden bg-black border-none">
          <DialogHeader className="hidden">
            <DialogTitle>{title} Demo</DialogTitle>
          </DialogHeader>
          <AspectRatio ratio={16 / 9}>
            <div className="w-full h-full flex flex-col items-center justify-center text-white bg-slate-900">
              <Play className="w-16 h-16 opacity-20 mb-4" />
              <p className="text-lg font-medium opacity-50">Video Player Simulation</p>
              <p className="text-sm opacity-30 mt-2">Showing: {title} Case Study</p>
            </div>
          </AspectRatio>
        </DialogContent>
      </Dialog>
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}