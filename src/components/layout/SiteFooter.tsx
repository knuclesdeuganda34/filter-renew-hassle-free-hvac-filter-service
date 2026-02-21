import React from "react";
import { Mail, Phone, MapPin, Wind, Facebook, Instagram, Linkedin } from "lucide-react";
import { COMPANY_INFO, NAV_LINKS, LEGAL_CONTENT } from "@/lib/site-content";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
export function SiteFooter() {
  return (
    <footer className="bg-muted/30 border-t pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Wind className="w-6 h-6 text-primary" />
              <span className="font-display font-bold text-xl">{COMPANY_INFO.name}</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium HVAC filter service for homes and businesses. We handle the maintenance so you can breathe easier.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          {/* Links Column */}
          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Column */}
          <div>
            <h4 className="font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-foreground">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-foreground">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{COMPANY_INFO.address}</span>
              </li>
            </ul>
          </div>
          {/* Newsletter Column */}
          <div>
            <h4 className="font-semibold mb-6">Service Area</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Currently serving Sanger, Denton, and surrounding North Texas communities.
            </p>
            <div className="p-4 bg-background rounded-xl border border-border">
              <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Status</span>
              <span className="text-sm font-medium">Accepting New Clients</span>
            </div>
          </div>
        </div>
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Dialog>
              <DialogTrigger asChild>
                <button className="hover:text-foreground transition-colors">Privacy Policy</button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>{LEGAL_CONTENT.privacy.title}</DialogTitle>
                </DialogHeader>
                <ScrollArea className="max-h-[60vh] pr-4">
                  <div className="space-y-6 py-4">
                    {LEGAL_CONTENT.privacy.sections.map((section) => (
                      <div key={section.heading}>
                        <h5 className="font-bold text-foreground mb-2">{section.heading}</h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">{section.text}</p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <button className="hover:text-foreground transition-colors">Terms of Service</button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>{LEGAL_CONTENT.terms.title}</DialogTitle>
                </DialogHeader>
                <ScrollArea className="max-h-[60vh] pr-4">
                  <div className="space-y-6 py-4">
                    {LEGAL_CONTENT.terms.sections.map((section) => (
                      <div key={section.heading}>
                        <h5 className="font-bold text-foreground mb-2">{section.heading}</h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">{section.text}</p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </footer>
  );
}