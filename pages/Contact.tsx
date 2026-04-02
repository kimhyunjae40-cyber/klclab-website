import React from 'react';
import { Mail, MapPin, Phone, ArrowRight, MessageSquare, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FDFCF8] relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-100 -z-10 transform skew-x-12 translate-x-1/4"></div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-stone-900 mb-6 font-display tracking-tight">
            사업 협력 및 문의
          </h1>
          <p className="text-xl text-stone-500 max-w-2xl mx-auto">
            KLCLAB과 함께 혁신적인 서비스를 만들어갈 파트너를 찾습니다.<br/>
            프로젝트 제안부터 기술 도입까지, 무엇이든 편하게 문의해주세요.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl shadow-stone-200/50 border border-stone-100 overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row">
          
          {/* Contact Info Side */}
          <div className="w-full md:w-2/5 bg-stone-900 p-12 text-white relative overflow-hidden">
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-stone-800 rounded-full blur-3xl pointer-events-none"></div>
            
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <p className="text-stone-400 mb-12">
              가장 빠른 시일 내에 담당자가 내용을 확인하고 연락을 드리겠습니다.
            </p>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-1">Email</h4>
                  <a href="mailto:contact@klclab.co.kr" className="text-lg font-medium hover:text-orange-400 transition-colors">
                    contact@klclab.co.kr
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-1">Phone</h4>
                  <p className="text-lg font-medium">031-339-4668</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-1">Address</h4>
                  <p className="text-base font-medium text-stone-300 leading-relaxed">
                    경기도 용인시 수지구 광교중앙로 338<br/>
                    에이동 512호
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="w-full md:w-3/5 p-12 bg-white">
            <h3 className="text-2xl font-bold text-stone-900 mb-8">메시지 보내기</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700">이름 / 회사명</label>
                  <input 
                    type="text" 
                    placeholder="홍길동 / (주)회사명" 
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700">이메일 주소</label>
                  <input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-stone-700">문의 유형</label>
                <select className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all text-stone-700">
                  <option>API 기술 도입 문의</option>
                  <option>투자 및 사업 제휴 문의</option>
                  <option>기타 일반 문의</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-stone-700">상세 내용</label>
                <textarea 
                  rows={5}
                  placeholder="문의하실 내용을 자유롭게 작성해주세요." 
                  className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full py-4 bg-stone-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-stone-800 transition-colors group">
                문의 접수하기
                <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
