import { GROWING_GUIDE, BRAND_INFO } from '@/data';
import { Sprout, HelpCircle, ExternalLink, Sparkles, MessageCircleHeart } from 'lucide-react';

export default function GrowingGuide() {
  return (
    <section id="guide" className="py-24 bg-stone-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sprout className="w-3.5 h-3.5 text-teal-700" />
            <span>Cultivation & Care Master</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            초보자도 성공하는 <span className="text-teal-700">반려 유실수</span> 키우기
          </h2>
          <p className="mt-3 text-stone-600 text-base leading-relaxed">
            아파트 거실과 베란다에서도 건강하게 꽃을 피우고 달콤한 과실을 수확할 수 있도록 <br className="hidden sm:inline" />
            황금낭 농원의 4가지 핵심 관리 비결을 전해드립니다.
          </p>
        </div>

        {/* 4 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {GROWING_GUIDE.map((guide, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-sm hover:shadow-md hover:border-teal-400 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-amber-500/80 font-mono">
                    {guide.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-teal-600" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mb-3">
                  {guide.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-6">
                  {guide.description}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-900 font-medium">
                <span className="font-bold block mb-1 text-amber-950">💡 Master Tip</span>
                {guide.tip}
              </div>
            </div>
          ))}
        </div>

        {/* Community Care Callout */}
        <div className="rounded-3xl bg-white border border-stone-200 p-8 sm:p-10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-2xl bg-teal-100 text-teal-800 shrink-0">
              <MessageCircleHeart className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-stone-900">
                &ldquo;키우다가 잎이 마르거나 궁금한 점이 생기셨나요?&rdquo;
              </h3>
              <p className="text-sm text-stone-600 mt-1 max-w-2xl leading-relaxed">
                걱정하지 마세요! 황금낭 공식 네이버 카페에는 수많은 식집사 동호인들과 전문 농원가가 실시간으로 사진을 보고 정확한 해결책을 처방해 드립니다.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={BRAND_INFO.links.cafe}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors"
            >
              <span>네이버 카페 재배상담</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={BRAND_INFO.links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-md transition-colors"
            >
              <span>유튜브 재배 영상</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
