"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Network, Shield, Wifi, Server } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { CtaSection } from "@/components/cta-section"

export default function StructuredCablingPage() {
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
        title="Structured Cabling & Security Surveillance"
        description="Build a reliable foundation for your network infrastructure with professional cabling and security systems"
      />

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Enterprise-Grade Infrastructure Solutions</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Structured cabling is the foundation of your IT infrastructure, providing organized and flexible
                connectivity for all your network needs. Combined with advanced security surveillance systems, we
                deliver comprehensive solutions that ensure both connectivity and security.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                At COMnEST, we design, install, and maintain structured cabling systems and security surveillance
                solutions tailored to your specific business requirements, ensuring reliability, scalability, and
                future-readiness.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Standards-compliant cabling infrastructure",
                  "High-performance network connectivity",
                  "Comprehensive security surveillance",
                  "Scalable solutions that grow with your business",
                  "Professional installation and ongoing support",
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
                src="/cabeling.jpg?height=600&width=800"
                alt="Structured Cabling Installation"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Our Structured Cabling Services
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive cabling solutions designed to meet the demands of modern businesses
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
                title: "Network Cabling",
                description:
                  "Cat5e, Cat6, Cat6A, and fiber optic cabling for reliable, high-speed network connectivity.",
                icon: <Network className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Data Center Cabling",
                description:
                  "Precision cabling for data centers with proper cable management and airflow considerations.",
                icon: <Server className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Voice Cabling",
                description: "Reliable voice communication infrastructure for traditional and VoIP telephone systems.",
                icon: (
                  <svg
                    className="h-10 w-10 text-teal-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                title: "Wireless Infrastructure",
                description: "Access point installation and wireless network design for comprehensive coverage.",
                icon: <Wifi className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Cable Management",
                description:
                  "Organized cable pathways, labeling, and documentation for easy maintenance and troubleshooting.",
                icon: (
                  <svg
                    className="h-10 w-10 text-teal-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 12h16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                title: "Testing & Certification",
                description:
                  "Comprehensive testing and certification of all installed cabling to ensure compliance with standards.",
                icon: (
                  <svg
                    className="h-10 w-10 text-teal-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
            ].map((service, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Security Surveillance Section */}
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
              Security Surveillance Solutions
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Protect your business with advanced security surveillance systems designed for comprehensive monitoring
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
                src="/SecuritySurveillanceSolutions.jpg?height=600&width=800"
                alt="Security Surveillance System"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
              className="order-1 lg:order-2"
            >
              <h3 className="text-2xl font-bold tracking-tight mb-6">Comprehensive Security Solutions</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our security surveillance solutions combine cutting-edge hardware with intelligent software to provide
                complete protection for your premises, assets, and people.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "IP camera systems with high-definition video",
                  "Access control systems for secure entry",
                  "Intrusion detection and alarm systems",
                  "Video analytics for intelligent monitoring",
                  "Remote monitoring and mobile access",
                  "24/7 recording and secure storage solutions",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link href="/contact">
                  Learn More About Our Security Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              A systematic approach to ensure successful deployment of your cabling and security infrastructure
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
                  "Our engineers design a tailored solution that meets industry standards and your specific needs.",
              },
              {
                step: "3",
                title: "Installation & Integration",
                description:
                  "Professional installation with minimal disruption to your operations and seamless integration.",
              },
              {
                step: "4",
                title: "Testing & Support",
                description: "Thorough testing, documentation, and ongoing support to ensure optimal performance.",
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

