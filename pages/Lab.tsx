import React, { useState, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Reveal } from '../components/Reveal';
import { Upload, Wand2, Image as ImageIcon, Loader2, Download, RefreshCw } from 'lucide-react';

export const Lab: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setSelectedImage(base64String);
        setGeneratedImage(null); // Reset generated image when new upload
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!selectedImage || !prompt) return;

    setIsLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = 'gemini-2.5-flash-image';
      
      // Extract base64 data (remove "data:image/png;base64," prefix)
      const base64Data = selectedImage.split(',')[1];
      const mimeType = selectedImage.split(';')[0].split(':')[1];

      const imagePart = {
        inlineData: {
          data: base64Data,
          mimeType: mimeType
        }
      };
      
      const textPart = {
        text: prompt
      };

      const response = await ai.models.generateContent({
        model: model,
        contents: { parts: [imagePart, textPart] },
        config: {
            // Using default configs for image generation/editing
        }
      });

      // Parse response for image
      if (response.candidates?.[0]?.content?.parts) {
        for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
                const generatedBase64 = `data:image/png;base64,${part.inlineData.data}`;
                setGeneratedImage(generatedBase64);
                break;
            }
        }
      }

    } catch (error) {
      console.error("Generation failed:", error);
      alert("이미지 생성 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSelectedImage(null);
    setGeneratedImage(null);
    setPrompt('');
  };

  return (
    <div className="pt-32 pb-24 bg-[#FDFCF8] min-h-screen">
      <section className="container mx-auto px-6">
        <Reveal width="100%">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4 block">KLCLAB Beta</span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-stone-900">
              상상을 현실로,<br/> 이미지 랩
            </h1>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Gemini 2.5 Flash Image의 강력한 성능을 경험해보세요. 사진을 업로드하고 원하는 변화를 글로 적으면, AI가 새로운 이미지를 창조합니다.
            </p>
          </div>
        </Reveal>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Reveal delay={100} width="100%">
            <div className="bg-white rounded-[2.5rem] p-8 border border-stone-200 shadow-sm h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Upload size={24} className="text-stone-400" />
                    원본 이미지
                </h3>
                
                <div 
                    className={`flex-1 min-h-[300px] border-2 border-dashed rounded-2xl flex items-center justify-center relative overflow-hidden transition-all ${selectedImage ? 'border-transparent' : 'border-stone-200 bg-stone-50 hover:bg-stone-100 cursor-pointer'}`}
                    onClick={() => !selectedImage && fileInputRef.current?.click()}
                >
                    {selectedImage ? (
                        <div className="relative w-full h-full group">
                             <img src={selectedImage} alt="Original" className="w-full h-full object-contain" />
                             <button 
                                onClick={(e) => { e.stopPropagation(); handleReset(); }}
                                className="absolute top-4 right-4 bg-white/90 p-2 rounded-full text-stone-600 hover:text-red-500 shadow-md opacity-0 group-hover:opacity-100 transition-all"
                             >
                                <RefreshCw size={20} />
                             </button>
                        </div>
                    ) : (
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-4 text-stone-400">
                                <ImageIcon size={32} />
                            </div>
                            <p className="text-stone-500 font-medium">클릭하여 이미지 업로드</p>
                            <p className="text-xs text-stone-400 mt-2">JPG, PNG supported</p>
                        </div>
                    )}
                    <input 
                        type="file" 
                        ref={fileInputRef} 
                        className="hidden" 
                        accept="image/*" 
                        onChange={handleImageUpload} 
                    />
                </div>

                <div className="mt-8">
                    <label className="block text-sm font-bold text-stone-700 mb-3">프롬프트 (명령어)</label>
                    <div className="flex gap-2">
                        <input 
                            type="text" 
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="예: 배경을 화성으로 바꿔줘, 수채화 스타일로 그려줘..." 
                            className="flex-1 bg-stone-50 border border-stone-200 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-400 transition-colors"
                            onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                        />
                        <button 
                            onClick={handleGenerate}
                            disabled={!selectedImage || !prompt || isLoading}
                            className={`px-6 rounded-xl font-bold flex items-center gap-2 transition-all ${
                                !selectedImage || !prompt || isLoading 
                                ? 'bg-stone-200 text-stone-400 cursor-not-allowed' 
                                : 'bg-stone-900 text-white hover:bg-orange-600'
                            }`}
                        >
                            {isLoading ? <Loader2 className="animate-spin" /> : <Wand2 size={20} />}
                            <span className="hidden md:inline">생성하기</span>
                        </button>
                    </div>
                </div>
            </div>
          </Reveal>

          {/* Output Section */}
          <Reveal delay={200} width="100%">
             <div className="bg-[#1C1917] rounded-[2.5rem] p-8 text-white shadow-xl h-full flex flex-col min-h-[500px]">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Wand2 size={24} className="text-orange-500" />
                    생성 결과
                </h3>
                
                <div className="flex-1 bg-white/5 rounded-2xl flex items-center justify-center relative overflow-hidden border border-white/10">
                    {isLoading ? (
                        <div className="text-center">
                            <Loader2 size={48} className="animate-spin text-orange-500 mx-auto mb-4" />
                            <p className="text-stone-400 animate-pulse">KLCLAB AI가 작업 중입니다...</p>
                        </div>
                    ) : generatedImage ? (
                        <img src={generatedImage} alt="Generated" className="w-full h-full object-contain" />
                    ) : (
                        <p className="text-stone-500 text-sm">이미지를 생성하면 여기에 표시됩니다.</p>
                    )}
                </div>

                {generatedImage && (
                    <div className="mt-6 flex justify-end">
                        <a 
                            href={generatedImage} 
                            download="klclab-generated.png"
                            className="bg-white text-stone-900 px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-stone-200 transition-colors"
                        >
                            <Download size={18} />
                            다운로드
                        </a>
                    </div>
                )}
             </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};