'use client';

import { BRAND_INFO } from '@/data';
import { MapPin, Phone, Clock, Navigation, ExternalLink, CalendarCheck, Sparkles, Compass } from 'lucide-react';

export default function FarmMap() {
  return (
    <section id="location" className="py-24 bg-stone-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-teal-600" />
            <span>Farm Location & Visit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            서귀포 황금낭 농장 오시는 길
          </h2>
          <p className="mt-3 text-stone-600 text-base">
            제주 서귀포시 토평동의 맑은 햇살 아래 푸르게 자라나는 황금낭 묘목을 직접 만나보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Farm Information Details */}
          <div className="lg:col-span-5 rounded-3xl bg-stone-900 text-white p-8 sm:p-10 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Headquarters & Orchard</span>
                <h3 className="text-2xl font-black mt-1">{BRAND_INFO.name}</h3>
                <p className="text-stone-400 text-xs mt-1">대표자: {BRAND_INFO.ceo}</p>
              </div>

              <div className="space-y-4 pt-4 border-t border-stone-800">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-stone-800 text-teal-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 font-medium">농장 주소</p>
                    <p className="text-sm font-semibold mt-0.5">{BRAND_INFO.address}</p>
                    <p className="text-xs text-amber-300/90 mt-0.5">※ 서귀포 토평동 감귤·애플망고 특성화 단지 내 위치</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-stone-800 text-teal-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 font-medium">대표 전화 및 상담 문의</p>
                    <a href={`tel:${BRAND_INFO.tel}`} className="text-lg font-bold text-white hover:text-teal-300 transition-colors">
                      {BRAND_INFO.tel}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-stone-800 text-teal-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 font-medium">운영 시간</p>
                    <p className="text-sm font-semibold mt-0.5">{BRAND_INFO.businessHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions for Map & Navigation */}
            <div className="pt-8 border-t border-stone-800 space-y-3">
              <a
                href={BRAND_INFO.links.naverPlace}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#03C75A] hover:bg-[#02b350] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <span className="w-5 h-5 bg-white text-[#03C75A] rounded-full flex items-center justify-center text-xs font-black">N</span>
                <span>네이버 플레이스 지도에서 길찾기</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                href={`https://map.kakao.com/link/search/${encodeURIComponent(BRAND_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <span className="w-5 h-5 bg-[#191919] text-[#FEE500] rounded-full flex items-center justify-center text-xs font-black">K</span>
                <span>카카오맵으로 위치 확인</span>
              </a>
            </div>
          </div>

          {/* Interactive Live Map Panel */}
          <div className="lg:col-span-7 rounded-3xl border border-stone-200 overflow-hidden bg-white shadow-xl flex flex-col justify-between">
            {/* Map Top Bar */}
            <div className="px-6 py-4 bg-stone-100 border-b border-stone-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                <span className="text-xs font-bold text-stone-700 ml-2">
                  NAVER Map &middot; 농업회사법인 황금낭
                </span>
              </div>
              <a
                href={BRAND_INFO.links.naverPlace}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
              >
                <span>네이버 지도 앱으로 보기</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Live Map Container - Naver Map Card */}
            <div className="relative w-full h-[380px] sm:h-[420px] bg-emerald-950 overflow-hidden flex flex-col justify-between p-6 sm:p-8 text-white">
              {/* Background Map Graphic Pattern */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />
              
              {/* Top Location Info */}
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>제주 서귀포 본점 농원</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-white">
                  농업회사법인 주식회사 황금낭
                </h4>
                <p className="text-xs sm:text-sm text-emerald-200/90 mt-1">
                  제주특별자치도 서귀포시 토평남로27번길 44 (토평동)
                </p>
              </div>

              {/* Center Road/GPS Highlight */}
              <div className="relative z-10 my-auto py-4">
                <div className="p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 max-w-md space-y-2">
                  <div className="flex items-center gap-2 text-xs text-stone-300">
                    <Compass className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>서귀포 토평동 감귤·애플망고 특성화 단지 내</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stone-300">
                    <Navigation className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>네이버 지도 내비게이션 &middot; 티맵 &middot; 카카오내비 "황금낭" 검색</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action Buttons */}
              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href={BRAND_INFO.links.naverPlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 py-3.5 px-5 rounded-xl bg-[#03C75A] hover:bg-[#02b350] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <span className="w-5 h-5 bg-white text-[#03C75A] rounded-full flex items-center justify-center text-xs font-black">N</span>
                  <span>네이버 지도에서 농장 위치 &amp; 길찾기</span>
                  <ExternalLink className="w-4 h-4 opacity-80" />
                </a>

                <a
                  href={`https://map.kakao.com/link/search/${encodeURIComponent(BRAND_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <span className="w-5 h-5 bg-[#191919] text-[#FEE500] rounded-full flex items-center justify-center text-xs font-black">K</span>
                  <span>카카오맵 보기</span>
                  <ExternalLink className="w-4 h-4 opacity-70" />
                </a>
              </div>
            </div>

            {/* Visit Guidelines Footer */}
            <div className="p-6 bg-stone-50 border-t border-stone-200">
              <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2 mb-1.5">
                <CalendarCheck className="w-4 h-4 text-teal-600" />
                농장 현장 방문 및 묘목 직접 수령 안내
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                황금낭 농원은 현장 재배 및 전국 택배 출고가 수시로 진행되므로, 
                직접 방문하여 묘목을 선별하거나 수령하시길 원하시는 고객님께서는 
                <strong> 사전 전화 예약({BRAND_INFO.tel})</strong> 후 방문해주시면 보다 여유롭고 친절하게 맞이해 드립니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
