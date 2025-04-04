"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle, Video, Users, Globe, Monitor, Smartphone, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { CtaSection } from "@/components/cta-section"

export default function CiscoTelepresencePage() {
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
        title="Cisco Telepresence and WebEx"
        description="Transform your collaboration experience with immersive video conferencing solutions"
      />

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Immersive Collaboration Solutions</h2>
              <p className="text-lg text-muted-foreground mb-6">
                In today's global business environment, effective collaboration across distances is essential. Cisco
                Telepresence and WebEx solutions provide immersive, high-definition video conferencing experiences that
                make remote meetings feel like in-person interactions.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                At COMnEST, we design, implement, and support Cisco collaboration solutions that connect your teams,
                partners, and customers with lifelike video experiences, comprehensive content sharing, and seamless
                integration with your existing workflows.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "High-definition video and audio quality",
                  "Seamless content sharing and collaboration",
                  "Integration with existing communication systems",
                  "Scalable solutions for rooms of all sizes",
                  "Secure, reliable connections for critical meetings",
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
                src="/NetworkingInfrastructure.jpg?height=600&width=800"
                alt="Cisco Telepresence System"
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
              Our Cisco Collaboration Solutions
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive video conferencing and collaboration solutions for every need
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
                title: "Cisco Telepresence Rooms",
                description:
                  "Immersive video conferencing environments with multiple screens, spatial audio, and lifelike experiences for executive meetings.",
                icon: <Video className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Cisco WebEx Meetings",
                description:
                  "Cloud-based video conferencing with screen sharing, recording, and transcription for teams of all sizes.",
                icon: <Users className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Cisco WebEx Teams",
                description:
                  "Persistent team collaboration with messaging, file sharing, whiteboarding, and integrated video meetings.",
                icon: (
                  <svg
                    className="h-10 w-10 text-teal-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23 21v-2a4 4 0 0 0-3-3.87"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 3.13a4 4 0 0 1 0 7.75"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                title: "Cisco Room Kits",
                description:
                  "All-in-one video conferencing systems for huddle spaces, meeting rooms, and boardrooms with intelligent features.",
                icon: <Monitor className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Cisco WebEx Devices",
                description:
                  "Purpose-built collaboration devices including Desk Pro, Board Series, and Room Series for optimal meeting experiences.",
                icon: <Smartphone className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Hybrid Meeting Solutions",
                description:
                  "Integrated solutions that connect in-person and remote participants with equal presence and participation.",
                icon: <Globe className="h-10 w-10 text-teal-600" />,
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

      {/* Implementation Process Section */}
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
              Our Implementation Process
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to ensure successful deployment of your collaboration solution
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Assessment & Planning",
                description:
                  "We evaluate your collaboration needs, existing infrastructure, and workflow requirements to create a comprehensive plan.",
              },
              {
                step: "2",
                title: "Solution Design",
                description:
                  "Our experts design a tailored Cisco collaboration solution that meets your specific business requirements.",
              },
              {
                step: "3",
                title: "Implementation & Integration",
                description:
                  "Professional deployment with minimal disruption and seamless integration with your existing systems.",
              },
              {
                step: "4",
                title: "Training & Support",
                description:
                  "Comprehensive training for users and administrators, with ongoing support to ensure adoption and success.",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100 h-full">
                  <div className="bg-teal-100 text-teal-800 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </main>
  )
}

