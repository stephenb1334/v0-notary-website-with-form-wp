"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import BookingWizard from "@/components/BookingWizard";

export default function SchedulePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHero
        title="Schedule Your Appointment"
        subtitle="Book your mobile notary service today. We come to you at your convenience."
        backgroundImage="/images/banners/signing-banner.jpg"
        height="md"
      />
      <div className="mx-auto w-full max-w-2xl px-4 py-8">
        <BookingWizard />
      </div>
      <Footer />
    </div>
  );
}
