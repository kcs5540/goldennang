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
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/40 hover:bg-white text-stone-800 hover:text-teal-700 shadow-sm border border-stone-300/80 backdrop-blur-sm flex items-center justify-center transition-all cursor-pointer transform hover:-translate-y-0.5"
        aria-label="맨 위로 가기"
      >
        <ArrowUp className="w-4 h-4 font-black" />
      </button>

      {/* 1:1 Live Chat Option (Naver TalkTalk / Kakao) */}
      <a
        href={BRAND_INFO.links.talkTalk}
        target="_blank"
        rel="noopener noreferrer"
        className="h-10 sm:h-11 px-3 sm:px-0 sm:w-44 rounded-full bg-[#03C75A]/25 hover:bg-[#03C75A] text-emerald-950 hover:text-white font-black text-xs sm:text-sm shadow-sm backdrop-blur-sm flex items-center justify-center gap-1.5 transition-all transform hover:-translate-y-0.5 group border border-[#03C75A]/60"
        title="네이버 톡톡 실시간 1:1 문의"
      >
        <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#03C75A] group-hover:text-white fill-current shrink-0" />
        <span className="tracking-tight text-stone-900 group-hover:text-white font-extrabold">1:1 톡톡 상담</span>
      </a>

      {/* Direct Order / Call Reservation */}
      <button
        onClick={openDirectOrderModal}
        className="h-10 sm:h-11 px-3 sm:px-0 sm:w-44 rounded-full bg-stone-900/25 hover:bg-stone-900 text-stone-900 hover:text-white font-black text-xs sm:text-sm shadow-sm backdrop-blur-sm flex items-center justify-center gap-1.5 sm:gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer border border-stone-900/50 group"
      >
        <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600 group-hover:text-amber-300 animate-pulse shrink-0" />
        <span className="tracking-tight text-stone-900 group-hover:text-white font-extrabold sm:inline">전화예약</span>
        <span className="hidden sm:inline text-stone-900 group-hover:text-white font-extrabold">·방문</span>
      </button>

      {/* Naver Store Direct Buy */}
      <a
        href={BRAND_INFO.links.smartstore}
        target="_blank"
        rel="noopener noreferrer"
        className="h-10 sm:h-11 px-3 sm:px-0 sm:w-44 rounded-full bg-teal-800/25 hover:bg-teal-700 text-teal-950 hover:text-white font-black text-xs sm:text-sm shadow-sm backdrop-blur-sm flex items-center justify-center gap-1.5 sm:gap-2 transition-all transform hover:-translate-y-0.5 group border border-teal-800/50"
      >
        <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-800 group-hover:text-amber-200 group-hover:scale-110 transition-transform shrink-0" />
        <span className="tracking-tight text-stone-900 group-hover:text-white font-extrabold">네이버스토어</span>
      </a>
    </div>
  );
}
