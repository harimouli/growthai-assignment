



export const DummyStats = () => {
    return (
        <>
        <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600 mb-1">
                #{Math.floor(Math.random() * 10) + 1}
              </div>
              <div className="text-sm text-gray-600">Local Ranking</div>
            </div>
          </div>

          <div className="bg-teal-50 rounded-xl p-4 border border-teal-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-600 mb-1">
                {Math.floor(Math.random() * 50) + 20}
              </div>
              <div className="text-sm text-gray-600">Monthly Searches</div>
            </div>
          </div>
        </>
    )
}