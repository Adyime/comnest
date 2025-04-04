"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle, Shield, Lock, AlertTriangle, BarChart, Server, Eye } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { CtaSection } from "@/components/cta-section"

export default function FirewallSecurityPage() {
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
        title="Firewall and Security Appliances"
        description="Protect your network with enterprise-grade security solutions that safeguard your critical assets"
      />

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Advanced Network Protection</h2>
              <p className="text-lg text-muted-foreground mb-6">
                In today's threat landscape, securing your network perimeter is more critical than ever. Firewalls and
                security appliances serve as the first line of defense against cyber threats, protecting your
                organization's valuable data and systems.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                At COMnEST, we provide enterprise-grade firewall and security solutions that deliver comprehensive
                protection against evolving threats while ensuring your network remains accessible and performant for
                legitimate business activities.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Next-generation firewall protection",
                  "Advanced threat prevention",
                  "Secure remote access solutions",
                  "Unified threat management",
                  "Expert deployment and ongoing management",
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
                src="/NetworkProtection.jpg?height=600&width=800"
                alt="Network Security Appliance"
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
              Our Firewall and Security Solutions
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive security solutions tailored to protect your network infrastructure
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
                title: "Next-Generation Firewalls",
                description:
                  "Advanced firewalls with deep packet inspection, application awareness, and intrusion prevention capabilities.",
                icon: <Shield className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Unified Threat Management",
                description:
                  "Integrated security appliances combining firewall, antivirus, anti-spam, content filtering, and more.",
                icon: <Lock className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "VPN Solutions",
                description:
                  "Secure remote access solutions for employees and partners to connect safely to your network.",
                icon: (
                  <svg
                    className="h-10 w-10 text-teal-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                title: "Intrusion Prevention Systems",
                description: "Real-time monitoring and blocking of network attacks and suspicious activities.",
                icon: <AlertTriangle className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Web Application Firewalls",
                description: "Specialized protection for web applications against common web exploits and attacks.",
                icon: (
                  <svg
                    className="h-10 w-10 text-teal-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 16v.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 12h8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 8h8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                title: "Security Information & Event Management",
                description: "Centralized logging and analysis of security events across your network infrastructure.",
                icon: <Eye className="h-10 w-10 text-teal-600" />,
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
              A systematic approach to ensure successful deployment of your security infrastructure
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Security Assessment",
                description:
                  "We evaluate your current security posture, identify vulnerabilities, and understand your specific requirements.",
              },
              {
                step: "2",
                title: "Solution Design",
                description:
                  "Our security experts design a tailored solution that addresses your specific security needs and compliance requirements.",
              },
              {
                step: "3",
                title: "Implementation",
                description:
                  "Professional deployment of security appliances with minimal disruption to your business operations.",
              },
              {
                step: "4",
                title: "Ongoing Management",
                description:
                  "Continuous monitoring, updates, and optimization to ensure your security infrastructure remains effective against evolving threats.",
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

