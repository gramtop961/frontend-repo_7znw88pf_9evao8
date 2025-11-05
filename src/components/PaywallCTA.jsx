import { motion } from 'framer-motion'

export default function PaywallCTA({ onStartTrial, onContinue }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0 }}
      className="mt-8 grid gap-3 sm:grid-cols-2 max-w-xl"
    >
      <button
        type="button"
        onClick={onStartTrial}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 text-black font-semibold px-6 py-3 shadow-lg shadow-yellow-300/20 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-yellow-300/50"
      >
        <span className="text-lg">Start 7-Day Free Trial</span>
        <span aria-hidden>🔥</span>
      </button>
      <button
        type="button"
        onClick={onContinue}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 text-white px-6 py-3 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-sm"
      >
        <span className="text-lg">Continue Without Trial</span>
        <span aria-hidden>💪</span>
      </button>
    </motion.div>
  )
}
