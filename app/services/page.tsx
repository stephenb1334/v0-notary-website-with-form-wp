import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Home, Globe, Briefcase, Car, Users, FileCheck, Building, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: FileText,
      title: "General Notarization",
      description: "Standard document notarization for affidavits, contracts, powers of attorney, and more.",
      features: [
        "Affidavits and sworn statements",
        "Powers of attorney",
        "Contracts and agreements",
        "Certified copies",
      ],
    },
    {
      icon: Home,
      title: "Real Estate Services",
      description: "Comprehensive notary services for all your real estate transactions and closings.",
      features: ["Loan signing services", "Refinancing documents", "Property deeds and titles", "Mortgage documents"],
    },
    {
      icon: Globe,
      title: "Apostille Services",
      description: "International document authentication for use in countries that are part of the Hague Convention.",
      features: ["Birth certificates", "Marriage certificates", "Educational documents", "Corporate documents"],
    },
    {
      icon: Briefcase,
      title: "Business Documents",
      description: "Professional notarization for corporate and business-related documents.",
      features: ["Corporate resolutions", "Business contracts", "Partnership agreements", "Commercial leases"],
    },
    {
      icon: Car,
      title: "Vehicle Documents",
      description: "Notarization services for vehicle-related paperwork and title transfers.",
      features: ["Vehicle title transfers", "Bill of sale", "Power of attorney for vehicles", "Odometer disclosures"],
    },
    {
      icon: Users,
      title: "Mobile Notary",
      description: "We come to you! Convenient mobile notary services at your location.",
      features: ["Home visits", "Office appointments", "Hospital and care facilities", "After-hours availability"],
    },
    {
      icon: FileCheck,
      title: "Estate Planning",
      description: "Notarization for wills, trusts, and other estate planning documents.",
      features: ["Last will and testament", "Living trusts", "Healthcare directives", "Beneficiary designations"],
    },
    {
      icon: Building,
      title: "Legal Documents",
      description: "Notarization for various legal documents and court-related paperwork.",
      features: ["Court documents", "Depositions", "Legal affidavits", "Witness statements"],
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-muted mt-16 lg:mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(/placeholder.svg?height=400&width=1920&query=professional+notary+services+documents+and+seal)",
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-4 text-balance">Our Services</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Comprehensive notary services tailored to meet all your document authentication needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-light mb-4">What We Offer</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Professional notarization services for individuals, businesses, and legal professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <ArrowRight className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-light mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Getting your documents notarized is simple and straightforward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-semibold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Schedule Appointment</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Contact us to schedule an appointment at our office or request mobile service to your location.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-semibold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Bring Your Documents</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Bring your documents and valid government-issued ID. We'll review everything with you.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-semibold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Notarized</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We'll notarize your documents quickly and professionally, ensuring legal compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 lg:p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-light mb-4">Need Notary Services?</h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Contact us today to schedule your appointment. We're ready to help with all your notarization needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
                  Schedule Appointment
                </Button>
              </Link>
              <Link href="/faq">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 w-full sm:w-auto bg-transparent"
                >
                  View FAQ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
