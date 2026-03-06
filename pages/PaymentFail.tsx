import React, { useEffect, useState } from 'react';
import { XCircle } from 'lucide-react';

interface PaymentFailProps {
    onNavigate: (page: string) => void;
}

export const PaymentFail: React.FC<PaymentFailProps> = ({ onNavigate }) => {
    const [errorMessage, setErrorMessage] = useState<string>('사용자가 결제를 취소하셨거나 알 수 없는 오류가 발생했습니다.');

    useEffect(() => {
        // Parse the URL params to extract the fail reason if present
        const params = new URLSearchParams(window.location.search);
        const message = params.get('message');
        if (message) {
            setErrorMessage(decodeURIComponent(message));
        }
    }, []);

    return (
        <div className="pt-40 pb-24 min-h-[80vh] bg-[#FDFCF8] flex items-center justify-center">
            <div className="text-center animate-fade-in-up">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-red-100 rounded-full mb-8">
                    <XCircle className="w-12 h-12 text-red-600" />
                </div>
                <h1 className="text-4xl font-black text-stone-900 mb-4 font-display tracking-tight">
                    결제에 실패하였습니다
                </h1>
                <p className="text-lg text-stone-500 mb-2">
                    (테스트 결제 취소/실패 임시 페이지)
                </p>
                <p className="text-sm font-medium text-red-600 mb-12 max-w-md mx-auto p-4 bg-red-50 rounded-xl">
                    에러 메시지: {errorMessage}
                </p>
                <div className="flex justify-center gap-4">
                    <button
                        onClick={() => onNavigate('pricing')}
                        className="px-8 py-4 bg-white border border-stone-200 text-stone-900 rounded-full font-bold hover:bg-stone-50 transition-colors"
                    >
                        다시 시도하기
                    </button>
                    <button
                        onClick={() => onNavigate('home')}
                        className="px-8 py-4 bg-stone-900 text-white rounded-full font-bold hover:bg-stone-800 transition-colors"
                    >
                        홈으로 돌아가기
                    </button>
                </div>
            </div>
        </div>
    );
};
