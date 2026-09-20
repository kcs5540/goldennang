import { PRODUCTS, BRAND_INFO } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import { ShoppingBag, ArrowLeft, Star, Truck, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';

export const metadata = {
  title: '감귤나무·만감류 화분 컬렉션 | 황금낭',
  description: '제주 서귀포 8년생 이상 대형 감귤나무 화분 특상품 및 폰깡, 금귤나무 분재. 개업·승진·입주 축하 선물 1순위.',
};

export default function CitrusPage() {
  const citrusProducts = PRODUCTS.filter((p) => p.category === 'citrus');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-stone-50/50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb & Header */}
          <div className="mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-teal-700 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>홈으로 돌아가기</span>
            </Link>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Authentic Jeju Citrus</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
              제주 감귤나무 & 만감류 화분 컬렉션
            </h1>
            <p className="mt-3 text-stone-600 text-base sm:text-lg max-w-3xl leading-relaxed">
              부와 행운을 부르는 제주의 상징! 8년 이상 전문 농원가의 손길로 균형 잡힌 명품 감귤나무 화분부터 
              사계절 푸른 잎과 앙증맞은 열매를 자랑하는 금귤·폰깡나무까지, 특별한 날을 위한 최고의 품격을 전합니다.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {citrusProducts.map((product) => (
              <div
                key={product.id}
                className="group rounded-3xl bg-white border border-stone-200 overflow-hidden hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.badge && (
                      <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-amber-600 text-white text-xs font-bold shadow-md">
                        {product.badge}
                      </div>
                    )}
                    <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-stone-900 text-xs font-extrabold shadow-md">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      <span>{product.rating}</span>
                      <span className="text-stone-400 font-normal">({product.reviewCount})</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1 block">
                      {product.categoryName}
                    </span>
                    <h2 className="text-lg font-bold text-stone-900 line-clamp-2 group-hover:text-amber-700 transition-colors mb-2">
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
                          <CheckCircle2 className="w-3 h-3 text-amber-600" />
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
                    className="w-full py-3.5 px-4 rounded-xl bg-stone-900 hover:bg-amber-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>스마트스토어 주문하기</span>
                    <ArrowUpRight className="w-4 h-4 opacity-70" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Meaning Banner */}
          <div className="mt-16 rounded-3xl bg-amber-500 text-stone-950 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2">
              <span className="text-xs font-bold text-stone-900 uppercase tracking-widest">Fortunate Gift Tree</span>
              <h3 className="text-2xl font-bold">개업식·집들이 축하 화분, 왜 감귤나무일까요?</h3>
              <p className="text-stone-900/80 text-sm max-w-xl">
                황금빛으로 무르익는 감귤 열매는 재물과 번영, 건강한 결실을 상징하여 받는 분에게 잊지 못할 깊은 감동을 선사합니다.
              </p>
            </div>
            <a
              href={BRAND_INFO.links.smartstore}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm whitespace-nowrap shadow-lg transition-all"
            >
              감귤나무 스토어 구매
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingActionButtons />
    </div>
  );
}
