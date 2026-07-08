import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-navy text-navy-foreground text-xs">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2">
        <div className="flex flex-wrap items-center gap-5">
          <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-brand" /> patna,bihar, India</span>
          <a href="tel:+917644055811" className="flex items-center gap-1.5 hover:text-brand"><Phone className="h-3.5 w-3.5 text-brand" /> +91 76440 55811</a>
          <a href="mailto:info@rocketfoundation.org" className="flex items-center gap-1.5 hover:text-brand"><Mail className="h-3.5 w-3.5 text-brand" /> arocketfoundation@gmail.com</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="Facebook" className="hover:text-brand"><Facebook className="h-3.5 w-3.5" /></a>
          <a href="#" aria-label="Twitter" className="hover:text-brand"><Twitter className="h-3.5 w-3.5" /></a>
          <a href="#" aria-label="Instagram" className="hover:text-brand"><Instagram className="h-3.5 w-3.5" /></a>
          <a href="#" aria-label="YouTube" className="hover:text-brand"><Youtube className="h-3.5 w-3.5" /></a>
        </div>
      </div>
    </div>
  );
}
