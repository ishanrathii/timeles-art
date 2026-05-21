import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/917558599155"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-widest px-4 py-3 shadow-lg hover:bg-[#1ebe5d] transition-colors duration-200"
    >
      <WhatsAppIcon className="w-5 h-5" />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}
