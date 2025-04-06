"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <section className="relative bg-gradient-to-b from-teal-900 to-teal-800 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-teal-700/30 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-40 -left-20 w-72 h-72 rounded-full bg-cyan-600/20 blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-56 h-56 rounded-full bg-teal-500/20 blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, 20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 5,
          }}
        />
      </div>

      <div className="container relative py-20 md:py-32">
        <motion.div className="max-w-3xl" variants={container} initial="hidden" animate="show">
          <motion.h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" variants={item}>
            Your Trusted Communication Solutions Partner
          </motion.h1>
          <motion.p className="text-lg md:text-xl text-teal-100 mb-8 max-w-2xl" variants={item}>
            COMnEST is a premier technology solutions provider in NCR, India, offering end-to-end communication
            solutions tailored to businesses and individuals. Whether you need enterprise connectivity, security,
            automation, or telecom solutions, COMnEST has you covered.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4" variants={item}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#125650] text-[#125650] hover:bg-[#125650]/30"
              >
                <Link href="/solutions/wireless-networking">Explore Solutions</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

