import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const TailorButton = ({ onClick, isLoading, disabled }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
        relative overflow-hidden group w-full sm:w-auto min-w-[240px]
        px-8 py-4 rounded-2xl font-bold text-lg
        transition-all duration-300 transform
        flex items-center justify-center gap-3
        ${disabled
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
                    : 'bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 text-white shadow-xl shadow-indigo-200 hover:shadow-2xl hover:shadow-indigo-300 hover:-translate-y-1 hover:scale-[1.02] bg-[length:200%_auto] animate-gradient'
                }
      `}
        >
            {isLoading ? (
                <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Optimizing with AI...</span>
                </>
            ) : (
                <>
                    <Sparkles className={`w-5 h-5 ${!disabled && 'group-hover:animate-pulse'}`} />
                    <span>Tailor My Resume</span>
                    {!disabled && (
                        <ArrowRight className="w-5 h-5 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    )}
                </>
            )}
        </button>
    );
};

export default TailorButton;
