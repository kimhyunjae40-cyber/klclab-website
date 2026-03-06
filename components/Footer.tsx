import { X } from 'lucide-react';
import { POLICY_CONTENT, COMPANY_INFO } from '../constants';
import { Logo } from './Logo';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [activePolicy, setActivePolicy] = useState<keyof typeof POLICY_CONTENT | null>(null);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <footer className="bg-[#FDFCF8] py-12 border-t border-stone-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-stone-900 rounded flex items-center justify-center text-white">
                  <Logo className="w-3.5 h-3.5" />
                </div>
                <span className="font-bold text-stone-900 font-[Manrope]">KLCLAB</span>
              </div>
              <p className="text-stone-500 text-sm max-w-xs leading-relaxed mb-6">
                안개는 낮게 깔리고, 꿈은 높이 솟아오릅니다.<br />
                KLCLAB은 인류 미래의 밤을 지키고 있습니다.
              </p>
              <address className="not-italic text-stone-400 text-xs leading-relaxed">
                경기도 용인시 수지구 광교중앙로 338 광교우미뉴브 A동 5층
              </address>
            </div>

            <div className="flex gap-12 text-sm font-medium text-stone-600">
              <div className="flex flex-col gap-3">
                <span className="text-stone-900 font-bold mb-1">탐색</span>
                <button onClick={() => handleNavClick('vision')} className="text-left hover:text-orange-600">비전</button>
                <button onClick={() => handleNavClick('technology')} className="text-left hover:text-orange-600">기술</button>
                <button onClick={() => handleNavClick('careers')} className="text-left hover:text-orange-600">채용</button>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-stone-900 font-bold mb-1">소셜</span>
                <a href="#" className="hover:text-orange-600">인스타그램</a>
                <a href="#" className="hover:text-orange-600">X (Twitter)</a>
                <a href="#" className="hover:text-orange-600">링크드인</a>
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-stone-400 gap-4 border-t border-stone-200 pt-6">
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <span><strong className="font-medium text-stone-500">상호명:</strong> {COMPANY_INFO.name}</span>
                <span><strong className="font-medium text-stone-500">대표자:</strong> {COMPANY_INFO.ceo}</span>
                <span><strong className="font-medium text-stone-500">사업자등록번호:</strong> {COMPANY_INFO.businessNumber}</span>
                <span><strong className="font-medium text-stone-500">통신판매업신고번호:</strong> {COMPANY_INFO.ecommerceNumber}</span>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <span><strong className="font-medium text-stone-500">주소:</strong> {COMPANY_INFO.address}</span>
                <span><strong className="font-medium text-stone-500">대표전화:</strong> {COMPANY_INFO.phone}</span>
              </div>
              <p className="font-[Manrope] mt-2">© 2026 KLCLAB Inc. All rights reserved.</p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button onClick={() => setActivePolicy('terms')} className="hover:text-stone-900 transition-colors">이용약관</button>
              <span className="hidden sm:block w-px h-3 bg-stone-300"></span>
              <button onClick={() => setActivePolicy('privacy')} className="font-bold text-stone-900 hover:text-orange-600 transition-colors">개인정보처리방침</button>
              <span className="hidden sm:block w-px h-3 bg-stone-300"></span>
              <button onClick={() => setActivePolicy('cookies')} className="hover:text-stone-900 transition-colors">쿠키 정책</button>
              <span className="hidden sm:block w-px h-3 bg-stone-300"></span>
              <button onClick={() => setActivePolicy('refund')} className="hover:text-stone-900 transition-colors">환불 및 결제 정책</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Policy Modal */}
      {activePolicy && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setActivePolicy(null)} />
          <div className="bg-white rounded-[2rem] w-full max-w-2xl max-h-[80vh] overflow-hidden relative shadow-2xl z-10 flex flex-col animate-fade-in-up">
            <div className="p-6 border-b border-stone-100 flex justify-between items-center bg-[#FDFCF8] sticky top-0">
              <h3 className="text-xl font-bold text-stone-900">{POLICY_CONTENT[activePolicy].title}</h3>
              <button
                onClick={() => setActivePolicy(null)}
                className="p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-500 hover:text-stone-900"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-8 overflow-y-auto whitespace-pre-wrap leading-relaxed text-stone-600 text-sm md:text-base">
              {POLICY_CONTENT[activePolicy].content}
            </div>
          </div>
        </div>
      )}
    </>
  );
};