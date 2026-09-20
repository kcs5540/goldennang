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
          {/* Left: Farm Information Details */}
          <div className="lg:col-span-5 rounded-3xl bg-stone-900 text-white p-8 sm:p-10 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Headquarters & Orchard</span>
                <h3 className="text-2xl font-black mt-1">{BRAND_INFO.name}</h3>
                <p className="text-stone-400 text-xs mt-1">대표자: {BRAND_INFO.ceo}</p>
              </div>

              <div className="space-y-5 pt-4 border-t border-stone-800">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-stone-800 text-teal-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 font-medium">농장 지번 / 도로명 주소</p>
                    <p className="text-sm font-semibold mt-0.5 text-stone-100">{BRAND_INFO.address}</p>
                    <p className="text-xs text-amber-400/90 mt-1">※ 서귀포 토평동 감귤·애플망고 특성화 단지</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-stone-800 text-teal-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 font-medium">대표 전화 및 방문 상담</p>
                    <a href={`tel:${BRAND_INFO.tel}`} className="text-xl font-black text-white hover:text-teal-300 transition-colors block mt-0.5">
                      {BRAND_INFO.tel}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-stone-800 text-teal-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 font-medium">상담 및 농장 운영시간</p>
                    <p className="text-sm font-semibold mt-0.5 text-stone-100">{BRAND_INFO.businessHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Left Notice Box */}
            <div className="pt-6 mt-6 border-t border-stone-800 text-xs text-stone-400 space-y-1.5 leading-relaxed">
              <p className="flex items-center gap-1.5 text-amber-300 font-bold">
                <CalendarCheck className="w-4 h-4 text-amber-400" />
                <span>방문 수령 시 사전 전화 필수</span>
              </p>
              <p>농원 작업 및 화물 택배 출고로 부재중일 수 있으니, 출발 전 전화 주시면 대기 없이 안내해 드립니다.</p>
            </div>
          </div>

          {/* Right: Interactive Navigation & Map Banner Panel */}
          <div className="lg:col-span-7 rounded-3xl border border-stone-200 overflow-hidden bg-white shadow-xl flex flex-col justify-between">
            {/* Real Farm Orchard Atmosphere Banner */}
            <div className="relative w-full h-[280px] sm:h-[320px] bg-stone-900 overflow-hidden flex flex-col justify-between p-6 sm:p-8 text-white">
              {/* Orchard Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 scale-105"
                style={{ backgroundImage: `url('https://shop-phinf.pstatic.net/20231104_254/1699073431135lz391_JPEG/%C8%B2%B1%DD%B3%B6_%B9%E8%B3%CA_%BD%BA%B8%B6%C6%AE%BD%BA%C5%E4%BE%EE-002.jpg')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-900/40" />

              {/* Location Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>제주 서귀포 현장 농원</span>
                </div>
                <span className="text-xs text-stone-300 font-medium">제주공항 기준 약 50분 소요</span>
              </div>

              {/* Center Navigation Tip */}
              <div className="relative z-10 my-auto py-2">
                <h4 className="text-xl sm:text-2xl font-black text-white mb-2">
                  서귀포 토평동 햇살 가득한 농원
                </h4>
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/50 backdrop-blur-md border border-white/15 text-xs text-stone-200">
                  <Navigation className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>내비게이션 검색: <strong>"황금낭"</strong> 또는 <strong>"토평남로27번길 44"</strong></span>
                </div>
              </div>

              {/* Quick Route Buttons */}
              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href={BRAND_INFO.links.naverPlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 py-3.5 px-4 rounded-xl bg-[#03C75A] hover:bg-[#02b350] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all whitespace-nowrap"
                >
                  <span className="w-5 h-5 bg-white text-[#03C75A] rounded-full flex items-center justify-center text-xs font-black shrink-0">N</span>
                  <span>네이버 플레이스 빠른 길찾기</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80 shrink-0" />
                </a>

                <a
                  href={`https://map.kakao.com/link/search/${encodeURIComponent(BRAND_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 py-3.5 px-4 rounded-xl bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all whitespace-nowrap"
                >
                  <span className="w-5 h-5 bg-[#191919] text-[#FEE500] rounded-full flex items-center justify-center text-xs font-black shrink-0">K</span>
                  <span>카카오맵 바로보기</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70 shrink-0" />
                </a>
              </div>
            </div>

            {/* Visit Guidelines Footer */}
            <div className="p-6 bg-stone-50 border-t border-stone-200">
              <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2 mb-1.5">
                <Compass className="w-4 h-4 text-teal-600" />
                대중교통 및 렌터카 찾아오시는 요령
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                서귀포 토평동 비석거리 교차로 방면에서 토평남로를 따라 약 800m 진입하시면 황금낭 농원 입간판을 바로 확인하실 수 있습니다. 
                넓은 농장 전용 주차 공간이 마련되어 있어 대형 차량도 편안하게 주차 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
