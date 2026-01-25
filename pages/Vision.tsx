import React from 'react';
import { Reveal } from '../components/Reveal';
import { ArrowRight, Compass, Users, Unlock } from 'lucide-react';

export const Vision: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#FDFCF8]">
      <section className="container mx-auto px-6">
        <Reveal width="100%">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <span className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Vision</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8 text-stone-900">
              전문지식의<br/> 경계를 허물다
            </h1>
            <p className="text-xl md:text-2xl text-stone-600 leading-relaxed max-w-3xl mx-auto">
              KLCLAB은 누구나 쉽고 빠르게 전문지식을 다룰 수 있는 세상을 만듭니다. 우리는 기술이 어떻게 일상을 혁신하고, 삶의 방향을 제시할 수 있는지 끊임없이 탐구합니다.
            </p>
          </div>
        </Reveal>

        <div className="mb-32 rounded-[3rem] overflow-hidden h-[60vh] relative group">
           <img 
             src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop" 
             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
             alt="Visionary Bridge" 
           />
           {/* Enhanced gradient for better text visibility */}
           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
           
           <div className="absolute bottom-12 left-8 md:left-16 text-white max-w-2xl">
             <h3 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight font-[Manrope]">Knowledge Liberty</h3>
             <p className="text-lg md:text-xl opacity-90 leading-relaxed font-light">
               전문 지식의 독점을 끝내고, 누구나 정보의 주인이 되는 세상.<br className="hidden md:block"/>
               KLCLAB은 당신에게 '알 권리'를 넘어 진정으로 <b>'이해할 자유'</b>를 드립니다.
             </p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <Reveal>
            <div className="flex flex-col gap-6">
              <div className="w-16 h-16 bg-stone-100 rounded-2xl flex items-center justify-center text-stone-900">
                <Unlock size={32} />
              </div>
              <h3 className="text-2xl font-bold">장벽 없는 접근</h3>
              <p className="text-stone-600 leading-relaxed">
                법률, 의학, 금융 등 복잡한 전문 분야의 지식은 소수 전문가의 전유물이었습니다. KLCLAB의 AI는 이러한 정보를 일상의 언어로 번역하여, 개인이 스스로 중요한 결정을 내릴 수 있도록 돕습니다.
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={100}>
            <div className="flex flex-col gap-6">
              <div className="w-16 h-16 bg-stone-100 rounded-2xl flex items-center justify-center text-stone-900">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold">개인과 기업의 도약</h3>
              <p className="text-stone-600 leading-relaxed">
                반복적인 업무와 정보 탐색에 들이는 시간을 획기적으로 줄여줍니다. 기업은 본연의 가치 창출에 집중하고, 개인은 삶의 질을 높이는 데 더 많은 시간을 할애할 수 있습니다.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex flex-col gap-6">
              <div className="w-16 h-16 bg-stone-100 rounded-2xl flex items-center justify-center text-stone-900">
                <Compass size={32} />
              </div>
              <h3 className="text-2xl font-bold">더 나은 삶의 방향</h3>
              <p className="text-stone-600 leading-relaxed">
                단순한 정보 검색을 넘어, 당신의 상황과 맥락을 이해하고 최적의 경로를 제안합니다. KLCLAB은 당신이 나아가는 길을 비추는 등대와 같은 역할을 수행합니다.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      
      <section className="mt-32 bg-[#EBE9E4] py-24">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
           <div className="max-w-xl">
             <h2 className="text-4xl font-bold mb-6">함께 만드는 미래</h2>
             <p className="text-lg text-stone-600 mb-8">
               우리는 기술이 인간을 대체하는 것이 아니라, 인간을 확장시키는 미래를 믿습니다. KLCLAB과 함께 더 넓은 세상으로 나아가세요.
             </p>
             <button className="bg-stone-900 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-stone-800 transition-colors">
               기술 살펴보기 <ArrowRight size={18} />
             </button>
           </div>
           <div className="w-full md:w-1/2 rounded-3xl overflow-hidden h-96">
             <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Collaboration" />
           </div>
        </div>
      </section>
    </div>
  );
};