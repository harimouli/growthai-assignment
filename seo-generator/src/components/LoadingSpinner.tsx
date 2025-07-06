import React from 'react';
import { BarChart3, TrendingUp, Sparkles } from 'lucide-react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        {/* Animated Icons */}
        <div className="relative mb-8">
          <div className="flex items-center justify-center space-x-4">
            <div className="animate-bounce" style={{ animationDelay: '0ms' }}>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="animate-bounce" style={{ animationDelay: '150ms' }}>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="animate-bounce" style={{ animationDelay: '300ms' }}>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Spinner */}
        <div className="relative mb-6">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-purple-600 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        </div>

        {/* Loading Text with Animation */}
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">
            Analyzing Your Business
          </h3>
          <div className="flex items-center justify-center space-x-1">
            <span className="text-gray-600">Processing data</span>
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
              <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
              <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></div>
            </div>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="mt-8 w-full max-w-md">
          <div className="space-y-3">
            <div className="flex items-center text-sm">
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                  <path d="M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z"/>
                </svg>
              </div>
              <span className="text-gray-700">Validating business information</span>
            </div>
            <div className="flex items-center text-sm">
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse mr-3"></div>
              <span className="text-gray-700">Generating analytics data</span>
            </div>
            <div className="flex items-center text-sm">
              <div className="w-4 h-4 bg-gray-300 rounded-full mr-3"></div>
              <span className="text-gray-500">Creating SEO recommendations</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;