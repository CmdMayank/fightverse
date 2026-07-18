import { motion } from 'framer-motion'

function StatBar({ label, left, right }) {
  return (
    <div className="mb-8">
      <div className="flex justify-between text-sm uppercase tracking-wider mb-2 text-gray-300">
        <span>{label}</span>
      </div>

      <div className="grid grid-cols-2 gap-4 items-center">
        <div>
          <div className="text-right mb-2 font-semibold">{left}</div>
          <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${left * 10}%` }}
              transition={{ duration: 1 }}
              className="h-full bg-red-500"
            />
          </div>
        </div>

        <div>
          <div className="mb-2 font-semibold">{right}</div>
          <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${right * 10}%` }}
              transition={{ duration: 1 }}
              className="h-full bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function MatchupSection() {
  return (
    <section className="py-28 px-8 md:px-20 bg-zinc-950">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-red-500 uppercase tracking-[0.4em] text-center text-sm mb-6"
      >
        Legendary Matchup
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
       className="text-5xl md:text-7xl text-center mb-16 tracking-[0.08em]"
       style={{ fontFamily: 'Bebas Neue, sans-serif' }}
      >
        KHABIB <span className="text-red-500">VS</span> CHARLES
      </motion.h2>

      <div className="max-w-4xl mx-auto">
        <StatBar label="Striking" left={8} right={9} />
        <StatBar label="Grappling" left={10} right={8} />
        <StatBar label="Cardio" left={10} right={9} />
        <StatBar label="Finishing" left={7} right={10} />
      </div>
    </section>
  )
}

