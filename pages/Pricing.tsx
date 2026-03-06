import React, { useState } from 'react';
import { Check, Info } from 'lucide-react';

export const Pricing = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-[#FDFCF8]">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold tracking-wider mb-6">
                        EARLY ACCESS
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-stone-900 mb-6 font-display tracking-tight">
                        가장 진보된 공감 지능
                    </h1>
                    <p className="text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed">
                        API 연동부터 기업 맞춤형 솔루션까지, KLCLAB의 기술을 통해 서비스의 차원을 한 단계 높이세요.
                    </p>
                </div>

                <div className="max-w-lg mx-auto">
                    {/* Main Pricing Card */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-100 relative overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-400 to-amber-500"></div>

                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-stone-900 mb-2">Aura API Pro</h3>
                                <p className="text-stone-500 text-sm">무제한 대화 및 API 호출이 포함된 전문가용 플랜</p>
                            </div>
                        </div>

                        <div className="mb-8 flex items-baseline gap-2">
                            <span className="text-5xl font-black font-display text-stone-900">₩99,000</span>
                            <span className="text-stone-500 font-medium font-display">/ 월 (VAT 포함)</span>
                        </div>

                        <a href="#payment-test" className="block w-full text-center py-4 bg-stone-900 text-white rounded-2xl font-bold hover:bg-stone-800 transition-colors mb-4">
                            구독 시작하기
                        </a>

                        <div className="flex items-center justify-center gap-1 text-xs text-stone-400 mb-8">
                            <Info size={14} />
                            <span>결제 시 하단의 이용약관 및 환불 정책에 동의하게 됩니다.</span>
                        </div>

                        <div className="space-y-4">
                            <p className="font-bold text-sm text-stone-900 mb-4">플랜 포함 사항:</p>
                            {[
                                'API 호출 무제한 (공정 사용 정책 적용)',
                                '우선 고객 지원 프로세스',
                                '전용 Account Manager 배정',
                                'Custom Persona 설정 (최대 5개)',
                                '1개월(30일) 단위 서비스 제공'
                            ].map((feature, idx) => (
                                <div key={idx} className="flex gap-3">
                                    <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Check className="w-3 h-3 text-orange-600" strokeWidth={3} />
                                    </div>
                                    <span className="text-stone-600 text-sm leading-relaxed">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Policy Notice Box */}
                    <div className="mt-8 bg-stone-50 rounded-2xl p-6 border border-stone-200 text-xs text-stone-500 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
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
        </div>
    );
};
