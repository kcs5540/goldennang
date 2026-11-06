'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PRODUCTS, COUPANG_PRODUCTS, BRAND_INFO } from '@/data';
import { Product } from '@/types';
import { Star, Truck, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';

interface ProductShowcaseProps {
  onSelectProduct?: (product: Product) => void;
  onOpenInquiryModal?: () => void;
}

export default function ProductShowcase({ onSelectProduct, onOpenInquiryModal }: ProductShowcaseProps) {
  const [storeChannel, setStoreChannel] = useState<'naver' | 'coupang'>('naver');
  const [activeCategory, setActiveCategory] = useState<'all' | 'mangotree' | 'citrus' | 'fresh'>('all');

  const categories = [
    { id: 'all', label: '전체 상품' },
    { id: 'mangotree', label: '애플망고나무 화분' },
    { id: 'citrus', label: '감귤·만감류 나무' },
    { id: 'fresh', label: '제주 프리미엄 생과' },
  ];

  const currentProducts = storeChannel === 'naver'
    ? (activeCategory === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeCategory))
    : COUPANG_PRODUCTS;

  return (
    <section id="products" className="py-24 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Official Brand Store</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            황금낭 대표 상품 컬렉션
          </h2>
          <p className="mt-2 text-stone-600 text-base">
            원하시는 구매 채널(네이버 또는 쿠팡)을 선택하시면 각 매장의 실시간 가격과 혜택으로 바로 연결됩니다.
          </p>
        </div>

        {/* 🏬 Store Channel Selector (대안 B: 네이버관 / 쿠팡관 분리) */}
        <div className="flex items-center justify-center mb-10">
          <div className="inline-flex p-1.5 bg-stone-100 rounded-2xl border border-stone-200 shadow-sm max-w-xl w-full">
            <button
              onClick={() => setStoreChannel('naver')}
              className={`flex-1 py-3 px-3 sm:px-5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                storeChannel === 'naver'
                  ? 'bg-[#03C75A] text-white shadow-md'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-white text-[#03C75A] text-[10px] font-black flex items-center justify-center shrink-0">N</span>
              <span className="truncate">네이버 스마트스토어관 (11종)</span>
            </button>
            <button
              onClick={() => setStoreChannel('coupang')}
              className={`flex-1 py-3 px-3 sm:px-5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                storeChannel === 'coupang'
                  ? 'bg-[#E61E2B] text-white shadow-md'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
              }`}
            >
              <span className="text-xs shrink-0">🚀</span>
              <span className="truncate">쿠팡 특가 브랜드관 (4종)</span>
            </button>
          </div>
        </div>

        {/* Channel Specific Header / Filter */}
        {storeChannel === 'naver' ? (
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
            <div className="text-xs sm:text-sm text-stone-500">
              총 <strong className="text-stone-900 font-bold">{PRODUCTS.length}개</strong>의 황금낭 정품 묘목 및 신선 과실
            </div>
            {/* Category Filter for Naver */}
            <div className="flex items-center gap-1.5 p-1 bg-stone-100/90 rounded-2xl overflow-x-auto max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-teal-700 text-white shadow-sm'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-rose-50 via-amber-50 to-orange-50 border border-rose-200/80 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#E61E2B] text-white flex items-center justify-center text-xl shrink-0 shadow-md">
                🚀
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-black text-stone-900 flex items-center gap-2">
                  <span>쿠팡 공식 입점 브랜드 [망고마을 황금낭]</span>
                  <span className="px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 text-[11px] font-bold">만족도 100%</span>
                </h3>
                <p className="text-xs text-stone-600 mt-0.5">
                  쿠팡 와우 회원 혜택과 배송비 포함 특가로 황금낭 인기 묘목을 바로 구매하세요.
                </p>
              </div>
            </div>
            <a
              href={BRAND_INFO.links.coupang}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#E61E2B] hover:bg-[#c91823] text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 shrink-0 shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <span>쿠팡 매장 전체보기</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}

        {/* Product Cards Grid - 4 Columns like Naver SmartStore */}
        <div id="products-all" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="group rounded-3xl bg-white border border-stone-200/90 overflow-hidden hover:border-teal-400/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container - Square Aspect Ratio (1:1 like Naver) */}
                <div className="relative aspect-square w-full overflow-hidden bg-stone-100">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className={`object-cover transition-transform duration-500 ${
                      product.isSoldOut ? 'grayscale-[40%]' : 'group-hover:scale-105'
                    }`}
                  />
                  {product.isSoldOut && (
                    <div className="absolute inset-0 bg-stone-950/50 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center p-4">
                      <span className="px-3 py-1 rounded-full bg-rose-600 text-white text-xs font-black tracking-wider uppercase shadow-lg">
                        품절 (SOLD OUT)
                      </span>
                      <span className="text-[11px] text-white/90 font-medium mt-1">시즌 완판 / 예약 대기</span>
                    </div>
                  )}
                  {product.badge && !product.isSoldOut && (
                    <div className={`absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-white text-[11px] font-bold shadow-md backdrop-blur-md ${
                      storeChannel === 'coupang' ? 'bg-[#E61E2B]' : 'bg-teal-800/90'
                    }`}>
                      {product.badge}
                    </div>
                  )}
                  <div className="absolute top-3 right-3 z-20 flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-stone-900 text-xs font-extrabold shadow-md">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>{product.rating}</span>
                    <span className="text-stone-400 font-normal">({product.reviewCount})</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5">
                  <span className={`text-[11px] font-bold uppercase tracking-wider mb-1 block ${
                    storeChannel === 'coupang' ? 'text-[#E61E2B]' : 'text-teal-700'
                  }`}>
                    {product.categoryName}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-stone-900 line-clamp-2 group-hover:text-teal-700 transition-colors mb-2 min-h-[2.5rem]">
                    {product.name}
                  </h3>
                  <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed mb-3">
                    {product.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.features.slice(0, 3).map((feature, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-0.5 text-[10px] font-medium px-1.5 py-0.5 rounded bg-stone-100 text-stone-600"
                      >
                        <CheckCircle2 className={`w-2.5 h-2.5 ${storeChannel === 'coupang' ? 'text-[#E61E2B]' : 'text-teal-600'}`} />
                        <span className="truncate max-w-[120px]">{feature}</span>
                      </span>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="flex items-baseline gap-1.5 mb-2">
                    {product.discountRate > 0 && (
                      <span className="text-base sm:text-lg font-extrabold text-rose-500">
                        {product.discountRate}%
                      </span>
                    )}
                    <span className="text-xl sm:text-2xl font-black text-stone-900">
                      {product.salePrice.toLocaleString()}
                      <span className="text-xs font-normal text-stone-700">원</span>
                    </span>
                    {product.originalPrice > product.salePrice && (
                      <span className="text-[11px] text-stone-400 line-through">
                        {product.originalPrice.toLocaleString()}원
                      </span>
                    )}
                  </div>

                  {/* Delivery Info */}
                  <div className="flex items-center gap-1.5 text-[11px] text-stone-500 pt-2.5 border-t border-stone-100">
                    <Truck className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <span className="truncate">{product.deliveryInfo}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="p-4 sm:p-5 pt-0">
                {storeChannel === 'naver' ? (
                  <a
                    href={product.storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-3 rounded-xl bg-[#03C75A] hover:bg-[#02b150] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5 text-center"
                    title="네이버 스마트스토어에서 구매하기"
                  >
                    <span className="w-4 h-4 rounded-full bg-white text-[#03C75A] text-[10px] font-black flex items-center justify-center leading-none shrink-0">N</span>
                    <span className="truncate">네이버스토어 구매</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-80 shrink-0" />
                  </a>
                ) : (
                  <a
                    href={product.storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-3 rounded-xl bg-[#E61E2B] hover:bg-[#c91823] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5 text-center"
                    title="쿠팡에서 바로구매"
                  >
                    <span className="text-xs shrink-0">🚀</span>
                    <span className="truncate">쿠팡 바로구매</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-80 shrink-0" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Platform Notice */}
        <div className="mt-8 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-600 flex items-center justify-between gap-3 flex-wrap">
          <p className="flex items-center gap-2">
            <span className="text-amber-600 font-bold">ℹ️ 공식 안내:</span>
            <span>각 판매처(네이버 스마트스토어, 쿠팡)의 회원 프로모션 혜택, 할인 쿠폰 및 배송 정책에 따라 최종 실결제 금액에 일부 차이가 있을 수 있습니다.</span>
          </p>
          <span className="text-stone-400 text-[11px] font-medium">제주 서귀포 황금낭 직영 정품 보증</span>
        </div>

        {/* B2B Promo Banner in Product Section */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-teal-900 via-stone-900 to-stone-900 p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Business & Wholesale Special
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold">
              호텔·카페 조경목 납품 및 기업 명절 선물세트 대량 상담
            </h3>
            <p className="text-stone-300 text-sm max-w-xl">
              원하시는 규격의 유실수 화분 일괄 제작, 특별 맞춤 리본 메시지 및 사업자 전용 세금계산서 발급이 가능합니다.
            </p>
          </div>
          {onOpenInquiryModal && (
            <button
              onClick={onOpenInquiryModal}
              className="px-6 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-bold text-sm whitespace-nowrap shadow-lg cursor-pointer transform hover:-translate-y-0.5 transition-all"
            >
              대량구매 견적 상담하기
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
