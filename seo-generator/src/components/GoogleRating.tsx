import { Star } from "lucide-react"
const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star
          key="half"
          className="w-5 h-5 text-yellow-400 fill-current opacity-50"
        />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
      );
    }

    return stars;
  };


export const GoogleRating = ({rating}: {rating: number}) =>  {
    return (
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
            <div className="flex items-center mb-2">
              <div className="flex items-center">
                {renderStars(rating)}
              </div>
              <span className="ml-2 text-2xl font-bold text-gray-900">
                {rating}
              </span>
            </div>
            <p className="text-sm text-gray-600">Google Rating</p>
          </div>
    )
}