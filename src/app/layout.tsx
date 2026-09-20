import type { Metadata } from 'next';
import './globals.css';
import { BRAND_INFO } from '@/data';
import { InquiryModalProvider } from '@/context/InquiryModalContext';

export const metadata: Metadata = {
  title: '황금낭 - 제주 애플망고나무·감귤나무 분재 농장 | 농업회사법인 주식회사 황금낭',
  description: '부와 복을 부르는 제주 감귤나무와 애플망고나무 농장 황금낭. 서귀포 토평동 직송 접목 2~3년생 묘목 화분, 8년생 대형 유실수, 고당도 완숙 애플망고 선물세트.',
  keywords: '황금낭, 애플망고나무, 감귤나무화분, 제주애플망고, 유실수묘목, 어윈망고, 제주특산물, 반려식물, 농업회사법인황금낭',
  openGraph: {
    title: '황금낭 (GOLDEN NANG) - 제주 프리미엄 유실수 & 애플망고',
    description: '부와 복을 부르는 귤나무·애플망고나무 농장 제주 황금낭. 서귀포 산지직송 반려 유실수 화분과 고당도 생과.',
    url: 'https://smartstore.naver.com/goldennang',
    siteName: '황금낭',
    images: [
      {
        url: 'https://shop-phinf.pstatic.net/20260319_220/17738786621381F8sw_PNG/58835582220599131_121153573.png',
        width: 1182,
        height: 1182,
        alt: '황금낭 공식 로고 엠블럼',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BRAND_INFO.name,
    image: BRAND_INFO.logos.symbol,
    telephone: BRAND_INFO.tel,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '토평남로27번길 44',
      addressLocality: '서귀포시',
      addressRegion: '제주특별자치도',
      addressCountry: 'KR',
    },
    url: BRAND_INFO.links.smartstore,
    priceRange: '₩₩',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
  };

  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-stone-900 antialiased selection:bg-teal-600 selection:text-white">
        <InquiryModalProvider>
          {children}
        </InquiryModalProvider>
      </body>
    </html>
  );
}
