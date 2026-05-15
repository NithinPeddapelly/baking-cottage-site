import { MessageCircleMore } from 'lucide-react';

type FloatingWhatsAppProps = {
  whatsappUrl: string;
};

export default function FloatingWhatsApp({ whatsappUrl }: FloatingWhatsAppProps) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-[80] inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-sm font-semibold text-white shadow-[0_20px_35px_-15px_rgba(16,185,129,0.75)] transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-600 sm:bottom-6 sm:right-6 sm:h-auto sm:w-auto sm:px-4 sm:py-3"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircleMore className="h-4 w-4" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
