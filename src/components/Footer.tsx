import Image from 'next/image';
import { BRAND_INFO } from '@/data';
import { Phone, MapPin, ExternalLink, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-teal-800 flex items-center justify-center p-0.5">
                <Image
                  src={BRAND_INFO.logos.symbol}
                  alt="황금낭 로고"
                  width={38}
                  height={38}
                  className="rounded-full object-cover"
                />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                황금낭 <span className="text-xs text-amber-400 font-bold ml-1">GOLDEN NANG</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              {BRAND_INFO.slogan} <br />
              제주 서귀포의 자연과 햇살을 품은 프리미엄 유실수와 과실을 전해드립니다.
            </p>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_INFO.links.naverPlace}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-emerald-900/40 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-700/50 flex items-center justify-center transition-colors text-xs font-bold"
                title="네이버 플레이스 지도 (리뷰/길찾기)"
              >
                N지도
              </a>
              <a
                href={BRAND_INFO.links.smartstore}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-teal-900/40 hover:bg-teal-700 text-teal-300 hover:text-white border border-teal-700/50 flex items-center justify-center transition-colors text-xs font-bold"
                title="네이버 스마트스토어"
              >
                N스토어
              </a>
              <a
                href={BRAND_INFO.links.cafe}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-emerald-900/40 hover:bg-emerald-700 text-emerald-300 hover:text-white border border-emerald-700/50 flex items-center justify-center transition-colors text-xs font-bold"
                title="네이버 카페"
              >
                N카페
              </a>
              <a
                href={BRAND_INFO.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-pink-900/40 hover:bg-pink-700 text-pink-300 hover:text-white border border-pink-700/50 flex items-center justify-center transition-colors"
                title="인스타그램"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={BRAND_INFO.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-rose-900/40 hover:bg-rose-700 text-rose-300 hover:text-white border border-rose-700/50 flex items-center justify-center transition-colors"
                title="유튜브"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">주요 메뉴</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li><a href="/about-farm" className="hover:text-teal-400 transition-colors">서귀포 황금낭 농장 스토리</a></li>
              <li><a href="/products" className="hover:text-teal-400 transition-colors">황금낭 프리미엄 상품 안내</a></li>
              <li><a href="/mango-tree" className="hover:text-teal-400 transition-colors">애플망고나무 화분 묘목</a></li>
              <li><a href="/citrus" className="hover:text-teal-400 transition-colors">8년생 감귤나무 화분 특품</a></li>
              <li><a href="/fresh-fruit" className="hover:text-teal-400 transition-colors">제주 직송 고당도 생과</a></li>
              <li><a href="/#guide" className="hover:text-teal-400 transition-colors">초보자를 위한 재배 노하우</a></li>
              <li><a href="/#notices" className="hover:text-teal-400 transition-colors text-amber-300 font-semibold">공지·새소식</a></li>
              <li><a href="/#location" className="hover:text-teal-400 transition-colors">서귀포 농장 오시는 길</a></li>
            </ul>
          </div>

          {/* Corporate / Seller Info */}
          <div className="lg:col-span-5 space-y-3 text-xs leading-relaxed text-stone-400">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">사업자 정보</h4>
            <div className="space-y-1">
              <p><strong className="text-stone-300">상호명:</strong> {BRAND_INFO.name}</p>
              <p><strong className="text-stone-300">대표자:</strong> {BRAND_INFO.ceo}</p>
              <p><strong className="text-stone-300">사업장 주소:</strong> {BRAND_INFO.address}</p>
              <p className="flex items-center gap-1.5 flex-wrap">
                <strong className="text-stone-300">고객상담센터:</strong> 
                <a 
                  href={`tel:${BRAND_INFO.tel}`} 
                  className="text-teal-400 hover:text-teal-300 font-bold hover:underline inline-flex items-center gap-1"
                  title="전화 연결하기"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{BRAND_INFO.tel}</span>
                  <span className="text-[10px] text-teal-300/80 bg-teal-950 px-1.5 py-0.5 rounded border border-teal-800 ml-1">전화연결</span>
                </a>
              </p>
              <p><strong className="text-stone-300">운영시간:</strong> {BRAND_INFO.businessHours}</p>
            </div>
            <p className="pt-2 text-[11px] text-stone-500">
              ※ 본 사이트의 모든 콘텐츠, 상품 이미지, 디자인 저작권은 농업회사법인 주식회사 황금낭에 있습니다.
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div className="flex items-center gap-3">
            <p>© {new Date().getFullYear()} {BRAND_INFO.name}. All rights reserved.</p>
            <a 
              href="/admin" 
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-teal-400 border border-stone-800 transition-colors text-[11px] font-medium" 
              title="황금낭 관리자 센터 바로가기"
            >
              <span>🔒</span>
              <span>관리자</span>
            </a>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
            <a href={BRAND_INFO.links.naverPlace} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 text-stone-400 font-medium">네이버 플레이스 (지도/방문)</a>
            <span>•</span>
            <a href={BRAND_INFO.links.smartstore} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">네이버스토어</a>
            <span>•</span>
            <a href={BRAND_INFO.links.cafe} target="_blank" rel="noopener noreferrer" className="hover:text-stone-300">공식 네이버 카페</a>
            <span>•</span>
            <a href={BRAND_INFO.links.blog} target="_blank" rel="noopener noreferrer" className="hover:text-stone-300">공식 블로그</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
