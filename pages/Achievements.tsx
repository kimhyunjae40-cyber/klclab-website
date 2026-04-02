import React from 'react';
import { TrendingUp, Users, Globe, Award, Sparkles, Zap, ArrowRight, Activity } from 'lucide-react';

export const Achievements = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#FDFCF8]">
      {/* Hero Section */}
      <div className="container mx-auto px-6 max-w-6xl mb-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-orange-500" />
          <span className="text-sm font-bold text-stone-600 tracking-wide">MILESTONES & IMPACT</span>
        </div>
        <img src="/logos/klclab-developer-header.png" alt="KLCLAB Developer Header" className="mx-auto h-20 md:h-28 mb-8 object-contain animate-fade-in-up shadow-sm rounded-xl" />
        <h1 className="text-5xl md:text-7xl font-black text-stone-900 mb-8 tracking-tight leading-tight animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          숫자로 증명하는<br className="hidden md:block"/> KLCLAB의 혁신
        </h1>
        <p className="text-xl text-stone-500 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          단순한 기술을 넘어, 실제로 세상을 변화시키고 있는 우리의 발자취를 확인하세요. (이곳에 실제 들어갈 핵심 성과 요약문을 전달해 주시면 반영해 드립니다.)
        </p>
      </div>

      {/* Key Metrics Grid */}
      <div className="container mx-auto px-6 max-w-5xl mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Metric 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-stone-200/50 border border-stone-100 transition-transform hover:-translate-y-1 duration-300">
            <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-orange-500" />
            </div>
            <div className="text-5xl font-black text-stone-900 mb-2 font-display">15+</div>
            <div className="text-stone-500 font-medium">초기 베타 파트너 논의</div>
          </div>
          
          {/* Metric 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-stone-200/50 border border-stone-100 transition-transform hover:-translate-y-1 duration-300">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
              <Activity className="w-6 h-6 text-blue-500" />
            </div>
            <div className="text-5xl font-black text-stone-900 mb-2 font-display">0.2s</div>
            <div className="text-stone-500 font-medium">AI 맞춤 응답 최적화 속도</div>
          </div>

          {/* Metric 3 */}
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-stone-200/50 border border-stone-100 transition-transform hover:-translate-y-1 duration-300">
            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-emerald-500" />
            </div>
            <div className="text-5xl font-black text-stone-900 mb-2 font-display">5</div>
            <div className="text-stone-500 font-medium">PoC(기술 검증) 진행 중</div>
          </div>

          {/* Metric 4 */}
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-stone-200/50 border border-stone-100 transition-transform hover:-translate-y-1 duration-300">
            <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
              <Award className="w-6 h-6 text-purple-500" />
            </div>
            <div className="text-5xl font-black text-stone-900 mb-2 font-display">Ready</div>
            <div className="text-stone-500 font-medium">Aura B2B 솔루션 출시 임박</div>
          </div>
        </div>
      </div>

      {/* Feature Growth / Timeline Style */}
      <div className="bg-stone-900 py-32 text-white relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                폭발적인 성장,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">
                  멈추지 않는 도전
                </span>
              </h2>
              <p className="text-stone-400 text-lg leading-relaxed">
                현재 핵심 B2B 파트너들과 함께 기술 검증 및 고도화를 진행하고 있습니다. 본격적인 출시에 앞서 우리의 인프라가 얼마나 견고하게 준비되고 있는지 확인하실 수 있습니다.
              </p>
              
              <div className="space-y-6 pt-4">
                {[
                  { year: '2026', title: '비공개 베타 테스트(CBT) 시작' },
                  { year: '2025', title: '핵심 AI 엔진 아키텍처 구축 완료' },
                  { year: '2024', title: 'Soft Tech 프로토타입 개발 및 법인 설립' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start">
                    <div className="font-mono text-xl font-bold text-orange-400 pt-1">{item.year}</div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-stone-400 text-sm">상세 내용이 들어갈 자리입니다. 우리 서비스가 달성한 주요 마일스톤을 기록합니다.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 w-full bg-stone-800/50 backdrop-blur-xl border border-stone-700 rounded-3xl p-8 shadow-2xl relative">
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white font-bold px-4 py-2 rounded-full text-sm shadow-lg transform rotate-3">
                🔥 Hot Trend
              </div>
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
                <TrendingUp className="text-orange-400" />
                API 성능 고도화 추이 (예상치)
              </h3>
              {/* Dummy Chart Visualization */}
              <div className="h-64 flex items-end gap-2 justify-between">
                {[20, 35, 45, 60, 85, 120].map((height, i) => (
                  <div key={i} className="w-full bg-stone-700/50 rounded-t-lg relative group transition-all duration-300 hover:bg-orange-500/80" style={{ height: `${height}%` }}>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-800 px-2 py-1 rounded text-xs font-bold shadow-lg">
                      {height * 10}k
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-stone-500 text-sm font-medium">
                <span>Q1 '25</span>
                <span>Q2 '25</span>
                <span>Q3 '25</span>
                <span>Q4 '25</span>
                <span>Q1 '26</span>
                <span>Q2 '26</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Portfolio */}
      <div className="container mx-auto px-6 max-w-6xl py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black tracking-tight text-stone-900 mb-4">Project & Portfolio</h2>
          <p className="text-stone-500 text-lg">우리의 기술이 집약된 자체 서비스 라인업과 산업별 파트너십 구축 사례들</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Internal Services */}
          <div className="bg-stone-50 rounded-3xl p-10 border border-stone-200 flex flex-col">
            <h3 className="text-2xl font-bold text-stone-900 mb-8 flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-orange-500" />
              자체 프로덕트 개발
            </h3>
            <div className="space-y-6 flex-1">
              {/* Highlighted Launch: Grove4 */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-stone-100 transition-transform hover:-translate-y-1 group flex flex-col pt-1">
                  <div className="relative z-20">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-3xl font-black text-white drop-shadow-lg mb-1 tracking-tight">Grove4</h4>
                        <p className="text-sm font-bold text-orange-400 tracking-wide drop-shadow-md">차세대 심리검사 솔루션</p>
                      </div>
                      <span className="px-3 py-1.5 bg-emerald-500 text-white rounded-full text-[10px] font-black shadow-lg tracking-wider">
                        ✨ '26.04 론칭
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-transparent z-10"></div>
                  
                  {/* Screenshots Showcase */}
                  <div className="absolute -bottom-6 right-0 left-6 flex gap-3 overflow-x-visible pointer-events-none z-0">
                    <img src="/screenshots/01_홈.png" alt="Grove4 App Home" className="h-44 w-auto rounded-xl shadow-2xl border-[3px] border-stone-800 object-cover rotate-[-4deg] transition-transform duration-500 group-hover:rotate-0 group-hover:-translate-y-3" />
                    <img src="/screenshots/05_리포트.png" alt="Grove4 Reports" className="h-44 w-auto rounded-xl shadow-2xl border-[3px] border-stone-800 object-cover translate-y-3 transition-transform duration-500 group-hover:translate-y-0 z-10" />
                    <img src="/screenshots/02_검사목록.png" alt="Grove4 Assessments" className="h-44 w-auto rounded-xl shadow-2xl border-[3px] border-stone-800 object-cover rotate-[4deg] transition-transform duration-500 group-hover:rotate-0 group-hover:-translate-y-3" />
                  </div>
                </div>
                <div className="p-6 bg-white z-20 pt-8 relative">
                  <p className="text-stone-600 text-[15px] leading-relaxed mb-5">
                    KLCLAB의 독자적인 AI 엔진 'Aura'와 실시간 감정 맥락 파악 기술인 <b>'공감 엔진(Empathy Engine)'</b>이 최초로 상용화된 솔루션입니다. 4가지 핵심 차원을 분석하여 학생별 최적의 성장 경로를 제시합니다.
                  </p>
                  <div className="bg-orange-50 rounded-2xl p-4 mb-5 border border-orange-100/50">
                    <div className="flex items-center gap-2 mb-1">
                      <Zap className="w-4 h-4 text-orange-500" />
                      <span className="text-xs font-black text-orange-600 uppercase tracking-wider">Next Version (V2) Roadmap</span>
                    </div>
                    <p className="text-stone-600 text-[13px] font-medium leading-normal">
                      V2 업데이트를 통해 <b>학기별 맞춤형 AI 교육 튜터</b>가 탑재됩니다. 공감 엔진이 학생의 학습 태도와 심리를 분석하여 최적의 학습 가이드를 제공할 예정입니다.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1.5 bg-[#E8F5E9] text-[#2E7D32] rounded-lg">✓ Android Google Play 4월 출시</span>
                    <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1.5 bg-[#FFF3E0] text-[#E65100] rounded-lg">⏳ iOS App Store 심사 중</span>
                  </div>
                </div>
              </div>

              {/* Other Products */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 transition-transform hover:-translate-y-1">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-stone-900">KLCLAB B2B API 솔루션</h4>
                  <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold">상용화 준비</span>
                </div>
                <p className="text-stone-500 text-sm">데이터 주권과 보안을 만족하면서도 기업 파트너사가 즉시 도입 가능한 맞춤형 AI 인프라 연동 환경입니다.</p>
              </div>
            </div>
          </div>

          {/* External Collaborations */}
          <div className="bg-stone-50 rounded-3xl p-10 border border-stone-200">
            <h3 className="text-2xl font-bold text-stone-900 mb-8 flex items-center gap-3">
              <Globe className="w-6 h-6 text-blue-500" />
              외부 기업 파트너십 및 협업
            </h3>
            <div className="space-y-6">
              {[
                { name: 'A기업 기술 검증 프로젝트 (예시)', desc: '외부 사명이나 협력 내용을 올리는 공간입니다. 도입 사례 설명', status: 'PoC 진행 중' },
                { name: 'B플랫폼 업무 협력 모색 (예시)', desc: '앞으로 진행될 외부 파트너와의 비즈니스 확장 및 협약 내용을 기록합니다', status: '협의 중' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 transition-transform hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-stone-900">{item.name}</h4>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-bold">{item.status}</span>
                  </div>
                  <p className="text-stone-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
