export default function ScheduleItem({ item }) {
  const isBreak = !item.speaker

  return (
    <div className={`p-6 rounded-lg flex items-center gap-6 ${
      isBreak 
        ? 'bg-gray-100 border-l-4 border-gray-400' 
        : 'bg-white shadow hover:shadow-lg transition border-l-4 border-blue-500'
    }`}>
      <div className="flex-shrink-0 min-w-[100px]">
        <span className="text-2xl font-bold text-blue-600">{item.time}</span>
      </div>
      
      <div className="flex-grow">
        <h3 className={`text-xl font-bold ${isBreak ? 'text-gray-600' : 'text-gray-900'}`}>
          {item.topic}
        </h3>
        {item.speaker && (
          <p className="text-gray-600 mt-1">
            🎤 {item.speaker}
          </p>
        )}
      </div>

      {!isBreak && (
        <div className="flex-shrink-0">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Details
          </button>
        </div>
      )}
    </div>
  )
}
