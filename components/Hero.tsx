import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#EBE9E4]">
      {/* 3D Spline Embed */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        {/* Scaled iframe to push watermark (bottom-right) out of view */}
        <iframe 
            src='https://my.spline.design/r4xbot-WdLhUAawd7bujc6mCo7EdaeR/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            title="KLCLAB Robot Model"
            className="w-full h-full transform scale-[1.2] origin-center"
        ></iframe>
        
        {/* Overlay gradient at bottom to blend into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#EBE9E4] to-transparent pointer-events-none" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-between pointer-events-none">
        
        {/* Top Spacer */}
        <div className="flex-1" />

        {/* Spacer (Central text removed) */}
        <div className="flex-1" />

        {/* Bottom CTA */}
        <div className="flex-1 flex flex-col items-center justify-end pb-12 pointer-events-auto">
            <button className="group bg-[#FFD700] text-stone-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg flex items-center gap-2">
                AI와 사람 사이의 간극을 잇다.
                <span className="bg-white/20 rounded-full p-1 group-hover:bg-white/40 transition-colors">
                    <ChevronDown size={20} />
                </span>
            </button>
            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-stone-500">
                2026년 상반기 베타 출시
            </p>
        </div>
      </div>
    </div>
  );
};