import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { Reveal } from '../components/Reveal';
import { FAQ_DATA } from '../constants';
import { ArrowRight, Plus, ShieldCheck, Leaf, MessageCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { SymbolAdaptive, SymbolContext, SymbolEmpathy, SymbolProactive } from '../components/CustomSymbols';
import { supabase } from '../lib/supabase';

interface HomeProps {
  images: {
    story: string;
    philosophy: string;
    simplicity: string;
    warmth: string;
  };
  onNavigate: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ images, onNavigate }) => {
  const [email, setEmail] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubmissionStatus('loading');

    try {
      // Supabase 'beta_signups' 테이블에 이메일 저장
      const { error } = await supabase
        .from('beta_signups')
        .insert([{ email, created_at: new Date().toISOString() }]);

      if (error) throw error;

      setSubmissionStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Error submitting email:', error);
      alert('신청 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      setSubmissionStatus('idle');
    }
  };

  return (
    <>
      <Hero />

      {/* Intro / Vision Section */}
      <section className="py-24 md:py-32 container mx-auto px-6">
        <Reveal width="100%">
            <div className="max-w-4xl mx-auto text-center mb-24">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.2] mb-8 text-stone-900">
                    인간을 닮은 기술. <br/>
                    <span className="text-stone-400">당신을 위해 태어났으니까요.</span>
                </h2>
                <p className="text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto">
                    복잡한 현실을 위해 설계된 KLCLAB은 당신의 삶을 더 가볍게 만드는 적응형 지능을 만듭니다. 지루한 일은 맡기고, 마법 같은 순간에 집중하세요.
                </p>
            </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <Reveal width="100%">
                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-stone-100 h-full flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-6 leading-snug">AI는 당신에게 가장 중요한 '시간'을 돌려줘야 합니다.</h3>
                    <p className="text-stone-600 mb-8 text-lg">
                        우리는 단순한 질문에서 시작했습니다. "왜 첨단기술은 멀게만 느껴질까?" KLCLAB은 인간과 인공지능 사이의 공존을 연구하고 있습니다.
                    </p>
                    <button 
                      onClick={() => { onNavigate('vision'); window.scrollTo(0,0); }}
                      className="flex items-center gap-2 text-stone-900 font-bold hover:gap-4 transition-all"
                    >
                        이야기 더 보기 <ArrowRight size={18} />
                    </button>
                </div>
            </Reveal>
            <Reveal delay={200} width="100%">
                <div className="rounded-[2.5rem] overflow-hidden h-[400px] md:h-[500px] relative group bg-stone-100 w-full">
                    <img 
                        src={images.story}
                        alt="KLCLAB Workspace" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm">
                        우리의 이야기
                    </div>
                </div>
            </Reveal>
        </div>
      </section>

      {/* Features Grid (Updated with 4 key technologies) */}
      <section className="py-24 bg-[#EBE9E4] rounded-t-[3rem] md:rounded-t-[5rem]">
        <div className="container mx-auto px-6">
            <Reveal>
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">일상을 마법처럼</h2>
                    <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto">
                        최첨단 소프트 테크(Soft Tech) 모델로 구동되는 우리 시스템은 단순한 명령 수행을 넘어, 당신의 의도를 깊이 이해하고 미리 움직입니다.
                    </p>
                </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Feature 1: Adaptive Learning */}
                <Reveal width="100%">
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-10 h-full flex flex-col justify-between min-h-[400px] hover:shadow-xl transition-shadow duration-500 w-full">
                         <div>
                            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-8">
                                <SymbolAdaptive className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">적응형 학습</h3>
                            <p className="text-stone-600 leading-relaxed text-lg">
                                정해진 스크립트를 따르지 않습니다. 당신의 생활 패턴을 스스로 학습하여, 아침 8시의 커피 온도부터 밤 10시의 조명 밝기까지 모든 환경을 당신에게 최적화합니다.
                            </p>
                         </div>
                         <div className="mt-8 rounded-2xl overflow-hidden h-64 relative">
                            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" alt="Adaptive Tech" />
                         </div>
                    </div>
                </Reveal>

                {/* Feature 2: Contextual Continuity */}
                <Reveal delay={100} width="100%">
                    <div className="bg-[#1C1917] text-white rounded-[2.5rem] p-8 md:p-10 h-full flex flex-col justify-between min-h-[400px] hover:shadow-xl transition-shadow duration-500 w-full">
                         <div>
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-8">
                                <SymbolContext className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">맥락적 연속성</h3>
                            <p className="text-stone-400 leading-relaxed text-lg">
                                "아까 그거 있잖아"라고 말해도 알아듣습니다. 단절된 명령이 아닌, 흐르는 대화 속에서 당신의 의도를 파악하고 기억합니다. 여러 기기를 오가도 대화는 끊기지 않습니다.
                            </p>
                         </div>
                         <div className="mt-8 rounded-2xl overflow-hidden h-64 relative">
                             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"/>
                             <img src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover opacity-80 transform hover:scale-105 transition-transform duration-700" alt="Context" />
                         </div>
                    </div>
                </Reveal>

                {/* Feature 3: Empathic Interface */}
                <Reveal delay={200} width="100%">
                     <div className="bg-[#EBE9E4] border border-stone-300 rounded-[2.5rem] p-8 md:p-10 h-full flex flex-col justify-between min-h-[400px] hover:bg-white transition-colors duration-500 hover:shadow-xl w-full">
                        <div>
                            <div className="w-16 h-16 bg-stone-200 rounded-2xl flex items-center justify-center text-stone-700 mb-8">
                                <SymbolEmpathy className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">공감형 인터페이스</h3>
                            <p className="text-stone-600 leading-relaxed text-lg">
                                AI가 당신의 기분을 이해한다면 어떨까요? 텍스트와 목소리의 미세한 뉘앙스를 분석하여, 지친 날에는 위로를, 기쁜 날에는 축하를 건네는 진정한 파트너입니다.
                            </p>
                        </div>
                        <div className="mt-8">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600"><MessageCircle size={16}/></div>
                                    <span className="text-sm font-bold text-stone-500">Sentiment Analysis</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-2 bg-stone-100 rounded-full w-full overflow-hidden">
                                        <div className="h-full bg-orange-400 w-3/4"></div>
                                    </div>
                                    <div className="flex justify-between text-xs text-stone-400">
                                        <span>User Emotion</span>
                                        <span>Positive (0.89)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                </Reveal>

                {/* Feature 4: Proactive Care */}
                <Reveal delay={300} width="100%">
                     <div className="relative rounded-[2.5rem] overflow-hidden h-full min-h-[400px] group w-full flex flex-col justify-end">
                        <img 
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" 
                            alt="Proactive" 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                        <div className="relative z-10 p-8 md:p-10 flex flex-col justify-end text-white h-full w-full">
                            <div className="mb-auto">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-8">
                                    <SymbolProactive className="w-8 h-8" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">선제적 제안</h3>
                            <p className="opacity-90 leading-relaxed text-lg">
                                비가 오기 전에 우산을 챙기라고 알려주고, 회의가 길어지면 다음 약속을 조율합니다. 당신이 요청하기 전에 먼저 필요한 것을 제시합니다.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
      </section>

      {/* Transition Text */}
      <div className="py-24 bg-[#EBE9E4] overflow-hidden">
        <div className="animate-marquee">
             <span className="text-[4rem] md:text-[8rem] font-bold text-stone-300 mx-8 font-[Manrope] whitespace-nowrap">FROM CALCULATION TO INTUITION</span>
             <span className="text-[4rem] md:text-[8rem] font-bold text-stone-300 mx-8 font-[Manrope] whitespace-nowrap">FROM CALCULATION TO INTUITION</span>
             <span className="text-[4rem] md:text-[8rem] font-bold text-stone-300 mx-8 font-[Manrope] whitespace-nowrap">FROM CALCULATION TO INTUITION</span>
             <span className="text-[4rem] md:text-[8rem] font-bold text-stone-300 mx-8 font-[Manrope] whitespace-nowrap">FROM CALCULATION TO INTUITION</span>
        </div>
      </div>

      {/* Philosophy Grid */}
      <section className="py-24 bg-[#FDFCF8] container mx-auto px-6">
        <Reveal width="100%">
            <div className="text-center mb-16 mx-auto max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    기술은 차갑지만, <br className="hidden md:block"/>
                    서비스는 따뜻해야 합니다
                </h2>
                <p className="text-stone-500 text-lg md:text-xl leading-relaxed">
                    KLCLAB은 기술 만능주의를 경계합니다.<br/>
                    그것이 우리가 꿈꾸는 세상입니다.
                </p>
            </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal width="100%">
                <div className="bg-[#1C1917] rounded-[2rem] p-8 h-[400px] flex flex-col relative overflow-hidden group w-full">
                    <div className="relative z-10 mb-6">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white mb-4">
                             <ShieldCheck size={18} />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white">본질을 묻다</h3>
                        <p className="text-stone-300 text-sm leading-relaxed">
                            우리가 집중하는 건 "얼마나 정교한가?"가 아니라, "그래서, 사람의 삶이 나아졌는가?"입니다. 수치보다 가치를, 기능보다 본질을 먼저 생각합니다.
                        </p>
                    </div>
                    <div className="flex-1 rounded-xl overflow-hidden relative">
                         <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-transparent to-transparent z-10" />
                         <img src={images.philosophy} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" alt="Essence" />
                    </div>
                </div>
            </Reveal>

            <Reveal delay={100} width="100%">
                <div className="bg-[#EBE9E4] rounded-[2rem] p-8 h-[400px] flex flex-col relative overflow-hidden group w-full">
                     <div className="relative z-10 mb-6">
                         <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-stone-900 mb-4">
                             <MessageCircle size={18} />
                         </div>
                         <h3 className="text-xl font-bold mb-2 text-stone-900">단순함의 미학</h3>
                         <p className="text-stone-600 text-sm leading-relaxed">
                            복잡한 전문 지식을 간단한 대화로. 당신의 고민을 깊이 이해하고, 가장 최적의 솔루션을 직관적으로 제시합니다.
                         </p>
                     </div>
                     <div className="flex-1 rounded-xl overflow-hidden relative">
                        <img src={images.simplicity} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Simplicity" />
                     </div>
                </div>
            </Reveal>

            <Reveal delay={200} width="100%">
                <div className="bg-orange-600 rounded-[2rem] p-8 h-[400px] flex flex-col text-white relative overflow-hidden group w-full">
                     <div className="relative z-10">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white mb-4">
                             <Leaf size={18} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">따뜻한 기술</h3>
                        <p className="text-orange-100 text-sm mb-auto leading-relaxed">
                           누구도 소외되지 않는 기술. 가장 필요한 곳에 가장 먼저 닿는 서비스. 차가운 코드가 따뜻한 위로가 되는 세상을 만듭니다.
                        </p>
                     </div>
                     <img 
                        src={images.warmth}
                        className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full object-cover border-8 border-orange-500/50 transition-transform duration-700 group-hover:scale-105"
                        alt="Warmth"
                     />
                </div>
            </Reveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-bold mb-12">자주 묻는 질문</h2>
        <div className="divide-y divide-stone-200">
            {FAQ_DATA.map((item, index) => (
                <Reveal key={index} delay={index * 50} width="100%">
                    <details className="group py-6 cursor-pointer">
                        <summary className="flex justify-between items-center font-medium text-lg list-none text-stone-900 group-hover:text-orange-600 transition-colors">
                            {item.question}
                            <span className="transition group-open:rotate-45">
                                <Plus size={20} />
                            </span>
                        </summary>
                        <p className="text-stone-500 mt-4 leading-relaxed pr-8">
                            {item.answer}
                        </p>
                    </details>
                </Reveal>
            ))}
        </div>
      </section>

      {/* Large Footer CTA */}
      <section className="px-6 pb-6">
        <div className="bg-[#1C1917] rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
             <div className="relative z-10 max-w-2xl mx-auto">
                {submissionStatus === 'success' ? (
                  <div className="animate-fade-in-up">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                      <CheckCircle2 size={40} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">신청해 주셔서 감사합니다!</h2>
                    <p className="text-stone-400 text-lg">KLCLAB 베타 프로그램 관련 소식을 곧 이메일로 전해드리겠습니다.</p>
                  </div>
                ) : (
                  <>
                    <p className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-6">가장 먼저 소식을 만나보세요</p>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">지금 KLCLAB 베타 프로그램에<br/> 참여하세요.</h2>
                    <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <input 
                            type="email" 
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="이메일 주소 입력" 
                            disabled={submissionStatus === 'loading'}
                            className="bg-white/10 border border-white/20 text-white px-6 py-4 rounded-full w-full md:w-80 focus:outline-none focus:bg-white/20 transition-colors placeholder-stone-400 disabled:opacity-50"
                        />
                        <button 
                          type="submit"
                          disabled={submissionStatus === 'loading'}
                          className="bg-white text-stone-900 px-8 py-4 rounded-full font-bold w-full md:w-auto hover:bg-[#FFD700] transition-colors whitespace-nowrap disabled:bg-stone-500 disabled:cursor-not-allowed flex items-center justify-center min-w-[120px]"
                        >
                            {submissionStatus === 'loading' ? <Loader2 className="animate-spin" /> : '신청하기'}
                        </button>
                    </form>
                    <p className="mt-8 text-stone-500 text-xs">
                        2026년 참여 인원은 한정되어 있습니다.
                    </p>
                  </>
                )}
             </div>
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-stone-800 via-[#1C1917] to-[#1C1917] z-0" />
        </div>
      </section>
    </>
  );
};