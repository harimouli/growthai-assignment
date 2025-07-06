
import {MessageSquare} from "lucide-react"

export const TotalReviews = ({reviews}: {reviews: number}) => {
    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
            <div className="flex items-center mb-2">
              <MessageSquare className="w-6 h-6 text-blue-600 mr-2" />
              <span className="text-2xl font-bold text-gray-900">
                {reviews}
              </span>
            </div>
            <p className="text-sm text-gray-600">Total Reviews</p>
          </div>
    )
}