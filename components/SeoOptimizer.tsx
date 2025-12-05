import React, { useEffect, useState } from 'react';
import { generateSeoInsights } from '../services/geminiService';
import { SeoResult } from '../types';

const SeoOptimizer: React.FC = () => {
  const [data, setData] = useState<SeoResult | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Auto-fetch on mount
    const fetchSeo = async () => {
        setLoading(true);
        const result = await generateSeoInsights();
        setData(result);
        
        // Dynamic Title Update based on AI summary
        if (result.summary) {
            document.title = `EM XR | ${result.summary}`;
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) metaDesc.setAttribute('content', result.summary);
        }
        setLoading(false);
    };
    
    fetchSeo();
  }, []);

  return (
    <section className="bg-brand-light py-10 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Live Market Insights (Google Search Grounding)</h3>
            </div>
            
            {loading ? (
                <div className="animate-pulse space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
            ) : data ? (
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-bold text-slate-800 mb-2">Актуальные запросы в нише XR:</h4>
                        <div className="flex flex-wrap gap-2">
                            {data.keywords.map((kw, i) => (
                                <span key={i} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                                    {kw}
                                </span>
                            ))}
                        </div>
                    </div>
                    {data.sources.length > 0 && (
                        <div>
                             <h4 className="font-bold text-slate-800 mb-2">Источники трендов:</h4>
                             <ul className="text-xs text-gray-500 space-y-1">
                                {data.sources.slice(0, 3).map((s, i) => (
                                    <li key={i} className="truncate">
                                        <a href={s.uri} target="_blank" rel="noreferrer" className="hover:text-[#A053FF] hover:underline">
                                            {s.title}
                                        </a>
                                    </li>
                                ))}
                             </ul>
                        </div>
                    )}
                </div>
            ) : (
                <div className="text-gray-400 text-sm">Загрузка аналитики...</div>
            )}
        </div>
    </section>
  );
};

export default SeoOptimizer;