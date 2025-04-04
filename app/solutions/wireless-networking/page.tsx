"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle, Wifi, Signal, BarChart, Building, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { CtaSection } from "@/components/cta-section"

export default function WirelessNetworkingPage() {
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
        title="Wireless Networking Solutions"
        description="High-performance wireless infrastructure for seamless connectivity across your organization"
      />

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Enterprise-Grade Wireless Solutions</h2>
              <p className="text-lg text-muted-foreground mb-6">
                In today's connected world, reliable wireless connectivity is essential for business operations. Our
                wireless networking solutions provide secure, high-performance connectivity that supports your
                organization's mobility and productivity needs.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                At COMnEST, we design, implement, and manage wireless networks that deliver consistent performance,
                comprehensive coverage, and enterprise-grade security for businesses of all sizes.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "High-density Wi-Fi deployments",
                  "Seamless roaming across your facility",
                  "Enterprise-grade security",
                  "Performance optimization and monitoring",
                  "Scalable solutions for growing businesses",
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
                src="/WirelessSolutions.jpg?height=600&width=800"
                alt="Wireless Networking"
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
              Our Wireless Networking Solutions
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive wireless solutions tailored to your specific business requirements
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
                title: "Indoor Wi-Fi Networks",
                description:
                  "High-performance indoor wireless networks with seamless coverage throughout your facility.",
                icon: <Wifi className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Outdoor Wireless Solutions",
                description:
                  "Robust outdoor wireless connectivity for campus environments, warehouses, and outdoor spaces.",
                icon: <Building className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Point-to-Point Wireless",
                description:
                  "High-speed wireless bridges connecting buildings or remote locations without fiber connectivity.",
                icon: <Signal className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Guest Wi-Fi Solutions",
                description: "Secure guest access with customizable portals, bandwidth management, and analytics.",
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
                title: "Wireless Site Surveys",
                description: "Comprehensive RF site surveys to optimize wireless coverage, capacity, and performance.",
                icon: <MapPin className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Wireless Performance Monitoring",
                description: "Continuous monitoring and optimization of your wireless network for peak performance.",
                icon: <BarChart className="h-10 w-10 text-teal-600" />,
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

      {/* Technologies Section */}
      {/* <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold tracking-tight mb-4">
              Wireless Technologies We Deploy
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We implement the latest wireless technologies to deliver optimal performance for your business
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Wireless Technologies"
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
            >
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold mb-3">Wi-Fi 6 (802.11ax)</h3>
                  <p className="text-muted-foreground mb-4">
                    The latest Wi-Fi standard offering significantly improved performance in high-density environments,
                    better battery life for client devices, and speeds up to 9.6 Gbps.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Higher Capacity</span>
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Lower Latency</span>
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                      Better Battery Life
                    </span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold mb-3">Mesh Wi-Fi Systems</h3>
                  <p className="text-muted-foreground mb-4">
                    Seamless coverage throughout large spaces with multiple access points working together to create a
                    single, unified network with no dead zones.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Seamless Roaming</span>
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Self-Healing</span>
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Easy Expansion</span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold mb-3">Cloud-Managed Wi-Fi</h3>
                  <p className="text-muted-foreground mb-4">
                    Centralized management of your entire wireless network through the cloud, providing simplified
                    deployment, monitoring, and troubleshooting.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                      Centralized Management
                    </span>
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                      Real-time Analytics
                    </span>
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Automatic Updates</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Implementation Process Section */}
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
              Our Implementation Process
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to ensure successful deployment of your wireless network
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Assessment & Planning",
                description:
                  "We evaluate your requirements, site conditions, and future needs to create a comprehensive plan.",
              },
              {
                step: "2",
                title: "Design & Engineering",
                description:
                  "Our engineers design a tailored wireless solution that meets your specific business needs.",
              },
              {
                step: "3",
                title: "Installation & Configuration",
                description:
                  "Professional installation with minimal disruption to your operations and optimal configuration.",
              },
              {
                step: "4",
                title: "Testing & Optimization",
                description:
                  "Thorough testing, validation, and optimization to ensure peak performance of your wireless network.",
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

