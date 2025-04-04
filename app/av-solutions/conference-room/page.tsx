"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle, Monitor, Video, Mic, Speaker, Users, Settings } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { CtaSection } from "@/components/cta-section"

export default function ConferenceRoomPage() {
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
        title="Conference Room AV Setup"
        description="Transform your meeting spaces with state-of-the-art audio-visual solutions"
      />

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Modern Conference Room Solutions</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Today's conference rooms require sophisticated audio-visual technology to facilitate effective
                collaboration, whether participants are in the room or connecting remotely.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                At COMnEST, we design and implement comprehensive conference room AV solutions that enhance
                communication, streamline presentations, and create an immersive meeting experience for all
                participants.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "High-quality audio and video systems",
                  "Intuitive control interfaces",
                  "Seamless integration with collaboration platforms",
                  "Scalable solutions for rooms of all sizes",
                  "Professional installation and support",
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
                src="/placeholder.svg?height=600&width=800"
                alt="Modern Conference Room"
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
              Our Conference Room AV Solutions
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive audio-visual solutions tailored to your specific meeting space requirements
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
                title: "Display Systems",
                description:
                  "High-resolution displays, projectors, and interactive screens for clear visual presentations.",
                icon: <Monitor className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Video Conferencing",
                description: "HD cameras and video conferencing systems for connecting with remote participants.",
                icon: <Video className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Audio Systems",
                description: "Crystal-clear audio with microphones and speakers optimized for speech intelligibility.",
                icon: <Mic className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Sound Reinforcement",
                description: "Distributed speaker systems ensuring every participant can hear clearly.",
                icon: <Speaker className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Collaboration Tools",
                description: "Wireless presentation systems and digital whiteboarding for enhanced collaboration.",
                icon: <Users className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Control Systems",
                description: "Intuitive control interfaces for simplified operation of all AV equipment.",
                icon: <Settings className="h-10 w-10 text-teal-600" />,
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

      {/* Room Types Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold tracking-tight mb-4">
              Solutions for Every Meeting Space
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tailored AV solutions for different types and sizes of meeting spaces
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Huddle Rooms",
                description:
                  "Compact AV solutions for small meeting spaces designed for 2-4 people, featuring displays, audio, and video conferencing capabilities optimized for intimate collaboration.",
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "Medium Conference Rooms",
                description:
                  "Comprehensive AV systems for mid-sized meeting spaces accommodating 5-12 people, with enhanced display options, distributed audio, and advanced video conferencing features.",
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "Large Boardrooms",
                description:
                  "Sophisticated AV solutions for executive boardrooms and large meeting spaces, featuring premium displays, integrated control systems, and professional-grade audio and video systems.",
                image: "/placeholder.svg?height=300&width=500",
              },
            ].map((room, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden">
                  <div className="relative h-48">
                    <Image src={room.image || "/placeholder.svg"} alt={room.title} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>{room.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{room.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Key Features of Our Conference Room Solutions
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              What sets our conference room AV solutions apart
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold mb-3">One-Touch Meeting Start</h3>
                  <p className="text-muted-foreground">
                    Simplified meeting initiation with one-touch controls to start video conferences, presentations, and
                    collaboration sessions without technical delays.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold mb-3">Wireless Content Sharing</h3>
                  <p className="text-muted-foreground">
                    Seamless wireless presentation capabilities allowing participants to share content from their
                    devices without cables or adapters.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold mb-3">Platform Integration</h3>
                  <p className="text-muted-foreground">
                    Native integration with popular collaboration platforms like Microsoft Teams, Zoom, Google Meet, and
                    Cisco Webex for a consistent user experience.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold mb-3">Room Scheduling</h3>
                  <p className="text-muted-foreground">
                    Integrated room scheduling displays showing availability and allowing on-the-spot booking, with
                    synchronization to your calendar system.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Conference Room Features"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </main>
  )
}

