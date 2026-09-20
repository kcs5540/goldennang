'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import { PRODUCTS, BRAND_INFO } from '@/data';
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
  const [activeCategory, setActiveCategory] = useState<'all' | 'mangotree' | 'citrus' | 'fresh'>('all');

  const categories = [
    { id: 'all', label: '전체 상품', count: PRODUCTS.length },
    { id: 'mangotree', label: '애플망고나무 화분', count: PRODUCTS.filter(p => p.category === 'mangotree').length },
    { id: 'citrus', label: '감귤·만감류 화분', count: PRODUCTS.filter(p => p.category === 'citrus').length },
    { id: 'fresh', label: '제주 프리미엄 생과', count: PRODUCTS.filter(p => p.category === 'fresh').length },
  ];

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-stone-50/50">
      <Header />
      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Category Filter Tabs */}
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

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group rounded-3xl bg-white border border-stone-200 overflow-hidden hover:border-teal-400 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
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

                  <div className="p-6">
                    <span className="text-xs font-bold text-teal-700 uppercase tracking-wider mb-1 block">
                      {product.categoryName}
                    </span>
                    <h2 className="text-lg font-bold text-stone-900 line-clamp-2 group-hover:text-teal-700 transition-colors mb-2">
                      {product.name}
                    </h2>
                    <p className="text-sm text-stone-600 line-clamp-2 leading-relaxed mb-4">
                      {product.description}
                    </p>

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

                    <div className="flex items-center gap-1.5 text-xs text-stone-500 pt-3 border-t border-stone-100">
                      <Truck className="w-3.5 h-3.5 text-stone-400" />
                      <span className="truncate">{product.deliveryInfo}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href={product.storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl bg-stone-900 hover:bg-teal-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>스마트스토어 주문하기</span>
                    <ArrowUpRight className="w-4 h-4 opacity-70" />
                  </a>
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
