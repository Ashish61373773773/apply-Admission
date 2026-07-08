import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: () => (
    <div className="mx-auto max-w-4xl px-4 py-20">
      <h1 className="text-center text-4xl font-extrabold text-navy">Contact Us</h1>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {[
          { icon: MapPin, title: "Address", desc: "patna,Bihar,India" },
          { icon: Phone, title: "Phone", desc: "+91 7644 055 811." },
          { icon: Mail, title: "Email", desc: "arocketfoundation@gmail.com" },
          { icon: Clock, title: "Hours", desc: "Mon - Sat: 9:00 AM - 6:00 PM" },
        ].map((c) => (
          <div key={c.title} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-brand/10 text-brand"><c.icon className="h-5 w-5" /></span>
            <div>
              <div className="text-sm font-bold text-navy">{c.title}</div>
              <div className="text-sm text-muted-foreground">{c.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
});
