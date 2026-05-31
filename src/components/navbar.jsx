import { useState } from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

function Navbar() {
  const [showDeveloper, setShowDeveloper] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        {/* Logo */}
        <h1
          className="text-3xl tracking-[0.15em] text-red-500"
          style={{ fontFamily: 'Bebas Neue, sans-serif' }}
        >
          FIGHTVERSE
        </h1>

        {/* Navigation */}
        <div className="flex items-center gap-10 text-sm uppercase tracking-[0.15em]">

          <button className="hover:text-red-500 transition duration-300">
            Hall Of Fame
          </button>

          <button className="hover:text-red-500 transition duration-300">
            Timeline
          </button>

          <button className="hover:text-red-500 transition duration-300">
            Dream Lab
          </button>

          <button className="hover:text-red-500 transition duration-300">
            Fighter Lab
          </button>

        </div>

        {/* Developer Button */}
        <div className="relative">

          <button
            onClick={() => setShowDeveloper(!showDeveloper)}
            className="
              px-5 py-2
              rounded-full
              border border-red-500/40
              bg-red-500/5
              hover:bg-red-500/10
              hover:border-red-500
              transition-all duration-300
            "
          >
            Developer
          </button>

          {showDeveloper && (
            <div
              className="
                absolute
                top-14
                right-0
                w-72
                rounded-3xl
                border border-white/10
                bg-zinc-950/95
                backdrop-blur-xl
                shadow-2xl
                p-6
              "
            >
              <p className="text-red-500 text-xs tracking-[0.3em] uppercase">
                Built By
              </p>

              <h3
                className="text-3xl mt-2"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                MAYANK SHARMA
              </h3>

              <p className="text-gray-400 mt-2 text-sm">
                If this website crashes,
                <br />
               it was probably a feature.
                <br />
               If it works,
               it was definitely intentional.
              </p>

              <div className="mt-6 flex gap-4">

                <a
                  href="https://github.com/CmdMayank"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-12 h-12
                    rounded-full
                    flex items-center justify-center
                    bg-zinc-900
                    hover:bg-red-600
                    transition
                  "
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/sharmamayankk/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-12 h-12
                    rounded-full
                    flex items-center justify-center
                    bg-zinc-900
                    hover:bg-red-600
                    transition
                  "
                >
                  <FaLinkedin size={20} />
                </a>

                <a
                  href="https://www.instagram.com/aka.mayankkk/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-12 h-12
                    rounded-full
                    flex items-center justify-center
                    bg-zinc-900
                    hover:bg-red-600
                    transition
                  "
                >
                  <FaInstagram size={20} />
                </a>

              </div>
            </div>
          )}

        </div>

      </div>
    </nav>
  )
}

export default Navbar