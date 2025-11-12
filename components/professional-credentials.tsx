// components/ProfessionalCredentials.tsx
"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

export default function ProfessionalCredentials() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.classList.add("reveal")
    el.setAttribute("data-direction", "left")
    el.style.setProperty("--reveal-offset-x", "24px")
    el.style.setProperty("--reveal-offset-y", "0px")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("reveal-in")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section aria-labelledby="professional-credentials-heading" className="relative py-12 md:py-16">
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-gradient-to-br from-[#4c5870]/10 via-[#1f2238]/20 to-[#2c3036]/10" />
      </div>

      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 id="professional-credentials-heading" className="text-2xl md:text-3xl font-semibold text-foreground">
            Our Professional Credentials
          </h2>
          <p className="mt-2 text-gray-700">Licensed, certified, and insured for your peace of mind.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <CredentialCard
            title="Notary Commission"
            description="Commissioned State of Florida Notary Public."
            src="/images/credentials/notary-commission-500x500.jpg"
            alt="Fountain pen above a document labeled Notary Public"
          />
          <CredentialCard
            title="NNA Certification"
            description="National Notary Association certified signing agent."
            src="/images/credentials/nna-certification-500x500.jpg"
            alt="Bookshelf with legal volumes, including legislation years"
          />
          <CredentialCard
            title="E&O Insurance"
            description="Errors & Omissions coverage for added protection."
            src="/images/credentials/e-and-o-insurance-500x500.jpg"
            alt="Insurance policy document with terms and conditions"
          />
        </div>
      </div>
    </section>
  )
}

function CredentialCard({
  title,
  description,
  src,
  alt,
}: {
  title: string
  description: string
  src: string
  alt: string
}) {
  return (
    <article className="group rounded-lg bg-card border border-border shadow-md overflow-hidden">
      <div className="relative aspect-square">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-black/15" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-1 text-foreground-secondary">{description}</p>
      </div>
    </article>
  )
}
