
CREATE POLICY "Anyone can upload application files"
  ON storage.objects FOR INSERT
  TO anon, authenticated
  WITH CHECK (bucket_id = 'applications');
