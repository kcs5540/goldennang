'use client';

import { useState } from 'react';
import { FAQS } from '@/data/additions';
import { BRAND_INFO } from '@/data';
import { useInquiryModal } from '@/context/InquiryModalContext';
import { HelpCircle, ChevronDown, PhoneCall, Sparkles } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { openDirectOrderModal } = useInquiryModal();

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-stone-50/80 relative border-t border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            자주 묻는 질문 (FAQ)
          </h2>
          <p className="mt-3 text-stone-600 text-base">
            황금낭 유실수 구매와 관리, 배송에 대해 고객님들이 가장 자주 묻는 질문들을 모았습니다.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4 mb-16">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-stone-200/90 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-stone-900 flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-teal-50 text-teal-700 text-xs font-black flex items-center justify-center shrink-0">
                      Q
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-teal-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-stone-600 leading-relaxed border-t border-stone-100 font-light pl-16 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help CTA */}
        <div className="p-8 rounded-3xl bg-white border border-stone-200 text-center space-y-4 shadow-sm">
          <h4 className="text-lg font-bold text-stone-900">
            더 궁금한 점이 있으시거나 전화로 직접 주문하시겠어요?
          </h4>
          <p className="text-xs sm:text-sm text-stone-600 max-w-lg mx-auto">
            황금낭 농원 마스터가 직접 친절하게 묘목 상태와 관리법을 설명해 드립니다.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={openDirectOrderModal}
              className="px-6 py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-md flex items-center gap-2 cursor-pointer transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>전화주문 상담 예약하기</span>
            </button>
            <a
              href={`tel:${BRAND_INFO.tel}`}
              className="px-6 py-3.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-sm border border-stone-300/80 transition-all"
            >
              대표번호 직접 전화 ({BRAND_INFO.tel})
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
