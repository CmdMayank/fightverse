import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function EventDashboard() {
   const targetDate = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)

const [timeLeft, setTimeLeft] = useState({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
})

useEffect(() => {
  const timer = setInterval(() => {
    const now = new Date()
    const difference = targetDate - now

    if (difference <= 0) {
      clearInterval(timer)
      return
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((difference / (1000 * 60)) % 60)
    const seconds = Math.floor((difference / 1000) % 60)

    setTimeLeft({
      days,
      hours,
      minutes,
      seconds,
    })
  }, 1000)

  return () => clearInterval(timer)
}, [])
  return (
    <section className="py-32 px-8 md:px-20 bg-black">
      
      <div className="text-center mb-20">
        <p className="text-red-500 uppercase tracking-[0.5em] text-sm mb-6">
          Live Events
        </p>

        <h2
          className="text-5xl md:text-8xl tracking-[0.08em]"
          style={{ fontFamily: 'Bebas Neue, sans-serif' }}
        >
          COMMAND CENTER
        </h2>

        <p className="mt-8 text-gray-400 text-lg max-w-3xl mx-auto">
          The next wars are already scheduled.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* Main Event */}
        <motion.div
          whileHover={{ y: -10, scale: 1.02 }}
          className="lg:col-span-2 bg-zinc-950 border border-red-500/20 rounded-3xl p-10 shadow-2xl shadow-red-500/10"
        >
          <p className="text-red-500 uppercase tracking-[0.3em] text-sm">
            Main Event
          </p>

          <h3
            className="mt-6 text-4xl md:text-7xl"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            JON JONES
            <span className="text-red-500"> VS </span>
            STIPE
          </h3>

          <p className="mt-6 text-gray-400 text-lg">
            Heavyweight Championship Clash
          </p>

          <div className="grid grid-cols-4 gap-4 mt-10">
            <div className="bg-black rounded-2xl p-5 text-center border border-white/10">
              <p className="text-3xl font-bold">{timeLeft.days}</p>
              <p className="text-xs uppercase text-gray-500 mt-2">Days</p>
            </div>

            <div className="bg-black rounded-2xl p-5 text-center border border-white/10">
              <p className="text-3xl font-bold">{timeLeft.hours}</p>
              <p className="text-xs uppercase text-gray-500 mt-2">Hours</p>
            </div>

            <div className="bg-black rounded-2xl p-5 text-center border border-white/10">
              <p className="text-3xl font-bold">{timeLeft.minutes}</p>
              <p className="text-xs uppercase text-gray-500 mt-2">Minutes</p>
            </div>

            <div className="bg-black rounded-2xl p-5 text-center border border-white/10">
              <p className="text-3xl font-bold">{timeLeft.seconds}</p>
              <p className="text-xs uppercase text-gray-500 mt-2">Seconds</p>
            </div>
          </div>
        </motion.div>

        {/* Side Cards */}
        <div className="flex flex-col gap-8">

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-zinc-950 border border-white/10 rounded-3xl p-8"
          >
            <p className="text-red-500 uppercase tracking-[0.3em] text-sm">
              Co-Main
            </p>

            <h4
              className="mt-4 text-3xl"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              ISLAM VS OLIVEIRA
            </h4>

            <p className="mt-4 text-gray-400">
              Lightweight War
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-zinc-950 border border-white/10 rounded-3xl p-8"
          >
            <p className="text-red-500 uppercase tracking-[0.3em] text-sm">
              Featured Card
            </p>

            <h4
              className="mt-4 text-3xl"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              PEREIRA VS HILL
            </h4>

            <p className="mt-4 text-gray-400">
              Light Heavyweight Collision
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default EventDashboard