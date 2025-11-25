"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2 } from "lucide-react"

export function ContactForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedService, setSelectedService] = useState("")
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    formData.set("service", selectedService)

    console.log("[v0] Form data being submitted:")
    formData.forEach((value, key) => {
      console.log(`[v0] ${key}: ${value}`)
    })

    try {
      const response = await fetch("https://formspree.io/f/xrbrgjla", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      console.log("[v0] Response status:", response.status)
      const responseData = await response.json()
      console.log("[v0] Response data:", responseData)

      if (response.ok) {
        router.push("/thanks")
      } else {
        setError(responseData.error || "Failed to send message. Please try again.")
      }
    } catch (err) {
      console.error("[v0] Form submission error:", err)
      setError("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">{error}</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input id="firstName" name="firstName" required placeholder="John" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input id="lastName" name="lastName" required placeholder="Doe" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input id="email" name="email" type="email" required placeholder="john.doe@example.com" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number *</Label>
        <Input id="phone" name="phone" type="tel" required placeholder="(555) 123-4567" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Service Needed *</Label>
        <Select value={selectedService} onValueChange={setSelectedService} required>
          <SelectTrigger id="service">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general-notarization">General Notarization</SelectItem>
            <SelectItem value="real-estate">Real Estate Services</SelectItem>
            <SelectItem value="apostille">Apostille Services</SelectItem>
            <SelectItem value="business-documents">Business Documents</SelectItem>
            <SelectItem value="vehicle-documents">Vehicle Documents</SelectItem>
            <SelectItem value="mobile-notary">Mobile Notary</SelectItem>
            <SelectItem value="estate-planning">Estate Planning</SelectItem>
            <SelectItem value="legal-documents">Legal Documents</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        <input type="hidden" name="service" value={selectedService} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="preferredDate">Preferred Date</Label>
        <Input id="preferredDate" name="preferredDate" type="date" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Please provide details about your notarization needs..."
          rows={6}
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground">
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting this form, you agree to our privacy policy and terms of service.
      </p>
    </form>
  )
}
