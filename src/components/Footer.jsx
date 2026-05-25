import { motion } from 'framer-motion'

function Footer() {
  return (
    <footer className="relative bg-black py-28 px-8 border-t border-white/10 overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-black to-black"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-6xl mx-auto text-center"
      >
        <p className="text-red-500 uppercase tracking-[0.5em] text-sm mb-6">
          Final Bell
        </p>

        <h2
          className="text-5xl md:text-8xl tracking-[0.08em] leading-tight"
          style={{ fontFamily: 'Bebas Neue, sans-serif' }}
        >
          LEGENDS NEVER FADE
        </h2>

        <p className="mt-8 text-gray-400 text-lg">
          Built with obsession by <span className="text-white font-semibold">Mayank Sharma</span>
        </p>

        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6">

  <motion.a
    href="mailto:sharma.mayank1610@gmail.com"
    whileHover={{ scale: 1.08, y: -4 }}
    whileTap={{ scale: 0.95 }}
    className="px-6 py-3 border border-white/10 bg-white/5 backdrop-blur-md rounded-full text-gray-300 hover:text-red-500 hover:border-red-500/40 hover:shadow-lg hover:shadow-red-500/20 transition duration-300"
  >
    Email
  </motion.a>

  <motion.a
    href="https://www.instagram.com/aka.mayankkk/"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.08, y: -4 }}
    whileTap={{ scale: 0.95 }}
    className="px-6 py-3 border border-white/10 bg-white/5 backdrop-blur-md rounded-full text-gray-300 hover:text-red-500 hover:border-red-500/40 hover:shadow-lg hover:shadow-red-500/20 transition duration-300"
  >
    Instagram
  </motion.a>

  <motion.a
    href="https://www.linkedin.com/in/sharmamayankk/"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.08, y: -4 }}
    whileTap={{ scale: 0.95 }}
    className="px-6 py-3 border border-white/10 bg-white/5 backdrop-blur-md rounded-full text-gray-300 hover:text-red-500 hover:border-red-500/40 hover:shadow-lg hover:shadow-red-500/20 transition duration-300"
  >
    LinkedIn
  </motion.a>

</div>

        <p className="mt-16 text-zinc-600 text-sm tracking-wider">
          ENTERED THE OCTAGON. LEFT A LEGACY.
        </p>
      </motion.div>
    </footer>
  )
}

export default Footer
