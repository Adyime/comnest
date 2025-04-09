"use client"

import Link from "next/link"
import { Facebook, Linkedin, Mail, Phone, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import { Logo } from "./logo"

export function Footer() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container py-12 md:py-16">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <motion.div variants={item}>
            <Logo variant="white" size="md" />
            <p className="mt-4 text-slate-400 max-w-xs">
              Your trusted technology solutions provider in NCR, India, offering end-to-end communication solutions.
            </p>
          </motion.div>
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold mb-4">Company Info</h3>
            <ul className="space-y-2">
              {/* <li>
                <Link href="/about" className="hover:text-teal-300 transition-colors">
                  About Us
                </Link>
              </li> */}
              <li>
                <Link href="/contact" className="hover:text-teal-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-teal-300 transition-colors">
                Google Workspace
                </Link>
              </li>
              <li>
                <Link href="/services/structured-cabling" className="hover:text-teal-300 transition-colors">
                  Structured Cabling
                </Link>
              </li>
              <li>
                <Link href="/av-solutions/auditorium" className="hover:text-teal-300 transition-colors">
                  Auditorium
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-teal-400" />
                <a href="mailto:info@comnestindia.com" className="hover:text-teal-300 transition-colors">
                  info@comnestindia.com
                </a>
              </li>
              {/* <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-teal-400" />
                <a href="tel:+91XXXXXXXXXX" className="hover:text-teal-300 transition-colors">
                  +91-XXXXXXXXXX
                </a>
              </li> */}
            </ul>
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  className="hover:text-teal-300 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </motion.a>
                <motion.a
                  href="#"
                  className="hover:text-teal-300 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </motion.a>
                <motion.a
                  href="#"
                  className="hover:text-teal-300 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400"
        >
          © 2025 COMnEST. All Rights Reserved.
        </motion.div>
      </div>
    </footer>
  )
}

