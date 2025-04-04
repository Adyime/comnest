"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Shield, Lock, AlertTriangle, FileText, Server, RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { CtaSection } from "@/components/cta-section"

export default function CyberSecurityPage() {
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
        title="Cyber Security Solutions"
        description="Protect your business from evolving cyber threats with our comprehensive security services"
      />

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Comprehensive Cyber Security Solutions</h2>
              <p className="text-lg text-muted-foreground mb-6">
                In today's digital landscape, cyber threats are constantly evolving. Protecting your business requires a
                proactive, multi-layered approach to security that addresses vulnerabilities across your entire IT
                infrastructure.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                At COMnEST, we provide end-to-end cyber security solutions that safeguard your critical assets, data,
                and operations from both external and internal threats, ensuring business continuity and regulatory
                compliance.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Comprehensive threat protection",
                  "Proactive security monitoring",
                  "Incident response and remediation",
                  "Regulatory compliance management",
                  "Employee security awareness training",
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
                src="/CyberSecurity.jpg?height=600&width=800"
                alt="Cyber Security Protection"
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
              Our Cyber Security Services
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive protection across your entire digital ecosystem
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
                title: "Network Security",
                description:
                  "Protect your network infrastructure with advanced firewalls, intrusion detection, and prevention systems.",
                icon: <Shield className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Endpoint Protection",
                description:
                  "Secure all devices connecting to your network with comprehensive endpoint security solutions.",
                icon: (
                  <svg
                    className="h-10 w-10 text-teal-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 2l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 7h-9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                title: "Data Protection",
                description:
                  "Safeguard sensitive information with encryption, data loss prevention, and secure access controls.",
                icon: <Lock className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Vulnerability Management",
                description:
                  "Identify and remediate security vulnerabilities through regular assessments and patching.",
                icon: <AlertTriangle className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Compliance Management",
                description:
                  "Ensure adherence to industry regulations and standards with comprehensive compliance solutions.",
                icon: <FileText className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Security Monitoring",
                description:
                  "24/7 monitoring of your IT environment to detect and respond to security incidents in real-time.",
                icon: <Server className="h-10 w-10 text-teal-600" />,
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

      {/* Security Assessment Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold tracking-tight mb-6">Comprehensive Security Assessment</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our security assessment provides a thorough evaluation of your current security posture, identifying
                vulnerabilities and recommending improvements to strengthen your defenses.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Network vulnerability scanning",
                  "Application security testing",
                  "Security policy review",
                  "Physical security assessment",
                  "Social engineering testing",
                  "Detailed reporting and remediation roadmap",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link href="/contact">
                  Schedule a Security Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="/SecurityAssessment.jpg?height=600&width=800"
                alt="Security Assessment"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Incident Response Section */}
      {/* <section className="py-16 bg-slate-50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold tracking-tight mb-4">
              Incident Response & Recovery
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Rapid response and recovery services to minimize the impact of security incidents
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
                alt="Incident Response"
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
              <h3 className="text-2xl font-bold tracking-tight mb-6">Rapid Response to Security Incidents</h3>
              <p className="text-lg text-muted-foreground mb-6">
                When security incidents occur, our rapid response team is ready to contain the threat, mitigate damage,
                and restore normal operations as quickly as possible.
              </p>
              <div className="space-y-6 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-teal-100 p-2 rounded-full">
                      <AlertTriangle className="h-5 w-5 text-teal-700" />
                    </div>
                    <h4 className="font-semibold">Incident Detection & Containment</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Rapid identification and isolation of security threats to prevent spread.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-teal-100 p-2 rounded-full">
                      <Shield className="h-5 w-5 text-teal-700" />
                    </div>
                    <h4 className="font-semibold">Threat Elimination</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Complete removal of malware, unauthorized access, and other security threats.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-teal-100 p-2 rounded-full">
                      <RefreshCw className="h-5 w-5 text-teal-700" />
                    </div>
                    <h4 className="font-semibold">System Recovery & Hardening</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Restoration of systems and implementation of enhanced security measures.
                  </p>
                </div>
              </div>
              <Button asChild>
                <Link href="/contact">
                  Learn About Our Incident Response
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <CtaSection />
    </main>
  )
}

