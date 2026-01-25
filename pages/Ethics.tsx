import React from 'react';
import { Reveal } from '../components/Reveal';
import { ShieldCheck, Heart, Lock } from 'lucide-react';

export const Ethics: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#FDFCF8]">
      <section className="container mx-auto px-6">
        <Reveal width="100%">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <span className="text-stone-500 font-bold tracking-widest uppercase text-sm mb-4 block">Ethics & Safety</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8 text-stone-900">
              기술은 차갑지만,<br/> 서비스는 따뜻해야 합니다
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 leading-relaxed max-w-3xl mx-auto">
              KLCLAB은 기술 만능주의를 경계합니다. 우리는 가장 인간적인 기술이 가장 안전한 기술이라고 믿습니다.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
            <Reveal>
                <div className="bg-[#EBE9E4] rounded-[3rem] p-12 h-full flex flex-col justify-center">
                    <Heart size={48} className="text-red-500 mb-8" />
                    <h2 className="text-3xl font-bold mb-6">따뜻한 기술 (Warm Tech)</h2>
                    <p className="text-lg text-stone-600 leading-relaxed mb-6">
                        기술이 발전할수록 소외되는 사람들이 생겨납니다. 우리는 기술 격차를 줄이고, 누구나 쉽게 혜택을 누릴 수 있는 포용적인 AI를 만듭니다. 차가운 코드 속에 따뜻한 위로와 배려를 담는 것, 그것이 우리의 철학입니다.
                    </p>
                </div>
            </Reveal>
            <Reveal delay={100}>
                <div className="bg-[#1C1917] rounded-[3rem] p-12 h-full flex flex-col justify-center text-white">
                    <ShieldCheck size={48} className="text-green-400 mb-8" />
                    <h2 className="text-3xl font-bold mb-6">신뢰와 투명성</h2>
                    <p className="text-lg text-stone-300 leading-relaxed mb-6">
                        AI의 판단 근거는 투명해야 합니다. 우리는 블랙박스 모델을 지양하고, 설명 가능한 AI(XAI)를 지향합니다. 사용자는 언제나 AI가 왜 그런 제안을 했는지 물을 수 있고, 이해할 수 있어야 합니다.
                    </p>
                </div>
            </Reveal>
        </div>

        <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">개인정보 보호 원칙</h3>
            <div className="space-y-6">
                <div className="flex gap-6 items-start border p-6 rounded-2xl border-stone-200 bg-white">
                    <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center shrink-0">
                        <Lock size={20} className="text-stone-600" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-2">데이터 주권의 보장</h4>
                        <p className="text-stone-600">
                            생성된 모든 데이터의 주인은 사용자입니다. KLCLAB은 사용자의 명시적인 동의 없이 데이터를 서버로 전송하거나 학습에 사용하지 않습니다.
                        </p>
                    </div>
                </div>
                <div className="flex gap-6 items-start border p-6 rounded-2xl border-stone-200 bg-white">
                    <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center shrink-0">
                        <ShieldCheck size={20} className="text-stone-600" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-2">프라이버시 바이 디자인 (Privacy by Design)</h4>
                        <p className="text-stone-600">
                            기획 단계부터 개인정보 보호를 최우선으로 고려합니다. 민감한 정보는 기기 내에서만 처리되는 온디바이스(On-device) AI 기술을 적극 활용합니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};