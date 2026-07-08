import { Link } from "@tanstack/react-router";
import { Rocket, Menu } from "lucide-react";
import { useState } from "react";

const nav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Courses", to: "/courses" },
  { label: "Colleges", to: "/colleges" },
  { label: "Admission", to: "/apply" },
  { label: "Dashboard", to: "/dashboard" },
  { label: "Reviews", to: "/reviews" },
  { label: "Contact Us", to: "/contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-brand/10">
            <Rocket className="h-5 w-5 text-brand" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-extrabold tracking-wide text-navy">A ROCKET</span>
            <span className="block text-sm font-extrabold tracking-wide text-brand">FOUNDATION</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-brand"
              activeProps={{ className: "text-brand border-b-2 border-brand pb-0.5" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/apply"
            className="hidden rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-sm transition-transform hover:scale-[1.02] hover:bg-brand/90 sm:inline-block"
          >
            Apply Now
          </Link>
          <button
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
            className="rounded-md p-2 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary"
              >
                {n.label}
              </Link>
            ))}
            <Link to="/apply" onClick={() => setOpen(false)} className="mt-1 rounded-md bg-brand px-3 py-2 text-center text-sm font-semibold text-brand-foreground">
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
