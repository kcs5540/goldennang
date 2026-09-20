import Image from 'next/image';
import { REVIEWS } from '@/data/additions';
import { Star, CheckCircle2, Sparkles, MessageSquareQuote, ShieldCheck } from 'lucide-react';

export default function CustomerReviews() {
  return (
    <section className="py-24 bg-stone-50/70 relative overflow-hidden border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Real Customer Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            전국 식집사들이 증명하는 <br className="sm:hidden" />
            <span className="text-teal-700">황금낭 실구매 후기</span>
          </h2>
          <p className="mt-3 text-stone-600 text-base sm:text-lg">
            평균 평점 4.8점 이상! 전국 베란다와 거실, 개업식 현장에서 직접 보내주신 생생한 이야기입니다.
          </p>

          {/* Social Proof Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-stone-700">
            <span className="flex items-center gap-1.5 bg-white px-4 py-2 rounded-full border border-stone-200 shadow-xs">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              네이버스토어 구매만족도 <strong>98%</strong>
            </span>
            <span className="flex items-center gap-1.5 bg-white px-4 py-2 rounded-full border border-stone-200 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              배송 파손보상 <strong>100% 보장</strong>
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-teal-400 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating & Author */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-1 mb-1.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs font-bold text-stone-800">{review.author}</p>
                    <p className="text-[11px] text-teal-700 font-semibold">{review.productName}</p>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200 shrink-0">
                    {review.badge}
                  </span>
                </div>

                {/* Content */}
                <h4 className="text-base font-bold text-stone-900 mb-2">
                  &ldquo;{review.title}&rdquo;
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6 font-light">
                  {review.content}
                </p>
              </div>

              {/* Bottom Tag & Real Photo Thumbnail */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-500 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                  {review.tag}
                </span>

                {review.imageUrl && (
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-stone-200 shrink-0 shadow-xs">
                    <Image
                      src={review.imageUrl}
                      alt={review.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
