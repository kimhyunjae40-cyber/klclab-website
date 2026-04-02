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
          <div className="bg-stone-50 rounded-3xl p-10 border border-stone-200">
            <h3 className="text-2xl font-bold text-stone-900 mb-8 flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-orange-500" />
              자체 프로덕트 개발
            </h3>
            <div className="space-y-6">
              {[
                { name: '자체 앱 서비스명 (예정)', desc: '추후 개발/마일스톤에 오를 서비스에 대한 간단한 소개 부분입니다', status: '개발 중' },
                { name: 'KLCLAB B2B API 솔루션', desc: '기업 파트너사를 위해 제공되는 맞춤형 AI 인프라 연동 환경', status: '상용화 준비' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 transition-transform hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-stone-900">{item.name}</h4>
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold">{item.status}</span>
                  </div>
                  <p className="text-stone-500 text-sm">{item.desc}</p>
                </div>
              ))}
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
