import React from 'react';
import { Check, Info } from 'lucide-react';
import { loadTossPayments, ANONYMOUS } from '@tosspayments/tosspayments-sdk';

const clientKey = 'test_ck_LkKEypNArW9lQX5QyEXX3lmeaxYG';

export const Pricing = () => {
    const handlePaymentRequest = async (planType: 'subscription' | 'single') => {
        try {
            const tossPayments = await loadTossPayments(clientKey);
            const payment = tossPayments.payment({ customerKey: ANONYMOUS });

            const paymentData = planType === 'subscription'
                ? {
                    method: 'CARD' as const,
                    amount: { currency: 'KRW' as const, value: 99000 },
                    orderId: `sub_${Math.random().toString(36).substring(2, 10)}`,
                    orderName: "Aura API Pro 정기 구독",
                }
                : {
                    method: 'CARD' as const,
                    amount: { currency: 'KRW' as const, value: 50000 },
                    orderId: `one_${Math.random().toString(36).substring(2, 10)}`,
                    orderName: "Aura One-time 50k Credits",
                };

            await payment.requestPayment({
                ...paymentData,
                successUrl: `${window.location.origin}?page=success`,
                failUrl: `${window.location.origin}?page=fail`,
                customerEmail: "customer123@klclab.com",
                customerName: "테스트고객",
            });
        } catch (error: any) {
            console.error("Payment request failed:", error);
        }
    };

    return (
        <div className="pt-32 pb-24 min-h-screen bg-[#FDFCF8]">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-black text-stone-900 mb-6 font-display tracking-tight">
                        Aura 서비스 요금제
                    </h1>
                    <p className="text-xl text-stone-500 max-w-2xl mx-auto mb-12">
                        비즈니스 규모에 맞는 최적의 플랜을 선택하세요.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Subscription Plan Card */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-100 relative overflow-hidden flex flex-col h-full">
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-400 to-amber-500"></div>
                        <div className="mb-6">
                            <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold uppercase tracking-wider">Subscription</span>
                            <h3 className="text-2xl font-bold text-stone-900 mt-4 mb-2">Aura API Pro</h3>
                            <p className="text-stone-500 text-sm">무제한 대화 및 우선 지원이 포함된 월간 구독 플랜</p>
                        </div>
                        <div className="mb-8 flex items-baseline gap-2">
                            <span className="text-4xl font-black text-stone-900">₩99,000</span>
                            <span className="text-stone-500 font-medium">/ 월</span>
                        </div>
                        <div className="space-y-4 mb-10 flex-grow">
                            {['API 호출 무제한', '우선 고객 지원', '전용 Account Manager', 'Custom Persona (5개)'].map((f, i) => (
                                <div key={i} className="flex gap-3 items-center">
                                    <Check className="w-4 h-4 text-orange-600" />
                                    <span className="text-stone-600 text-sm">{f}</span>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={() => handlePaymentRequest('subscription')}
                            className="w-full py-4 bg-stone-900 text-white rounded-2xl font-bold hover:bg-stone-800 transition-all shadow-lg"
                        >
                            정기 구독 신청하기
                        </button>
                    </div>

                    {/* Single Purchase Card */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-100 relative overflow-hidden flex flex-col h-full">
                        <div className="mb-6">
                            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider">Single Item</span>
                            <h3 className="text-2xl font-bold text-stone-900 mt-4 mb-2">Aura One-time Credit</h3>
                            <p className="text-stone-500 text-sm">필요한 만큼만 충전해서 사용하는 단품 크레딧 상품</p>
                        </div>
                        <div className="mb-8 flex items-baseline gap-2">
                            <span className="text-4xl font-black text-stone-900">₩50,000</span>
                            <span className="text-stone-500 font-medium">/ 50k Credits</span>
                        </div>
                        <div className="space-y-4 mb-10 flex-grow">
                            {['유효기간 1년', '모든 Persona 이용 가능', '잔여 크레딧 대시보드', '부족 시 즉시 충전 가능'].map((f, i) => (
                                <div key={i} className="flex gap-3 items-center">
                                    <Check className="w-4 h-4 text-blue-600" />
                                    <span className="text-stone-600 text-sm">{f}</span>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={() => handlePaymentRequest('single')}
                            className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
                        >
                            단품 크레딧 구매하기
                        </button>
                    </div>
                </div>

                {/* Info Text */}
                <div className="max-w-2xl mx-auto mt-12 text-center text-stone-400 text-xs flex flex-col gap-2">
                    <div className="flex items-center justify-center gap-1">
                        <Info size={14} />
                        <span>토스페이먼츠 표준 결제창 연동 테스트 (PG 심사용 시연 화면)</span>
                    </div>
                </div>

                {/* Policy Notice Box */}
                <div className="max-w-5xl mx-auto mt-12 bg-stone-50 rounded-2xl p-6 border border-stone-200 text-xs text-stone-500 leading-relaxed">
                    <h4 className="font-bold text-stone-900 mb-2 text-sm">결제 및 환불 안내</h4>
                    <ul className="list-disc pl-4 space-y-1">
                        <li>본 상품은 디지털/비실물 콘텐츠(API 서비스) 구독형 상품입니다.</li>
                        <li>결제일로부터 1개월(30일) 동안 서비스가 제공되며, 해지 시까지 매월 자동 결제됩니다.</li>
                        <li>결제 후 7일 이내, 서비스(API 통신 등) 이용 기록이 전혀 없는 경우에 한해 전액 환불이 가능합니다.</li>
                        <li>한 번이라도 API를 호출하거나 서비스를 이용한 내역이 발생하면 해당 월 요금은 환불되지 않습니다.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
