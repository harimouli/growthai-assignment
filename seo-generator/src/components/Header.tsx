
import { TrendingUp, BarChart3, RotateCcw } from 'lucide-react';
import { type BusinessData } from '../services/api';

type HeaderProps = {
  data?: BusinessData;
  reset: () => void;
};

export const Header = ({data, reset}: HeaderProps) => {
    return (
        <header className="bg-white border-b border-gray-100">
    <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-7 h-7 flex items-center justify-center bg-blue-600 rounded">
          <TrendingUp className="w-4 h-4 text-white" />
        </div>
        <div>
          <h1 className="text-base font-semibold text-gray-900 leading-tight">
            Business Dashboard
          </h1>
          <p className="text-xs text-gray-500">Powered by GrowthProAI</p>
        </div>
      </div>
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <div className="flex items-center space-x-1">
          <BarChart3 className="w-4 h-4" />
          <span>Analytics</span>
        </div>
        {data && (
          <button
            onClick={reset}
            className="flex items-center px-2.5 py-1 text-xs border border-gray-300 rounded text-gray-700 bg-white hover:bg-gray-50"
          >
            <RotateCcw className="w-3.5 h-3.5 mr-1" />
            New
          </button>
        )}
      </div>
    </div>
  </header>

    )
}