import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/dashboard")({
  component: () => (
    <div className="mx-auto max-w-4xl px-4 py-20 text-center">
      <h1 className="text-4xl font-extrabold text-navy">Student Dashboard</h1>
      <h1><p className="mt-3 text-muted-foreground">Login coming soon.</p></h1>
    </div>
  ),
});
