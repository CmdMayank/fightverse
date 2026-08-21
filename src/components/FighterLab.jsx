import { useState } from 'react'
import { motion } from 'framer-motion'

const StatBar = ({ label, value, statKey, updateStat, pointsRemaining }) => (
  <div className="mb-8">
    <div className="flex justify-between mb-3">
      <span className="tracking-wider">{label}</span>
      <span className="font-bold">{value}</span>
    </div>

    <div className="flex items-center gap-4">
      <button
        onClick={() => updateStat(statKey, -10)}
        className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-red-600 transition"
      >
        -
      </button>

      <div className="flex-1 bg-zinc-800 rounded-full h-5 overflow-hidden">
        <div
          className="h-full bg-red-500 transition-all duration-300"
          style={{ width: `${value}%` }}
        />
      </div>

      <button
        disabled={pointsRemaining <= 0}
        onClick={() => updateStat(statKey, 10)}
        className={`w-10 h-10 rounded-full transition ${
          pointsRemaining <= 0
            ? 'bg-zinc-700 cursor-not-allowed'
            : 'bg-zinc-800 hover:bg-red-600'
        }`}
      >
        +
      </button>
    </div>
  </div>
)

function FighterLab() {
 const MAX_POINTS = 350

  const [name, setName] = useState('')

  const [stats, setStats] = useState({
    power: 70,
    speed: 70,
    cardio: 70,
    fightIQ: 70,
    grappling: 70,
  })

  const pointsUsed =
    stats.power +
    stats.speed +
    stats.cardio +
    stats.fightIQ +
    stats.grappling

  const pointsRemaining = MAX_POINTS - pointsUsed

  const updateStat = (key, amount) => {
    setStats((prev) => {
      const newValue = prev[key] + amount

      if (newValue < 0 || newValue > 100) {
        return prev
      }

      const newStats = {
        ...prev,
        [key]: newValue,
      }

      const total =
        newStats.power +
        newStats.speed +
        newStats.cardio +
        newStats.fightIQ +
        newStats.grappling

      if (total > MAX_POINTS) {
        return prev
      }

      return newStats
    })
  }

  const overall = Math.round(
    Object.values(stats).reduce((a, b) => a + b, 0) / 5
  )

  const getStyle = () => {
    if (stats.grappling >= 90) return 'Submission Specialist'
    if (stats.power >= 90) return 'Knockout Artist'
    if (stats.speed >= 90) return 'Counter Striker'
    if (stats.fightIQ >= 90) return 'Tactical Master'
    if (stats.cardio >= 90) return 'Pressure Fighter'

    return 'Balanced Champion'
  }

  const getLegend = () => {
    if (stats.power >= 90) return 'Mike Tyson'
    if (stats.grappling >= 90) return 'Khabib'
    if (stats.fightIQ >= 90) return 'GSP'
    if (stats.speed >= 90) return 'Anderson Silva'

    return 'Jon Jones'
  }



  return (
    <section className="py-32 px-8 md:px-20 bg-zinc-950">
      <div className="text-center mb-20">
        <p className="text-red-500 uppercase tracking-[0.5em] text-sm mb-4">
          Interactive Experience
        </p>

        <h2
          className="text-5xl md:text-8xl"
          style={{ fontFamily: 'Bebas Neue, sans-serif' }}
        >
          FIGHTER LAB
        </h2>

        <p className="mt-6 text-gray-400">
          Forge your ultimate combat athlete.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Fighter Name"
          className="w-full mb-12 p-4 rounded-2xl bg-black border border-white/10 outline-none"
        />

        <div className="grid md:grid-cols-3 gap-6 mb-14">

          <div className="bg-black rounded-2xl p-6 border border-white/10">
            <p className="text-gray-400">Draft Budget</p>
            <p className="text-4xl font-bold">{MAX_POINTS}</p>
          </div>

          <div className="bg-black rounded-2xl p-6 border border-white/10">
            <p className="text-gray-400">Points Used</p>
            <p className="text-4xl font-bold">{pointsUsed}</p>
          </div>

          <div className="bg-black rounded-2xl p-6 border border-white/10">
            <p className="text-gray-400">Remaining</p>

            <p
              className={`text-4xl font-bold ${
                pointsRemaining <= 30
                  ? 'text-red-500'
                  : 'text-green-500'
              }`}
            >
              {pointsRemaining}
            </p>
          </div>

        </div>

        {pointsRemaining === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-12 text-green-500 text-2xl font-bold"
          >
            ⚔ READY TO FIGHT
          </motion.div>
        )}

        <StatBar
          label="POWER"
          value={stats.power}
          statKey="power"
          updateStat={updateStat}
          pointsRemaining={pointsRemaining}
        />

        <StatBar
          label="SPEED"
          value={stats.speed}
          statKey="speed"
          updateStat={updateStat}
          pointsRemaining={pointsRemaining}
        />

        <StatBar
          label="CARDIO"
          value={stats.cardio}
          statKey="cardio"
          updateStat={updateStat}
          pointsRemaining={pointsRemaining}
        />

        <StatBar
          label="FIGHT IQ"
          value={stats.fightIQ}
          statKey="fightIQ"
          updateStat={updateStat}
          pointsRemaining={pointsRemaining}
        />

        <StatBar
          label="GRAPPLING"
          value={stats.grappling}
          statKey="grappling"
          updateStat={updateStat}
          pointsRemaining={pointsRemaining}
        />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-black border border-red-500/20 rounded-3xl p-10"
        >
          <h3
            className="text-4xl md:text-6xl"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            {name || 'UNNAMED FIGHTER'}
          </h3>

          <p className="text-red-500 text-2xl mt-4">
            {getStyle()}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-10">

            <div>
              <p className="text-gray-400 mb-2">
                Overall Rating
              </p>

              <p className="text-6xl font-bold">
                {overall}
              </p>
            </div>

            <div>
              <p className="text-gray-400 mb-2">
                Closest Legend
              </p>

              <p className="text-3xl font-bold">
                {getLegend()}
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FighterLab