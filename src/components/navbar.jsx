function Navbar({ scrollToFighters }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-900/40 backdrop-blur-xl border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
       <h1
         className="text-3xl tracking-[0.15em] text-red-500"
         style={{ fontFamily: 'Bebas Neue, sans-serif' }}
        >
          FIGHTVERSE
        </h1>

        <div className="flex gap-8 text-sm uppercase tracking-wider">
          <button
            onClick={scrollToFighters}
            className="hover:text-red-500 transition duration-300"
          >
            Fighters
          </button>

          <button className="hover:text-red-500 transition duration-300">
            Matchups
          </button>

          <button className="hover:text-red-500 transition duration-300">
            Legacy
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar