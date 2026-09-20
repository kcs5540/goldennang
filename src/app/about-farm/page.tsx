import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import { BRAND_INFO } from '@/data';
import { 
  Building2, 
  MapPin, 
  Sun, 
  Wind, 
  Droplets, 
  Sprout, 
  Award, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  PhoneCall,
  CalendarCheck
} from 'lucide-react';

export const metadata = {
  title: '농장 소개 | 농업회사법인 주식회사 황금낭',
  description: '제주 서귀포시 토평동에 위치한 황금낭 농장 소개. 천혜의 서귀포 자연환경, 7년 노하우 접목 기술, 첨단 스마트 온실과 명품 유실수 재배 철학.',
};

export default function AboutFarmPage() {
  const farmFeatures = [
    {
      icon: <Sun className="w-8 h-8 text-amber-500" />,
      title: '연중 풍부한 서귀포의 일조량',
      subtitle: '연평균 16℃의 온난한 아열대 기후',
      description: '제주 서귀포 토평동은 한라산이 북쪽의 찬 바람을 막아주고 남쪽의 따스한 해풍과 풍부한 햇살이 머무는 감귤·애플망고 재배의 최적지입니다.'
    },
    {
      icon: <Droplets className="w-8 h-8 text-teal-600" />,
      title: '제주 천연 화산암반수 관수',
      subtitle: '미네랄이 풍부한 청정 지하수',
      description: '화산회토의 뛰어난 배수성과 미네랄이 살아있는 제주의 깨끗한 암반수로 수분을 공급하여 잔뿌리가 건강하고 활착력이 뛰어난 묘목을 길러냅니다.'
    },
    {
      icon: <Sprout className="w-8 h-8 text-emerald-600" />,
      title: '전문 접목 & 수형 마스터 시스템',
      subtitle: '7년 이상 검증된 농업회사법인 노하우',
      description: '우수한 대목 선별부터 정밀 접목, 실내/베란다에서도 열매가 잘 맺히도록 수형을 다듬는 전정 기술까지 전문 농원가의 손길로 완성됩니다.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
      title: '특수 완충 전국 안전 직송',
      subtitle: '식물 전용 맞춤 패키징',
      description: '택배 이동 중 화분이 뒤집히거나 흙이 쏟아지지 않도록 특허급 식물 고정 완충재를 적용하여 제주에서 전국 각 가정까지 생생하게 도착합니다.'
    }
  ];

  const milestones = [
    {
      year: '농장 출범',
      title: '서귀포 토평동 황금낭 농원 조성',
      description: '제주 서귀포시 토평동 감귤 특성화 단지 내 부지 확보 및 애플망고 묘목 연구 온실 준공'
    },
    {
      year: '법인 전환',
      title: '농업회사법인 주식회사 황금낭 설립',
      description: '농업 경영체 정식 등록 및 전문 농업법인 체계 구축, 체계적인 품질 규격화 완성'
    },
    {
      year: '유통 확장',
      title: '네이버 스마트스토어 및 전국 택배 시스템 런칭',
      description: '식물 전용 특수 완충 포장 개발로 전국 아파트 베란다 반려식물 붐 주도, 평점 4.7 이상 달성'
    },
    {
      year: '현재 ~ 미래',
      title: '프리미엄 생과 & B2B 조경/선물 시장 선도',
      description: '서귀포 산지직송 고당도 완숙 생과 선물세트 및 호텔·기업 조경목 납품 브랜드로 도약'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-stone-50/50">
      <Header />
      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-25">
            <Image
              src="https://shop-phinf.pstatic.net/20260226_283/1772072516086qJASk_JPEG/26648641196468682_1964337145.jpg"
              alt="황금낭 농장 전경 배경"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-transparent" />

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-300 text-xs sm:text-sm font-bold mb-6 backdrop-blur-md">
              <Building2 className="w-4 h-4 text-amber-400" />
              <span>ORCHARD & HERITAGE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
              제주 서귀포의 자연과 농부의 정성, <br />
              <span className="text-teal-400">황금낭 농장</span>을 소개합니다
            </h1>

            <p className="text-stone-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-light">
              황금낭은 제주 서귀포 토평동의 비옥한 화산회토와 따스한 햇살 아래, <br className="hidden sm:inline" />
              대한민국 가정마다 부와 복을 전하는 고품격 반려 유실수와 프리미엄 과실을 키워냅니다.
            </p>
          </div>
        </section>

        {/* 2. CEO Philosophy & Story */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 mb-24">
          <div className="bg-white rounded-3xl p-8 sm:p-14 shadow-2xl border border-stone-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>농장주 인사말</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 leading-snug">
                  &ldquo;열매를 수확하는 기쁨은 <br className="hidden sm:inline" />
                  일상 속 가장 특별한 행복이 됩니다.&rdquo;
                </h2>
                <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    안녕하십니까, <strong>농업회사법인 주식회사 황금낭</strong> 대표 신현주입니다.
                  </p>
                  <p>
                    제주에서 &apos;낭&apos;은 나무를 뜻합니다. 예로부터 우리 조상들은 집안에 노란 귤이 주렁주렁 열린 나무를 두면 황금이 굴러들어오고 복이 깃든다고 믿었습니다.
                    저희 황금낭은 그 길조의 상징을 현대 가정의 베란다와 거실, 일터 속으로 전해드리고자 시작되었습니다.
                  </p>
                  <p>
                    누구나 쉽게 키우고 탐스러운 애플망고와 감귤을 직접 따먹는 감동을 누리실 수 있도록, 
                    수많은 연구를 거쳐 아파트 실내 환경에 최적화된 뿌리 활착과 수형 관리 기술을 정립하였습니다. 
                    단순한 묘목 판매자가 아닌, 고객 여러분의 평생 반려식물 동반자로서 최고의 신뢰를 약속드립니다.
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-stone-400 font-semibold">농업회사법인 주식회사 황금낭</p>
                    <p className="text-base font-bold text-stone-800 mt-0.5">대표이사 신현주</p>
                  </div>
                  <span className="text-xs font-bold px-3 py-1.5 bg-teal-50 text-teal-700 rounded-lg border border-teal-200">
                    서귀포 본점 농원
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] border-4 border-stone-100">
                  <Image
                    src="https://shop-phinf.pstatic.net/20260330_32/1774837509347JrBaL_PNG/55932915069211005_931202940.png"
                    alt="황금낭 애플망고나무 화분 대표 이미지"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs font-bold text-amber-400">GOLDEN NANG HERITAGE</p>
                    <p className="text-base font-bold">정성으로 키워낸 3년생 어윈 애플망고</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. 4 Natural Blessings (천혜의 재배 환경) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block mb-2">Natural Environment</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              서귀포 토평동 황금낭 농원이 특별한 이유
            </h2>
            <p className="mt-3 text-stone-600 text-base">
              자연이 빚어내고 농부가 지켜가는 황금낭만의 4대 재배 경쟁력입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {farmFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-stone-200 shadow-sm hover:shadow-xl hover:border-teal-400 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-stone-100 flex items-center justify-center mb-6">
                    {feat.icon}
                  </div>
                  <span className="text-xs font-bold text-teal-700 block mb-1">{feat.subtitle}</span>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">{feat.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{feat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Farm Milestones & History */}
        <section className="bg-stone-900 text-white py-24 mb-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">History & Growth</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                황금낭 농원이 걸어온 길
              </h2>
              <p className="mt-3 text-stone-400 text-base">
                단단한 뿌리를 내리며 대한민국을 대표하는 제주 유실수 농원으로 성장해왔습니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((m, idx) => (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-stone-800/80 border border-stone-700/80 backdrop-blur-sm relative"
                >
                  <span className="text-xs font-extrabold text-amber-400 font-mono tracking-wider block mb-2">
                    {m.year}
                  </span>
                  <h4 className="text-lg font-bold text-white mb-2">{m.title}</h4>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">{m.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Farm Visit CTA */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="rounded-3xl bg-gradient-to-r from-teal-800 via-teal-700 to-amber-700 text-white p-8 sm:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">Visit & Experience</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                서귀포 농장 현장 방문 및 묘목 직접 수령 안내
              </h3>
              <p className="text-stone-100 text-sm sm:text-base max-w-2xl leading-relaxed">
                제주 서귀포시 토평남로27번길 44에 위치한 황금낭 농원은 현장 재배와 출고가 활발히 이루어집니다. 
                직접 방문하여 수형을 보고 수령하시길 원하시는 고객님께서는 사전 예약 후 방문해 주세요.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href={`tel:${BRAND_INFO.tel}`}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-stone-950 hover:bg-black text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>방문 예약 ({BRAND_INFO.tel})</span>
              </a>
              <Link
                href="/#location"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/20 hover:bg-white/30 border border-white/40 text-white font-bold text-sm flex items-center justify-center gap-2 backdrop-blur-md transition-all"
              >
                <MapPin className="w-4 h-4" />
                <span>농장 위치 지도보기</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActionButtons />
    </div>
  );
}
