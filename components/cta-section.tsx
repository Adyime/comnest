"use client"

import Link from "next/link"
import { Phone } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

import { Button } from "@/components/ui/button"

export function CtaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  return (
    <section ref={ref} className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-16">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-white/20 p-3 rounded-full">
            <Phone className="h-6 w-6" />
          </div>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl font-bold tracking-tight mb-4"
        >
          Get in Touch Today!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg mb-8 max-w-2xl mx-auto"
        >
          Let's transform your communication network for a smarter, safer, and more connected future.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button asChild size="lg" variant="secondary" className="bg-white text-teal-700 hover:bg-teal-50">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

