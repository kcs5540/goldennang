import { PRODUCTS, BRAND_INFO } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import { ShoppingBag, ArrowLeft, Star, Truck, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';

export const metadata = {
  title: '애플망고나무 화분 묘목 컬렉션 | 황금낭',
  description: '제주 서귀포 직송 어윈 애플망고나무 화분 3년생 및 접목 2년생 특묘. 실내 거실 및 베란다에서 키우는 반려 유실수.',
};

export default function MangoTreePage() {
  const mangoProducts = PRODUCTS.filter((p) => p.category === 'mangotree');

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
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>Signature Mango Collection</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight">
              제주 애플망고나무 화분 컬렉션
            </h1>
            <p className="mt-3 text-stone-600 text-base sm:text-lg max-w-3xl leading-relaxed">
              제주 서귀포 토평동 황금낭 농원에서 정성껏 접목하여 키워낸 명품 애플망고 묘목 화분입니다. 
              최고급 어윈(Irwin) 품종부터 라이락 홍망고까지, 아파트 베란다와 거실에서도 탐스러운 열매를 직접 수확하실 수 있습니다.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mangoProducts.map((product) => (
              <div
                key={product.id}
                className="group rounded-3xl bg-white border border-stone-200 overflow-hidden hover:border-teal-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
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
                      <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-teal-800/90 backdrop-blur-md text-white text-xs font-bold shadow-md">
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

          {/* Growing Callout */}
          <div className="mt-16 rounded-3xl bg-teal-900 text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Growing Care & Guide</span>
              <h3 className="text-2xl font-bold">애플망고나무, 아파트에서 어떻게 키우나요?</h3>
              <p className="text-stone-300 text-sm max-w-xl">
                충분한 햇빛과 흙이 말랐을 때 주는 듬뿍 물주기, 봄철 꽃눈 붓터치 인공수정만 해주시면 초보자도 쉽게 열매를 맺을 수 있습니다.
              </p>
            </div>
            <a
              href={BRAND_INFO.links.cafe}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-sm whitespace-nowrap shadow-lg transition-all"
            >
              황금낭 카페 재배법 보기
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingActionButtons />
    </div>
  );
}
