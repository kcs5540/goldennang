'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { BRAND_INFO } from '@/data';
import { useInquiryModal } from '@/context/InquiryModalContext';
import { 
  Menu, 
  X, 
  ShoppingBag, 
  Phone, 
  Sparkles, 
  ExternalLink, 
  ChevronDown,
  TreeDeciduous,
  Citrus,
  Apple,
  Boxes
} from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState('');
  const pathname = usePathname();
  const { openInquiryModal, openDirectOrderModal } = useInquiryModal();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateHash = () => {
      setCurrentHash(window.location.hash);
    };
    updateHash();
    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setProductDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setProductDropdownOpen(false);
    }, 150);
  };

  const isProductActive = pathname.startsWith('/products') || 
                          pathname === '/mango-tree' || 
                          pathname === '/citrus' || 
                          pathname === '/fresh-fruit';

  const productSubItems = [
    {
      name: '전체 상품 한눈에 보기',
      desc: '황금낭의 모든 유실수 및 과실 컬렉션',
      href: '/products',
      tag: 'ALL',
      color: 'bg-teal-50 text-teal-700'
    },
    {
      name: '애플망고나무 화분',
      desc: '어윈 품종 접목 2~3년생 명품 묘목',
      href: '/mango-tree',
      tag: 'BEST',
      color: 'bg-amber-50 text-amber-700'
    },
    {
      name: '감귤·만감류 화분',
      desc: '8년생 이상 대형목 & 금귤, 폰깡 분재',
      href: '/citrus',
      tag: '특품',
      color: 'bg-orange-50 text-orange-700'
    },
    {
      name: '제주 프리미엄 생과',
      desc: '서귀포 토평동 직송 고당도 완숙 2kg',
      href: '/fresh-fruit',
      tag: '산지직송',
      color: 'bg-rose-50 text-rose-700'
    }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-teal-700 via-teal-600 to-amber-600 text-white text-xs sm:text-sm py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
        <span>부와 복을 부르는 귤나무·애플망고나무 농장 | 제주 서귀포 직송 반려 유실수</span>
        <a 
          href={BRAND_INFO.links.smartstore} 
          target="_blank" 
          rel="noopener noreferrer"
          className="ml-2 hidden sm:inline-flex items-center underline hover:text-amber-200 text-xs gap-0.5"
        >
          네이버스토어 바로가기 <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-2">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0 w-56 xl:w-60">
            <div className="relative w-11 h-11 xl:w-12 xl:h-12 rounded-full overflow-hidden bg-teal-50 border border-teal-200 shadow-sm flex items-center justify-center shrink-0">
              <Image
                src={BRAND_INFO.logos.symbol}
                alt="황금낭 엠블럼"
                width={44}
                height={44}
                className="object-cover group-hover:scale-105 transition-transform"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-stone-900 group-hover:text-teal-700 transition-colors flex items-center gap-1.5">
                황금낭
                <span className="text-[10px] px-1.5 py-0.5 font-bold rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                  JEJU
                </span>
              </span>
              <span className="text-[11px] text-stone-500 font-medium -mt-0.5 whitespace-nowrap">
                농업회사법인 주식회사 황금낭
              </span>
            </div>
          </Link>

          {/* Desktop Navigation (균형감 있는 간격과 시각적 호흡) */}
          <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 flex-1 px-2">
            {/* 1. 농장 스토리 */}
            <Link
              href="/about-farm"
              className={`text-sm xl:text-[15px] font-bold py-2 whitespace-nowrap relative transition-colors ${
                pathname === '/about-farm'
                  ? 'text-teal-700 font-extrabold'
                  : 'text-stone-700 hover:text-teal-700'
              }`}
            >
              농장 스토리
              <span
                className={`absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300 ${
                  pathname === '/about-farm' ? 'w-full bg-teal-600' : 'w-0 bg-teal-600 hover:w-full'
                }`}
              />
            </Link>

            {/* 2. 상품 안내 (드롭다운 트리거) */}
            <div
              className="relative py-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/products"
                className={`inline-flex items-center gap-1 text-sm xl:text-[15px] font-bold whitespace-nowrap relative transition-colors ${
                  isProductActive
                    ? 'text-teal-700 font-extrabold'
                    : 'text-stone-700 hover:text-teal-700'
                }`}
              >
                <span>상품 안내</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productDropdownOpen ? 'rotate-180 text-teal-700' : 'text-stone-400'}`} />
                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300 ${
                    isProductActive ? 'w-full bg-teal-600' : 'w-0 bg-teal-600 hover:w-full'
                  }`}
                />
              </Link>

              {/* Hover Dropdown Menu Card */}
              {productDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-white rounded-2xl shadow-2xl border border-stone-200/90 p-3 pt-2 animate-in fade-in zoom-in-95 duration-150 z-50">
                  <div className="text-[11px] font-bold text-stone-400 px-3 py-1.5 uppercase tracking-wider border-b border-stone-100 mb-1">
                    황금낭 컬렉션 카테고리
                  </div>
                  <div className="space-y-1">
                    {productSubItems.map((sub, i) => (
                      <Link
                        key={i}
                        href={sub.href}
                        onClick={() => setProductDropdownOpen(false)}
                        className="flex items-start justify-between p-2.5 rounded-xl hover:bg-stone-50 transition-colors group"
                      >
                        <div>
                          <p className="text-sm font-bold text-stone-800 group-hover:text-teal-700 transition-colors">
                            {sub.name}
                          </p>
                          <p className="text-[11px] text-stone-500 mt-0.5">
                            {sub.desc}
                          </p>
                        </div>
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${sub.color}`}>
                          {sub.tag}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 3. 재배 가이드 */}
            <Link
              href="/#guide"
              onClick={() => setCurrentHash('#guide')}
              className={`text-sm xl:text-[15px] font-bold py-2 whitespace-nowrap relative transition-colors ${
                pathname === '/' && currentHash === '#guide'
                  ? 'text-teal-700 font-extrabold'
                  : 'text-stone-700 hover:text-teal-700'
              }`}
            >
              재배 가이드
              <span
                className={`absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300 ${
                  pathname === '/' && currentHash === '#guide' ? 'w-full bg-teal-600' : 'w-0 bg-teal-600 hover:w-full'
                }`}
              />
            </Link>

            {/* 4. 공지·새소식 */}
            <Link
              href="/#notices"
              onClick={() => setCurrentHash('#notices')}
              className={`text-sm xl:text-[15px] font-bold py-2 whitespace-nowrap relative transition-colors ${
                pathname === '/' && currentHash === '#notices'
                  ? 'text-teal-700 font-extrabold'
                  : 'text-stone-700 hover:text-teal-700'
              }`}
            >
              공지·새소식
              <span
                className={`absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300 ${
                  pathname === '/' && currentHash === '#notices' ? 'w-full bg-teal-600' : 'w-0 bg-teal-600 hover:w-full'
                }`}
              />
            </Link>

            {/* 5. 오시는 길 */}
            <Link
              href="/#location"
              onClick={() => setCurrentHash('#location')}
              className={`text-sm xl:text-[15px] font-bold py-2 whitespace-nowrap relative transition-colors ${
                pathname === '/' && currentHash === '#location'
                  ? 'text-teal-700 font-extrabold'
                  : 'text-stone-700 hover:text-teal-700'
              }`}
            >
              오시는 길
              <span
                className={`absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300 ${
                  pathname === '/' && currentHash === '#location' ? 'w-full bg-teal-600' : 'w-0 bg-teal-600 hover:w-full'
                }`}
              />
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center justify-end gap-2 shrink-0">
            <button
              onClick={openDirectOrderModal}
              className="px-3 py-2 text-xs xl:text-sm font-bold text-teal-800 bg-teal-50 hover:bg-teal-100 rounded-xl transition-all border border-teal-200 cursor-pointer whitespace-nowrap flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-teal-700 shrink-0" />
              <span>전화예약</span>
            </button>
            <button
              onClick={openInquiryModal}
              className="px-3 py-2 text-xs xl:text-sm font-bold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-xl transition-all border border-stone-300/80 cursor-pointer whitespace-nowrap"
            >
              B2B문의
            </button>
            <a
              href={BRAND_INFO.links.smartstore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs xl:text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 rounded-xl shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
              <span>네이버스토어</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${BRAND_INFO.tel}`}
              className="p-2 text-stone-700 hover:text-teal-700 bg-stone-100 rounded-lg sm:hidden"
              aria-label="전화 문의"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-stone-700 hover:text-teal-700 hover:bg-stone-100 rounded-xl transition-colors"
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-5 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1 pb-4 border-b border-stone-100">
            <Link
              href="/about-farm"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 text-sm font-bold text-stone-800 hover:text-teal-700 hover:bg-stone-50 rounded-xl"
            >
              농장 스토리
            </Link>

            <div className="p-3 bg-stone-50 rounded-2xl space-y-2">
              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-extrabold text-teal-800"
              >
                상품 안내 (전체보기) &rarr;
              </Link>
              <div className="grid grid-cols-1 gap-1.5 pl-2 text-xs text-stone-600">
                <Link href="/mango-tree" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-teal-700">
                  • 애플망고나무 화분 컬렉션
                </Link>
                <Link href="/citrus" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-teal-700">
                  • 감귤·만감류 화분 컬렉션
                </Link>
                <Link href="/fresh-fruit" onClick={() => setMobileMenuOpen(false)} className="py-1 hover:text-teal-700">
                  • 제주 프리미엄 생과 선물세트
                </Link>
              </div>
            </div>

            <Link
              href="/#guide"
              onClick={() => {
                setMobileMenuOpen(false);
                setCurrentHash('#guide');
              }}
              className="block p-3 text-sm font-bold text-stone-800 hover:text-teal-700 hover:bg-stone-50 rounded-xl"
            >
              재배 가이드
            </Link>
            <Link
              href="/#notices"
              onClick={() => {
                setMobileMenuOpen(false);
                setCurrentHash('#notices');
              }}
              className="block p-3 text-sm font-bold text-stone-800 hover:text-teal-700 hover:bg-stone-50 rounded-xl"
            >
              공지·새소식
            </Link>
            <Link
              href="/#location"
              onClick={() => {
                setMobileMenuOpen(false);
                setCurrentHash('#location');
              }}
              className="block p-3 text-sm font-bold text-stone-800 hover:text-teal-700 hover:bg-stone-50 rounded-xl"
            >
              오시는 길
            </Link>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openDirectOrderModal();
              }}
              className="w-full py-3.5 text-center text-sm font-bold text-teal-900 bg-teal-50 border border-teal-200 rounded-xl cursor-pointer flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-teal-700" />
              <span>농장 직거래 전화주문 & 방문예약</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openInquiryModal();
              }}
              className="w-full py-3 text-center text-sm font-bold text-stone-800 bg-stone-100 rounded-xl cursor-pointer"
            >
              🏢 B2B 납품 & 대량구매 견적문의
            </button>
            <a
              href={BRAND_INFO.links.smartstore}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 text-center text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-amber-500 rounded-xl shadow-md flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>네이버스토어로 바로 주문</span>
            </a>
            <div className="text-center pt-2 text-xs text-stone-500">
              고객센터 : <a href={`tel:${BRAND_INFO.tel}`} className="font-bold text-teal-700 underline underline-offset-2 hover:text-teal-900">{BRAND_INFO.tel}</a> (서귀포 본점)
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
