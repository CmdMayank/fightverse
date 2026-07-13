import { motion } from 'framer-motion'

function FighterCard({ name, nickname, record, image }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      className="bg-zinc-900 rounded-2xl overflow-hidden shadow-xl border border-zinc-800"
    >
      <img
        
      />

      <div className="p-6">
       <h2
         className="text-3xl tracking-wide"
         style={{ fontFamily: 'Bebas Neue, sans-serif' }}
      >
        {name}
</h2>
        <p className="text-red-500 mt-2 italic">{nickname}</p>
        <p className="text-gray-400 mt-3">{record}</p>
      </div>
    </motion.div>
  )
}

export default FighterCard