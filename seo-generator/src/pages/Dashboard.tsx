import { BarChart3 } from 'lucide-react';
import BusinessForm from '../components/BusinessForm';
import BusinessDisplay from '../components/BusinessDisplay';
import LoadingSpinner from '../components/LoadingSpinner';
import { useBusinessData } from '../hooks/useBusinessData';
import { Header } from '../components/Header';

export const Dashboard = () => {
    const {
        data,
        businessInfo,
        isLoading,
        isRegenerating,
        error,
        fetchBusinessData,
        regenerateHeadline,
        reset,
      } = useBusinessData();
    
    return (
  <div className="h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">


        <Header data={data ?? undefined} reset={reset} />
       <main className="max-w-6xl mx-auto px-4 py-3 h-[calc(100vh-52px)]">
                {error && (
                <p className="mb-2 text-xs bg-red-100 text-red-700 border border-red-300 px-2 py-1 rounded">
                    {error}
                </p>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <div className="lg:self-start">
                    <BusinessForm onSubmit={fetchBusinessData} isLoading={isLoading} />
                </div>

                <div>
                    {isLoading ? (
                    <LoadingSpinner />
                    ) : data && businessInfo ? (
                    <BusinessDisplay
                        data={{ businessData: data }}
                        businessName={businessInfo.name}
                        location={businessInfo.location}
                        onRegenerateHeadline={regenerateHeadline}
                        isRegenerating={isRegenerating}
                    />
                    ) : (
                    <div className="bg-white border border-gray-100 rounded p-3 text-center">
                        <BarChart3 className="w-5 h-5 text-gray-400 mx-auto mb-1.5" />
                        <h3 className="text-sm font-medium text-gray-900 mb-0.5">
                        Ready to Analyze
                        </h3>
                        <p className="text-xs text-gray-600">
                        Enter business info to get started.
                        </p>
                    </div>
                    )}
                </div>
                </div>
  </main>
</div>
    )
}