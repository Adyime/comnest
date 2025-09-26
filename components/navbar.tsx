"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { Logo } from "./logo"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const googleWorkspaceLink = (
    <>
      <span style={{ color: '#4285F4' }}>G</span>
      <span style={{ color: '#EA4335' }}>o</span>
      <span style={{ color: '#FBBC05' }}>o</span>
      <span style={{ color: '#4285F4' }}>g</span>
      <span style={{ color: '#34A853' }}>l</span>
      <span style={{ color: '#EA4335' }}>e</span>
      <span style={{ color: '#4285F4' }}> </span>
      <span style={{ color: '#606060' }}>Workspace</span>
    </>
  )

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "sticky top-0 z-40 w-full backdrop-blur transition-all duration-300",
        scrolled
          ? "bg-white/95 shadow-sm supports-[backdrop-filter]:bg-white/80 dark:bg-slate-900/95 dark:supports-[backdrop-filter]:bg-slate-900/80"
          : "bg-white/50 dark:bg-slate-900/50",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Logo size="md" />
          <nav className="hidden lg:flex items-center gap-6 ml-8">
            <Link href="/home" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/google-workspace" className="text-sm font-medium transition-colors hover:text-primary">
              {googleWorkspaceLink}
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="link" className="text-sm font-medium transition-colors hover:text-primary p-0">
                  Services
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/services/structured-cabling">Structured Cabling & Security Surveillance</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/cyber-security">Cyber Security</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="link" className="text-sm font-medium transition-colors hover:text-primary p-0">
                  Solutions
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/solutions/wireless-networking">Wireless Networking Solutions</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/solutions/routing-switching">Routing and Switching Equipment</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/solutions/firewall-security">Firewall and Security Appliances</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/solutions/cisco-telepresence">Cisco Telepresence and WebEx</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/solutions/custom-software">Custom Software Applications</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="link" className="text-sm font-medium transition-colors hover:text-primary p-0">
                  AV Solutions
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/av-solutions/auditorium">Auditorium Sound and Visual Systems</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/av-solutions/conference-room">Conference Room AV Setup</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/av-solutions/automation">Home and Office Automation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/av-solutions/video-conferencing">Video Conferencing Solutions</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
        <div className="hidden lg:flex">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      {/* Mobile menu */}
      {/* <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 z-50 bg-white dark:bg-slate-900 lg:hidden overflow-y-auto shadow-lg mx-auto rounded-b-lg border-t border-slate-200 dark:border-slate-700"
            style={{ 
              maxHeight: "80vh", 
              maxWidth: "90%", 
              width: "100%", 
              left: "50%", 
              transform: "translateX(-50%)" 
            }}
          >
            <div className="container py-4">
              <nav className="flex flex-col gap-4">
                <Link
                  href="/home"
                  className="text-base font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/google-workspace"
                  className="text-base font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {googleWorkspaceLink}
                </Link>
                <div className="border-t py-2">
                  <p className="text-base font-medium mb-2">Services</p>
                  <div className="flex flex-col gap-2 pl-4">
                    <Link
                      href="/services/structured-cabling"
                      className="text-sm transition-colors hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Structured Cabling & Security Surveillance
                    </Link>
                    <Link
                      href="/services/cyber-security"
                      className="text-sm transition-colors hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Cyber Security
                    </Link>
                  </div>
                </div>
                <div className="border-t py-2">
                  <p className="text-base font-medium mb-2">Solutions</p>
                  <div className="flex flex-col gap-2 pl-4">
                    <Link
                      href="/solutions/wireless-networking"
                      className="text-sm transition-colors hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Wireless Networking Solutions
                    </Link>
                    <Link
                      href="/solutions/routing-switching"
                      className="text-sm transition-colors hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Routing and Switching Equipment
                    </Link>
                    <Link
                      href="/solutions/firewall-security"
                      className="text-sm transition-colors hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Firewall and Security Appliances
                    </Link>
                    <Link
                      href="/solutions/cisco-telepresence"
                      className="text-sm transition-colors hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Cisco Telepresence and WebEx
                    </Link>
                    <Link
                      href="/solutions/custom-software"
                      className="text-sm transition-colors hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Custom Software Applications
                    </Link>
                  </div>
                </div>
                <div className="border-t py-2">
                  <p className="text-base font-medium mb-2">AV Solutions</p>
                  <div className="flex flex-col gap-2 pl-4">
                    <Link
                      href="/av-solutions/auditorium"
                      className="text-sm transition-colors hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Auditorium Sound and Visual Systems
                    </Link>
                    <Link
                      href="/av-solutions/conference-room"
                      className="text-sm transition-colors hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Conference Room AV Setup
                    </Link>
                    <Link
                      href="/av-solutions/automation"
                      className="text-sm transition-colors hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home and Office Automation
                    </Link>
                    <Link
                      href="/av-solutions/video-conferencing"
                      className="text-sm transition-colors hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Video Conferencing Solutions
                    </Link>
                  </div>
                </div>
                <div className="border-t pt-4 mt-2">
                  <Button asChild className="w-full" onClick={() => setIsMenuOpen(false)}>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}
      {/* Mobile menu */}
<AnimatePresence>
  {isMenuOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-x-0 top-16 z-50 bg-white dark:bg-slate-900 lg:hidden overflow-y-auto shadow-lg mx-auto rounded-b-lg border-t border-slate-200 dark:border-slate-700"
      style={{
        maxHeight: "80vh",
        maxWidth: "90%",
        width: "100%",
        left: "50%",
        transform: "translateX(-50%)"
      }}
    >
      <div className="container py-4">
        <nav className="flex flex-col gap-4">
          <Link
            href="/home"
            className="text-base font-medium transition-colors hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/google-workspace"
            className="text-base font-medium transition-colors hover:text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            {googleWorkspaceLink}
          </Link>

          {/* Services dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="link" className="justify-start text-base font-medium p-0">
                Services
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-full">
              <DropdownMenuItem asChild>
                <Link href="/services/structured-cabling" onClick={() => setIsMenuOpen(false)}>
                  Structured Cabling & Security Surveillance
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/cyber-security" onClick={() => setIsMenuOpen(false)}>
                  Cyber Security
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Solutions dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="link" className="justify-start text-base font-medium p-0">
                Solutions
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-full">
              <DropdownMenuItem asChild>
                <Link href="/solutions/wireless-networking" onClick={() => setIsMenuOpen(false)}>
                  Wireless Networking Solutions
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/solutions/routing-switching" onClick={() => setIsMenuOpen(false)}>
                  Routing and Switching Equipment
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/solutions/firewall-security" onClick={() => setIsMenuOpen(false)}>
                  Firewall and Security Appliances
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/solutions/cisco-telepresence" onClick={() => setIsMenuOpen(false)}>
                  Cisco Telepresence and WebEx
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/solutions/custom-software" onClick={() => setIsMenuOpen(false)}>
                  Custom Software Applications
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* AV Solutions dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="link" className="justify-start text-base font-medium p-0">
                AV Solutions
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-full">
              <DropdownMenuItem asChild>
                <Link href="/av-solutions/auditorium" onClick={() => setIsMenuOpen(false)}>
                  Auditorium Sound and Visual Systems
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/av-solutions/conference-room" onClick={() => setIsMenuOpen(false)}>
                  Conference Room AV Setup
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/av-solutions/automation" onClick={() => setIsMenuOpen(false)}>
                  Home and Office Automation
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/av-solutions/video-conferencing" onClick={() => setIsMenuOpen(false)}>
                  Video Conferencing Solutions
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Contact */}
          <Button asChild className="w-full mt-4" onClick={() => setIsMenuOpen(false)}>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </nav>
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </motion.header>
  )
}
