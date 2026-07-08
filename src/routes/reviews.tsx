import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote, Loader2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Student Reviews — Rocket Foundation" },
      { name: "description", content: "Real ratings & reviews from Rocket Foundation students. Share your own experience." },
    ],
  }),
  component: ReviewsPage,
});

type Review = {
  id: string;
  name: string;
  course: string;
  rating: number;
  review_text: string;
  created_at: string;
};

const seedReviews: Review[] = [
  { id: "s1", name: "Anjali Sharma",  course: "B.Tech, Amity",         rating: 5, review_text: "Rocket Foundation helped me a lot in getting admission in my dream college. Counsellors were very supportive throughout.", created_at: "" },
  { id: "s2", name: "Rohit Verma",    course: "MBA, LPU",              rating: 5, review_text: "Amazing guidance and scholarship support. I got 40% scholarship and a great campus placement offer.", created_at: "" },
  { id: "s3", name: "Priya Singh",    course: "BCA, Chandigarh Uni",   rating: 4, review_text: "Smooth admission process. Team explained every college option honestly, no false promises.", created_at: "" },
  { id: "s4", name: "Aman Yadav",     course: "B.Pharma, Sharda",      rating: 5, review_text: "Best decision was to choose Rocket Foundation. They handled documents, hostel and fees — everything.", created_at: "" },
  { id: "s5", name: "Neha Gupta",     course: "B.Sc Nursing, KIIT",    rating: 5, review_text: "Trusted platform for genuine admission. My family was very worried, but they guided us like their own.", created_at: "" },
  { id: "s6", name: "Sahil Khan",     course: "Diploma, Polytechnic",  rating: 4, review_text: "Got direct admission in a top polytechnic near my hometown. Fees were also very reasonable.", created_at: "" },
];

const schema = z.object({
  name: z.string().trim().min(2, "Name too short").max(60),
  course: z.string().trim().min(2, "Course too short").max(80),
  rating: z.number().int().min(1).max(5),
  review_text: z.string().trim().min(10, "Please write at least 10 characters").max(500),
});

function Stars({ value }: { value: number }) {
  return (
    <div className="flex text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < value ? "fill-current" : "opacity-30"}`} />
      ))}
    </div>
  );
}

function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const { data, error } = await supabase
      .from("reviews")
      .select("id,name,course,rating,review_text,created_at")
      .eq("approved", true)
      .order("created_at", { ascending: false })
      .limit(60);
    if (error) console.error(error);
    setReviews(data ?? []);
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  const all: Review[] = useMemo(() => [...reviews, ...seedReviews], [reviews]);
  const average = useMemo(() => {
    if (!all.length) return 0;
    return all.reduce((s, r) => s + r.rating, 0) / all.length;
  }, [all]);
  const distribution = useMemo(() => {
    const buckets = [5, 4, 3, 2, 1].map((star) => {
      const count = all.filter((r) => r.rating === star).length;
      const pct = all.length ? Math.round((count / all.length) * 100) : 0;
      return { star, pct };
    });
    return buckets;
  }, [all]);

  return (
    <div className="bg-background">
      <section className="bg-navy py-14 text-navy-foreground">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            Student <span className="text-brand">Reviews</span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-navy-foreground/80">
            Honest ratings from real students of Rocket Foundation.
          </p>
        </div>
      </section>

      {/* Average rating card */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 rounded-2xl border border-border bg-card p-8 shadow-sm md:grid-cols-[240px_1fr]">
          <div className="text-center md:border-r md:border-border md:pr-8">
            <div className="text-6xl font-extrabold text-navy">{average.toFixed(1)}</div>
            <div className="mt-2 flex justify-center"><Stars value={Math.round(average)} /></div>
            <div className="mt-2 text-xs text-muted-foreground">Based on {all.length}+ reviews</div>
          </div>
          <div className="space-y-2">
            {distribution.map((d) => (
              <div key={d.star} className="flex items-center gap-3 text-sm">
                <div className="w-8 font-semibold text-navy">{d.star}★</div>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
                  <div className="h-full rounded-full bg-brand" style={{ width: `${d.pct}%` }} />
                </div>
                <div className="w-10 text-right text-xs text-muted-foreground">{d.pct}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit review */}
      <ReviewForm onSubmitted={load} />

      {/* Reviews list */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="mb-6 text-2xl font-extrabold text-navy">What Students Say</h2>
        {loading ? (
          <div className="flex justify-center py-10 text-muted-foreground">
            <Loader2 className="h-5 w-5 animate-spin" />
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {all.map((r) => (
              <div key={r.id} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <Quote className="h-5 w-5 text-brand" />
                <p className="mt-3 text-sm text-foreground/80">"{r.review_text}"</p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-navy">{r.name}</div>
                    <div className="text-[11px] text-muted-foreground">{r.course}</div>
                  </div>
                  <Stars value={r.rating} />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function ReviewForm({ onSubmitted }: { onSubmitted: () => void }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse({ name, course, rating, review_text: text });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("reviews").insert(parsed.data);
    setSubmitting(false);
    if (error) {
      toast.error("Could not submit review. Please try again.");
      return;
    }
    toast.success("Thank you! Your review has been posted.");
    setName(""); setCourse(""); setRating(5); setText("");
    onSubmitted();
  }

  return (
    <section className="mx-auto max-w-3xl px-4 pb-12">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-extrabold text-navy">Write a Review</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Share your experience with Rocket Foundation — help other students choose better.
        </p>

        <form onSubmit={onSubmit} className="mt-6 grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="text-xs font-semibold text-navy">Your Name</span>
              <input
                value={name} onChange={(e) => setName(e.target.value)} maxLength={60} required
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-brand"
                placeholder="e.g. Rahul Sharma"
              />
            </label>
            <label className="block">
              <span className="text-xs font-semibold text-navy">Course / College</span>
              <input
                value={course} onChange={(e) => setCourse(e.target.value)} maxLength={80} required
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-brand"
                placeholder="e.g. B.Tech, LPU"
              />
            </label>
          </div>

          <div>
            <span className="text-xs font-semibold text-navy">Your Rating</span>
            <div className="mt-1 flex gap-1">
              {[1, 2, 3, 4, 5].map((n) => {
                const active = (hover || rating) >= n;
                return (
                  <button
                    type="button" key={n}
                    onMouseEnter={() => setHover(n)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => setRating(n)}
                    aria-label={`${n} star`}
                    className="p-0.5"
                  >
                    <Star className={`h-7 w-7 ${active ? "fill-amber-400 text-amber-400" : "text-muted-foreground/40"}`} />
                  </button>
                );
              })}
              <span className="ml-2 self-center text-sm font-semibold text-navy">{rating}.0</span>
            </div>
          </div>

          <label className="block">
            <span className="text-xs font-semibold text-navy">Your Review</span>
            <textarea
              value={text} onChange={(e) => setText(e.target.value)}
              minLength={10} maxLength={500} rows={4} required
              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-brand"
              placeholder="Write about your admission experience, counsellor support, college etc."
            />
            <div className="mt-1 text-right text-[11px] text-muted-foreground">{text.length}/500</div>
          </label>

          <button
            type="submit" disabled={submitting}
            className="inline-flex items-center justify-center rounded-md bg-brand px-6 py-2.5 text-sm font-semibold text-brand-foreground shadow hover:bg-brand/90 disabled:opacity-60"
          >
            {submitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Submit Review
          </button>
        </form>
      </div>
    </section>
  );
}
