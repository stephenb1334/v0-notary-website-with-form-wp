import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, MapPin, Heart, FileText, Globe, Clock, Star, Shield, Award, Users } from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ImageCarousel } from "@/components/image-carousel"

export default function HomePage() {
  const testimonials = [
    {
      name: "Pat",
      text: "We are very pleased with the very timely and excellent service we received. Jill is very knowledgeable and was able to advise us as to exactly what we needed to do to execute our Estate Trust Documents. Everything was done perfectly. We will use her company again and highly recommend her.",
      rating: 5,
    },
    {
      name: "Paul D",
      text: "Jill was professional, prompt, and made the entire notarization process seamless. Highly recommend her services!",
      rating: 5,
    },
    {
      name: "Barbara Domingues",
      text: "Excellent service! Jill came to our home and handled everything efficiently. Very knowledgeable and friendly.",
      rating: 5,
    },
    {
      name: "John Roman",
      text: "Outstanding notary service. Jill is extremely professional and made the process easy to understand. Will definitely use again!",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[700px] flex items-center justify-center bg-primary mt-16 lg:mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/hero-notariesby.jpg)",
            filter: "brightness(0.5)",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-6 text-balance leading-tight">
            Professional Mobile Notary Services in Florida
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Specializing in loan document signings and estate planning. We bring the notary service to you, making the
            process seamless and convenient.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
                Learn More
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 w-full sm:w-auto bg-transparent"
              >
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ImageCarousel />

      <section className="py-0">
        <div className="container mx-auto px-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            <div className="relative h-48 md:h-64">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Notary Commission"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 md:h-64">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="NNA Certification"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 md:h-64">
              <img
                src="/placeholder.svg?height=300&width=400&O+insurance+gavel="
                alt="E&O Insurance"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 md:h-64">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Professional Notary Services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-light mb-4">
              Expert Notary Services for Your Most Important Transactions
            </h2>
            <p className="text-primary-foreground/80 max-w-3xl mx-auto">
              We focus on high-value notary services with expertise in loan document signings and estate planning.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-light mb-6">Loan Document Signings</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Expert notarization for mortgage refinances, purchases, and title company work. We ensure a smooth and
                compliant signing process.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Mortgage refinances</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Home purchases</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Title company work</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Experienced with all major lenders</span>
                </li>
              </ul>

              <Link href="/contact">
                <Button size="lg">Book Loan Document Signing</Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Loan Document Signing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-light mb-4">Our Notary Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive notary and related services throughout Florida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Document Services */}
            <div className="bg-background p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-semibold mb-4">Document Services</h3>
              <p className="text-muted-foreground mb-6">Professional notarization and apostille services</p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">General document notarization</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Mobile notary services covering all 67 Florida counties</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Witnesses for document signing</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Extended hours notary services (with convenience fee)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">LegalZoom document notarization</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Apostille document authentication for international use</span>
                </li>
              </ul>

              <Link href="/services">
                <Button className="w-full">Book Document Services</Button>
              </Link>
            </div>

            {/* Real Estate Services */}
            <div className="bg-background p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-semibold mb-4">Real Estate Services</h3>
              <p className="text-muted-foreground mb-6">Expert notarization for real estate transactions</p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Real estate document notarization and preparation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Seller documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">New home purchase documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Loan signing agent services (NNA and LSS Certified)</span>
                </li>
              </ul>

              <Link href="/services">
                <Button className="w-full">Book Real Estate Services</Button>
              </Link>
            </div>

            {/* Estate Planning */}
            <div className="bg-background p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-semibold mb-4">Estate Planning</h3>
              <p className="text-muted-foreground mb-6">Secure your legacy with proper documentation</p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Last Will and Testament</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Living Will/Advance Healthcare Directive</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Durable Power of Attorney</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Full estate planning packages</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Testamentos, Directivas, Carta de Poder (Spanish services)</span>
                </li>
              </ul>

              <Link href="/services">
                <Button className="w-full">Book Estate Planning</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Florida Apostille Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-light mb-4">Florida Apostille Services</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Efficient, Professional Authentication for International Documents
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Professional Apostille Services</h3>
                  <p className="text-2xl font-bold text-accent mb-4">$250 per Apostille document</p>
                  <p className="text-muted-foreground leading-relaxed">
                    NotariesBy provides streamlined Apostille services across Tampa Bay, working directly with the US
                    Department of State and appropriate governmental agencies to facilitate the authentication of
                    essential documents.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Documents We Authenticate:</h4>
                <p className="text-muted-foreground mb-4">
                  Common State issued documents include Birth Certificates, Death Certificates, Marriage Certificates,
                  Divorce Certificates, Translations, State background Checks, plus more.
                </p>
                <p className="text-muted-foreground">
                  We offer the apostille service to help expedite and simplify the process for individuals that require
                  a Florida Apostille.
                </p>
              </div>

              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Birth certificates</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Marriage licenses and divorce decrees</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Powers of attorney</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">State background checks</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Document translations</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <div className="bg-muted p-6 rounded-lg">
                <div className="flex items-start gap-3 mb-4">
                  <FileText className="w-6 h-6 text-accent flex-shrink-0" />
                  <h4 className="font-semibold">What is an Apostille?</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  An Apostille certifies documents for acceptance in foreign countries under the Hague Apostille
                  Convention.
                </p>
              </div>

              <div className="bg-muted p-6 rounded-lg">
                <div className="flex items-start gap-3 mb-4">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0" />
                  <h4 className="font-semibold">Key Information Needed</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Originating state or agency of the document</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Destination country for document usage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Officiant Services */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-light mb-4">Elegant Wedding Officiant Services</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">Serving Tampa Bay and Surrounding Areas</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border border-primary-foreground/20 p-6 rounded-lg">
                <div className="flex items-start gap-3 mb-4">
                  <Heart className="w-6 h-6 flex-shrink-0" />
                  <h3 className="text-xl font-semibold">Personalized Wedding Ceremonies</h3>
                </div>
                <p className="text-primary-foreground/80 leading-relaxed">
                  Your wedding day is a cherished milestone deserving of a meaningful, personalized ceremony. As your
                  dedicated officiant, I expertly craft ceremonies tailored to your unique love story.
                </p>
              </div>

              <div className="border border-primary-foreground/20 p-6 rounded-lg">
                <div className="flex items-start gap-3 mb-4">
                  <FileText className="w-6 h-6 flex-shrink-0" />
                  <h3 className="text-xl font-semibold">Legal Credentials</h3>
                </div>
                <p className="text-primary-foreground/80 leading-relaxed">
                  Commissioned State of Florida Notary Public fully authorized to officiate weddings.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border border-primary-foreground/20 p-6 rounded-lg">
                <div className="flex items-start gap-3 mb-4">
                  <Heart className="w-6 h-6 flex-shrink-0" />
                  <h4 className="font-semibold">Wedding Services Include</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Heart className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-primary-foreground/80">Traditional wedding ceremonies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-primary-foreground/80">Intimate elopements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-primary-foreground/80">Non-denominational ceremonies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-primary-foreground/80">Personalized vow writing assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-primary-foreground/80">Marriage license guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-primary-foreground/80">Ceremony rehearsal coordination</span>
                  </li>
                </ul>
              </div>

              <div className="border border-primary-foreground/20 p-6 rounded-lg">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-6 h-6 flex-shrink-0" />
                  <h4 className="font-semibold">Service Area</h4>
                </div>
                <p className="text-sm text-primary-foreground/80">
                  Tampa Bay, Pasco County, Hillsborough County, and surrounding areas throughout Florida
                </p>
              </div>

              <Link href="/contact">
                <Button size="lg" variant="secondary" className="w-full">
                  Schedule Wedding Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-light mb-4">What Our Clients Say</h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-muted-foreground">5.0 from 4 Google Reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background p-8 rounded-lg border border-border">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-4 leading-relaxed">"{testimonial.text}"</p>
                <p className="font-semibold">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Appointment CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-light mb-6">
                Schedule Your Notary Appointment Today
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our mobile notary service comes to you at your convenience. Book an appointment today and experience our
                professional, reliable service.
              </p>
              <Link href="/contact">
                <Button size="lg">Book Now</Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Professional meeting space"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-light mb-4">
              Our Certifications and Professional Affiliations
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We maintain the highest standards of professionalism and expertise in the notary industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-background border-2 border-accent flex items-center justify-center">
                <Award className="w-12 h-12 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Certified Notary Signing Agent</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-background border-2 border-accent flex items-center justify-center">
                <Shield className="w-12 h-12 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">National Notary Association Member</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-background border-2 border-accent flex items-center justify-center">
                <Check className="w-12 h-12 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Background Screened</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-background border-2 border-accent flex items-center justify-center">
                <Star className="w-12 h-12 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">5-Star Rated</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Our Founder */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-light mb-6">Our Founder</h2>
              <p className="text-primary-foreground/90 mb-6 leading-relaxed text-lg">
                Jill Munoz brings over 20 years of experience in notary services and real estate to West Coast Notaries.
                Her dedication to professionalism and client satisfaction has made her one of the most trusted notaries
                in Florida.
              </p>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-primary-foreground/80">5.0 from 4 Google Reviews</p>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary-foreground/20">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Jill Munoz, Founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-light mb-4">Our Professional Credentials</h2>
            <p className="text-primary-foreground/80 max-w-3xl mx-auto">
              Licensed, insured, and committed to excellence in every notarization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-lg border border-primary-foreground/20">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Notary Commission"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Notary Commission</h3>
              <p className="text-primary-foreground/80 text-sm">
                Commissioned by the State of Florida with current and active notary status.
              </p>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-lg border border-primary-foreground/20">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="NNA Certification"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">NNA Certification</h3>
              <p className="text-primary-foreground/80 text-sm">
                Certified Signing Agent through the National Notary Association with ongoing education.
              </p>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-lg border border-primary-foreground/20">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="E&O Insurance"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">E&O Insurance</h3>
              <p className="text-primary-foreground/80 text-sm">
                Fully insured with Errors & Omissions coverage for your protection and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-light mb-4">FAQs</h2>
            <p className="text-muted-foreground">Answers to commonly asked questions about our notary services.</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is a notary public?</AccordionTrigger>
              <AccordionContent>
                A notary public is an official appointed by the state government to serve as an impartial witness in the
                signing of important documents. Notaries verify the identity of signers, ensure they are signing
                willingly, and help prevent fraud.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>What ID do I need for notarization?</AccordionTrigger>
              <AccordionContent>
                You need a current, government-issued photo ID such as a driver's license, state ID, passport, or
                military ID. The ID must not be expired and should clearly show your photo, signature, and physical
                description.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>How much do your services cost?</AccordionTrigger>
              <AccordionContent>
                Our pricing varies based on the type of service and location. Standard notarizations start at the
                state-mandated fee, with additional charges for mobile services. Apostille services are $250 per
                document. Contact us for a detailed quote based on your specific needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>How quickly can you schedule an appointment?</AccordionTrigger>
              <AccordionContent>
                We offer flexible scheduling and can often accommodate same-day appointments. For urgent requests, we
                provide expedited services. Contact us at (727) 710-5455 to discuss your timeline and availability.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-light mb-4">Get in Touch</h2>
            <p className="text-muted-foreground">
              Have questions or need to schedule an appointment? Contact us today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-lg font-medium">(727) 710-5455</p>
                      <p className="text-sm text-muted-foreground">Available 9AM-7PM, Monday-Saturday</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-lg font-medium">info@notariesby.com</p>
                      <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Service Area</h4>
                      <p className="text-lg font-medium">Tampa Bay, FL and surrounding areas</p>
                      <p className="text-sm text-muted-foreground">Mobile service - we come to you!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted p-8 rounded-lg">
              <Link href="/contact">
                <Button size="lg" className="w-full">
                  Go to Contact Form
                </Button>
              </Link>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Click above to access our full contact form with service selection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certified & Trusted Professional */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-light mb-4">Certified & Trusted Professional</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our certifications and memberships ensure you receive the highest quality notary services.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-background border-2 border-accent flex items-center justify-center">
                <Award className="w-12 h-12 text-accent" />
              </div>
              <p className="text-sm font-medium">NNA Certified</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-background border-2 border-accent flex items-center justify-center">
                <Shield className="w-12 h-12 text-accent" />
              </div>
              <p className="text-sm font-medium">E&O Insured</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-background border-2 border-accent flex items-center justify-center">
                <Check className="w-12 h-12 text-accent" />
              </div>
              <p className="text-sm font-medium">Background Checked</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-background border-2 border-accent flex items-center justify-center">
                <Star className="w-12 h-12 text-accent" />
              </div>
              <p className="text-sm font-medium">5-Star Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Schedule CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-light mb-6">Ready to Schedule a Notary Service?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book an appointment today and experience our professional, convenient mobile notary services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Book an Appointment
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-light mb-4">Service Areas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide mobile notary services throughout all 67 Florida counties, including:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "Tampa",
              "St. Petersburg",
              "Clearwater",
              "Largo",
              "Pinellas Park",
              "Seminole",
              "Palm Harbor",
              "Wesley Chapel",
            ].map((city) => (
              <div key={city} className="bg-background p-4 rounded-lg text-center border border-border">
                <p className="font-medium">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
