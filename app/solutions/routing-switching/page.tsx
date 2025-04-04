"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle, Network, Server, Shield, BarChart, Settings } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { CtaSection } from "@/components/cta-section"

export default function RoutingSwitchingPage() {
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
        title="Routing and Switching Equipment"
        description="Enterprise-grade networking infrastructure for reliable, high-performance connectivity"
      />

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Enterprise Networking Infrastructure</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Routing and switching equipment forms the backbone of your network infrastructure, enabling reliable
                data transmission, secure connectivity, and efficient network management.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                At COMnEST, we provide enterprise-grade routing and switching solutions that deliver the performance,
                reliability, and security your business needs to support critical applications and services.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "High-performance network infrastructure",
                  "Scalable solutions for growing businesses",
                  "Advanced security features",
                  "Simplified network management",
                  "Expert deployment and support",
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
                alt="Routing and Switching Equipment"
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
              Our Routing and Switching Solutions
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive networking solutions tailored to your specific business requirements
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
                title: "Enterprise Routers",
                description:
                  "High-performance routers for secure, reliable connectivity between networks and to the internet.",
                icon: <Network className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Access Switches",
                description:
                  "Reliable access layer switches connecting end-user devices to your network infrastructure.",
                icon: (
                  <svg
                    className="h-10 w-10 text-teal-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 9h.01M7 12h.01M7 15h.01M12 9h.01M12 12h.01M12 15h.01M17 9h.01M17 12h.01M17 15h.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                title: "Core Switches",
                description:
                  "High-capacity core switches for efficient data transmission across your network backbone.",
                icon: <Server className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "SD-WAN Solutions",
                description: "Software-defined WAN solutions for optimized connectivity across multiple locations.",
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
                title: "Network Security",
                description:
                  "Integrated security features to protect your network from threats and unauthorized access.",
                icon: <Shield className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Network Management",
                description:
                  "Centralized management solutions for simplified monitoring and control of your network infrastructure.",
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

      {/* CTA Section */}
      <CtaSection />
    </main>
  )
}

