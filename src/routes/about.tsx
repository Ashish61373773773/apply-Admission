import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Lightbulb, Users, GraduationCap, Quote } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Rocket Foundation" },
      { name: "description", content: "Learn about Rocket Foundation — our vision, mission, founder's message and student council." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-navy py-16 text-navy-foreground">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            About <span className="text-brand">A Rocket Foundation</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-navy-foreground/80">
            A student council initiative empowering students across India with expert admission guidance,
            scholarship support and career counselling since 2015.
          </p>
        </div>
      </section>

      {/* About text */}
      <section className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="text-2xl font-extrabold text-navy md:text-3xl">Who We Are</h2>
        <p className="mt-4 text-muted-foreground">
          Rocket Foundation is a trusted education partner working with 50+ top universities and colleges across India.
          For over a decade we have helped more than 5,000 students find the right course, the right college and the
          right career. Our team of experienced counsellors handles every step — from choosing a course, filling
          applications, arranging scholarships, to hostel and placement support.
        </p>
      </section>

      {/* Vision / Mission / Values */}
      <section className="bg-secondary/40 px-4 py-14">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            { icon: Lightbulb, title: "Our Vision", desc: "To become India's most trusted student admission and career guidance foundation, making quality education accessible to every deserving student." },
            { icon: Target, title: "Our Mission", desc: "To guide 1,00,000+ students by 2030 with honest counselling, transparent admissions and continuous mentorship until they build a successful career." },
            { icon: Users, title: "Our Values", desc: "Integrity, transparency, student-first thinking, quality guidance and lifelong commitment towards every candidate we serve." },
          ].map((v) => (
            <div key={v.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-brand/10 text-brand">
                <v.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder message */}
      <section className="mx-auto max-w-5xl px-4 py-14">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm md:p-10">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand text-white">
              <Quote className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-2xl font-extrabold text-navy">Founder / Director Message</h2>
              <p className="mt-4 italic text-foreground/80">
                "Education is the most powerful weapon which you can use to change your life. At Rocket Foundation,
                our only goal is to make sure that no student is left behind because of lack of guidance or information.
                We stand with every student like a family — from the day of counselling till the day of placement.
                Come, dream big — hum aapke sapno ko udaan denge."
              </p>
              <div className="mt-6">
                <div className="font-bold text-navy">Mr.Saurav Goenka</div>
                <div className="text-xs text-muted-foreground">Founder &amp; Director,A Rocket Foundation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Council */}
      <section className="bg-secondary/40 px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-navy">
              Student <span className="text-brand">Council</span>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              A Rocket Foundation is powered by a nationwide Student Council of passionate members from top campuses.
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Ashish Kumar", role: "President", college: "IIT Delhi" },
              { name: "Rahul Kumar", role: "Vice President", college: "Amity University" },
              { name: "Priya Kumari", role: "General Secretary", college: "LPU" },
              { name: "Rubi Kumari", role: "Treasurer", college: "Chandigarh University" },
            ].map((m) => (
              <div key={m.name} className="rounded-xl border border-border bg-card p-5 text-center shadow-sm">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand/10 text-brand">
                  <GraduationCap className="h-7 w-7" />
                </span>
                <div className="mt-3 text-base font-bold text-navy">{m.name}</div>
                <div className="text-xs text-brand">{m.role}</div>
                <div className="mt-1 text-xs text-muted-foreground">{m.college}</div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-muted-foreground">
            Our council includes 200+ student representatives across India who help conduct scholarship tests,
            college visits, career awareness workshops and admission camps in schools and colleges.
          </p>
        </div>
      </section>

      <section className="px-4 py-14 text-center">
        <Link to="/apply" className="inline-block rounded-md bg-brand px-8 py-3 text-sm font-semibold text-brand-foreground shadow-lg hover:bg-brand/90">
          Apply for Admission
        </Link>
      </section>
    </div>
  );
}
