import { motion } from 'framer-motion'

const eras = [
  {
    year: '1986',
    title: 'TYSON ERA',
    description:
      'A teenage wrecking machine who made fear a legitimate fight strategy.',
  },
  {
    year: '2008',
    title: 'GSP ERA',
    description:
      'Precision, discipline, and elite fight IQ redefined championship excellence.',
  },
  {
    year: '2013',
    title: 'SILVA ERA',
    description:
      'Movement became art. Timing became a weapon. The matrix was real.',
  },
  {
    year: '2016',
    title: 'MCGREGOR ERA',
    description:
      'The spectacle exploded. Confidence became currency. Combat became mainstream.',
  },
  {
    year: '2020',
    title: 'KHABIB ERA',
    description:
      'Perfection through discipline. Dominance without compromise. 29-0 immortality.',
  },
]

function TimelineSection() {
  return (
    <section className="relative py-32 px-8 md:px-20 bg-zinc-950 overflow-hidden">

      <div className="text-center mb-24">
        <p className="text-red-500 uppercase tracking-[0.5em] text-sm mb-6">
          History
        </p>

        <h2
          className="text-5xl md:text-8xl tracking-[0.08em]"
          style={{ fontFamily: 'Bebas Neue, sans-serif' }}
        >
          ERAS OF GREATNESS
        </h2>

        <p className="mt-8 text-gray-400 text-lg max-w-3xl mx-auto">
          Every era had its ruler. Every ruler changed combat forever.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">

        <div className="absolute left-6 md:left-1/2 top-0 h-full w-[3px] bg-gradient-to-b from-red-500 via-red-400/30 to-transparent"></div>

        {eras.map((era, index) => (
          <motion.div
            key={era.year}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.8 }}
            className={`relative mb-28 flex ${
              index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
            }`}
          >
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-red-500 shadow-lg shadow-red-500/50 z-20"></div>

            <div className="ml-16 md:ml-0 md:w-[42%] relative bg-black/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden">

              <span className="absolute top-2 right-4 text-[6rem] md:text-[8rem] font-bold text-white/5 select-none">
                {era.year}
              </span>

              <p className="text-red-500 text-xl font-bold">
                {era.year}
              </p>

              <h3
                className="mt-4 text-4xl md:text-6xl"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                {era.title}
              </h3>

              <p className="mt-6 text-gray-300 text-lg leading-relaxed relative z-10">
                {era.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      
    </section>
  )
}

export default TimelineSection