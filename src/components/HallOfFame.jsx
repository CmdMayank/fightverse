import { motion } from 'framer-motion'
import HallCard from './HallCard'

import mike from '../assets/mike.jpg'
import khabib from '../assets/khabib.jpg'
import conor from '../assets/conor.jpg'
import jones from '../assets/jones.jpg'
import silva from '../assets/silva.jpg'
import gsp from '../assets/gsp.jpg'

function HallOfFame() {
  return (
    <section className="py-28 px-8 md:px-20 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-20"
      >
        <p className="text-red-500 uppercase tracking-[0.5em] text-sm mb-6">
          Legends
        </p>

        <h2
          className="text-5xl md:text-8xl tracking-[0.08em]"
          style={{ fontFamily: 'Bebas Neue, sans-serif' }}
        >
          HALL OF IMMORTALS
        </h2>

        <p className="mt-8 text-gray-400 text-lg max-w-3xl mx-auto">
          The warriors who didn’t just fight — they shaped eras.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <HallCard
          name="Mike Tyson"
          nickname="Iron Mike"
          achievement="44 KO Wins"
          image={mike}
        />

        <HallCard
          name="Khabib"
          nickname="The Eagle"
          achievement="29-0 Undefeated"
          image={khabib}
        />

        <HallCard
          name="Jon Jones"
          nickname="Bones"
          achievement="GOAT Debate"
          image={jones}
        />

        <HallCard
          name="Anderson Silva"
          nickname="The Spider"
          achievement="Style Icon"
          image={silva}
        />

        <HallCard
          name="GSP"
          nickname="Rush"
          achievement="Elite Fight IQ"
          image={gsp}
        />

        <HallCard
          name="Conor McGregor"
          nickname="The Notorious"
          achievement="Double Champ"
          image={conor}
        />
      </div>
    </section>
  )
}

export default HallOfFame