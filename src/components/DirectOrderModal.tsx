'use client';

import { useState } from 'react';
import { DirectOrderReservation } from '@/data/additions';
import { BRAND_INFO } from '@/data';
import { supabase } from '@/lib/supabase';
import { PhoneCall, X, CheckCircle2, Clock, Calendar, Truck, UserCheck, Sparkles, Loader2 } from 'lucide-react';

interface DirectOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DirectOrderModal({ isOpen, onClose }: DirectOrderModalProps) {
  const [formData, setFormData] = useState<DirectOrderReservation>({
    customerName: '',
    phone: '',
    productChoice: '황금낭 망고묘목 애플망고나무 화분 3년생 어윈',
    quantity: '1',
    preferredCallTime: '언제든 상담 가능 (09:00 - 18:00)',
    deliveryType: 'parcel',
    addressOrNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await supabase.from('goldennang_orders').insert([
        {
          customer_name: formData.customerName,
          phone: formData.phone,
          product_choice: formData.productChoice,
          quantity: formData.quantity,
          delivery_type: formData.deliveryType,
          preferred_call_time: formData.preferredCallTime,
          address_or_notes: formData.addressOrNotes,
          status: 'pending'
        }
      ]);
    } catch (err) {
      console.error('Order submission error:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-100 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-700 via-teal-800 to-amber-700 p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-amber-300">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold">농장 직거래 전화주문 & 방문예약</h3>
              <p className="text-xs text-stone-200">인터넷 결제가 번거로우실 땐 편하게 전화로 주문하세요</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-stone-300 hover:text-white transition-colors"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-stone-900">전화주문 예약이 접수되었습니다!</h4>
              <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                황금낭 농원 담당자가 확인 후 희망하신 시간대에 친절하게 전화를 드려 <strong>수형 사진 확인, 계좌이체/카드결제, 배송일정</strong>을 원스톱으로 처리해 드립니다.
              </p>
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 text-left space-y-1">
                <p><strong>• 주문자명:</strong> {formData.customerName} 고객님</p>
                <p><strong>• 연락처:</strong> {formData.phone}</p>
                <p><strong>• 선택품목:</strong> {formData.productChoice} ({formData.quantity}개)</p>
                <p><strong>• 수령방법:</strong> {formData.deliveryType === 'parcel' ? '전국 안전 택배 배송' : '서귀포 농장 직접 방문 수령'}</p>
              </div>
              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-3 rounded-xl bg-stone-900 text-white font-bold text-sm hover:bg-stone-800 transition-colors cursor-pointer"
                >
                  확인 완료
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-teal-50/80 border border-teal-200 text-xs text-teal-900 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <p>
                  예약을 남겨주시면 <strong>출고될 나무의 실제 사진</strong>을 문자로 먼저 보내드려 직접 마음에 드는 수형을 고르실 수 있도록 도와드립니다.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    주문자 성함 <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    value={formData.customerName}
                    onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    연락받으실 전화번호 <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="010-0000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  원하시는 상품 선택 <span className="text-rose-500">*</span>
                </label>
                <select
                  value={formData.productChoice}
                  onChange={(e) => setFormData({ ...formData, productChoice: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white"
                >
                  <option value="황금낭 망고묘목 애플망고나무 화분 3년생 어윈">
                    황금낭 애플망고나무 화분 3년생 (어윈 품종) - 90,000원
                  </option>
                  <option value="황금낭 애플 망고 나무 묘목 제주 접목묘 2년생 특묘">
                    황금낭 애플망고나무 묘목 2년생 특묘 - 58,000원 (무료배송)
                  </option>
                  <option value="황금낭 귤묘목 8년이상 감귤나무 화분 특상품">
                    황금낭 8년생 이상 감귤나무 대품 화분 - 200,000원 (개업/입주선물)
                  </option>
                  <option value="황금낭 제주 프리미엄 애플망고 2kg 선물 세트">
                    제주 서귀포 직송 고당도 완숙 애플망고 2kg 세트 - 69,100원
                  </option>
                  <option value="황금낭 제주 금귤(낑깡) & 폰깡 유실수 화분">
                    황금낭 사계절 금귤/폰깡 유실수 화분 - 75,000원
                  </option>
                  <option value="기타 품종 및 단체 조경 상담">
                    기타 품종 문의 및 대량 견적 상담
                  </option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">수량</label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="1개"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">수령 방식</label>
                  <select
                    value={formData.deliveryType}
                    onChange={(e) => setFormData({ ...formData, deliveryType: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white"
                  >
                    <option value="parcel">전국 안전 택배 배송</option>
                    <option value="farm_pickup">서귀포 농장 직접 방문 수령</option>
                  </select>
                  {formData.deliveryType === 'farm_pickup' && (
                    <a
                      href={BRAND_INFO.links.naverPlace}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-emerald-700 hover:text-emerald-800 font-bold mt-1.5 underline"
                    >
                      📍 농장 위치(네이버 플레이스 지도) 미리보기 &rarr;
                    </a>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  통화 편하신 시간대
                </label>
                <select
                  value={formData.preferredCallTime}
                  onChange={(e) => setFormData({ ...formData, preferredCallTime: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white"
                >
                  <option value="언제든 상담 가능 (09:00 - 18:00)">언제든 상담 가능 (09:00 - 18:00)</option>
                  <option value="오전 중 (09:00 - 12:00)">오전 중 (09:00 - 12:00)</option>
                  <option value="오후 중 (13:00 - 16:00)">오후 중 (13:00 - 16:00)</option>
                  <option value="퇴근 시간대 (17:00 - 18:30)">퇴근 시간대 (17:00 - 18:30)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  배송지 주소 또는 요청사항 (선택)
                </label>
                <textarea
                  rows={2}
                  placeholder="배송 받으실 주소나 특별한 요청사항(예: 개업식 리본 문구 등)을 적어주세요."
                  value={formData.addressOrNotes}
                  onChange={(e) => setFormData({ ...formData, addressOrNotes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-700 to-teal-600 hover:from-teal-800 hover:to-teal-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>예약 접수 중...</span>
                    </>
                  ) : (
                    <>
                      <PhoneCall className="w-4 h-4" />
                      <span>전화주문 상담 예약 접수</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-center pt-1 text-xs text-stone-500 space-y-1">
                <p>즉시 통화를 원하시면 대표번호 <strong>{BRAND_INFO.tel}</strong> 로 전화주세요.</p>
                <p className="text-[11px] text-teal-800 bg-teal-50 py-1.5 px-3 rounded-lg border border-teal-200">
                  🛡️ 직거래 입금은 오직 <strong>&apos;농업회사법인 주식회사 황금낭&apos;</strong> 공식 법인계좌로만 진행됩니다.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
