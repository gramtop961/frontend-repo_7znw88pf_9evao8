import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import CinematicBackground from './components/CinematicBackground'
import OnboardingScreen from './components/OnboardingScreen'
import ProgressDots from './components/ProgressDots'
import PaywallCTA from './components/PaywallCTA'

function SceneFogSilhouette({ heartbeat = false }) {
  return (
    <div className="relative w-full h-full">
      {/* Fog layers */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      {/* Silhouette */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[44vh] w-[44vh] rounded-full bg-gradient-to-b from-white/10 to-white/0 blur-xl"
        animate={heartbeat ? { scale: [1, 1.03, 1] } : {}}
        transition={{ repeat: heartbeat ? Infinity : 0, duration: 2.4, ease: 'easeInOut' }}
      />
      {/* clearing mist */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2.4 }}
      />
    </div>
  )
}

function SceneDualMirror() {
  return (
    <div className="relative w-full h-full">
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-y-1/2 h-[46vh] w-[20vh] rounded-full bg-white/10 blur-xl"
        style={{ transform: 'translateX(-60%) translateY(-50%)' }}
        animate={{ opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-y-1/2 h-[46vh] w-[20vh] rounded-full bg-white/10 blur-xl"
        style={{ transform: 'translateX(-40%) translateY(-50%)' }}
        animate={{ opacity: [0.5, 0.25, 0.5] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </div>
  )
}

function SceneDistractions() {
  const flashes = ['Notifications', 'Junk Food', 'Endless Scroll', 'Snooze']
  return (
    <div className="relative w-full h-full">
      {flashes.map((f, i) => (
        <motion.div
          key={f}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-black/60 px-4 py-2 text-xs text-white/70 backdrop-blur"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ delay: i * 0.4, duration: 1.2, repeat: Infinity, repeatDelay: 2 }}
          style={{ top: `calc(50% + ${(i - 1.5) * 40}px)` }}
        >
          {f}
        </motion.div>
      ))}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </div>
  )
}

function SceneLightPath() {
  return (
    <div className="relative w-full h-full">
      <motion.div
        className="absolute left-1/2 top-1/2 h-[60vh] w-[2px] bg-gradient-to-b from-yellow-200 via-yellow-300/70 to-transparent"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        style={{ transform: 'translateX(-50%) translateY(-50%)' }}
        transition={{ duration: 2 }}
      />
    </div>
  )
}

function SceneAscend() {
  return (
    <div className="relative w-full h-full">
      <motion.div
        className="absolute left-1/2 bottom-[18vh] -translate-x-1/2 h-[46vh] w-[22vh] rounded-[12vh] bg-gradient-to-b from-yellow-200/30 to-transparent blur-xl"
        initial={{ opacity: 0.2, y: 20 }}
        animate={{ opacity: 0.6, y: -10 }}
        transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
      />
      <motion.div
        className="absolute left-1/2 bottom-[8vh] -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.2 }}
      >
        <div className="h-2 w-40 rounded-full bg-gradient-to-r from-transparent via-yellow-200/60 to-transparent blur-md" />
      </motion.div>
    </div>
  )
}

function ScenePaywall() {
  return (
    <div className="relative w-full h-full">
      <motion.div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(circle at 50% 40%, rgba(255,215,130,0.12), transparent 60%)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </div>
  )
}

function SceneCommitment() {
  return (
    <div className="relative w-full h-full">
      <motion.div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08), transparent 65%)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
    </div>
  )
}

function App() {
  const [step, setStep] = useState(0)

  const screens = useMemo(
    () => [
      {
        scene: <SceneFogSilhouette heartbeat />,
        lines: [
          "You’ve been surviving on autopilot.",
          "But deep down… you know you’re built for more.",
        ],
        cta: 'Begin the Ascent',
      },
      {
        scene: <SceneDualMirror />,
        lines: [
          'Every choice rewires you.',
          'Every day builds one of them.',
        ],
        cta: 'The Strong One',
      },
      {
        scene: <SceneDistractions />,
        lines: [
          'The enemy isn’t out there.',
          'It’s your own comfort and fear.',
        ],
        cta: 'I’ll Face Them',
      },
      {
        scene: <SceneLightPath />,
        lines: [
          'This journey won’t be easy.',
          'But discipline builds peace.',
          'Consistency builds power.',
        ],
        cta: 'I’m Ready to Begin',
      },
      {
        scene: <SceneAscend />,
        lines: [
          'In 45 days, your life can look completely different.',
          'If you move with purpose — starting now.',
        ],
        cta: 'Start My Transformation',
      },
      {
        scene: <ScenePaywall />,
        paywall: true,
      },
      {
        scene: <SceneCommitment />,
        lines: [
          'Make the quiet promise to yourself.',
          'Show up. Every day.',
        ],
        cta: 'Become the Warrior',
      },
    ],
    []
  )

  const total = screens.length
  const current = screens[step]

  const handleNext = () => {
    setStep((s) => (s + 1 < total ? s + 1 : 0))
  }

  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-hidden font-['Inter','Manrope','system-ui',sans-serif]">
      <CinematicBackground />

      {/* App brand */}
      <div className="fixed top-6 left-6 z-20 flex items-center gap-3">
        <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-lg shadow-yellow-400/30" />
        <span className="text-white/90 tracking-widest uppercase text-sm">Warriors Ascend</span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={step} className="relative">
          {!current.paywall ? (
            <OnboardingScreen
              lines={current.lines}
              ctaLabel={current.cta}
              onNext={handleNext}
              scene={current.scene}
            />
          ) : (
            <div className="relative z-10 flex min-h-screen w-full flex-col justify-center items-center px-6 sm:px-10 text-center">
              <div className="max-w-3xl mx-auto text-white/90">
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0 }}
                  className="text-2xl sm:text-4xl md:text-5xl font-semibold"
                >
                  <span className="bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                    Unlock the System That Builds the 1% Version of You
                  </span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, delay: 0.3 }}
                  className="mt-6 text-white/80 text-lg"
                >
                  Get daily challenges, reflection tools, and mindset systems to build unshakable discipline and inner peace.
                </motion.p>
                <PaywallCTA
                  onStartTrial={() => setStep((s) => Math.min(s + 1, total - 1))}
                  onContinue={() => setStep((s) => Math.min(s + 1, total - 1))}
                />
              </div>
              {current.scene}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <ProgressDots total={total} current={step} />

      {/* Subtle footer cue */}
      <div className="pointer-events-none fixed bottom-6 right-6 z-20 text-xs text-white/40">
        Slow. Intentional. Cinematic.
      </div>
    </div>
  )
}

export default App
