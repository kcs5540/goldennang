'use client';

import { useState, useEffect } from 'react';
import { supabase, DbNotice, DbOrder, DbB2B, DbSmsAlert } from '@/lib/supabase';
import { 
  Lock, 
  KeyRound, 
  LogOut, 
  Megaphone, 
  PhoneCall, 
  Building2, 
  Bell, 
  Plus, 
  Trash2, 
  Edit3,
  CheckCircle2, 
  Clock, 
  RefreshCw,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  AlertCircle,
  Eye,
  Calendar,
  User,
  Package,
  Mail,
  MapPin,
  MessageSquare,
  X
} from 'lucide-react';
import Link from 'next/link';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState<'notices' | 'orders' | 'b2b' | 'alerts'>('notices');
  const [loading, setLoading] = useState(false);

  // Data states
  const [notices, setNotices] = useState<DbNotice[]>([]);
  const [orders, setOrders] = useState<DbOrder[]>([]);
  const [b2bList, setB2bList] = useState<DbB2B[]>([]);
  const [smsAlerts, setSmsAlerts] = useState<DbSmsAlert[]>([]);

  // Notice Create / Edit Modal
  const [noticeModalOpen, setNoticeModalOpen] = useState(false);
  const [editingNoticeId, setEditingNoticeId] = useState<string | null>(null);
  const [noticeForm, setNoticeForm] = useState({
    title: '',
    category: '출하안내',
    summary: '',
    content: '',
    important: false
  });

  // Notice Detail Preview Modal
  const [previewNotice, setPreviewNotice] = useState<DbNotice | null>(null);
  // Order Detail Preview Modal
  const [previewOrder, setPreviewOrder] = useState<DbOrder | null>(null);
  // B2B Detail Preview Modal
  const [previewB2B, setPreviewB2B] = useState<DbB2B | null>(null);

  // Check login on load
  useEffect(() => {
    const isAuth = sessionStorage.getItem('gn_admin_auth') === 'true';
    if (isAuth) {
      setIsAuthenticated(true);
      fetchData();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUser = username.trim();
    const isUserValid = cleanUser === 'admin' || cleanUser === '';
    const isPassValid = password === 'admin1234' || password === 'goldennang1114!' || password === '1114';

    if (isUserValid && isPassValid) {
      setIsAuthenticated(true);
      sessionStorage.setItem('gn_admin_auth', 'true');
      setLoginError('');
      fetchData();
    } else {
      setLoginError('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('gn_admin_auth');
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      // 1. Notices
      const { data: noticeData } = await supabase
        .from('goldennang_notices')
        .select('*')
        .order('created_at', { ascending: false });
      if (noticeData) setNotices(noticeData);

      // 2. Orders
      const { data: orderData } = await supabase
        .from('goldennang_orders')
        .select('*')
        .order('created_at', { ascending: false });
      if (orderData) setOrders(orderData);

      // 3. B2B
      const { data: b2bData } = await supabase
        .from('goldennang_b2b')
        .select('*')
        .order('created_at', { ascending: false });
      if (b2bData) setB2bList(b2bData);

      // 4. SMS Alerts
      const { data: alertData } = await supabase
        .from('goldennang_sms_alerts')
        .select('*')
        .order('created_at', { ascending: false });
      if (alertData) setSmsAlerts(alertData);
    } catch (err) {
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Open Edit Modal
  const handleOpenEdit = (notice: DbNotice) => {
    setEditingNoticeId(notice.id);
    setNoticeForm({
      title: notice.title,
      category: notice.category,
      summary: notice.summary || '',
      content: notice.content,
      important: notice.important || false
    });
    setNoticeModalOpen(true);
  };

  // Open New Modal
  const handleOpenNew = () => {
    setEditingNoticeId(null);
    setNoticeForm({
      title: '',
      category: '출하안내',
      summary: '',
      content: '',
      important: false
    });
    setNoticeModalOpen(true);
  };

  // Save (Create or Update) Notice
  const handleSaveNotice = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!noticeForm.title || !noticeForm.content) return;

    try {
      if (editingNoticeId) {
        // Update existing
        const { error } = await supabase
          .from('goldennang_notices')
          .update({
            title: noticeForm.title,
            category: noticeForm.category,
            summary: noticeForm.summary || noticeForm.content.slice(0, 100),
            content: noticeForm.content,
            important: noticeForm.important
          })
          .eq('id', editingNoticeId);

        if (!error) {
          setNoticeModalOpen(false);
          setEditingNoticeId(null);
          fetchData();
        }
      } else {
        // Insert new
        const { error } = await supabase.from('goldennang_notices').insert([
          {
            title: noticeForm.title,
            category: noticeForm.category,
            summary: noticeForm.summary || noticeForm.content.slice(0, 100),
            content: noticeForm.content,
            important: noticeForm.important,
            views: 0
          }
        ]);
        if (!error) {
          setNoticeModalOpen(false);
          fetchData();
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Delete Notice
  const handleDeleteNotice = async (id: string) => {
    if (!confirm('정말 이 공지글을 삭제하시겠습니까? 삭제 후에는 복구할 수 없습니다.')) return;
    await supabase.from('goldennang_notices').delete().eq('id', id);
    fetchData();
  };

  // Update Order Status
  const handleUpdateOrderStatus = async (id: string, newStatus: 'pending' | 'completed' | 'cancelled') => {
    await supabase.from('goldennang_orders').update({ status: newStatus }).eq('id', id);
    fetchData();
  };

  // Update B2B Status
  const handleUpdateB2BStatus = async (id: string, newStatus: 'pending' | 'completed' | 'cancelled') => {
    await supabase.from('goldennang_b2b').update({ status: newStatus }).eq('id', id);
    fetchData();
  };

  // Delete Order
  const handleDeleteOrder = async (id: string) => {
    if (!confirm('정말 이 주문 내역을 삭제하시겠습니까?')) return;
    await supabase.from('goldennang_orders').delete().eq('id', id);
    fetchData();
  };

  // Delete B2B
  const handleDeleteB2B = async (id: string) => {
    if (!confirm('정말 이 B2B 문의 내역을 삭제하시겠습니까?')) return;
    await supabase.from('goldennang_b2b').delete().eq('id', id);
    fetchData();
  };

  // Delete Alert
  const handleDeleteAlert = async (id: string) => {
    if (!confirm('정말 이 알림 신청 내역을 삭제하시겠습니까?')) return;
    await supabase.from('goldennang_sms_alerts').delete().eq('id', id);
    fetchData();
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-stone-950 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md bg-stone-900 border border-stone-800 rounded-3xl p-8 shadow-2xl">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-amber-400 mb-4">
              <Lock className="w-7 h-7" />
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight">
              황금낭 관리자 시스템
            </h1>
            <p className="text-xs text-stone-400 mt-1">
              농장주 전용 통합 관리자 접속 페이지
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-stone-300 mb-1.5">
                관리자 아이디
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="아이디를 입력하세요 (기본: admin)"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-stone-950 border border-stone-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 pr-10"
                />
                <User className="w-4 h-4 text-stone-500 absolute right-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-300 mb-1.5">
                관리자 비밀번호
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  placeholder="비밀번호를 입력하세요"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-stone-950 border border-stone-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 pr-10"
                />
                <KeyRound className="w-4 h-4 text-stone-500 absolute right-3.5 top-1/2 -translate-y-1/2" />
              </div>
              {loginError && (
                <p className="text-xs text-rose-400 mt-2 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {loginError}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-bold text-sm shadow-lg transition-all cursor-pointer mt-2"
            >
              관리자 모드 접속
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-stone-800/80 text-center">
            <Link href="/" className="text-xs text-stone-400 hover:text-white transition-colors">
              &larr; 황금낭 공식 웹사이트로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-stone-100 flex flex-col">
      {/* Top Admin Header */}
      <header className="bg-stone-900 text-white border-b border-stone-800 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center font-bold text-sm">
              낭
            </div>
            <div>
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-white">
                황금낭 농장 관리자 센터
              </span>
              <span className="ml-2 text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                LIVE DB
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchData}
              className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors cursor-pointer"
              title="새로고침"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <Link
              href="/"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors"
            >
              <span>홈페이지 확인</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-rose-300 hover:text-rose-200 bg-rose-950/50 hover:bg-rose-900/50 border border-rose-800/50 rounded-lg transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>로그아웃</span>
            </button>
          </div>
        </div>
      </header>

      {/* Admin Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none border-b border-stone-200">
          <button
            onClick={() => setActiveTab('notices')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'notices'
                ? 'bg-stone-900 text-white shadow-md'
                : 'bg-white text-stone-600 hover:bg-stone-200/70 border border-stone-200'
            }`}
          >
            <Megaphone className="w-4 h-4" />
            <span>공지·새소식 관리</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-teal-500 text-white font-bold ml-1">
              {notices.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('orders')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'orders'
                ? 'bg-stone-900 text-white shadow-md'
                : 'bg-white text-stone-600 hover:bg-stone-200/70 border border-stone-200'
            }`}
          >
            <PhoneCall className="w-4 h-4" />
            <span>전화주문·방문예약 대장</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-500 text-white font-bold ml-1">
              {orders.filter(o => o.status === 'pending').length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('b2b')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'b2b'
                ? 'bg-stone-900 text-white shadow-md'
                : 'bg-white text-stone-600 hover:bg-stone-200/70 border border-stone-200'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>B2B 기업 대량견적함</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-blue-500 text-white font-bold ml-1">
              {b2bList.filter(b => b.status === 'pending').length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('alerts')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'alerts'
                ? 'bg-stone-900 text-white shadow-md'
                : 'bg-white text-stone-600 hover:bg-stone-200/70 border border-stone-200'
            }`}
          >
            <Bell className="w-4 h-4" />
            <span>출하알림 VIP 명단</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500 text-white font-bold ml-1">
              {smsAlerts.length}
            </span>
          </button>
        </div>

        {/* TAB 1: NOTICES MANAGEMENT */}
        {activeTab === 'notices' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-stone-200 shadow-sm">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-stone-900">
                  공지사항 & 농장 소식 등록 관리
                </h2>
                <p className="text-xs text-stone-500 mt-0.5">
                  글을 클릭하면 본문 전체를 미리볼 수 있으며, [수정] 및 [삭제]가 가능합니다.
                </p>
              </div>
              <button
                onClick={handleOpenNew}
                className="px-4 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md cursor-pointer transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>새 공지사항 작성</span>
              </button>
            </div>

            {/* Notices Table / Cards */}
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
              {notices.length === 0 ? (
                <div className="p-12 text-center text-stone-500 text-sm">
                  아직 DB에 직접 등록된 공지가 없습니다. [새 공지사항 작성] 버튼을 눌러 첫 글을 올려보세요!
                </div>
              ) : (
                <div className="divide-y divide-stone-100">
                  {notices.map((n) => (
                    <div key={n.id} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-stone-50/80 transition-colors">
                      {/* Left: Clickable Title & Summary to Preview */}
                      <div 
                        onClick={() => setPreviewNotice(n)}
                        className="space-y-1.5 max-w-2xl cursor-pointer group flex-1"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-teal-50 text-teal-700 border border-teal-200">
                            {n.category}
                          </span>
                          {n.important && (
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500 text-white">
                              중요
                            </span>
                          )}
                          <span className="text-xs text-stone-400">
                            {new Date(n.created_at).toLocaleDateString()}
                          </span>
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-stone-900 group-hover:text-teal-700 transition-colors flex items-center gap-1.5">
                          <span>{n.title}</span>
                          <ChevronRight className="w-4 h-4 text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed whitespace-pre-line">
                          {n.summary || n.content}
                        </p>
                      </div>

                      {/* Right: Action Buttons (Preview, Edit, Delete) */}
                      <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                        <button
                          onClick={() => setPreviewNotice(n)}
                          className="px-3 py-1.5 rounded-lg text-xs font-bold text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 transition-colors cursor-pointer flex items-center gap-1"
                          title="내용 상세조회"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>상세보기</span>
                        </button>
                        <button
                          onClick={() => handleOpenEdit(n)}
                          className="px-3 py-1.5 rounded-lg text-xs font-bold text-teal-700 hover:text-teal-800 bg-teal-50 hover:bg-teal-100 border border-teal-200 transition-colors cursor-pointer flex items-center gap-1"
                          title="수정하기"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>수정</span>
                        </button>
                        <button
                          onClick={() => handleDeleteNotice(n.id)}
                          className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 border border-rose-200 transition-colors cursor-pointer"
                          title="삭제하기"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: ORDERS MANAGEMENT */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-stone-200 shadow-sm">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-stone-900 flex items-center gap-2">
                  <PhoneCall className="w-5 h-5 text-teal-600" />
                  <span>전화주문 및 방문예약 접수 대장</span>
                </h2>
                <p className="text-xs text-stone-500 mt-0.5">
                  홈페이지에서 고객이 [전화예약]을 신청하면 실시간으로 등록됩니다. 항목을 클릭하면 상세 내용을 확인하고 상태를 변경할 수 있습니다.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold shrink-0">
                <span className="px-3 py-1.5 rounded-xl bg-amber-100 text-amber-800">
                  대기 {orders.filter(o => o.status === 'pending').length}건
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-emerald-100 text-emerald-800">
                  완료 {orders.filter(o => o.status === 'completed').length}건
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
              {orders.length === 0 ? (
                <div className="p-12 text-center text-stone-500 text-sm">
                  아직 접수된 전화주문/방문예약 내역이 없습니다.
                </div>
              ) : (
                <div className="divide-y divide-stone-100">
                  {orders.map((o) => (
                    <div
                      key={o.id}
                      className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-stone-50/80 transition-colors"
                    >
                      {/* Left: Info */}
                      <div
                        onClick={() => setPreviewOrder(o)}
                        className="space-y-1.5 max-w-2xl cursor-pointer group flex-1"
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-[11px] font-bold px-2 py-0.5 rounded border ${
                              o.status === 'pending'
                                ? 'bg-amber-50 text-amber-800 border-amber-200'
                                : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                            }`}
                          >
                            {o.status === 'pending' ? '상담대기' : '상담완료'}
                          </span>
                          <span className="text-[11px] font-bold px-1.5 py-0.5 rounded bg-teal-50 text-teal-700 border border-teal-200">
                            {o.delivery_type === 'farm_pickup' ? '방문수령' : '택배배송'}
                          </span>
                          <span className="text-xs text-stone-400">
                            {new Date(o.created_at).toLocaleDateString()}
                          </span>
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-stone-900 group-hover:text-teal-700 transition-colors flex items-center gap-1.5">
                          <span>{o.customer_name}</span>
                          <span className="text-xs font-normal text-teal-700 font-mono">({o.phone})</span>
                          <span className="text-xs text-stone-400 font-normal">|</span>
                          <span className="text-xs font-semibold text-stone-700">{o.product_choice} ({o.quantity})</span>
                          <ChevronRight className="w-4 h-4 text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-xs text-stone-600 line-clamp-1 leading-relaxed">
                          {o.preferred_call_time && `희망통화: ${o.preferred_call_time} · `}
                          {o.address_or_notes ? `요청: ${o.address_or_notes}` : '특이 요청사항 없음'}
                        </p>
                      </div>

                      {/* Right: Actions */}
                      <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                        <button
                          onClick={() => setPreviewOrder(o)}
                          className="px-3 py-1.5 rounded-lg text-xs font-bold text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 transition-colors cursor-pointer flex items-center gap-1"
                          title="상세 내용 조회"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>상세보기</span>
                        </button>
                        <button
                          onClick={() => handleUpdateOrderStatus(o.id, o.status === 'pending' ? 'completed' : 'pending')}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors cursor-pointer flex items-center gap-1 ${
                            o.status === 'pending'
                              ? 'text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border-emerald-200'
                              : 'text-stone-600 hover:text-stone-800 bg-stone-100 hover:bg-stone-200 border-stone-300'
                          }`}
                          title="진행상태 변경"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{o.status === 'pending' ? '완료처리' : '대기로변경'}</span>
                        </button>
                        <button
                          onClick={() => handleDeleteOrder(o.id)}
                          className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 border border-rose-200 transition-colors cursor-pointer"
                          title="삭제하기"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: B2B MANAGEMENT */}
        {activeTab === 'b2b' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-stone-200 shadow-sm">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-stone-900 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-teal-600" />
                  <span>B2B 기업 대량구매 견적 문의함</span>
                </h2>
                <p className="text-xs text-stone-500 mt-0.5">
                  기업 명절선물, 호텔/카페 조경 납품 등 홈페이지에서 신청된 B2B 문의 내역입니다.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold shrink-0">
                <span className="px-3 py-1.5 rounded-xl bg-blue-100 text-blue-800">
                  대기 {b2bList.filter(b => b.status === 'pending').length}건
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-emerald-100 text-emerald-800">
                  완료 {b2bList.filter(b => b.status === 'completed').length}건
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
              {b2bList.length === 0 ? (
                <div className="p-12 text-center text-stone-500 text-sm">
                  아직 접수된 B2B 문의가 없습니다.
                </div>
              ) : (
                <div className="divide-y divide-stone-100">
                  {b2bList.map((b) => (
                    <div
                      key={b.id}
                      className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-stone-50/80 transition-colors"
                    >
                      {/* Left: Info */}
                      <div
                        onClick={() => setPreviewB2B(b)}
                        className="space-y-1.5 max-w-2xl cursor-pointer group flex-1"
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-[11px] font-bold px-2 py-0.5 rounded border ${
                              b.status === 'pending'
                                ? 'bg-blue-50 text-blue-800 border-blue-200'
                                : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                            }`}
                          >
                            {b.status === 'pending' ? '검토대기' : '답변완료'}
                          </span>
                          <span className="text-[11px] font-bold px-1.5 py-0.5 rounded bg-stone-100 text-stone-700 border border-stone-200">
                            수량: {b.estimated_quantity || '협의'}
                          </span>
                          <span className="text-xs text-stone-400">
                            {new Date(b.created_at).toLocaleDateString()}
                          </span>
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-stone-900 group-hover:text-teal-700 transition-colors flex items-center gap-1.5">
                          <span>{b.company_name}</span>
                          <span className="text-xs font-normal text-stone-600">({b.contact_person} / {b.phone})</span>
                          <ChevronRight className="w-4 h-4 text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-xs text-stone-600 line-clamp-1 leading-relaxed">
                          <strong className="text-stone-800 mr-1">[{b.product_type}]</strong>
                          {b.message || '상세 내용 없음'}
                        </p>
                      </div>

                      {/* Right: Actions */}
                      <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                        <button
                          onClick={() => setPreviewB2B(b)}
                          className="px-3 py-1.5 rounded-lg text-xs font-bold text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 transition-colors cursor-pointer flex items-center gap-1"
                          title="상세 내용 조회"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>상세보기</span>
                        </button>
                        <button
                          onClick={() => handleUpdateB2BStatus(b.id, b.status === 'pending' ? 'completed' : 'pending')}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors cursor-pointer flex items-center gap-1 ${
                            b.status === 'pending'
                              ? 'text-blue-700 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 border-blue-200'
                              : 'text-stone-600 hover:text-stone-800 bg-stone-100 hover:bg-stone-200 border-stone-300'
                          }`}
                          title="진행상태 변경"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{b.status === 'pending' ? '답변완료' : '대기로변경'}</span>
                        </button>
                        <button
                          onClick={() => handleDeleteB2B(b.id)}
                          className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 border border-rose-200 transition-colors cursor-pointer"
                          title="삭제하기"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 4: SMS ALERTS */}
        {activeTab === 'alerts' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-stone-200 shadow-sm">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-stone-900 flex items-center gap-2">
                  <Bell className="w-5 h-5 text-amber-500" />
                  <span>제철 햇과일/묘목 출하 알림 예약 명단</span>
                </h2>
                <p className="text-xs text-stone-500 mt-0.5">
                  햇애플망고 수확 시즌이나 묘목 분양 시 단체 문자를 보낼 수 있는 VIP 단골 고객 명단입니다.
                </p>
              </div>
              <span className="px-3 py-1.5 rounded-xl bg-amber-100 text-amber-900 font-extrabold text-xs shrink-0">
                총 {smsAlerts.length}명 등록됨
              </span>
            </div>

            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
              {smsAlerts.length === 0 ? (
                <div className="p-12 text-center text-stone-500 text-sm">
                  아직 등록된 알림 예약자가 없습니다.
                </div>
              ) : (
                <div className="divide-y divide-stone-100">
                  {smsAlerts.map((a) => (
                    <div
                      key={a.id}
                      className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-stone-50/80 transition-colors"
                    >
                      {/* Left: Info */}
                      <div className="space-y-1.5 max-w-2xl flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                            VIP 출하알림
                          </span>
                          <span className="text-xs text-stone-400">
                            {new Date(a.created_at).toLocaleDateString()}
                          </span>
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-stone-900 flex items-center gap-2">
                          <span>{a.customer_name || '고객'}</span>
                          <a href={`tel:${a.phone}`} className="text-xs font-bold text-teal-700 hover:underline">
                            📞 {a.phone}
                          </a>
                        </h3>
                        <p className="text-xs text-stone-600 line-clamp-1 leading-relaxed">
                          <span className="text-stone-400">관심 과수:</span> <strong className="text-stone-800">{a.interested_fruit}</strong>
                        </p>
                      </div>

                      {/* Right: Actions */}
                      <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                        <a
                          href={`tel:${a.phone}`}
                          className="px-3 py-1.5 rounded-lg text-xs font-bold text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 transition-colors flex items-center gap-1"
                          title="전화 연결"
                        >
                          <PhoneCall className="w-3.5 h-3.5 text-teal-700" />
                          <span>전화걸기</span>
                        </a>
                        <a
                          href={`sms:${a.phone}`}
                          className="px-3 py-1.5 rounded-lg text-xs font-bold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-colors flex items-center gap-1"
                          title="문자 발송"
                        >
                          <MessageSquare className="w-3.5 h-3.5 text-amber-700" />
                          <span>문자발송</span>
                        </a>
                        <button
                          onClick={() => handleDeleteAlert(a.id)}
                          className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 border border-rose-200 transition-colors cursor-pointer"
                          title="삭제하기"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* NOTICE DETAIL PREVIEW MODAL */}
      {previewNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 max-h-[85vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-stone-100">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200">
                    {previewNotice.category}
                  </span>
                  {previewNotice.important && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500 text-white">
                      중요
                    </span>
                  )}
                  <span className="text-xs text-stone-400">
                    {new Date(previewNotice.created_at).toLocaleDateString()}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-stone-900">
                  {previewNotice.title}
                </h3>
              </div>
              <button
                onClick={() => setPreviewNotice(null)}
                className="p-1.5 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 text-sm sm:text-base text-stone-700 leading-relaxed whitespace-pre-line border-b border-stone-100">
              {previewNotice.content}
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                onClick={() => {
                  const target = previewNotice;
                  setPreviewNotice(null);
                  handleOpenEdit(target);
                }}
                className="px-4 py-2 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 font-bold text-xs flex items-center gap-1.5 border border-teal-200 cursor-pointer"
              >
                <Edit3 className="w-4 h-4" />
                <span>이 공지 내용 수정하기</span>
              </button>

              <button
                onClick={() => setPreviewNotice(null)}
                className="px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm transition-all cursor-pointer"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ORDER DETAIL PREVIEW MODAL */}
      {previewOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 max-h-[85vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-stone-100">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span
                    className={`text-xs font-bold px-2.5 py-0.5 rounded border ${
                      previewOrder.status === 'pending'
                        ? 'bg-amber-50 text-amber-800 border-amber-200'
                        : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                    }`}
                  >
                    {previewOrder.status === 'pending' ? '⏳ 상담대기' : '✓ 상담완료'}
                  </span>
                  <span className="text-xs text-stone-400">
                    {new Date(previewOrder.created_at).toLocaleString()}
                  </span>
                </div>
                <h3 className="text-xl font-black text-stone-900">
                  {previewOrder.customer_name} 님의 주문 상담
                </h3>
              </div>
              <button
                onClick={() => setPreviewOrder(null)}
                className="p-1.5 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-5 space-y-3.5 text-sm">
              <div className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-100">
                <span className="text-stone-500 font-medium">연락처</span>
                <a
                  href={`tel:${previewOrder.phone}`}
                  className="font-bold text-teal-700 hover:underline flex items-center gap-1.5 text-base"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>{previewOrder.phone}</span>
                </a>
              </div>

              <div className="p-3.5 rounded-xl bg-teal-50/50 border border-teal-100 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-teal-800 font-bold">신청 상품</span>
                  <span className="text-xs font-extrabold text-teal-900">
                    {previewOrder.delivery_type === 'farm_pickup' ? '📍 농장 방문 수령' : '📦 안전 택배 배송'}
                  </span>
                </div>
                <p className="font-extrabold text-stone-900 text-base">{previewOrder.product_choice}</p>
                <p className="text-xs text-stone-600">신청 수량: <strong className="text-stone-900">{previewOrder.quantity}</strong></p>
              </div>

              {previewOrder.preferred_call_time && (
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-100">
                  <span className="text-xs text-stone-400 block mb-0.5">희망 통화 시간</span>
                  <span className="font-bold text-stone-800">{previewOrder.preferred_call_time}</span>
                </div>
              )}

              <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/60 text-stone-700 text-xs leading-relaxed">
                <span className="font-bold text-amber-900 block mb-1">배송지 및 고객 요청사항:</span>
                <p className="whitespace-pre-line text-sm text-stone-800 font-medium">
                  {previewOrder.address_or_notes || '작성된 추가 요청사항이 없습니다.'}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
              <button
                onClick={() => {
                  handleUpdateOrderStatus(previewOrder.id, previewOrder.status === 'pending' ? 'completed' : 'pending');
                  setPreviewOrder({
                    ...previewOrder,
                    status: previewOrder.status === 'pending' ? 'completed' : 'pending'
                  });
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-colors cursor-pointer flex items-center gap-1.5 ${
                  previewOrder.status === 'pending'
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white border-transparent'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border-stone-300'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{previewOrder.status === 'pending' ? '상담 완료 처리' : '대기로 되돌리기'}</span>
              </button>

              <button
                onClick={() => setPreviewOrder(null)}
                className="px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm transition-all cursor-pointer"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* B2B DETAIL PREVIEW MODAL */}
      {previewB2B && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 max-h-[85vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-stone-100">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span
                    className={`text-xs font-bold px-2.5 py-0.5 rounded border ${
                      previewB2B.status === 'pending'
                        ? 'bg-blue-50 text-blue-800 border-blue-200'
                        : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                    }`}
                  >
                    {previewB2B.status === 'pending' ? '⏳ 검토대기' : '✓ 답변완료'}
                  </span>
                  <span className="text-xs text-stone-400">
                    {new Date(previewB2B.created_at).toLocaleDateString()}
                  </span>
                </div>
                <h3 className="text-xl font-black text-stone-900">
                  {previewB2B.company_name}
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  담당자: <strong className="text-stone-800">{previewB2B.contact_person}</strong>
                </p>
              </div>
              <button
                onClick={() => setPreviewB2B(null)}
                className="p-1.5 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-5 space-y-3.5 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-100">
                  <span className="text-xs text-stone-400 block">연락처</span>
                  <a href={`tel:${previewB2B.phone}`} className="font-bold text-teal-700 hover:underline text-sm">
                    📞 {previewB2B.phone}
                  </a>
                </div>
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-100">
                  <span className="text-xs text-stone-400 block">이메일</span>
                  <span className="font-semibold text-stone-800 text-xs truncate block">
                    {previewB2B.email || '-'}
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-100 space-y-1">
                <span className="text-xs text-blue-800 font-bold block">문의 품목 / 예상 수량</span>
                <p className="font-extrabold text-stone-900">{previewB2B.product_type}</p>
                <p className="text-xs text-stone-600">수량: <strong>{previewB2B.estimated_quantity || '협의'}</strong></p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 text-stone-700 text-xs leading-relaxed">
                <span className="font-bold text-stone-900 block mb-1.5">문의 본문 내용:</span>
                <p className="whitespace-pre-line text-sm text-stone-800 font-medium">
                  {previewB2B.message || '작성된 본문 내용이 없습니다.'}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
              <button
                onClick={() => {
                  handleUpdateB2BStatus(previewB2B.id, previewB2B.status === 'pending' ? 'completed' : 'pending');
                  setPreviewB2B({
                    ...previewB2B,
                    status: previewB2B.status === 'pending' ? 'completed' : 'pending'
                  });
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-colors cursor-pointer flex items-center gap-1.5 ${
                  previewB2B.status === 'pending'
                    ? 'bg-blue-600 hover:bg-blue-700 text-white border-transparent'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border-stone-300'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{previewB2B.status === 'pending' ? '답변 완료 처리' : '대기로 되돌리기'}</span>
              </button>

              <button
                onClick={() => setPreviewB2B(null)}
                className="px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm transition-all cursor-pointer"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CREATE / EDIT NOTICE MODAL */}
      {noticeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-stone-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-6">
              <h3 className="text-lg font-extrabold text-stone-900 flex items-center gap-2">
                <Edit3 className="w-5 h-5 text-teal-700" />
                <span>{editingNoticeId ? '공지사항 내용 수정' : '새 공지사항 등록'}</span>
              </h3>
              <button
                onClick={() => setNoticeModalOpen(false)}
                className="p-1 rounded-full hover:bg-stone-100 text-stone-400 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveNotice} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  카테고리
                </label>
                <select
                  value={noticeForm.category}
                  onChange={(e) => setNoticeForm({ ...noticeForm, category: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white"
                >
                  <option value="출하안내">출하안내</option>
                  <option value="농장소식">농장소식</option>
                  <option value="재배팁">재배팁</option>
                  <option value="배송공지">배송공지</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  공지 제목 <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="예: 2026년 봄철 애플망고 화분 1차 출하 개시"
                  value={noticeForm.title}
                  onChange={(e) => setNoticeForm({ ...noticeForm, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  한 줄 요약 (목록 카드에 표시)
                </label>
                <input
                  type="text"
                  placeholder="공지 내용을 한눈에 알 수 있는 간단한 요약"
                  value={noticeForm.summary}
                  onChange={(e) => setNoticeForm({ ...noticeForm, summary: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  상세 본문 내용 <span className="text-rose-500">*</span>
                </label>
                <textarea
                  required
                  rows={6}
                  placeholder="공지사항 본문 내용을 입력하세요. 엔터 줄바꿈이 지원됩니다."
                  value={noticeForm.content}
                  onChange={(e) => setNoticeForm({ ...noticeForm, content: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 leading-relaxed"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="importantNotice"
                  checked={noticeForm.important}
                  onChange={(e) => setNoticeForm({ ...noticeForm, important: e.target.checked })}
                  className="w-4 h-4 text-teal-600 rounded border-stone-300 focus:ring-teal-500"
                />
                <label htmlFor="importantNotice" className="text-xs font-bold text-stone-700 cursor-pointer">
                  ⭐ 중요 공지로 상단 고정 및 뱃지 부착
                </label>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setNoticeModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-stone-300 text-stone-600 text-xs font-bold cursor-pointer"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold shadow-md cursor-pointer transition-all"
                >
                  {editingNoticeId ? '수정 완료 저장' : '공지 등록하기'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
