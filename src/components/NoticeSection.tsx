'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FARM_NOTICES, FarmNotice, CAFE_COMMUNITY_POSTS } from '@/data/additions';
import { BRAND_INFO } from '@/data';
import { supabase } from '@/lib/supabase';
import { 
  ChevronRight, 
  Eye, 
  Calendar, 
  Sparkles, 
  Megaphone, 
  X, 
  ExternalLink, 
  MessageSquare, 
  Users, 
  Camera 
} from 'lucide-react';

export default function NoticeSection() {
  const [notices, setNotices] = useState<FarmNotice[]>(FARM_NOTICES);
  const [selectedNotice, setSelectedNotice] = useState<FarmNotice | null>(null);
  const [activeTab, setActiveTab] = useState<string>('전체');

  useEffect(() => {
    async function loadNotices() {
      try {
        const { data, error } = await supabase
          .from('goldennang_notices')
          .select('*')
          .order('created_at', { ascending: false });

        if (data && data.length > 0 && !error) {
          const formatted: FarmNotice[] = data.map((item: any) => ({
            id: item.id,
            title: item.title,
            category: item.category as any,
            date: new Date(item.created_at).toISOString().split('T')[0].replace(/-/g, '.'),
            summary: item.summary || (item.content.slice(0, 100) + '...'),
            content: item.content,
            views: item.views || 0,
            important: item.important || false
          }));
          setNotices(formatted);
        }
      } catch (err) {
        console.warn('DB load notices fallback to static:', err);
      }
    }
    loadNotices();
  }, []);

  const tabs = ['전체', '식집사 나무자랑', '출하안내', '농장소식', '재배팁', '배송공지'];

  const filteredNotices = activeTab === '전체' 
    ? notices 
    : notices.filter(n => n.category === activeTab);

  return (
    <section id="notices" className="py-20 bg-stone-50/70 border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold mb-3">
              <Megaphone className="w-3.5 h-3.5 text-teal-700" />
              <span>NOTICE & COMMUNITY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              공지·새소식 & 커뮤니티
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-1">
              제철 출하 일정과 네이버 공식 카페 회원들의 생생한 가정 재배기를 만나보세요.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'bg-white text-stone-600 hover:bg-stone-200/70 border border-stone-200'
                }`}
              >
                {tab === '식집사 나무자랑' ? '🌱 식집사 나무자랑' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* 1. Cafe Community Photo Feed (식집사 나무자랑 탭이거나 전체 탭일 때 노출) */}
        {(activeTab === '전체' || activeTab === '식집사 나무자랑') && (
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-emerald-600" />
                <h3 className="text-base sm:text-lg font-extrabold text-stone-900">
                  네이버 카페 회원들의 집에서 키우는 나무 자랑
                </h3>
              </div>
              <a
                href={BRAND_INFO.links.cafe}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 hover:underline"
              >
                <span>카페에서 더보기</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {CAFE_COMMUNITY_POSTS.map((post) => (
                <a
                  key={post.id}
                  href={BRAND_INFO.links.cafe}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl border border-stone-200 overflow-hidden hover:border-emerald-400 hover:shadow-xl transition-all group flex flex-col"
                >
                  <div className="relative h-44 w-full bg-stone-100 overflow-hidden">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-stone-900/80 text-white text-[10px] font-bold backdrop-blur-xs">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-stone-900 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h4>
                      <p className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed">
                        {post.summary}
                      </p>
                    </div>
                    <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                      <span>{post.author}</span>
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-0.5">
                          <Eye className="w-3 h-3" /> {post.views}
                        </span>
                        <span className="flex items-center gap-0.5 text-emerald-600 font-bold">
                          <MessageSquare className="w-3 h-3" /> {post.comments}
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* 2. Official Notices Grid / List (식집사 탭 단독이 아닐 때) */}
        {activeTab !== '식집사 나무자랑' && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Megaphone className="w-4 h-4 text-teal-600" />
              <h3 className="text-base sm:text-lg font-extrabold text-stone-900">
                황금낭 공식 출하 및 농장 공지
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {filteredNotices.map((notice) => (
                <div
                  key={notice.id}
                  onClick={() => setSelectedNotice(notice)}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200 hover:border-teal-400 hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200">
                          {notice.category}
                        </span>
                        {notice.important && (
                          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-500 text-white flex items-center gap-0.5">
                            <Sparkles className="w-3 h-3" />
                            중요
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-xs text-stone-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {notice.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3.5 h-3.5" />
                          {notice.views}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-stone-900 group-hover:text-teal-700 transition-colors line-clamp-1 mb-2">
                      {notice.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
                      {notice.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-teal-700">
                    <span>자세히 읽기</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. Official Naver Cafe Callout Banner */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-emerald-800 via-teal-900 to-stone-900 p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-emerald-700/40">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
              <Users className="w-7 h-7 text-emerald-300" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/30 text-emerald-200 border border-emerald-400/30">
                  공식 커뮤니티
                </span>
                <span className="text-xs text-emerald-200/80">실시간 재배상담 & 후기</span>
              </div>
              <h4 className="text-lg sm:text-xl font-black tracking-tight">
                황금낭 공식 네이버 카페에서 1만 식집사와 함께하세요
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 mt-1">
                물주기, 분갈이, 인공수정 팁부터 회원들의 실시간 개화·착과 자랑까지 매일 새로운 이야기가 올라옵니다.
              </p>
            </div>
          </div>

          <a
            href={BRAND_INFO.links.cafe}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-[#03C75A] hover:bg-[#02b350] text-white font-extrabold text-sm shadow-lg flex items-center gap-2 transition-all transform hover:-translate-y-0.5 whitespace-nowrap shrink-0"
          >
            <span className="w-4 h-4 bg-white text-[#03C75A] rounded-full flex items-center justify-center text-[10px] font-black">N</span>
            <span>네이버 카페 바로가기</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Notice Detail Modal */}
        {selectedNotice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 max-h-[85vh] overflow-y-auto">
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-stone-100">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200">
                      {selectedNotice.category}
                    </span>
                    <span className="text-xs text-stone-400">
                      {selectedNotice.date}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-stone-900">
                    {selectedNotice.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedNotice(null)}
                  className="p-1.5 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-700 transition-colors"
                  aria-label="닫기"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 text-sm sm:text-base text-stone-700 leading-relaxed whitespace-pre-line">
                {selectedNotice.content}
              </div>

              <div className="pt-4 border-t border-stone-100 flex justify-end">
                <button
                  onClick={() => setSelectedNotice(null)}
                  className="px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm transition-all"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
