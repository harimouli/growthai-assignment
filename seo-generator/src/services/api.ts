import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;
console.log(API_URL);
export interface BusinessData {
  rating: number;
  reviews: number;
  headline: string;
}

export interface BusinessInput {
  name: string;
  location: string;
}

export const businessAPI = {
  async getBusinessData(data: BusinessInput): Promise<BusinessData> {
    try {
      const response = await axios.post<BusinessData>(`${API_URL}/business-data`, data);
      return response.data;
    } catch  {
      throw new Error('Failed to fetch business data');
    }
  },

  async regenerateHeadline(name: string, location: string): Promise<{ headline: string }> {
    try {
      const response = await axios.get<{ headline: string }>(`${API_URL}/regenerate-headline`, {
        params: { name, location },
      });
      return response.data;
    } catch {
      
      throw new Error('Failed to regenerate headline');
    }
  },

  async healthCheck(): Promise<{ status: string; timestamp: string }> {
    try {
      const response = await axios.get<{ status: string; timestamp: string }>(`${API_URL}/health`);
      return response.data;
    } catch  {
     
      throw new Error('Health check failed');
    }
  },
};
