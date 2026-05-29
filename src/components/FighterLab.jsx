import { useState } from 'react'
import { motion } from 'framer-motion'

function FighterLab() {
  const [name, setName] = useState('')
  const [stats, setStats] = useState({
    power: 50,
    speed: 50,
    cardio: 50,
    fightIQ: 50,
    grappling: 50,
  })

  const updateStat = (key, amount) => {
    setStats((prev) => ({
      ...prev,
      [key]: Math.max(0, Math.min(100, prev[key] + amount)),
    }))
  }

  const overall = Math.round(
    Object.values(stats).reduce((a, b) => a + b, 0) / 5
  )

  const getArchetype = () => {
    if (stats.power > 85) return 'THE DESTROYER'
    if (stats.grappling > 85) return 'THE EAGLE'
    if (stats.speed > 85) return 'THE PHANTOM'
    if (stats.fightIQ > 85) return 'THE STRATEGIST'
    return 'THE TITAN'
  }

  const getLegend = () => {
    if (stats.power > 85) return 'Mike Tyson'
    if (stats.grappling > 85) return 'Khabib'
    if (stats.fightIQ > 85) return 'GSP'
    if (stats.speed > 85) return 'Anderson Silva'
    return 'Jon Jones'
  }

  const StatBar = ({ label, value, statKey }) => (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <span>{label}</span>
        <span>{value}</span>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => updateStat(statKey, -10)}
          className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-red-600"
        >
          -
        </button>

        <div className="flex-1 bg-zinc-800 rounded-full h-5 overflow-hidden">
          <div
            className="h-full bg-red-500"
            style={{ width: `${value}%` }}
          />
        </div>

        <button
          onClick={() => updateStat(statKey, 10)}
          className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-red-600"
        >
          +
        </button>
      </div>
    </div>
  )

  return (
    <section className="py-32 px-8 md:px-20 bg-black">
      <div className="text-center mb-16">
        <p className="text-red-500 uppercase tracking-[0.5em] text-sm">
          Interactive Lab
        </p>

        <h2
          className="text-5xl md:text-8xl"
          style={{ fontFamily: 'Bebas Neue, sans-serif' }}
        >
          FIGHTER LAB
        </h2>

        <p className="text-gray-400 mt-6">
          Forge your own combat legend.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <input
          type="text"
          placeholder="Enter Fighter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-12 p-4 rounded-xl bg-zinc-900 border border-white/10"
        />

        <StatBar label="POWER" value={stats.power} statKey="power" />
        <StatBar label="SPEED" value={stats.speed} statKey="speed" />
        <StatBar label="CARDIO" value={stats.cardio} statKey="cardio" />
        <StatBar label="FIGHT IQ" value={stats.fightIQ} statKey="fightIQ" />
        <StatBar label="GRAPPLING" value={stats.grappling} statKey="grappling" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 rounded-3xl border border-red-500/20 bg-zinc-950 p-10"
        >
          <h3
            className="text-4xl md:text-6xl"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            {name || 'UNNAMED FIGHTER'}
          </h3>

          <p className="text-red-500 mt-4 text-xl">
            {getArchetype()}
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400">Overall Rating</p>
              <p className="text-5xl font-bold">{overall}</p>
            </div>

            <div>
              <p className="text-gray-400">Closest Legend</p>
              <p className="text-3xl font-bold">{getLegend()}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FighterLab