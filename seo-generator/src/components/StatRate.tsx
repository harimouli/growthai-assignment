



export const StatRate = ({rating}: {rating: number}) => {
    return (
        <div className="bg-green-50 rounded-xl p-4 border border-green-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">
                
                   {`${Math.round(rating * 20)}%`}
              </div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
    )
}