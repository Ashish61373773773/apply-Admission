import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bell, ChevronLeft, ChevronRight, GraduationCap, Building2, BookOpen, Trophy,
  Cpu, Laptop, Briefcase, Pill, LineChart, School, Lightbulb, Target, PencilRuler,
  UserCheck, FileCheck2, Building, HeartHandshake, Star, Quote,
} from "lucide-react";
import heroImg from "@/assets/hero-students.jpg";
import campusImg from "@/assets/campus.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Rocket Foundation — Admission Guidance for Top Colleges in India" },
      { name: "description", content: "Empowering students towards the best education & bright career. Apply for B.Tech, BCA, BBA, B.Pharma, MBA and Diploma programs." },
    ],
  }),
});

const courses = [
  { icon: Cpu, name: "B.Tech", sub: "Bachelor of Technology", color: "bg-sky-500" },
  { icon: Laptop, name: "BCA", sub: "Bachelor of Computer Applications", color: "bg-brand" },
  { icon: Briefcase, name: "BBA", sub: "Bachelor of Business Administration", color: "bg-emerald-500" },
  { icon: Pill, name: "B.Pharma", sub: "Bachelor of Pharmacy", color: "bg-purple-500" },
  { icon: LineChart, name: "MBA", sub: "Master of Business Administration", color: "bg-rose-500" },
  { icon: School, name: "Diploma", sub: "Various Diploma Courses", color: "bg-teal-500" },
];

const announcements = [
  { title: "Admissions Open", desc: "for 2026-27 Session", date: "June 30, 2026" },
  { title: "Scholarship Test", desc: "Apply Before 30 June", date: "June 28, 2026" },
  { title: "New Partner College", desc: "Collaboration Announced", date: "June 26, 2026" },
  { title: "Results Declared", desc: "Check Now", date: "June 24, 2026" },
];

const stats = [
  { icon: GraduationCap, value: "5000+", label: "Students Enrolled" },
  { icon: Building2, value: "50+", label: "Partner Colleges" },
  { icon: BookOpen, value: "100+", label: "Courses Offered" },
  { icon: Trophy, value: "98%", label: "Success Rate" },
];

const whyUs = [
  { icon: UserCheck, title: "Expert Guidance", desc: "from experienced counsellors" },
  { icon: FileCheck2, title: "Easy Admission", desc: "Process with full support" },
  { icon: Building, title: "Best Colleges", desc: "Tie-ups with top institutions" },
  { icon: HeartHandshake, title: "100% Support", desc: "Assistance at every step" },
];

const colleges = ["AMITY", "LPU", "CHANDIGARH", "SRM", "VIT", "KIIT"];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 md:grid-cols-2 md:py-20">
          <div className="relative z-10">
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
              Empowering Students <br />
              for a <span className="text-brand">Better Future</span>
            </h1>
            <p className="mt-5 max-w-md text-navy-foreground/80">
              Rocket Foundation is committed to guiding students towards the best education &amp; bright career.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/apply" className="rounded-md bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-lg hover:bg-brand/90">
                Apply Now
              </Link>
              <Link to="/courses" className="rounded-md border-2 border-white/80 px-6 py-3 text-sm font-semibold hover:bg-white hover:text-navy">
                Explore Courses
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="Happy graduate students in caps and gowns"
              width={1280} height={800}
              className="h-auto w-full rounded-xl object-cover shadow-2xl"
            />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-1/2 w-1/2 bg-gradient-to-r from-navy via-navy to-transparent" />
      </section>

      {/* ANNOUNCEMENTS */}
      <section className="px-4 py-10">
        <div className="mx-auto max-w-6xl rounded-xl border border-border bg-white p-4 shadow-xl md:p-5">
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[220px_1fr_auto]">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-brand/10">
                <Bell className="h-5 w-5 text-brand" />
              </span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-brand">Latest</div>
                <div className="text-base font-bold text-navy">Announcements</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {announcements.map((a) => (
                <div key={a.title} className="border-l border-border pl-4">
                  <div className="text-sm font-semibold text-navy">{a.title}</div>
                  <div className="text-xs text-muted-foreground">{a.desc}</div>
                  <div className="mt-1 text-[11px] text-brand">{a.date}</div>
                </div>
              ))}
            </div>
            <div className="flex justify-end gap-2">
              <button className="grid h-8 w-8 place-items-center rounded-full border border-border hover:bg-secondary"><ChevronLeft className="h-4 w-4" /></button>
              <button className="grid h-8 w-8 place-items-center rounded-full border border-border hover:bg-secondary"><ChevronRight className="h-4 w-4" /></button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED COURSES */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-extrabold text-navy md:text-4xl">
          Featured <span className="text-brand">Courses</span>
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">Choose from our wide range of professional courses</p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {courses.map((c) => (
            <div key={c.name} className="group rounded-xl border border-border bg-card p-5 text-center transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className={`mx-auto grid h-14 w-14 place-items-center rounded-full ${c.color} text-white shadow-md`}>
                <c.icon className="h-6 w-6" />
              </div>
              <div className="mt-4 text-lg font-bold text-navy">{c.name}</div>
              <div className="mt-1 text-xs text-muted-foreground">{c.sub}</div>
              <Link to="/apply" className="mt-4 inline-block rounded-md bg-navy px-4 py-1.5 text-xs font-semibold text-white hover:bg-navy/90">
                Apply Now
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link to="/courses" className="rounded-md bg-brand px-6 py-2.5 text-sm font-semibold text-brand-foreground hover:bg-brand/90">
            View All Courses
          </Link>
        </div>
      </section>

      {/* STATS */}
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-7xl rounded-2xl bg-gradient-to-r from-navy to-[oklch(0.32_0.11_265)] px-6 py-8 text-navy-foreground shadow-xl">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-lg bg-white/10">
                  <s.icon className="h-6 w-6 text-brand" />
                </span>
                <div>
                  <div className="text-2xl font-extrabold">{s.value}</div>
                  <div className="text-xs text-white/70">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT + REVIEWS */}
      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold text-navy md:text-4xl">
            About <span className="text-brand">Rocket Foundation</span>
          </h2>
          <p className="mt-4 max-w-lg text-sm text-muted-foreground">
            Rocket Foundation is a student council initiative dedicated to empowering students by providing quality education guidance, admission support, and career counseling.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {[
              { icon: Lightbulb, title: "Our Vision", desc: "To be a trusted education partner." },
              { icon: Target, title: "Our Mission", desc: "To guide students towards success." },
              { icon: PencilRuler, title: "Our Value", desc: "Integrity, Quality & Commitment." },
            ].map((v) => (
              <div key={v.title}>
                <v.icon className="h-6 w-6 text-brand" />
                <div className="mt-2 text-sm font-bold text-navy">{v.title}</div>
                <div className="text-xs text-muted-foreground">{v.desc}</div>
              </div>
            ))}
          </div>
          <Link to="/about" className="mt-6 inline-block rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy/90">
            Know More About Us
          </Link>
        </div>
        <div className="relative">
          <img src={campusImg} width={800} height={600} loading="lazy" alt="Partner college campus" className="w-full rounded-xl object-cover shadow-lg" />
          <div className="absolute -bottom-6 left-6 rounded-xl bg-white px-4 py-3 shadow-lg ring-1 ring-border">
            <div className="flex items-center gap-2 text-xs">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-brand text-white">
                <Trophy className="h-4 w-4" />
              </span>
              <div>
                <div className="text-sm font-bold text-navy">10+ Years</div>
                <div className="text-[11px] text-muted-foreground">of Excellence in Education Guidance</div>
              </div>
            </div>
          </div>

          {/* Reviews card */}
          <div className="mt-10 rounded-xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-baseline justify-between">
              <div>
                <div className="text-lg font-bold text-navy">Students <span className="text-brand">Reviews</span></div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold">4.8</span>
                <div className="flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <span className="text-xs text-muted-foreground">(1200+ Reviews)</span>
              </div>
            </div>
            <div className="mt-4 flex gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand/10 text-brand"><Quote className="h-4 w-4" /></span>
              <div>
                <div className="text-sm font-semibold text-navy">Anjali Sharma</div>
                <div className="text-[11px] text-muted-foreground">B.Tech Student</div>
                <p className="mt-1 text-sm text-foreground/80">Rocket Foundation helped me a lot in getting admission in my dream college. Thank you!</p>
                <div className="mt-1 flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-secondary/40 px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-extrabold text-navy md:text-4xl">
            Why <span className="text-brand">Choose Us?</span>
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w) => (
              <div key={w.title} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 hover:shadow-md">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                  <w.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-bold text-navy">{w.title}</div>
                  <div className="text-xs text-muted-foreground">{w.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER COLLEGES */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-extrabold text-navy md:text-4xl">
          Our Top <span className="text-brand">Partner Colleges</span>
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
          {colleges.map((c) => (
            <div key={c} className="grid h-24 place-items-center rounded-lg border border-border bg-white px-4 text-center font-extrabold tracking-wide text-navy shadow-sm hover:shadow-md">
              {c}
              <span className="text-[10px] font-medium text-muted-foreground">UNIVERSITY</span>
            </div>
          ))}
          <Link to="/colleges" className="grid h-24 place-items-center rounded-lg border-2 border-dashed border-brand/40 bg-white text-sm font-semibold text-brand hover:bg-brand/5">
            <Building className="mb-1 h-5 w-5" />
            View All
          </Link>
        </div>
      </section>
    </>
  );
}
