export default function ScheduleItem({ item }) {
  const isBreak = !item.speaker

  return (
    <div className={`p-6 rounded-lg flex items-center gap-6 ${
      isBreak
        ? 'bg-surface border-l-4 border-muted'
        : 'bg-panel shadow hover:shadow-lg transition border-l-4 border-primary'
    }`}>
      <div className="flex-shrink-0 min-w-[100px]">
        <span className="text-2xl font-bold text-primary">{item.time}</span>
      </div>

      <div className="flex-grow">
        <h3 className={`text-xl font-bold ${isBreak ? 'text-muted' : 'text-theme'}`}>
          {item.topic}
        </h3>
        {item.speaker && (
          <p className="text-muted mt-1">
            🎤 {item.speaker}
          </p>
        )}
      </div>

      {!isBreak && (
        <div className="flex-shrink-0">
          <button className="btn-primary">
            Details
          </button>
        </div>
      )}
    </div>
  )
}
