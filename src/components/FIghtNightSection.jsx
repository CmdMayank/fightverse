import { motion } from 'framer-motion'
import leftFighter from '../assets/fightleft.jpg'
import rightFighter from '../assets/fightright.jpg'

function FightNightSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* LEFT IMAGE */}
      <img
        src={leftFighter}
        alt="Khabib"
        className="absolute left-0 top-0 w-1/2 h-full object-cover"
      />

      {/* RIGHT IMAGE */}
      <img
        src={rightFighter}
        alt="Charles"
        className="absolute right-0 top-0 w-1/2 h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* CENTER CONTENT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-6xl px-8"
      >
        <p className="text-red-500 uppercase tracking-[0.5em] text-sm mb-6">
          Main Event
        </p>

        <h2
          className="text-5xl md:text-8xl tracking-[0.08em] leading-tight"
          style={{ fontFamily: 'Bebas Neue, sans-serif' }}
        >
          FIGHT NIGHT 302
        </h2>

        <p className="mt-8 text-3xl md:text-6xl font-bold">
          KHABIB <span className="text-red-500">VS</span> CHARLES
        </p>

        <p className="mt-8 text-gray-300 text-lg md:text-xl">
          Legacy. Violence. Discipline. Chaos.
        </p>

        <motion.button
          whileHover={{ scale: 1.08, y: -4 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 px-10 py-5 rounded-full bg-red-600 hover:bg-red-700 text-white text-lg font-semibold shadow-xl shadow-red-600/30 transition"
        >
          Watch Trailer
        </motion.button>
      </motion.div>
    </section>
  )
}

export default FightNightSection