"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Mail, Calendar, HardDriveIcon as Drive, Users, Shield, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { CtaSection } from "@/components/cta-section"

export default function GoogleWorkspacePage() {
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
        title="Google Workspace"
        description="Empower your business with Google's cloud-based productivity and collaboration tools"
        image="/placeholder.svg?height=600&width=1200"
      />

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Transform How Your Business Works</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Google Workspace (formerly G Suite) is a collection of cloud computing, productivity and collaboration
                tools, software and products developed and marketed by Google.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                At COMnEST, we help businesses implement, migrate to, and maximize the benefits of Google Workspace,
                ensuring a smooth transition and ongoing support.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Seamless collaboration from anywhere",
                  "Enhanced security and data protection",
                  "Simplified administration and management",
                  "Cost-effective with predictable pricing",
                  "Continuous updates and improvements",
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
                src="/workspace.png?height=600&width=800"
                alt="Google Workspace in action"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Apps Section */}
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
              Google Workspace Applications
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive suite of cloud-based applications designed to help your team collaborate and work more
              efficiently
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
                title: "Gmail",
                description: "Secure, intelligent email with 15GB of storage, spam protection, and offline support.",
                icon: <Mail className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Google Calendar",
                description: "Smart scheduling with shared calendars, meeting scheduling, and reminders.",
                icon: <Calendar className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Google Drive",
                description: "Cloud storage with file sharing, real-time collaboration, and automatic backup.",
                icon: <Drive className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Google Meet",
                description: "Secure video meetings with screen sharing, recording, and live captions.",
                icon: <Users className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Google Docs, Sheets & Slides",
                description: "Create, edit, and collaborate on documents, spreadsheets, and presentations.",
                icon: (
                  <svg
                    className="h-10 w-10 text-teal-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 3v4a1 1 0 0 0 1 1h4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M9 9h1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M9 13h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M9 17h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                title: "Google Admin",
                description: "Centralized admin console for managing users, devices, and security settings.",
                icon: <Shield className="h-10 w-10 text-teal-600" />,
              },
            ].map((app, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="mb-4">{app.icon}</div>
                    <CardTitle>{app.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{app.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
              Our Google Workspace Services
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              COMnEST provides comprehensive Google Workspace services to help your business implement, migrate to, and
              maximize the benefits of Google's cloud-based productivity suite
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-md border border-slate-100"
            >
              <h3 className="text-2xl font-bold mb-6">Implementation & Migration</h3>
              <ul className="space-y-4">
                {[
                  "Domain verification and setup",
                  "User account creation and configuration",
                  "Email migration from existing platforms",
                  "Data migration (documents, calendars, contacts)",
                  "Integration with existing systems",
                  "Custom configuration based on business needs",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-md border border-slate-100"
            >
              <h3 className="text-2xl font-bold mb-6">Training & Support</h3>
              <ul className="space-y-4">
                {[
                  "User training sessions for all Google Workspace apps",
                  "Admin console training for IT staff",
                  "Custom workflow development and training",
                  "Ongoing technical support and troubleshooting",
                  "Regular check-ins and optimization recommendations",
                  "Security best practices and compliance guidance",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <Button asChild size="lg">
              <Link href="/contact">
                Get Started with Google Workspace
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
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
              Google Workspace Plans
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the plan that's right for your business. All plans include our expert implementation and support
              services.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Business Starter",
                price: "₹270",
                features: [
                  "30 GB cloud storage per user",
                  "Video meetings up to 100 participants",
                  "Security and management controls",
                  "Standard support",
                ],
              },
              {
                name: "Business Standard",
                price: "₹680",
                popular: true,
                features: [
                  "2 TB cloud storage per user",
                  "Video meetings up to 150 participants",
                  "Recording and attendance tracking",
                  "Enhanced security and management controls",
                  "Standard support (paid upgrade to enhanced)",
                ],
              },
              {
                name: "Business Plus",
                price: "₹1,380",
                features: [
                  "5 TB cloud storage per user",
                  "Video meetings up to 250 participants",
                  "Recording, attendance, and noise cancellation",
                  "Enhanced security and compliance",
                  "eDiscovery and retention",
                  "Enhanced support (paid upgrade to premium)",
                ],
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <Card className={`h-full ${plan.popular ? "border-teal-600 shadow-lg" : ""}`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="mt-4 mb-2">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground"> / user / month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className={`w-full ${plan.popular ? "bg-teal-600 hover:bg-teal-700" : ""}`}>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              * Prices are subject to change based on Google's pricing policy. Contact us for the most current pricing.
            </p>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <CtaSection />
    </main>
  )
}

