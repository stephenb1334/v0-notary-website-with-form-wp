import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export default function FAQPage() {
  const faqs = [
    {
      category: "General Questions",
      questions: [
        {
          question: "What is a notary public?",
          answer:
            "A notary public is an official appointed by the state government to serve as an impartial witness in the signing of important documents. Notaries verify the identity of signers, ensure they are signing willingly and are aware of the contents of the document.",
        },
        {
          question: "Why do I need a notary?",
          answer:
            "Many legal documents require notarization to be considered valid and legally binding. This includes real estate transactions, powers of attorney, wills, trusts, and various business documents. Notarization helps prevent fraud and ensures document authenticity.",
        },
        {
          question: "What do I need to bring to get a document notarized?",
          answer:
            "You'll need to bring: 1) The document(s) to be notarized (unsigned), 2) A valid government-issued photo ID (driver's license, passport, or state ID), and 3) Any additional signers who need to be present. Do not sign the document before meeting with the notary.",
        },
        {
          question: "How much does notarization cost?",
          answer:
            "Notary fees are regulated by state law. Standard notarization typically costs between $5-$15 per signature. Mobile notary services may have additional travel fees. Contact us for specific pricing for your needs.",
        },
      ],
    },
    {
      category: "Services & Appointments",
      questions: [
        {
          question: "Do you offer mobile notary services?",
          answer:
            "Yes! We offer mobile notary services where we come to your home, office, hospital, or any location convenient for you. Mobile services are available during business hours and by special appointment for after-hours needs.",
        },
        {
          question: "How quickly can I get an appointment?",
          answer:
            "We offer same-day appointments for most services. For urgent needs, we can often accommodate you within a few hours. We recommend calling ahead to ensure availability, especially for mobile notary services.",
        },
        {
          question: "Do you provide notary services on weekends?",
          answer:
            "Yes, we're open on Saturdays from 10 AM to 4 PM. Sunday appointments are available by special arrangement. Contact us to schedule a weekend appointment.",
        },
        {
          question: "Can you notarize documents in languages other than English?",
          answer:
            "We can notarize documents in any language, but the notary certificate itself must be in English. The signer must be able to communicate with the notary to confirm they understand what they're signing.",
        },
      ],
    },
    {
      category: "Document Requirements",
      questions: [
        {
          question: "Can I sign the document before seeing the notary?",
          answer:
            "No, you should not sign the document before meeting with the notary. The notary must witness you signing the document. If it's already signed, the notary cannot notarize it.",
        },
        {
          question: "What types of ID are acceptable?",
          answer:
            "Acceptable forms of ID include: driver's license, state-issued ID card, passport, military ID, or other government-issued photo identification. The ID must be current (not expired) and contain a photograph and signature.",
        },
        {
          question: "Can you notarize a document for a family member?",
          answer:
            "Notaries cannot notarize documents for immediate family members (spouse, children, parents, siblings) as this creates a conflict of interest. However, we have multiple notaries on staff who can assist your family members.",
        },
        {
          question: "Do all parties need to be present for notarization?",
          answer:
            "Yes, all individuals who need to sign the document must appear before the notary in person with valid identification. The notary must verify each person's identity and witness their signature.",
        },
      ],
    },
    {
      category: "Special Services",
      questions: [
        {
          question: "What is an apostille?",
          answer:
            "An apostille is a certificate that authenticates the origin of a public document for use in countries that are part of the Hague Apostille Convention. It's required when you need to use U.S. documents in foreign countries.",
        },
        {
          question: "How long does it take to get an apostille?",
          answer:
            "The apostille process typically takes 2-4 weeks when processed through the Secretary of State. We can assist with expedited services if you need faster processing.",
        },
        {
          question: "Do you handle real estate closings?",
          answer:
            "Yes, we provide comprehensive real estate closing services including loan signings, refinancing documents, and property transfers. Our notaries are experienced with all types of real estate transactions.",
        },
        {
          question: "Can you notarize electronic documents?",
          answer:
            "We offer both traditional in-person notarization and remote online notarization (RON) for electronic documents, depending on your state's regulations and the document requirements.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center bg-muted mt-16 lg:mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/placeholder.svg?height=300&width=1920&query=faq+questions+help+desk)",
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-4 text-balance">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our notary services
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl lg:text-3xl font-serif font-light mb-6">{category.category}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`${categoryIndex}-${faqIndex}`}
                    className="border border-border bg-card px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <span className="font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-light mb-6">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Can't find the answer you're looking for? Our team is here to help. Contact us and we'll be happy to assist
            you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
