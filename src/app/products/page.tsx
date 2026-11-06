'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import { PRODUCTS, COUPANG_PRODUCTS, BRAND_INFO } from '@/data';
import { Product } from '@/types';
import { 
  ShoppingBag, 
  ArrowLeft, 
  Star, 
  Truck, 
  CheckCircle2, 
  ArrowUpRight, 
  Sparkles, 
  Filter,
  TreeDeciduous,
  Gift,
  Leaf
} from 'lucide-react';

export default function ProductsPage() {
  const [storeChannel, setStoreChannel] = useState<'naver' | 'coupang'>('naver');
  const [activeCategory, setActiveCategory] = useState<'all' | 'mangotree' | 'citrus' | 'fresh'>('all');

  const categories = [
    { id: 'all', label: '전체 상품', count: PRODUCTS.length },
    { id: 'mangotree', label: '애플망고나무 화분', count: PRODUCTS.filter(p => p.category === 'mangotree').length },
    { id: 'citrus', label: '감귤·만감류 화분', count: PRODUCTS.filter(p => p.category === 'citrus').length },
    { id: 'fresh', label: '제주 프리미엄 생과', count: PRODUCTS.filter(p => p.category === 'fresh').length },
  ];

  const currentProducts = storeChannel === 'naver'
    ? (activeCategory === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeCategory))
    : COUPANG_PRODUCTS;

  return (
    <div className="flex flex-col min-h-screen bg-stone-50/50">
      <Header />
      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Banner */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>Full Collection & Catalog</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
              황금낭 프리미엄 상품 안내
            </h1>
            <p className="mt-3 text-stone-600 text-base sm:text-lg leading-relaxed">
              제주 서귀포 토평동 햇살과 바람으로 키워낸 고품격 반려 유실수 화분과 고당도 완숙 생과입니다. <br className="hidden sm:inline" />
              철저한 규격 관리와 특수 완충 포장으로 전국 안방까지 안전하게 직송해 드립니다.
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

          {/* Category Filter Tabs (for Naver) / Coupang Banner (for Coupang) */}
          {storeChannel === 'naver' ? (
            <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    activeCategory === cat.id
                      ? 'bg-teal-700 text-white shadow-lg shadow-teal-900/20 scale-105'
                      : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                    activeCategory === cat.id ? 'bg-teal-800 text-teal-200' : 'bg-stone-100 text-stone-500'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-rose-50 via-amber-50 to-orange-50 border border-rose-200/80 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
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

          {/* Product Grid - 4 columns like Naver SmartStore */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
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

                  <div className="p-4 sm:p-5">
                    <span className={`text-[11px] font-bold uppercase tracking-wider mb-1 block ${
                      storeChannel === 'coupang' ? 'text-[#E61E2B]' : 'text-teal-700'
                    }`}>
                      {product.categoryName}
                    </span>
                    <h2 className="text-sm sm:text-base font-bold text-stone-900 line-clamp-2 group-hover:text-teal-700 transition-colors mb-2 min-h-[2.5rem]">
                      {product.name}
                    </h2>
                    <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed mb-3">
                      {product.description}
                    </p>

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

                    <div className="flex items-center gap-1.5 text-[11px] text-stone-500 pt-2.5 border-t border-stone-100">
                      <Truck className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span className="truncate">{product.deliveryInfo}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
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
                      <span className="truncate">네이버스토어로 구매하기</span>
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
                      <span>🚀</span>
                      <span className="truncate">쿠팡에서 바로구매</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-80 shrink-0" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Category Specific Direct Access Banners */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Link
              href="/mango-tree"
              className="p-8 rounded-3xl bg-teal-900 text-white shadow-lg hover:shadow-xl hover:bg-teal-800 transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">Deep Dive</span>
                <h3 className="text-xl font-bold mb-2">애플망고나무 집중 보기</h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  어윈 품종 3년생 화분, 2년생 특묘의 품종 특징과 베란다 재배 노하우를 확인하세요.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1 text-sm font-bold text-amber-300 group-hover:translate-x-1 transition-transform">
                <span>자세히 보기</span>
                <span>&rarr;</span>
              </div>
            </Link>

            <Link
              href="/citrus"
              className="p-8 rounded-3xl bg-amber-500 text-stone-950 shadow-lg hover:shadow-xl hover:bg-amber-400 transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-stone-900 uppercase tracking-widest block mb-1">Fortunate Tree</span>
                <h3 className="text-xl font-bold mb-2">감귤·만감류 집중 보기</h3>
                <p className="text-xs text-stone-900/80 leading-relaxed">
                  8년생 이상 대형 감귤나무 대품과 사계절 푸른 금귤, 폰깡나무를 확인하세요.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1 text-sm font-bold text-stone-950 group-hover:translate-x-1 transition-transform">
                <span>자세히 보기</span>
                <span>&rarr;</span>
              </div>
            </Link>

            <Link
              href="/fresh-fruit"
              className="p-8 rounded-3xl bg-stone-900 text-white shadow-lg hover:shadow-xl hover:bg-stone-800 transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-rose-400 uppercase tracking-widest block mb-1">Seasonal Harvest</span>
                <h3 className="text-xl font-bold mb-2">제주생과 선물세트 보기</h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  서귀포 토평동 직송 16+ Brix 고당도 완숙 애플망고 선물세트의 규격과 후기를 확인하세요.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1 text-sm font-bold text-rose-300 group-hover:translate-x-1 transition-transform">
                <span>자세히 보기</span>
                <span>&rarr;</span>
              </div>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingActionButtons />
    </div>
  );
}
