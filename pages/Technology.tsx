import React from 'react';
import { Reveal } from '../components/Reveal';
import { Cpu, Zap, Layers, Network } from 'lucide-react';

export const Technology: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#1C1917] text-white min-h-screen">
      <section className="container mx-auto px-6">
        <Reveal width="100%">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block">Technology</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
              Soft Tech &<br/> Empathy Engine
            </h1>
            <p className="text-xl md:text-2xl text-stone-400 leading-relaxed max-w-3xl mx-auto">
              딱딱한 기계적 연산이 아닌, 유연하고 맥락을 이해하는 지능. KLCLAB의 기술은 사람의 마음을 읽는 것에서 시작합니다.
            </p>
          </div>
        </Reveal>

        {/* Hero Visual */}
        <div className="relative mb-32 group">
             <div className="absolute inset-0 bg-gradient-to-b from-orange-500/20 to-transparent blur-3xl opacity-50"></div>
             <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop" 
                className="w-full h-[500px] object-cover rounded-[3rem] opacity-80 border border-white/10" 
                alt="Abstract Technology" 
             />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 animate-pulse">
                    <Cpu size={40} className="text-orange-400" />
                </div>
             </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
            <Reveal>
                <div>
                    <h2 className="text-4xl font-bold mb-6 text-white">공감 엔진 (Empathy Engine)</h2>
                    <p className="text-stone-400 text-lg leading-relaxed mb-8">
                        기존 AI가 키워드 매칭에 집중했다면, 우리의 공감 엔진은 발화자의 의도와 감정 상태를 다층적으로 분석합니다. 텍스트 너머의 행간을 읽어내어, 마치 오랜 동료와 대화하는 듯한 경험을 제공합니다.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500"><Zap size={16}/></div>
                            <span>실시간 감정 분석 및 톤 앤 매너 조절</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500"><Network size={16}/></div>
                            <span>장기 기억(Long-term Memory)을 통한 맥락 유지</span>
                        </li>
                    </ul>
                </div>
            </Reveal>
            <Reveal delay={200}>
                <div className="bg-stone-900 p-8 rounded-[2rem] border border-stone-800">
                    <img src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=600&auto=format&fit=crop" className="w-full h-64 object-cover rounded-xl mb-6 opacity-80" alt="Code" />
                    <div className="space-y-4 font-mono text-sm text-stone-500">
                        <div className="flex justify-between border-b border-stone-800 pb-2">
                            <span>Sentiment Score</span>
                            <span className="text-green-400">0.98 (Positive)</span>
                        </div>
                        <div className="flex justify-between border-b border-stone-800 pb-2">
                            <span>Context Depth</span>
                            <span className="text-blue-400">Level 5 (Deep)</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Response Time</span>
                            <span className="text-white">45ms</span>
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                 <Layers className="text-orange-500 mb-6" size={32} />
                 <h3 className="text-xl font-bold mb-4">멀티모달 인터페이스</h3>
                 <p className="text-stone-400 text-sm">텍스트, 음성, 이미지를 자유롭게 오가며 정보를 처리합니다. 당신이 보는 것을 AI도 함께 봅니다.</p>
             </div>
             <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                 <Network className="text-blue-500 mb-6" size={32} />
                 <h3 className="text-xl font-bold mb-4">분산형 처리</h3>
                 <p className="text-stone-400 text-sm">개인 데이터는 로컬에서 처리되어 보안을 유지하면서도, 글로벌 지식 베이스와 유기적으로 연동됩니다.</p>
             </div>
             <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                 <Zap className="text-yellow-500 mb-6" size={32} />
                 <h3 className="text-xl font-bold mb-4">초저지연 응답</h3>
                 <p className="text-stone-400 text-sm">생각의 속도에 맞춰 대화가 끊기지 않도록, 최적화된 경량화 모델을 사용합니다.</p>
             </div>
        </div>
      </section>
    </div>
  );
};