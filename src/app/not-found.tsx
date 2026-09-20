import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone-950 text-white flex flex-col items-center justify-center p-4 text-center">
      <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 text-2xl font-black mb-6">
        404
      </div>
      <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
        요청하신 페이지를 찾을 수 없습니다
      </h1>
      <p className="text-stone-400 text-sm max-w-md mb-8 leading-relaxed">
        주소가 잘못 입력되었거나, 변경 또는 삭제되어 페이지를 열 수 없습니다. 황금낭 공식 홈으로 이동해주세요.
      </p>
      <Link
        href="/"
        className="px-6 py-3.5 rounded-xl bg-teal-700 hover:bg-teal-600 text-white font-bold text-sm flex items-center gap-2 shadow-lg transition-all"
      >
        <Home className="w-4 h-4" />
        <span>황금낭 메인 홈으로 가기</span>
      </Link>
    </div>
  );
}
