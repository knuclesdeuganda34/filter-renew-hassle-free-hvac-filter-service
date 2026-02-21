import React from 'react';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { Pricing } from '@/components/sections/Pricing';
import { VideoShowcase } from '@/components/sections/VideoShowcase';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { Toaster } from '@/components/ui/sonner';
import { ThemeToggle } from '@/components/ThemeToggle';
export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900">
      <ThemeToggle />
      <SiteHeader />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Pricing />
        <VideoShowcase />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
      <Toaster richColors closeButton position="top-center" />
    </div>
  );
}