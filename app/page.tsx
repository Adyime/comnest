import { CheckCircle } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { ExpertiseSection } from "@/components/expertise-section"
import { CtaSection } from "@/components/cta-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Expertise Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Expertise</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive technology solutions tailored to your business needs
          </p>
        </div>
        <ExpertiseSection />
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose COMnEST?</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We don't just provide products—we deliver reliable, innovative, and future-ready communication solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <h3 className="font-semibold text-xl">Comprehensive Solutions</h3>
              </div>
              <p className="text-muted-foreground">
                From consultation to deployment and support, we provide end-to-end services for all your technology
                needs
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <h3 className="font-semibold text-xl">Expert Installation & Configuration</h3>
              </div>
              <p className="text-muted-foreground">
                Our team ensures seamless integration and high performance for all implemented solutions
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <h3 className="font-semibold text-xl">Customer-Centric Approach</h3>
              </div>
              <p className="text-muted-foreground">
                Your satisfaction is our top priority, and we work closely with you to meet your specific requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </main>
  )
}

