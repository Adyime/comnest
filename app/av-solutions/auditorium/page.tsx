"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle, Speaker, Mic, Monitor, Music, Settings, Video } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { CtaSection } from "@/components/cta-section"

export default function AuditoriumPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <main className="flex min-h-screen flex-col">
      <PageHeader
        title="Auditorium Sound and Visual Systems"
        description="Create immersive experiences with professional audio-visual solutions for auditoriums and large venues"
      />

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Professional Auditorium AV Solutions</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Auditoriums and large venues require specialized audio-visual systems that deliver exceptional sound
                quality, crystal-clear visuals, and intuitive control for various types of events and presentations.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                At COMnEST, we design and implement comprehensive auditorium AV solutions that create immersive
                experiences for audiences while providing presenters with reliable, easy-to-use technology that enhances
                their delivery.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "High-fidelity sound systems with even coverage",
                  "Large-format displays and projection systems",
                  "Integrated control systems for simplified operation",
                  "Professional lighting solutions",
                  "Scalable designs for venues of all sizes",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="/ProfessionalAuditoriumAVSolutions.jpg?height=600&width=800"
                alt="Auditorium AV System"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold tracking-tight mb-4">
              Our Auditorium AV Solutions
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive audio-visual solutions for creating exceptional experiences in large venues
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Sound Reinforcement Systems",
                description:
                  "Professional audio systems with speakers, amplifiers, and processors designed for even coverage and exceptional clarity.",
                icon: <Speaker className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Large Format Displays",
                description:
                  "High-brightness projectors, LED walls, and display systems that ensure visibility from every seat in the venue.",
                icon: <Monitor className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Professional Microphone Systems",
                description:
                  "Wired and wireless microphone solutions for presenters, panels, and audience interaction with clear audio pickup.",
                icon: <Mic className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Integrated Control Systems",
                description:
                  "Intuitive control interfaces that simplify the operation of complex AV systems for events and presentations.",
                icon: <Settings className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Video Distribution & Recording",
                description:
                  "Systems for distributing video content throughout the venue and recording events for future reference.",
                icon: <Video className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Acoustic Treatment",
                description:
                  "Professional acoustic solutions that optimize sound quality and minimize unwanted reflections and noise.",
                icon: <Music className="h-10 w-10 text-teal-600" />,
              },
            ].map((solution, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="mb-4">{solution.icon}</div>
                    <CardTitle>{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{solution.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </main>
  )
}

