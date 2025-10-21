import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-24 lg:py-32 mt-16 lg:mt-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl text-center">
          <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-accent" />
          </div>

          <h1 className="text-4xl lg:text-5xl font-serif font-light mb-4">Thank You!</h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Your booking request has been received successfully.
          </p>

          <div className="bg-muted p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-4">What Happens Next?</h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-semibold text-accent">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Confirmation Email</h3>
                  <p className="text-sm text-muted-foreground">
                    You'll receive a confirmation email within 24 hours with your appointment details.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-semibold text-accent">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Appointment Preparation</h3>
                  <p className="text-sm text-muted-foreground">
                    We'll contact you to confirm the details and answer any questions you may have.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-semibold text-accent">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Service Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    We'll arrive at your location at the scheduled time to complete your notarization.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" className="w-full sm:w-auto">
                Return to Home
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                View Our Services
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Need immediate assistance? Call us at{" "}
            <a href="tel:7277105455" className="text-accent hover:underline">
              (727) 710-5455
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
