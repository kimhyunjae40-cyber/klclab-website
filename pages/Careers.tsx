import React, { useState } from 'react';
import { Reveal } from '../components/Reveal';
import { Briefcase, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

export const Careers: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', agreed: false });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.agreed) {
        alert("개인정보 수집 및 이용에 동의해주세요.");
        return;
    }
    if (formState.name && formState.email) {
        setStatus('loading');
        
        try {
          // Supabase 'career_notifications' 테이블에 데이터 저장
          const { error } = await supabase
            .from('career_notifications')
            .insert([{ 
                name: formState.name, 
                email: formState.email, 
                agreed: formState.agreed,
                created_at: new Date().toISOString()
            }]);

          if (error) throw error;

          setStatus('success');
          setFormState({ name: '', email: '', agreed: false });
        } catch (error) {
          console.error('Error submitting career form:', error);
          alert('신청 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
          setStatus('idle');
        }
    }
  };

  return (
    <div className="pt-32 pb-24 bg-[#FDFCF8] min-h-screen flex flex-col">
      <section className="container mx-auto px-6 flex-1 flex flex-col items-center justify-center">
        <Reveal width="100%">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-stone-100 rounded-full px-4 py-1 text-sm font-bold text-stone-600 mb-6">
                Hiring Soon
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-8 text-stone-900">
              KLCLAB과 함께<br/> 미래를 만드세요
            </h1>
            <p className="text-xl text-stone-500 mb-12">
              우리는 현재 인재 채용을 위한 준비 단계에 있습니다.<br/>
              곧 열릴 채용 소식을 가장 먼저 받아보시려면 이메일을 남겨주세요.
            </p>

            <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-stone-100 max-w-md mx-auto relative overflow-hidden transition-all duration-500">
                <div className="relative z-10">
                    {status === 'success' ? (
                        <div className="py-12 flex flex-col items-center animate-fade-in-up">
                             <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                                <CheckCircle2 size={32} />
                             </div>
                             <h3 className="text-xl font-bold mb-2">알림 신청 완료</h3>
                             <p className="text-stone-500 text-sm">채용 소식이 있으면 가장 먼저 알려드릴게요!</p>
                             <button 
                                onClick={() => setStatus('idle')}
                                className="mt-6 text-sm text-stone-400 hover:text-stone-900 underline"
                             >
                                다른 이메일 등록하기
                             </button>
                        </div>
                    ) : (
                        <>
                            <h3 className="text-lg font-bold mb-6 text-left">채용 알림 신청</h3>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <input 
                                    type="text" 
                                    required
                                    placeholder="이름" 
                                    value={formState.name}
                                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-stone-400 transition-colors"
                                />
                                <input 
                                    type="email" 
                                    required
                                    placeholder="이메일 주소" 
                                    value={formState.email}
                                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-stone-400 transition-colors"
                                />
                                <div className="flex items-center gap-2 mt-2">
                                    <input 
                                        type="checkbox" 
                                        id="agree" 
                                        checked={formState.agreed}
                                        onChange={(e) => setFormState({...formState, agreed: e.target.checked})}
                                        className="rounded text-stone-900 focus:ring-stone-500 cursor-pointer"
                                    />
                                    <label htmlFor="agree" className="text-xs text-stone-500 cursor-pointer select-none">개인정보 수집 및 이용에 동의합니다.</label>
                                </div>
                                <button 
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full bg-stone-900 text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 mt-2 disabled:bg-stone-300 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? <Loader2 className="animate-spin" /> : <>알림 받기 <Send size={16} /></>}
                                </button>
                            </form>
                        </>
                    )}
                </div>
                {/* Decoration */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-100 rounded-full blur-2xl opacity-50 pointer-events-none"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-stone-200 rounded-full blur-2xl opacity-50 pointer-events-none"></div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto opacity-60">
                <div className="border border-stone-200 rounded-2xl p-6 text-left">
                    <div className="flex items-center gap-3 mb-2">
                        <Briefcase size={20} />
                        <span className="font-bold">AI Research Scientist</span>
                    </div>
                    <p className="text-sm text-stone-500">Coming Soon</p>
                </div>
                <div className="border border-stone-200 rounded-2xl p-6 text-left">
                     <div className="flex items-center gap-3 mb-2">
                        <Briefcase size={20} />
                        <span className="font-bold">Frontend Engineer</span>
                    </div>
                    <p className="text-sm text-stone-500">Coming Soon</p>
                </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};