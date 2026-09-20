'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PRODUCTS, BRAND_INFO } from '@/data';
import { Product } from '@/types';
import { Star, ShoppingBag, Truck, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';

interface ProductShowcaseProps {
  onSelectProduct?: (product: Product) => void;
  onOpenInquiryModal?: () => void;
}

export default function ProductShowcase({ onSelectProduct, onOpenInquiryModal }: ProductShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'mangotree' | 'citrus' | 'fresh'>('all');

  const categories = [
    { id: 'all', label: '전체 상품' },
    { id: 'mangotree', label: '애플망고나무 화분' },
    { id: 'citrus', label: '감귤·만감류 나무' },
    { id: 'fresh', label: '제주 프리미엄 생과' },
  ];

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Signature Collections</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              황금낭 대표 상품 컬렉션
            </h2>
            <p className="mt-2 text-stone-600 text-base">
              농장에서 직접 감별하여 출고되는 건강한 프리미엄 유실수와 신선 과실
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 mt-6 md:mt-0 p-1 bg-stone-100/90 rounded-2xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
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

        {/* Product Cards Grid */}
        <div id="products-all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group rounded-3xl bg-white border border-stone-200/90 overflow-hidden hover:border-teal-400/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={`object-cover transition-transform duration-500 ${
                      product.isSoldOut ? 'grayscale-[40%]' : 'group-hover:scale-105'
                    }`}
                  />
                  {product.isSoldOut && (
                    <div className="absolute inset-0 bg-stone-950/50 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center p-4">
                      <span className="px-3.5 py-1.5 rounded-full bg-rose-600 text-white text-xs font-black tracking-wider uppercase shadow-lg">
                        품절 (SOLD OUT)
                      </span>
                      <span className="text-[11px] text-white/90 font-medium mt-1">시즌 완판 / 예약 대기</span>
                    </div>
                  )}
                  {product.badge && !product.isSoldOut && (
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-teal-800/90 backdrop-blur-md text-white text-xs font-bold shadow-md">
                      {product.badge}
                    </div>
                  )}
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-stone-900 text-xs font-extrabold shadow-md">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>{product.rating}</span>
                    <span className="text-stone-400 font-normal">({product.reviewCount})</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <span className="text-xs font-bold text-teal-700 uppercase tracking-wider mb-1 block">
                    {product.categoryName}
                  </span>
                  <h3 className="text-lg font-bold text-stone-900 line-clamp-2 group-hover:text-teal-700 transition-colors mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-stone-600 line-clamp-2 leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {product.features.map((feature, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md bg-stone-100 text-stone-700"
                      >
                        <CheckCircle2 className="w-3 h-3 text-teal-600" />
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="flex items-baseline gap-2 mb-3">
                    {product.discountRate > 0 && (
                      <span className="text-lg font-extrabold text-rose-500">
                        {product.discountRate}%
                      </span>
                    )}
                    <span className="text-2xl font-black text-stone-900">
                      {product.salePrice.toLocaleString()}
                      <span className="text-sm font-normal text-stone-700">원</span>
                    </span>
                    {product.originalPrice > product.salePrice && (
                      <span className="text-xs text-stone-400 line-through">
                        {product.originalPrice.toLocaleString()}원
                      </span>
                    )}
                  </div>

                  {/* Delivery Info */}
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 pt-3 border-t border-stone-100">
                    <Truck className="w-3.5 h-3.5 text-stone-400" />
                    <span className="truncate">{product.deliveryInfo}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0">
                <a
                  href={product.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-stone-900 hover:bg-teal-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>스토어에서 구매하기</span>
                  <ArrowUpRight className="w-4 h-4 opacity-70" />
                </a>
              </div>
            </div>
          ))}
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
