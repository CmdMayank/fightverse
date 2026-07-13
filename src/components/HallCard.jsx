import { motion } from 'framer-motion'

function HallCard({ name, nickname, image, achievement }) {
  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 220 }}
      className="group relative h-full rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 shadow-xl"
    >
      <div className="overflow-hidden aspect-[4/5]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

      <div className="absolute bottom-0 p-6 z-10">
        <p className="text-red-500 uppercase tracking-[0.3em] text-xs mb-2">
          {achievement}
        </p>

        <h3
          className="text-3xl font-bold"
          style={{ fontFamily: 'Bebas Neue, sans-serif' }}
        >
          {name}
        </h3>

        <p className="text-gray-300 italic mt-2">
          {nickname}
        </p>
      </div>
    </motion.div>
  )
}

export default HallCard