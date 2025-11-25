"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#2C3036]/90 backdrop-blur-md text-white border-b border-white/10">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center group transition-opacity duration-200 hover:opacity-80">
            <Image
              src="/images/notariesby-white-logo-trans.png"
              alt="Notaries By - Mobile Notary Services"
              width={160}
              height={40}
              priority
              className="h-8 lg:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm hover:text-white/70 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-sm hover:text-white/70 transition-colors">
              Services
            </Link>
            <Link href="/schedule" className="text-sm hover:text-white/70 transition-colors">
              Schedule
            </Link>
            <Link href="/about" className="text-sm hover:text-white/70 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm hover:text-white/70 transition-colors">
              Contact
            </Link>
            <Link href="/schedule">
              <Button size="sm" className="bg-white text-[#2d3036] hover:bg-white/90 font-semibold">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm hover:text-white/70 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-sm hover:text-white/70 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/schedule"
                className="text-sm hover:text-white/70 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Schedule
              </Link>
              <Link
                href="/about"
                className="text-sm hover:text-white/70 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm hover:text-white/70 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link href="/schedule" onClick={() => setMobileMenuOpen(false)}>
                <Button size="sm" className="w-full bg-white text-[#2d3036] hover:bg-white/90 font-semibold">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
