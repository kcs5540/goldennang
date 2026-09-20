import { PACKAGING_STEPS } from '@/data/additions';
import { ShieldCheck, PackageCheck, Truck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function SafetyPackaging() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
            <span>Safe Delivery Guarantee</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            제주에서 전국 안방까지, <br className="sm:hidden" />
            <span className="text-teal-700">황금낭 3중 안심 배송 시스템</span>
          </h2>
          <p className="mt-3 text-stone-600 text-base sm:text-lg">
            &ldquo;나무가 다치지 않을까? 흙이 쏟아지지 않을까?&rdquo; <br className="hidden sm:inline" />
            황금낭은 7년 동안 다듬어진 특수 완충 포장 기술로 박스가 뒤집혀도 식물을 완벽하게 보호합니다.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PACKAGING_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-stone-50 border border-stone-200/90 shadow-xs hover:shadow-lg hover:border-teal-400 hover:bg-white transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-amber-500 font-mono">
                    {step.step}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-teal-100/60 text-teal-700 flex items-center justify-center">
                    <PackageCheck className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-stone-900 mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-stone-200/60 flex items-center gap-1 text-[11px] font-bold text-teal-700">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>파손율 0.1% 미만 달성</span>
              </div>
            </div>
          ))}
        </div>

        {/* 100% Compensation Guarantee Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-stone-900 via-stone-900 to-teal-950 text-white p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-stone-800">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              100% Damage Replacement Promise
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold">
              만약 배송 중 가지가 부러지거나 화분이 파손되면 어쩌죠?
            </h3>
            <p className="text-stone-300 text-sm max-w-xl font-light">
              도착 즉시 사진을 찍어 고객센터로 보내주시면, 이유를 불문하고 <strong>새로운 특묘로 100% 즉시 무료 맞교환</strong>해 드립니다. 안심하고 주문하세요.
            </p>
          </div>

          <div className="shrink-0">
            <div className="px-6 py-4 rounded-2xl bg-teal-600/90 border border-teal-400/40 text-center">
              <span className="text-xs text-teal-200 font-semibold block">황금낭 안심케어</span>
              <span className="text-lg font-black text-white">100% 무료 맞교환 보장</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
