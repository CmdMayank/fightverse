import { motion } from 'framer-motion'

function LegacySection() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-8 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black opacity-90"></div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center max-w-6xl"
      >
        <p className="text-red-500 uppercase tracking-[0.5em] text-sm mb-8">
          Legacy
        </p>

        <h2
          className="text-5xl md:text-8xl leading-tight tracking-[0.06em]"
          style={{ fontFamily: 'Bebas Neue, sans-serif' }}
        >
          EVERYBODY HAS A PLAN
          <br />
          UNTIL THEY GET
          <span className="text-red-500"> PUNCHED </span>
          IN THE MOUTH.
        </h2>

        <p className="mt-10 text-gray-400 text-lg">
          — Mike Tyson
        </p>
      </motion.div>
    </section>
  )
}

export default LegacySection