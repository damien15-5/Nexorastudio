"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2349035623261"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 bg-green-500 text-white rounded-full font-semibold text-sm shadow-lg shadow-green-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}
