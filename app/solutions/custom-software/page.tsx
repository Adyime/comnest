"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle, Code, Database, Smartphone, Globe, Settings, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { CtaSection } from "@/components/cta-section"

export default function CustomSoftwarePage() {
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
        title="Custom Software Applications"
        description="Tailored software solutions designed to address your unique business challenges"
      />

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Bespoke Software Solutions</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Off-the-shelf software often falls short of addressing the unique challenges and requirements of your
                business. Custom software applications are designed specifically for your organization, providing
                tailored functionality that aligns perfectly with your workflows and objectives.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                At COMnEST, we develop custom software solutions that transform your business processes, enhance
                productivity, and create competitive advantages through technology that's built exclusively for you.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Tailored to your exact business requirements",
                  "Seamless integration with existing systems",
                  "Scalable architecture for future growth",
                  "Enhanced security and compliance",
                  "Ongoing support and continuous improvement",
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
                src="/customsoftware.jpg?height=600&width=800"
                alt="Custom Software Development"
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
              Our Custom Software Solutions
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive software development services tailored to your business needs
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
                title: "Enterprise Applications",
                description:
                  "Custom business applications that streamline operations, automate workflows, and enhance productivity.",
                icon: <Settings className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Web Applications",
                description:
                  "Responsive, feature-rich web applications that deliver exceptional user experiences across devices.",
                icon: <Globe className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Mobile Applications",
                description:
                  "Native and cross-platform mobile apps for iOS and Android that extend your business capabilities.",
                icon: <Smartphone className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Database Solutions",
                description:
                  "Custom database design, development, and optimization for efficient data management and analytics.",
                icon: <Database className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "API Development & Integration",
                description:
                  "Custom APIs and integrations that connect your systems and enable seamless data flow across your organization.",
                icon: <Code className="h-10 w-10 text-teal-600" />,
              },
              {
                title: "Customer Portals",
                description:
                  "Secure, user-friendly portals that enhance customer engagement and self-service capabilities.",
                icon: <Users className="h-10 w-10 text-teal-600" />,
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

