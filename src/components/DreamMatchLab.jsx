import { useState } from 'react'
import { motion } from 'framer-motion'

import mike from '../assets/mike.jpg'
import khabib from '../assets/khabib.jpg'
import conor from '../assets/conor.jpg'
import charles from '../assets/charles.jpg'
import jones from '../assets/jones.jpg'
import gsp from '../assets/gsp.jpg'
import silva from '../assets/silva.jpg'

const fighters = [
  {
    name: 'Mike Tyson',
    image: mike,
    stats: {
      striking: 98,
      grappling: 20,
      cardio: 82,
      fightIQ: 84,
      durability: 91,
    },
  },
  {
    name: 'Khabib',
    image: khabib,
    stats: {
      striking: 80,
      grappling: 98,
      cardio: 94,
      fightIQ: 92,
      durability: 90,
    },
  },
  {
    name: 'Conor',
    image: conor,
    stats: {
      striking: 93,
      grappling: 65,
      cardio: 76,
      fightIQ: 88,
      durability: 79,
    },
  },
  {
    name: 'Charles',
    image: charles,
    stats: {
      striking: 86,
      grappling: 95,
      cardio: 84,
      fightIQ: 85,
      durability: 82,
    },
  },
  {
    name: 'Jon Jones',
    image: jones,
    stats: {
      striking: 89,
      grappling: 97,
      cardio: 93,
      fightIQ: 98,
      durability: 94,
    },
  },
  {
    name: 'GSP',
    image: gsp,
    stats: {
      striking: 88,
      grappling: 94,
      cardio: 95,
      fightIQ: 96,
      durability: 89,
    },
  },
  {
    name: 'Silva',
    image: silva,
    stats: {
      striking: 96,
      grappling: 82,
      cardio: 87,
      fightIQ: 91,
      durability: 84,
    },
  },
]

function calculateWinner(a, b) {
  const totalA = Object.values(a.stats).reduce((sum, val) => sum + val, 0)
  const totalB = Object.values(b.stats).reduce((sum, val) => sum + val, 0)

  if (totalA > totalB) {
    return `${a.name} survives the war and emerges victorious.`
  }

  if (totalB > totalA) {
    return `${b.name} outclasses the opponent and takes the win.`
  }

  return 'This matchup is pure chaos. Too close to call.'
}

function FighterSelector({ selected, setSelected, title }) {
  return (
    <div>
      <h3 className="text-2xl md:text-4xl mb-8 text-center font-bold">
        {title}
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {fighters.map((fighter) => (
          <motion.div
            key={fighter.name}
            whileHover={{ scale: 1.05, y: -6 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setSelected(fighter)}
            className={`cursor-pointer rounded-3xl overflow-hidden border transition ${
              selected?.name === fighter.name
                ? 'border-red-500 shadow-xl shadow-red-500/30'
                : 'border-white/10'
            }`}
          >
            <img
              src={fighter.image}
              alt={fighter.name}
              className="w-full h-56 object-cover object-top"
            />

            <div className="p-4 bg-zinc-950">
              <p
                className="text-center text-xl"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                {fighter.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function StatRow({ label, a, b }) {
  return (
    <div className="mb-6">
      <p className="mb-2 uppercase text-sm tracking-[0.3em] text-gray-400">
        {label}
      </p>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="bg-zinc-800 rounded-full h-4 overflow-hidden">
            <div
              className="bg-red-500 h-full"
              style={{ width: `${a}%` }}
            />
          </div>
          <p className="mt-2 text-center">{a}</p>
        </div>

        <div>
          <div className="bg-zinc-800 rounded-full h-4 overflow-hidden">
            <div
              className="bg-white h-full"
              style={{ width: `${b}%` }}
            />
          </div>
          <p className="mt-2 text-center">{b}</p>
        </div>
      </div>
    </div>
  )
}

function DreamMatchLab() {
  const [fighterA, setFighterA] = useState(null)
  const [fighterB, setFighterB] = useState(null)

  return (
    <section className="py-32 px-8 md:px-20 bg-zinc-950">
      <div className="text-center mb-20">
        <p className="text-red-500 uppercase tracking-[0.5em] text-sm mb-6">
          Interactive Experience
        </p>

        <h2
          className="text-5xl md:text-8xl tracking-[0.08em]"
          style={{ fontFamily: 'Bebas Neue, sans-serif' }}
        >
          DREAM MATCH LAB
        </h2>

        <p className="mt-8 text-gray-400 text-lg max-w-3xl mx-auto">
          Simulate impossible fights. Compare legends. Settle debates.
        </p>
      </div>

      <FighterSelector
        title="Choose Challenger One"
        selected={fighterA}
        setSelected={setFighterA}
      />

      <div className="my-20" />

      <FighterSelector
        title="Choose Challenger Two"
        selected={fighterB}
        setSelected={setFighterB}
      />

      {fighterA && fighterB && fighterA.name !== fighterB.name && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-24 max-w-5xl mx-auto bg-black border border-white/10 rounded-3xl p-10"
        >
          <h3
            className="text-4xl md:text-7xl text-center"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            {fighterA.name}
            <span className="text-red-500"> VS </span>
            {fighterB.name}
          </h3>

          <div className="mt-12">
            <StatRow
              label="Striking"
              a={fighterA.stats.striking}
              b={fighterB.stats.striking}
            />

            <StatRow
              label="Grappling"
              a={fighterA.stats.grappling}
              b={fighterB.stats.grappling}
            />

            <StatRow
              label="Cardio"
              a={fighterA.stats.cardio}
              b={fighterB.stats.cardio}
            />

            <StatRow
              label="Fight IQ"
              a={fighterA.stats.fightIQ}
              b={fighterB.stats.fightIQ}
            />

            <StatRow
              label="Durability"
              a={fighterA.stats.durability}
              b={fighterB.stats.durability}
            />
          </div>

          <div className="mt-14 p-8 rounded-3xl bg-zinc-950 border border-red-500/20">
            <p className="text-red-500 uppercase tracking-[0.3em] text-sm mb-4">
              FightVerse Verdict
            </p>

            <p className="text-2xl md:text-3xl font-semibold leading-relaxed">
              {calculateWinner(fighterA, fighterB)}
            </p>
          </div>
        </motion.div>
      )}
    </section>
  )
}

export default DreamMatchLab