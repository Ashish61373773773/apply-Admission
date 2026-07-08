
CREATE TABLE public.applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  father_name TEXT NOT NULL,
  mobile TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  email TEXT NOT NULL,
  address TEXT NOT NULL,
  state TEXT NOT NULL,
  district TEXT NOT NULL,
  qualification TEXT NOT NULL,
  percentage TEXT NOT NULL,
  preferred_course TEXT NOT NULL,
  preferred_college TEXT NOT NULL,
  photo_url TEXT,
  marksheet_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.applications TO anon, authenticated;
GRANT ALL ON public.applications TO service_role;

ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an application"
  ON public.applications FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
