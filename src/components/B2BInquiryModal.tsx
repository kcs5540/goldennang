'use client';

import { useState } from 'react';
import { B2BInquiryForm } from '@/types';
import { BRAND_INFO } from '@/data';
import { supabase } from '@/lib/supabase';
import { X, Send, CheckCircle2, Building2, PhoneCall, Sparkles, Loader2 } from 'lucide-react';

interface B2BInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function B2BInquiryModal({ isOpen, onClose }: B2BInquiryModalProps) {
  const [formData, setFormData] = useState<B2BInquiryForm>({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    inquiryType: 'b2b_wholesale',
    quantity: '',
    budget: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await supabase.from('goldennang_b2b').insert([
        {
          company_name: formData.companyName,
          contact_person: formData.contactPerson,
          phone: formData.phone,
          email: formData.email,
          product_type: formData.inquiryType,
          estimated_quantity: formData.quantity,
          message: formData.message,
          status: 'pending'
        }
      ]);
    } catch (err) {
      console.error('B2B submission error:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      companyName: '',
      contactPerson: '',
      phone: '',
      email: '',
      inquiryType: 'b2b_wholesale',
      quantity: '',
      budget: '',
      message: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-100 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-teal-800 via-stone-900 to-stone-900 p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-teal-500/20 border border-teal-400/30 text-amber-300">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold">B2B 대량구매 및 조경 납품 문의</h3>
              <p className="text-xs text-stone-300">농업회사법인 주식회사 황금낭 본사 직영 상담</p>
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

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-stone-900">문의가 정상 접수되었습니다</h4>
              <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                작성해주신 연락처로 황금낭 담당 농원 마스터가 신속하게 검토 후 상세 견적 및 상담 일정을 안내해 드리겠습니다.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-3 rounded-xl bg-stone-900 text-white font-bold text-sm hover:bg-stone-800 transition-colors"
                >
                  확인
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    회사명 / 기관명 <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="예: 주식회사 황금상사"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    담당자 성함 <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동 팀장"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    연락처 <span className="text-rose-500">*</span>
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
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">이메일</label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  문의 유형 <span className="text-rose-500">*</span>
                </label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value as any })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white"
                >
                  <option value="tree_landscaping">호텔·리조트·카페 조경목 대량 납품</option>
                  <option value="gift_set">기업 명절 / 창립기념 프리미엄 생과 선물세트</option>
                  <option value="b2b_wholesale">화훼 유통 및 관공서 기념식수 대량 납품</option>
                  <option value="farm_visit">단체 농장 방문 및 현장 견학 상담</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    예상 수량 (주 / 세트)
                  </label>
                  <input
                    type="text"
                    placeholder="예: 20주 또는 50세트"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    예상 예산 범위
                  </label>
                  <input
                    type="text"
                    placeholder="예: 200만 ~ 500만 원"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  상세 문의 내용
                </label>
                <textarea
                  rows={3}
                  placeholder="납품 희망 일정, 특별 요청사항(화분 리본, 포장 등)을 자유롭게 적어주세요."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
                      <span>견적 요청 접수 중...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>견적 상담 요청 접수하기</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-center pt-2">
                <p className="text-xs text-stone-500">
                  급하신 상담은 본사 고객센터(<strong>{BRAND_INFO.tel}</strong>)로 전화주시면 즉시 연결됩니다.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
