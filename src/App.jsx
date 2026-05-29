import fighterImage from './assets/fighter.jpg'
import mike from './assets/mike.jpg'
import khabib from './assets/khabib.jpg'
import charles from './assets/charles.jpg'
import conor from './assets/conor.jpg'
import { useRef } from 'react'
import Navbar from './components/Navbar'
import MatchupSection from './components/MatchupSection'
import LegacySection from './components/LegacySection'
import Footer from './components/Footer'
import FightNightSection from './components/FightNightSection'
import HallOfFame from './components/HallOfFame'
import TimelineSection from './components/TimelineSection'
import EventDashboard from './components/EventDashboard'
import DreamMatchLab from './components/DreamMatchLab'
import FighterLab from './components/FighterLab'

import { motion } from 'framer-motion'
import FighterCard from './components/FighterCard'


function App() {
  const fightersRef = useRef(null)

const scrollToFighters = () => {
  fightersRef.current?.scrollIntoView({
    behavior: 'smooth',
  })
}
  return (
    <div className="bg-black text-white">
      <Navbar scrollToFighters={scrollToFighters} />

      {/* HERO SECTION */}
      <section
        className="h-screen bg-cover bg-center relative flex flex-col justify-center items-center text-center px-6"
        style={{ backgroundImage: `url(${fighterImage})` }}
      >
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]"></div>

        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-red-500 tracking-[0.4em] uppercase text-sm mb-4"
          >
            Enter The Octagon
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl tracking-[0.08em]"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            FIGHTVERSE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-6 max-w-2xl text-gray-300 text-lg md:text-xl"
          >
            Where warriors are forged, legends collide, and every second feels cinematic.
          </motion.p>

          <motion.button
            onClick={scrollToFighters}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="mt-10 px-8 py-4 bg-red-600 hover:bg-red-700 transition duration-300 rounded-full text-lg font-semibold shadow-lg shadow-red-600/30 hover:scale-105 active:scale-95"
          >
            Explore Fighters
          </motion.button>
        </div>
      </section>

      {/* FIGHTERS SECTION */}
      <section
  ref={fightersRef}
  className="py-24 px-8 md:px-20"
>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured Fighters
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FighterCard
            name="Mike Tyson"
            nickname="The Baddest Man on the Planet"
            record="50 Wins • 44 KO"
            image={mike}
          />

          <FighterCard
            name="Khabib Nurmagomedov"
            nickname="The Eagle"
            record="29 Wins • Undefeated"
            image={khabib}
          />

          <FighterCard
            name="Charles Oliveira"
            nickname="Do Bronx"
            record="35 Wins • Submission King"
            image={charles}
          />

          <FighterCard
            name="Conor McGregor"
            nickname="The Notorious"
            record="22 Wins • Double Champ"
            image={conor}
          />
        </div>
      </section>
      <HallOfFame />
      <TimelineSection />
      <EventDashboard />
      <DreamMatchLab />
      <FighterLab />
      <LegacySection />
      <MatchupSection />
      <FightNightSection />
      <Footer />

    </div>
  )
}

export default App