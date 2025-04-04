"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle, Home, Lightbulb, Lock, Smartphone, Thermometer, Speaker } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { CtaSection } from "@/components/cta-section"

export default function AutomationPage() {
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
        title="Home and Office Automation"
        description="Transform your spaces with intelligent automation solutions for enhanced comfort, convenience, and efficiency"
      />

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Smart Automation Solutions</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Modern homes and offices are becoming increasingly intelligent, with automated systems that enhance
                comfort, convenience, security, and energy efficiency. Smart automation transforms how we interact with
                our spaces, making them more responsive to our needs.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                At COMnEST, we design and implement comprehensive automation solutions that integrate seamlessly with
                your lifestyle and workflow, creating spaces that are not only smarter but also more enjoyable and
                productive.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Intuitive control of lighting, climate, and entertainment",
                  "Enhanced security and monitoring capabilities",
                  "Energy-efficient operation and management",
                  "Seamless integration with existing systems",
                  "Customizable solutions for unique requirements",
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
                alt="Smart Home Automation"
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
              Our Automation Solutions
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive automation systems for homes and offices of all sizes
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
                title: "Lighting Control",
                description:
                  "Intelligent lighting systems with scheduling, scenes, and occupancy-based control for comfort and energy efficiency.",
                icon: <Lightbulb className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Climate Control",
                description:
                  "Smart thermostats and HVAC integration for optimal comfort and energy savings through intelligent temperature management.",
                icon: <Thermometer className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Security & Access Control",
                description:
                  "Integrated security systems with smart locks, cameras, and monitoring for enhanced protection and peace of mind.",
                icon: <Lock className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Audio-Visual Control",
                description:
                  "Centralized control of entertainment systems across multiple rooms with simplified operation and high-quality experiences.",
                icon: <Speaker className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Mobile Control",
                description:
                  "Intuitive smartphone and tablet interfaces for controlling all aspects of your automated environment from anywhere.",
                icon: <Smartphone className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Whole-Home/Office Integration",
                description:
                  "Comprehensive automation systems that integrate all subsystems for seamless operation and enhanced functionality.",
                icon: <Home className="h-10 w-10 text-teal-600" />,
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

      {/* Benefits Section */}
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
              Benefits of Automation
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              How intelligent automation enhances your home and office environments
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-xl overflow-hidden shadow-xl order-2 lg:order-1"
            >
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Automation Benefits"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                  <div className="flex items-center gap-3 mb-3">
                    <svg
                      className="h-6 w-6 text-teal-600"
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
                    <h3 className="text-xl font-bold">Enhanced Comfort</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Automated systems maintain optimal lighting, temperature, and ambiance based on preferences, time of
                    day, and occupancy.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                  <div className="flex items-center gap-3 mb-3">
                    <svg
                      className="h-6 w-6 text-teal-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 6v6l4 2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h3 className="text-xl font-bold">Time Savings</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Automated routines and scenes eliminate the need to manually adjust multiple systems, saving time
                    and reducing complexity.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                  <div className="flex items-center gap-3 mb-3">
                    <svg
                      className="h-6 w-6 text-teal-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h3 className="text-xl font-bold">Energy Efficiency</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Smart systems optimize energy usage by adjusting lighting, climate control, and other systems based
                    on actual needs and occupancy.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                  <div className="flex items-center gap-3 mb-3">
                    <Lock className="h-6 w-6 text-teal-600" />
                    <h3 className="text-xl font-bold">Enhanced Security</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Integrated security systems with remote monitoring, automated alerts, and simulated occupancy for
                    peace of mind.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Areas Section */}
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
              Automation for Every Environment
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tailored automation solutions for different spaces and requirements
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Residential Homes",
                description:
                  "Comprehensive home automation systems that enhance comfort, convenience, and security for families and individuals.",
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "Corporate Offices",
                description:
                  "Intelligent office automation that improves productivity, energy efficiency, and the overall work environment.",
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "Hospitality & Retail",
                description:
                  "Custom automation solutions for hotels, restaurants, and retail spaces that enhance guest experiences and operational efficiency.",
                image: "/placeholder.svg?height=300&width=500",
              },
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden">
                  <div className="relative h-48">
                    <Image src={area.image || "/placeholder.svg"} alt={area.title} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{area.description}</p>
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

