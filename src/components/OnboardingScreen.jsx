import { motion } from 'framer-motion'

export default function OnboardingScreen({ lines = [], ctaLabel, onNext, scene, align = 'center' }) {
  const alignMap = {
    center: 'items-center text-center',
    left: 'items-start text-left',
  }

  return (
    <div className={`relative z-10 flex min-h-screen w-full flex-col justify-center ${alignMap[align] || alignMap.center} px-6 sm:px-10`}
      role="region" aria-label="Onboarding screen">
      {/* Scene visuals */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {scene}
      </div>

      {/* Copy block */}
      <div className="max-w-3xl mx-auto text-white/90">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: 'easeOut' }}
          className="space-y-4 sm:space-y-5"
        >
          {lines.map((l, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.4, duration: 1.1 }}
              className="text-xl sm:text-2xl md:text-[28px] leading-snug font-medium tracking-tight text-white"
            >
              <span className="bg-gradient-to-r from-white via-white to-yellow-200 bg-clip-text text-transparent">
                {l}
              </span>
            </motion.p>
          ))}
        </motion.div>

        {ctaLabel && (
          <motion.button
            type="button"
            onClick={onNext}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 + lines.length * 0.35, duration: 0.8 }}
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-yellow-300/40 bg-white/5 px-6 py-3 text-base sm:text-lg text-yellow-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-300/40 hover:bg-white/10 backdrop-blur-md"
          >
            {ctaLabel}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7 7a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 1 1-1.06-1.06L18.94 12l-5.97-5.97a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M3 12a.75.75 0 0 1 .75-.75h16.19a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Z" clipRule="evenodd" />
            </svg>
          </motion.button>
        )}
      </div>
    </div>
  )
}
