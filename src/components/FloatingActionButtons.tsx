'use client';

import { BRAND_INFO } from '@/data';
import { useInquiryModal } from '@/context/InquiryModalContext';
import { ShoppingBag, Phone, ArrowUp, MessageCircle } from 'lucide-react';

export default function FloatingActionButtons() {
  const { openDirectOrderModal } = useInquiryModal();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2 sm:gap-2.5">
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/70 hover:bg-white/95 text-stone-700 hover:text-teal-700 shadow-md border border-stone-300/60 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer transform hover:-translate-y-0.5"
        aria-label="맨 위로 가기"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      {/* 1:1 Live Chat Option (Naver TalkTalk / Kakao) */}
      <a
        href={BRAND_INFO.links.talkTalk}
        target="_blank"
        rel="noopener noreferrer"
        className="h-10 sm:h-11 px-3 sm:px-0 sm:w-44 rounded-full bg-[#03C75A]/65 hover:bg-[#03C75A]/95 text-white font-extrabold text-xs sm:text-sm shadow-md backdrop-blur-md flex items-center justify-center gap-1.5 transition-all transform hover:-translate-y-0.5 group border border-emerald-300/40"
        title="네이버 톡톡 실시간 1:1 문의"
      >
        <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white fill-current shrink-0" />
        <span className="tracking-tight">1:1 톡톡 상담</span>
      </a>

      {/* Direct Order / Call Reservation */}
      <button
        onClick={openDirectOrderModal}
        className="h-10 sm:h-11 px-3 sm:px-0 sm:w-44 rounded-full bg-stone-900/65 hover:bg-stone-900/95 text-white font-extrabold text-xs sm:text-sm shadow-md backdrop-blur-md flex items-center justify-center gap-1.5 sm:gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer border border-stone-600/50"
      >
        <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 animate-pulse shrink-0" />
        <span className="tracking-tight sm:inline">전화예약</span>
        <span className="hidden sm:inline">·방문</span>
      </button>

      {/* Naver Store Direct Buy */}
      <a
        href={BRAND_INFO.links.smartstore}
        target="_blank"
        rel="noopener noreferrer"
        className="h-10 sm:h-11 px-3 sm:px-0 sm:w-44 rounded-full bg-teal-700/65 hover:bg-teal-700/95 text-white font-extrabold text-xs sm:text-sm shadow-md backdrop-blur-md flex items-center justify-center gap-1.5 sm:gap-2 transition-all transform hover:-translate-y-0.5 group border border-teal-300/40"
      >
        <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-200 group-hover:scale-110 transition-transform shrink-0" />
        <span className="tracking-tight">네이버스토어</span>
      </a>
    </div>
  );
}
