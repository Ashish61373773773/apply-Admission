import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Upload, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/apply")({
  component: ApplyPage,
  head: () => ({
    meta: [
      { title: "Apply Now —A Rocket Foundation" },
      { name: "description", content: "Apply for admission through Rocket Foundation. Submit your details and get expert admission guidance." },
    ],
  }),
});

const ADMIN_WHATSAPP = "917644055811";
const schema = z.object({
  full_name: z.string().trim().min(2, "Enter your full name").max(100),
  father_name: z.string().trim().min(2, "Enter father's name").max(100),
  mobile: z.string().trim().regex(/^[0-9+\-\s]{7,20}$/, "Enter valid mobile number"),
  whatsapp: z.string().trim().regex(/^[0-9+\-\s]{7,20}$/, "Enter valid WhatsApp number"),
  email: z.string().trim().email("Enter valid email").max(255),
  address: z.string().trim().min(5, "Enter address").max(500),
  state: z.string().trim().min(2).max(80),
  district: z.string().trim().min(2).max(80),
  qualification: z.string().trim().min(2).max(80),
  percentage: z.string().trim().min(1).max(10),
  preferred_course: z.string().min(1, "Select course"),
  preferred_college: z.string().trim().min(2).max(120),
});

const COURSES = ["B.Tech", "BCA", "BBA", "B.Pharma", "MBA", "Diploma", "Other"];
const STATES = ["Delhi", "Uttar Pradesh", "Haryana", "Punjab", "Rajasthan", "Bihar", "Madhya Pradesh", "Maharashtra", "Karnataka", "Tamil Nadu", "West Bengal", "Other"];

function ApplyPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState<File | null>(null);
  const [marksheet, setMarksheet] = useState<File | null>(null);

  async function uploadFile(file: File, folder: string) {
    const path = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}-${file.name}`;
    const { error } = await supabase.storage.from("applications").upload(path, file, {
      cacheControl: "3600",
      upsert: false,
    });
    if (error) throw error;
    const { data } = supabase.storage.from("applications").createSignedUrl
      ? await supabase.storage.from("applications").createSignedUrl(path, 60 * 60 * 24 * 365)
      : { data: null } as any;
    return data?.signedUrl ?? path;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries()) as Record<string, string>;
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }

    setLoading(true);
    try {
      let photo_url: string | null = null;
      let marksheet_url: string | null = null;
      if (photo) {
        if (photo.size > 5 * 1024 * 1024) throw new Error("Photo must be under 5MB");
        photo_url = await uploadFile(photo, "photos");
      }
      if (marksheet) {
        if (marksheet.size > 10 * 1024 * 1024) throw new Error("Marksheet must be under 10MB");
        marksheet_url = await uploadFile(marksheet, "marksheets");
      }

      const { error } = await supabase.from("applications").insert({
        ...parsed.data,
        photo_url,
        marksheet_url,
      });
      if (error) throw error;

      const waText = encodeURIComponent(
        `*New Admission Application*\n\n` +
        `👤 Name: ${parsed.data.full_name}\n` +
        `👨 Father: ${parsed.data.father_name}\n` +
        `📱 Mobile: ${parsed.data.mobile}\n` +
        `💬 WhatsApp: ${parsed.data.whatsapp}\n` +
        `✉️ Email: ${parsed.data.email}\n` +
        `📍 ${parsed.data.address}, ${parsed.data.district}, ${parsed.data.state}\n` +
        `🎓 Qualification: ${parsed.data.qualification} (${parsed.data.percentage}%)\n` +
        `📚 Course: ${parsed.data.preferred_course}\n` +
        `🏫 College: ${parsed.data.preferred_college}` +
        (photo_url ? `\n\n📷 Photo: ${photo_url}` : "") +
        (marksheet_url ? `\n📄 Marksheet: ${marksheet_url}` : "")
      );
      const waHref = `https://wa.me/${ADMIN_WHATSAPP}?text=${waText}`;

      window.open(waHref, "_blank");

      toast.success("Application submitted! Sending notifications...");
      (e.target as HTMLFormElement).reset();
      setPhoto(null); setMarksheet(null);
      setTimeout(() => navigate({ to: "/" }), 2000);
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-secondary/30 py-12">
      <div className="mx-auto max-w-4xl px-4">
        <div className="rounded-2xl bg-white p-6 shadow-xl md:p-10">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-extrabold text-navy md:text-4xl">
              Admission <span className="text-brand">Application Form</span>
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill in your details — our counsellor will get in touch shortly.
            </p>
          </div>

          <form onSubmit={onSubmit} className="grid gap-5 md:grid-cols-2">
            <Field label="Full Name" name="full_name" placeholder="John Doe" />
            <Field label="Father's Name" name="father_name" placeholder="Father name" />
            <Field label="Mobile Number" name="mobile" type="tel" placeholder="+91 98765 43210" />
            <Field label="WhatsApp Number" name="whatsapp" type="tel" placeholder="+91 98765 43210" />
            <Field label="Email" name="email" type="email" placeholder="you@example.com" />
            <Select label="State" name="state" options={STATES} />
            <Field label="District" name="district" placeholder="District" />
            <Field label="Qualification" name="qualification" placeholder="12th / Graduation" />
            <Field label="Percentage" name="percentage" placeholder="e.g. 85" />
            <Select label="Preferred Course" name="preferred_course" options={COURSES} />
            <Field label="Preferred College" name="preferred_college" placeholder="e.g. Amity University" />
            <div className="md:col-span-2">
              <label className="mb-1.5 block text-sm font-semibold text-navy">Address</label>
              <textarea
                name="address"
                required
                rows={3}
                placeholder="Complete address"
                className="w-full rounded-md border border-input bg-white px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>

            <FileField label="Upload Photo" accept="image/*" onChange={setPhoto} value={photo} />
            <FileField label="Upload Marksheet" accept="image/*,.pdf" onChange={setMarksheet} value={marksheet} />

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-lg hover:bg-brand/90 disabled:opacity-60"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <MessageCircle className="h-4 w-4" />}
                {loading ? "Submitting..." : "Submit Application"}
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                On submit, your details will be sent via WhatsApp to our admissions team.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-navy">{label}</label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-md border border-input bg-white px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-navy">{label}</label>
      <select
        name={name}
        required
        defaultValue=""
        className="w-full rounded-md border border-input bg-white px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
      >
        <option value="" disabled>Select {label.toLowerCase()}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

function FileField({ label, accept, onChange, value }: { label: string; accept: string; onChange: (f: File | null) => void; value: File | null }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-navy">{label}</label>
      <label className="flex cursor-pointer items-center gap-3 rounded-md border border-dashed border-input bg-secondary/40 px-3 py-2.5 text-sm hover:border-brand hover:bg-brand/5">
        <Upload className="h-4 w-4 text-brand" />
        <span className="truncate text-muted-foreground">
          {value ? value.name : `Choose ${label.toLowerCase().replace("upload ", "")}...`}
        </span>
        <input
          type="file"
          accept={accept}
          className="hidden"
          onChange={(e) => onChange(e.target.files?.[0] ?? null)}
        />
      </label>
    </div>
  );
}
