import { Link } from "@tanstack/react-router";
import { Rocket, MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-brand/20">
              <Rocket className="h-5 w-5 text-brand" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-extrabold tracking-wide">ROCKET</span>
              <span className="block text-sm font-extrabold tracking-wide text-brand">FOUNDATION</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-navy-foreground/70">
            Empowering students for a better future through quality education and strong guidance.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((I, i) => (
              <a key={i} href="#" className="grid h-8 w-8 place-items-center rounded-full border border-white/20 hover:bg-brand hover:border-brand">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/80">
            <li><Link to="/" className="hover:text-brand">Home</Link></li>
            <li><Link to="/about" className="hover:text-brand">About Us</Link></li>
            <li><Link to="/courses" className="hover:text-brand">Courses</Link></li>
            <li><Link to="/colleges" className="hover:text-brand">Colleges</Link></li>
            <li><Link to="/apply" className="hover:text-brand">Admission</Link></li>
            <li><Link to="/dashboard" className="hover:text-brand">Dashboard</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Important Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/80">
            <li><Link to="/apply" className="hover:text-brand">Apply Now</Link></li>
            <li><Link to="/dashboard" className="hover:text-brand">Student Login</Link></li>
            <li><Link to="/reviews" className="hover:text-brand">Reviews</Link></li>
            <li><a href="#" className="hover:text-brand">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-brand">Terms &amp; Conditions</a></li>
            <li><Link to="/contact" className="hover:text-brand">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Contact Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-brand" /> Patna, Bihar, India</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 text-brand" /> +91 76440 55811</li>
            <li className="flex gap-1"><Mail className="h-4 w-4 text-brand" />   arocketfoundation@gmail.com</li>
            <li className="flex gap-2"><Clock className="h-4 w-4 text-brand" /> Mon - Sat: 9:00 AM - 6:00 PM</li>
          </ul>
          <a
            href="https://wa.me/917644055811"
            target="_blank" rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>

        <div>
          <h4 className="text-lg font-semibold">Subscribe Newsletter</h4>
          <p className="mt-4 text-sm text-navy-foreground/70">Get latest updates and news delivered to your inbox.</p>
          <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-md bg-white px-3 py-2 text-sm text-foreground outline-none ring-brand focus:ring-2"
            />
            <button className="w-full rounded-md bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground hover:bg-brand/90">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 text-center text-xs text-navy-foreground/60">
          © {new Date().getFullYear()} Rocket Foundation. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
