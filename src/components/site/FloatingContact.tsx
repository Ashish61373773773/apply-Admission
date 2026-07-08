import { MessageCircle, Phone } from "lucide-react";

export function FloatingContact() {
  return (
    <div className="fixed right-4 top-1/3 z-30 flex flex-col gap-3">
      <a
        href="https://wa.me/917644055811"
        target="_blank" rel="noreferrer"
        aria-label="WhatsApp"
        className="grid h-11 w-11 place-items-center rounded-md bg-emerald-500 text-white shadow-lg hover:scale-105 transition"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href="tel:+917644055811"
        aria-label="Call"
        className="grid h-11 w-11 place-items-center rounded-md bg-sky-500 text-white shadow-lg hover:scale-105 transition"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
