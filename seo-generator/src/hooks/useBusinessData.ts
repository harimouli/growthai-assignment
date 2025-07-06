import { useState } from 'react';
import { businessAPI, type BusinessData, type BusinessInput } from '../services/api';

export const useBusinessData = () => {
  const [data, setData] = useState<BusinessData | null>(null);
  const [businessInfo, setBusinessInfo] = useState<BusinessInput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBusinessData = async (input: BusinessInput) => {
    setIsLoading(true);
    setError("");
    
    try {
      const result = await businessAPI.getBusinessData(input);
      setData(result);
      setBusinessInfo(input);
    } catch  {
        setError("Something went wrong!")
    } finally {
      setIsLoading(false);
    }
  };

  const regenerateHeadline = async () => {
    if (!businessInfo) return;
    
    setIsRegenerating(true);
    setError(null);
    
    try {
      const result = await businessAPI.regenerateHeadline(
        businessInfo.name,
        businessInfo.location
      );
      
      setData(prevData => prevData ? {
        ...prevData,
        headline: result.headline
      } : null);
    } catch  {

      setError('Somthing went wrong!');
    } finally {
            setIsRegenerating(false);
    }
  };

  const reset = () => {
    setData(null);
    setBusinessInfo(null);
    setError(null);
  };

  return {
    data,
    businessInfo,
    isLoading,
    isRegenerating,
    error,
    fetchBusinessData,
    regenerateHeadline,
    reset,
  };
};