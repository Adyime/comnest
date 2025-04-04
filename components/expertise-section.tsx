"use client"

import { Network, Shield, Smartphone, Wifi } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function ExpertiseSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      <motion.div
        variants={item}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-all"
      >
        <div className="bg-teal-100 p-3 rounded-full w-fit mb-4">
          <Network className="h-6 w-6 text-teal-600" />
        </div>
        <h3 className="font-semibold text-xl mb-3">Enterprise Communication</h3>
        <p className="text-muted-foreground">
          Professional email solutions & structured office cabling for seamless business communication
        </p>
      </motion.div>
      <motion.div
        variants={item}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-all"
      >
        <div className="bg-teal-100 p-3 rounded-full w-fit mb-4">
          <Shield className="h-6 w-6 text-teal-600" />
        </div>
        <h3 className="font-semibold text-xl mb-3">Security & Surveillance</h3>
        <p className="text-muted-foreground">
          Advanced security systems & cyber security solutions to protect your business assets
        </p>
      </motion.div>
      <motion.div
        variants={item}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-all"
      >
        <div className="bg-teal-100 p-3 rounded-full w-fit mb-4">
          <Smartphone className="h-6 w-6 text-teal-600" />
        </div>
        <h3 className="font-semibold text-xl mb-3">Automation & Digital Solutions</h3>
        <p className="text-muted-foreground">
          Smart home & office automation, video conferencing, and digital transformation services
        </p>
      </motion.div>
      <motion.div
        variants={item}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-all"
      >
        <div className="bg-teal-100 p-3 rounded-full w-fit mb-4">
          <Wifi className="h-6 w-6 text-teal-600" />
        </div>
        <h3 className="font-semibold text-xl mb-3">Wireless & Telecom Infrastructure</h3>
        <p className="text-muted-foreground">
          High-performance routers, switches, access points, backhaul radios, and antennas
        </p>
      </motion.div>
    </motion.div>
  )
}

