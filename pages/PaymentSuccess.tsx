import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface PaymentSuccessProps {
    onNavigate: (page: string) => void;
}

export const PaymentSuccess: React.FC<PaymentSuccessProps> = ({ onNavigate }) => {
    // In a real app, you would read the orderId, paymentKey, amount from URL search params
    // and call your backend to confirm the payment.
    return (
        <div className="pt-40 pb-24 min-h-[80vh] bg-[#FDFCF8] flex items-center justify-center">
            <div className="text-center animate-fade-in-up">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-8">
                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                </div>
                <h1 className="text-4xl font-black text-stone-900 mb-4 font-display tracking-tight">
                    결제가 완료되었습니다
                </h1>
                <p className="text-lg text-stone-500 mb-12">
                    (이 화면은 토스페이먼츠 테스트 결제 완료 시 보여지는 임시 페이지입니다.)
                </p>
                <button
                    onClick={() => onNavigate('home')}
                    className="px-8 py-4 bg-stone-900 text-white rounded-full font-bold hover:bg-stone-800 transition-colors"
                >
                    홈으로 돌아가기
                </button>
            </div>
        </div>
    );
};
