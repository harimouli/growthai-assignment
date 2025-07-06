import { ContentHeader } from './ContentHeader';
import { GoogleRating } from './GoogleRating';
import { TotalReviews } from './TotalReviews';
import { HeadLine } from './HeadLine';
import { StatRate } from './StatRate';
import { DummyStats } from './DummyStats';
interface BusinessData {
  businessData: { headline: string; rating: number; reviews: number; };
  rating: number;
  reviews: number;
  headline: string;
}

interface BusinessDisplayProps {
  data: BusinessData;
  businessName: string;
  location: string;
  onRegenerateHeadline: () => void;
  isRegenerating: boolean;
}

const BusinessDisplay = ({data,businessName,onRegenerateHeadline,isRegenerating,}: BusinessDisplayProps) => {
    const {headline, rating, reviews} = data.businessData;



  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
     

       <ContentHeader businessName= {businessName}/>
      <div className="p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <GoogleRating rating={rating}/>
          <TotalReviews reviews={reviews}/>
        </div>

        
       
          <HeadLine isRegenerating = {isRegenerating} onRegenerateHeadline={onRegenerateHeadline} headline={headline}/>
       
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatRate rating={rating}/>
            <DummyStats />
        </div>
      </div>
    </div>
  );
};

export default BusinessDisplay;
