'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HERO_BANNERS, BRAND_INFO } from '@/data';
import { useInquiryModal } from '@/context/InquiryModalContext';
import { ChevronLeft, ChevronRight, Sparkles, ShoppingBag, ArrowRight, Phone } from 'lucide-react';

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { openDirectOrderModal } = useInquiryModal();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_BANNERS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_BANNERS.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_BANNERS.length) % HERO_BANNERS.length);
  };

  const current = HERO_BANNERS[currentSlide];

  return (
    <section className="relative overflow-hidden bg-stone-900 min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center">
      {/* Background Slides */}
      {HERO_BANNERS.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
        >
          <Image
            src={banner.imageUrl}
            alt={banner.title}
            fill
            priority={index === 0}
            className="object-cover object-center brightness-75"
          />
          {/* Rich Gradient Overlays for High-End Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/30" />
        </div>
      ))}

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl text-white">
          {/* Tag Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-300 text-xs sm:text-sm font-semibold tracking-wider mb-6 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{current.tag}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-4 whitespace-pre-line drop-shadow-md">
            {current.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl font-medium text-amber-300/95 mb-4">
            {current.subtitle}
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base text-stone-200/90 leading-relaxed mb-8 max-w-xl font-light">
            {current.description}
          </p>

          {/* Action CTAs */}
          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5">
            <button
              onClick={openDirectOrderModal}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-stone-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded-xl shadow-lg shadow-amber-950/30 transform hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4 text-stone-950" />
              <span>농장 직거래 전화주문</span>
            </button>

            <a
              href={BRAND_INFO.links.smartstore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-teal-600/90 hover:bg-teal-500 border border-teal-400/40 rounded-xl backdrop-blur-md transition-all transform hover:-translate-y-0.5 shadow-md"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>네이버스토어로 구매</span>
            </a>

            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 px-5 py-3.5 text-sm font-semibold text-stone-200 hover:text-white bg-stone-900/60 hover:bg-stone-800/80 border border-stone-700/60 rounded-xl backdrop-blur-md transition-all"
            >
              <span>전체 컬렉션 보기</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Navigation Controls */}
      <div className="absolute bottom-8 right-6 sm:right-12 z-20 flex items-center gap-3">
        <div className="flex items-center gap-1.5 mr-2">
          {HERO_BANNERS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 transition-all rounded-full ${
                idx === currentSlide ? 'w-8 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`슬라이드 ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="p-2.5 rounded-full bg-stone-900/60 hover:bg-stone-900/90 text-white border border-stone-700/50 backdrop-blur-sm transition-all"
          aria-label="이전 배너"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2.5 rounded-full bg-stone-900/60 hover:bg-stone-900/90 text-white border border-stone-700/50 backdrop-blur-sm transition-all"
          aria-label="다음 배너"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
