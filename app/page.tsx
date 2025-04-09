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
        title={
          
          <>
            <span style={{ color: '#4285F4' }}>G</span>
            <span style={{ color: '#EA4335' }}>o</span>
            <span style={{ color: '#FBBC05' }}>o</span>
            <span style={{ color: '#4285F4' }}>g</span>
            <span style={{ color: '#34A853' }}>l</span>
            <span style={{ color: '#EA4335' }}>e</span>
            <span style={{ color: '#4285F4' }}> </span>
            <span style={{ color: '#000000' }}>Workspace</span>
          </>
        }
        description="Google Workspace made easy — great deals, always-on help!"
        image="/placeholder.svg?height=600&width=1200"
      />

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Power up with Google Workspace — great prices, round-the-clock support!</h2>
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
                imageSrc: "/google/gmail.png", // Replace with the actual image path
              },
              {
                title: "Google Calendar",
                description: "Smart scheduling with shared calendars, meeting scheduling, and reminders.",
                imageSrc: "/google/google-calendar.png", // Replace with the actual image path
              },
              {
                title: "Google Drive",
                description: "Cloud storage with file sharing, real-time collaboration, and automatic backup.",
                imageSrc: "/google/google-drive.png", // Replace with the actual image path
              },
              {
                title: "Google Meet",
                description: "Secure video meetings with screen sharing, recording, and live captions.",
                imageSrc: "/google/meet.png", // Replace with the actual image path
              },
              {
                title: "Google Docs, Sheets & Slides",
                description: "Create, edit, and collaborate on documents, spreadsheets, and presentations.",
                imageSrc: "/google/docs.png", // Replace with the actual image path
              },
              {
                title: "Google Admin",
                description: "Centralized admin console for managing users, devices, and security settings.",
                imageSrc: "/google/admin.png", // Replace with the actual image path
              },
            ].map((app, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="mb-4">
                      <Image
                        src={app.imageSrc}
                        alt={`${app.title} icon`}
                        width={40}
                        height={40}
                        className="h-10 w-10"
                      />
                    </div>
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
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-slate-100">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold tracking-tight mb-4">
              Frequently Asked Questions
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about Google Workspace
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            {[
              {
                question: "Is Google Workspace Free?",
                answer: "Google Workspace is not a free service, but all of Google’s productivity tools have free versions as well. You miss out on some features, such as longer video call times on Meet or custom email domains, but you still have access to all of your favourite Google applications including Docs, Calendar and Gmail."
              },
              {
                question: "Is Google Workspace Better Than G Suite?",
                answer: "Workspace is an evolved version of G Suite, bringing a much more unified office experience and a massive improvement to G Suite’s workflow."
              },
              {
                question: "Can I use my existing domain with Google Workspace?",
                answer: "Yes, you can use an existing domain with your Google Workspace order."
              },
              {
                question: "What happens to my existing mail, contacts, and calendar data when I move to Google Workspace?",
                answer: "When switching to Google Workspace from another program or web service, you and your users can bring your existing mail, contacts, and calendar data with you. You have a variety of options for migrating data into Google Workspace, depending on the size of your organization and the system you're migrating from. Tools are available for migration from Microsoft Exchange, Lotus Notes, IMAP servers and other Google accounts."
              },
              {
                question: "Is Google Workspace compatible with the email client I use today?",
                answer: "In addition to accessing Google Workspace mail from the Gmail web interface, you can send and receive mail from your favourite desktop client. Depending on the client, you can use either the IMAP or POP mail protocol. If you’re switching to Google Workspace from Microsoft Exchange or some other Outlook service, you can use Google Workspace Sync. This is a plug-in for Outlook 2003, 2007, 2010 or 2013 that lets you use Outlook to manage your Google Workspace mail, calendar and contacts—along with your Outlook notes, tasks and journal entries."
              },
              {
                question: "Can I create mailing lists in Google Workspace?",
                answer: "Yes, you can create mailing lists and add/delete users, select a moderator, restrict people from joining a list or even ban users from a list."
              },
              {
                question: "Can I transfer my existing Google Workspace?",
                answer: "Yes. During the transfer, we move all your email accounts from the old provider to us by keeping the data intact. However, your existing tenure with the other provider, if any does not get moved to us."
              },
            ].map((faq, index) => (
              <motion.div key={index} variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
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