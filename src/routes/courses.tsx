import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, GraduationCap, IndianRupee, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — Rocket Foundation" },
      { name: "description", content: "Explore B.Tech, BCA, BBA, B.Pharma, MBA, Diploma, BA, B.Sc, B.Com, Polytechnic, ITI and Nursing courses." },
    ],
  }),
  component: CoursesPage,
});

type Course = {
  name: string;
  full: string;
  details: string;
  duration: string;
  eligibility: string;
  fees: string;
};

const courses: Course[] = [
  { name: "B.Tech", full: "Bachelor of Technology", details: "4-year professional engineering degree in streams like CSE, IT, ECE, Mechanical, Civil and AI/ML.", duration: "4 Years", eligibility: "10+2 with PCM (min 50%)", fees: "₹80,000 – ₹2,50,000 / year" },
  { name: "BCA", full: "Bachelor of Computer Applications", details: "3-year graduation program focused on software development, programming and IT applications.", duration: "3 Years", eligibility: "10+2 in any stream (min 45%)", fees: "₹40,000 – ₹1,20,000 / year" },
  { name: "BBA", full: "Bachelor of Business Administration", details: "Management degree covering marketing, finance, HR and entrepreneurship fundamentals.", duration: "3 Years", eligibility: "10+2 in any stream (min 45%)", fees: "₹50,000 – ₹1,50,000 / year" },
  { name: "B.Pharma", full: "Bachelor of Pharmacy", details: "Professional degree for a career in pharmaceutical industry, hospitals and drug research.", duration: "4 Years", eligibility: "10+2 with PCB / PCM (min 50%)", fees: "₹70,000 – ₹1,80,000 / year" },
  { name: "Diploma", full: "Diploma in Engineering & More", details: "Job-oriented diplomas in Mechanical, Civil, Electrical, Computer, Automobile and more.", duration: "1 – 3 Years", eligibility: "10th / 12th pass", fees: "₹25,000 – ₹70,000 / year" },
  { name: "MBA", full: "Master of Business Administration", details: "Post-graduate management program with specializations in Marketing, Finance, HR, IT & Operations.", duration: "2 Years", eligibility: "Graduation (min 50%) + CAT/MAT/CMAT", fees: "₹1,00,000 – ₹5,00,000 / year" },
  { name: "BA", full: "Bachelor of Arts", details: "Graduation in Arts with subjects like English, History, Political Science, Sociology & Psychology.", duration: "3 Years", eligibility: "10+2 in any stream", fees: "₹15,000 – ₹60,000 / year" },
  { name: "B.Sc", full: "Bachelor of Science", details: "Science graduation in Physics, Chemistry, Maths, Biology, Computer Science, Agriculture & more.", duration: "3 Years", eligibility: "10+2 with Science", fees: "₹20,000 – ₹80,000 / year" },
  { name: "B.Com", full: "Bachelor of Commerce", details: "Commerce degree covering accounting, taxation, business law and finance.", duration: "3 Years", eligibility: "10+2 (Commerce preferred)", fees: "₹18,000 – ₹70,000 / year" },
  { name: "Polytechnic", full: "Polytechnic Diploma", details: "3-year technical diploma in engineering trades with direct 2nd-year B.Tech lateral entry option.", duration: "3 Years", eligibility: "10th pass (min 35%)", fees: "₹25,000 – ₹60,000 / year" },
  { name: "ITI", full: "Industrial Training Institute", details: "Skill-based trade courses like Electrician, Fitter, COPA, Welder and Mechanic.", duration: "6 Months – 2 Years", eligibility: "8th / 10th pass", fees: "₹10,000 – ₹35,000 / year" },
  { name: "Nursing", full: "GNM / B.Sc Nursing / ANM", details: "Healthcare & nursing programs with hospital training and government job opportunities.", duration: "2 – 4 Years", eligibility: "10+2 with Biology (min 45%)", fees: "₹35,000 – ₹1,20,000 / year" },
];

function CoursesPage() {
  return (
    <div className="bg-background">
      <section className="bg-navy py-14 text-navy-foreground">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            Our <span className="text-brand">Courses</span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-navy-foreground/80">
            Choose from 12+ career-oriented UG, PG and diploma programs offered through our partner universities.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <article key={c.name} className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-brand/10 text-brand">
                  <GraduationCap className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="text-lg font-extrabold text-navy">{c.name}</h2>
                  <div className="text-[11px] text-muted-foreground">{c.full}</div>
                </div>
              </div>

              <p className="mt-4 text-sm text-foreground/80">{c.details}</p>

              <ul className="mt-5 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Clock className="mt-0.5 h-4 w-4 text-brand" />
                  <span><b className="text-navy">Duration:</b> {c.duration}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand" />
                  <span><b className="text-navy">Eligibility:</b> {c.eligibility}</span>
                </li>
                <li className="flex items-start gap-2">
                  <IndianRupee className="mt-0.5 h-4 w-4 text-brand" />
                  <span><b className="text-navy">Fees:</b> {c.fees}</span>
                </li>
              </ul>

              <Link to="/apply" className="mt-6 inline-block rounded-md bg-brand px-4 py-2 text-center text-sm font-semibold text-brand-foreground hover:bg-brand/90">
                Apply Now
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
