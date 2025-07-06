
import {Sparkles,RotateCcw } from "lucide-react"
interface HeadLineProps {
    onRegenerateHeadline: () => void;
    isRegenerating: boolean;
    headline: string;
}

export const HeadLine = ({onRegenerateHeadline, isRegenerating, headline}: HeadLineProps) => {
    return (
         <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Sparkles className="w-6 h-6 text-purple-600 mr-2" />
              <h4 className="text-lg font-semibold text-gray-900">
                AI-Generated SEO Headline
              </h4>
            </div>
            <button
              onClick={onRegenerateHeadline}
              disabled={isRegenerating}
              className="inline-flex items-center px-4 py-2 bg-white border border-purple-200 rounded-lg text-purple-600 font-medium hover:bg-purple-50 hover:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              <RotateCcw
                className={`w-4 h-4 mr-2 ${
                  isRegenerating ? 'animate-spin' : ''
                }`}
              />
              {isRegenerating ? 'Generating...' : 'Regenerate'}
            </button>
          </div>
          <p className="text-gray-800 text-lg leading-relaxed italic">
            {headline}
          </p>
        </div>
    )
}