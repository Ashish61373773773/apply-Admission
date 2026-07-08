
CREATE TABLE public.reviews (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  course text NOT NULL,
  rating smallint NOT NULL,
  review_text text NOT NULL,
  approved boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.reviews TO anon;
GRANT SELECT, INSERT ON public.reviews TO authenticated;
GRANT ALL ON public.reviews TO service_role;

ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read approved reviews"
ON public.reviews FOR SELECT
TO anon, authenticated
USING (approved = true);

CREATE POLICY "Anyone can submit a valid review"
ON public.reviews FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(name) BETWEEN 2 AND 60
  AND length(course) BETWEEN 2 AND 80
  AND rating BETWEEN 1 AND 5
  AND length(review_text) BETWEEN 10 AND 500
);
