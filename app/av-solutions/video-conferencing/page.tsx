"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle, Video, Users, Monitor, Mic, Globe, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { CtaSection } from "@/components/cta-section"

export default function VideoConferencingPage() {
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
        title="Video Conferencing Solutions"
        description="Connect teams and clients with professional video collaboration systems for seamless communication"
      />

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Professional Video Collaboration</h2>
              <p className="text-lg text-muted-foreground mb-6">
                In today's distributed work environment, effective video conferencing is essential for connecting teams,
                clients, and partners across locations. Professional video conferencing solutions enable clear
                communication, seamless collaboration, and productive meetings regardless of physical distance.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                At COMnEST, we design and implement comprehensive video conferencing solutions that deliver exceptional
                audio-visual quality, intuitive operation, and reliable performance for businesses of all sizes.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "High-definition video and crystal-clear audio",
                  "Seamless content sharing and collaboration",
                  "Integration with popular conferencing platforms",
                  "Solutions for rooms of all sizes",
                  "Secure and reliable connections",
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
                alt="Video Conferencing System"
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
              Our Video Conferencing Solutions
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive video collaboration systems for every business need
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
                title: "Room Systems",
                description:
                  "Integrated video conferencing systems for meeting rooms of all sizes with cameras, displays, and audio optimized for the space.",
                icon: <Video className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Huddle Room Solutions",
                description:
                  "Compact, all-in-one video systems for small meeting spaces with intelligent features for small group collaboration.",
                icon: <Users className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Executive Conferencing",
                description:
                  "Premium video conferencing solutions for boardrooms and executive spaces with exceptional quality and aesthetics.",
                icon: <Monitor className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Audio Solutions",
                description:
                  "Professional microphone and speaker systems that ensure clear communication with natural sound for all participants.",
                icon: <Mic className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Global Collaboration",
                description:
                  "Solutions that connect teams across multiple locations with consistent experiences and seamless integration.",
                icon: <Globe className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Scheduling & Management",
                description:
                  "Room scheduling displays and management systems that simplify booking and optimize utilization of meeting spaces.",
                icon: <Calendar className="h-10 w-10 text-teal-600" />,
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

      {/* Platform Integration Section */}
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
              Platform Integration
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our solutions integrate seamlessly with popular video conferencing platforms
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold mb-3">Microsoft Teams</h3>
                  <p className="text-muted-foreground">
                    Certified hardware and integration solutions that deliver optimal experiences for Microsoft Teams
                    meetings and collaboration.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold mb-3">Zoom</h3>
                  <p className="text-muted-foreground">
                    Zoom Rooms and compatible hardware solutions that enhance the Zoom experience with professional
                    audio-visual quality.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold mb-3">Cisco WebEx</h3>
                  <p className="text-muted-foreground">
                    Integrated solutions for WebEx meetings and WebEx Teams collaboration with optimized hardware and
                    user experiences.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold mb-3">Google Meet</h3>
                  <p className="text-muted-foreground">
                    Hardware solutions and integration for Google Meet that deliver professional-grade video
                    conferencing experiences.
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
                alt="Platform Integration"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Benefits of Professional Video Conferencing
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              How our video conferencing solutions enhance your business communication
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Enhanced Collaboration",
                description:
                  "Enable teams to work together effectively regardless of location, with clear communication and content sharing.",
                icon: <Users className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Reduced Travel Costs",
                description:
                  "Minimize the need for business travel while maintaining productive face-to-face interactions with clients and partners.",
                icon: (
                  <svg
                    className="h-10 w-10 text-teal-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                title: "Improved Productivity",
                description:
                  "Streamline meetings with easy scheduling, one-touch joining, and intuitive content sharing for maximum efficiency.",
                icon: (
                  <svg
                    className="h-10 w-10 text-teal-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 12h-4l-3 9L9 3l-3 9H2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                title: "Global Reach",
                description:
                  "Connect with teams, clients, and partners worldwide with high-quality video and audio that bridges distances.",
                icon: <Globe className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Flexible Work Options",
                description:
                  "Support hybrid and remote work models with consistent meeting experiences for all participants regardless of location.",
                icon: (
                  <svg
                    className="h-10 w-10 text-teal-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.27 6.96L12 12.01l8.73-5.05"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 22.08V12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                title: "Professional Image",
                description:
                  "Present your organization professionally with high-quality video and audio that enhances your business communications.",
                icon: (
                  <svg
                    className="h-10 w-10 text-teal-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="mb-4">{benefit.icon}</div>
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
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

