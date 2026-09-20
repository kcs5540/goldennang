import Image from 'next/image';
import Link from 'next/link';
import { Sun, HeartHandshake, ShieldCheck, Sparkles, Award } from 'lucide-react';
import { BRAND_INFO } from '@/data';

export default function BrandStory() {
  const highlights = [
    {
      icon: <Sun className="w-7 h-7 text-amber-500" />,
      title: '서귀포 천혜의 자연',
      description: '한라산이 북풍을 막아주고 일조량이 가장 풍부한 서귀포 토평동에서 건강하게 자라납니다.',
    },
    {
      icon: <Award className="w-7 h-7 text-teal-600" />,
      title: '7년 이상의 농원 노하우',
      description: '농업회사법인 주식회사 황금낭의 전문 마스터들이 접목부터 수형까지 엄격하게 품질을 관리합니다.',
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-emerald-600" />,
      title: '특수 완충 배송 시스템',
      description: '화분과 묘목이 흔들리거나 손상되지 않도록 맞춤 제작된 특수 완충 포장으로 전국 안방까지 안전 배송합니다.',
    },
    {
      icon: <HeartHandshake className="w-7 h-7 text-rose-500" />,
      title: '평생 반려식물 케어',
      description: '전용 네이버 카페를 통해 물주기, 분갈이, 인공수정 등 실시간 재배 상담과 노하우를 제공합니다.',
    }
  ];

  return (
    <section id="story" className="py-24 bg-stone-50/80 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Brand Story & Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
            부와 복을 가져다주는 길조의 나무, <br className="hidden sm:inline" />
            <span className="text-teal-700">황금낭</span> 이야기
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            제주 방언으로 &apos;낭&apos;은 나무를 의미합니다. <br className="sm:hidden" />
            황금빛 과실이 풍성하게 열리는 황금낭은 머무는 공간마다 재물운과 건강, 가족의 안녕을 기원하는 따뜻한 마음입니다.
          </p>
        </div>

        {/* Story Grid with Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 text-stone-700 leading-relaxed">
              <h3 className="text-2xl font-bold text-stone-900">
                &ldquo;집 안에서 직접 수확하는 감동, <br />
                서귀포의 푸른 자연을 일상 속으로&rdquo;
              </h3>
              <p>
                단순히 관상용 화분을 판매하는 것을 넘어, 씨앗과 묘목 하나하나에 제주의 맑은 바람과 토양의 기운을 담았습니다.
                초보 식집사도 아파트 베란다나 거실에서 건강하게 애플망고와 감귤을 수확할 수 있도록 수년 동안의 실험과 최적의 대목 접목 기술을 완성했습니다.
              </p>
              <p className="text-stone-600 text-sm">
                황금낭은 농업회사법인으로서의 투명하고 엄격한 품질 관리를 약속드리며, 
                소중한 분을 위한 개업 축하, 승진 선물, 가족의 건강한 반려식물로 최고의 품격을 전합니다.
              </p>
            </div>

            {/* Farm Info Badge & Link */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-stone-500">농장 소재지</p>
                <p className="text-sm sm:text-base font-bold text-stone-800">{BRAND_INFO.address}</p>
              </div>
              <Link
                href="/about-farm"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-teal-50 hover:bg-teal-100 text-teal-800 text-xs font-bold rounded-xl border border-teal-200 transition-colors whitespace-nowrap"
              >
                <span>농장 상세스토리 더보기</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/10]">
              <Image
                src="https://shop-phinf.pstatic.net/20260226_283/1772072516086qJASk_JPEG/26648641196468682_1964337145.jpg"
                alt="황금낭 제주 서귀포 농장 전경 및 묘목"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Authentic Jeju Heritage</span>
                <p className="text-lg font-bold">건강한 뿌리와 균형 잡힌 수형의 명품 묘목</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm hover:shadow-md hover:border-teal-300 transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-stone-900 mb-2">{item.title}</h4>
              <p className="text-sm text-stone-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
