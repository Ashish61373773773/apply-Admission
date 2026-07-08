
DROP POLICY "Anyone can submit an application" ON public.applications;
CREATE POLICY "Anyone can submit a valid application"
  ON public.applications FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(full_name) BETWEEN 2 AND 100
    AND length(email) BETWEEN 5 AND 255
    AND email LIKE '%@%.%'
    AND length(mobile) BETWEEN 7 AND 20
  );
