import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle, Home, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Thank You | NotariesBy",
  description: "Your message has been received successfully.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThanksPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center py-16 lg:py-24 mt-16 lg:mt-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-accent" />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light mb-6 text-balance">
              Thank You for Reaching Out
            </h1>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              We have received your message and appreciate you contacting NotariesBy.
            </p>

            <p className="text-muted-foreground mb-10 leading-relaxed">
              Our team will review your inquiry and respond within 24 hours. If you need immediate assistance, please
              don't hesitate to call us at{" "}
              <a href="tel:727-710-5455" className="text-accent hover:underline font-medium">
                727-710-5455
              </a>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground">
                <Link href="/">
                  <Home className="w-4 h-4 mr-2" />
                  Return to Homepage
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <a href="mailto:info@notariesby.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Jill Munoz
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
