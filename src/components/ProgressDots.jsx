export default function ProgressDots({ total = 7, current = 0 }) {
  return (
    <div className="pointer-events-none fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`h-1.5 rounded-full transition-all duration-500 ${
            i <= current ? 'bg-yellow-300/80 w-6' : 'bg-white/20 w-2'
          }`}
        />
      ))}
    </div>
  )
}
