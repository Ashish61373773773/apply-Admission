import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Star } from "lucide-react";
import campusImg from "@/assets/campus.jpg";

export const Route = createFileRoute("/colleges")({
  head: () => ({
    meta: [
      { title: "Partner Colleges — Rocket Foundation" },
      { name: "description", content: "Top partner universities across India — Amity, LPU, Chandigarh University, SRM, VIT, KIIT and more." },
    ],
  }),
  component: CollegesPage,
});

const colleges = [
  { name: "Amity University", address: "Noida, Uttar Pradesh", rating: 4.6, img: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format&fit=crop&q=60" },
  { name: "Lovely Professional University", address: "Phagwara, Punjab", rating: 4.5, img: campusImg },
  { name: "Chandigarh University", address: "Mohali, Punjab", rating: 4.5, img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60" },
  { name: "SRM Institute of Science & Tech", address: "Chennai, Tamil Nadu", rating: 4.4, img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=60" },
  { name: "VIT University", address: "Vellore, Tamil Nadu", rating: 4.7, img: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=800&auto=format&fit=crop&q=60" },
  { name: "KIIT University", address: "Bhubaneswar, Odisha", rating: 4.5, img: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&auto=format&fit=crop&q=60" },
  { name: "Sharda University", address: "Greater Noida, UP", rating: 4.3, img: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=800&auto=format&fit=crop&q=60" },
  { name: "Galgotias University", address: "Greater Noida, UP", rating: 4.2, img: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=800&auto=format&fit=crop&q=60" },
  { name: "Manipal University", address: "Manipal, Karnataka", rating: 4.6, img: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&auto=format&fit=crop&q=60" },
];

function CollegesPage() {
  return (
    <div className="bg-background">
      <section className="bg-navy py-14 text-navy-foreground">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            Partner <span className="text-brand">Colleges</span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-navy-foreground/80">
            Get admission in India's top-ranked universities through Rocket Foundation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {colleges.map((c) => (
            <article key={c.name} className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <img src={c.img} alt={c.name} loading="lazy" className="h-44 w-full object-cover" />
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="text-base font-extrabold text-navy">{c.name}</h2>
                  <span className="flex items-center gap-1 rounded-full bg-brand/10 px-2 py-0.5 text-xs font-semibold text-brand">
                    <Star className="h-3 w-3 fill-current" /> {c.rating}
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-brand" />
                  {c.address}
                </div>
                <Link to="/apply" className="mt-4 inline-block w-full rounded-md bg-brand px-4 py-2 text-center text-sm font-semibold text-brand-foreground hover:bg-brand/90">
                  Apply Now
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
