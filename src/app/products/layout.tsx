import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '전 상품 라인업 | 황금낭 (네이버 스마트스토어 · 쿠팡 공식 입점)',
  description:
    '제주 서귀포 황금낭 공식 전 상품 카탈로그. 열매 달린 귤·감귤나무 묘목 화분, 애플망고나무 접목 특묘, 제주 완숙 애플망고 생과를 네이버 스마트스토어와 쿠팡에서 만나보세요.',
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: '전 상품 라인업 | 황금낭 공식 농장',
    description:
      '애플망고나무, 열매 달린 귤 묘목 화분, 제주 고당도 애플망고 생과 — 네이버·쿠팡 공식 매장 직결.',
    url: 'https://goldennang.vercel.app/products',
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
