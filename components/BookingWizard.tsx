"use client";
import { useState } from "react";

// Types for the booking wizard data
type ServiceOption =
  | "Loan Document Signing"
  | "Real Estate Services"
  | "Estate Planning Documents"
  | "Power of Attorney"
  | "Apostille Service"
  | "General Notarization"
  | "Vehicle Documentation"
  | "Business Documents"
  | "Wedding Officiant"
  | "I-9 Verification"
  | "Witness Services"
  | "Other Service";

type UrgencyValue = "1-3" | "3-7" | "7-21";

interface BookingState {
  service?: ServiceOption;
  clarifier?: string;
  urgencyValue?: UrgencyValue;
  urgencyLabel?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  contactPref?: string;
  location?: string;
  note?: string;
}

// Mapping of services to their clarifier questions and options
const serviceClarifiers: Record<ServiceOption, { question: string; options?: string[] }> = {
  "Loan Document Signing": {
    question: "What type of loan signing?",
    options: ["Refinance", "New purchase", "HELOC / equity", "Other"],
  },
  "Real Estate Services": {
    question: "What kind of real estate signing is this?",
    options: ["Buyer documents", "Seller documents", "Closing package", "Other"],
  },
  "Estate Planning Documents": {
    question: "Which estate document is this mainly for?",
    options: ["Will", "Living Will / Healthcare Directive", "Power of Attorney", "Full estate package", "Other"],
  },
  "Power of Attorney": {
    question: "Is this Power of Attorney mainly for finances, healthcare, or general use?",
    options: ["Finances", "Healthcare", "General", "Other"],
  },
  "Apostille Service": {
    question: "What type of document needs an apostille?",
    options: [
      "Birth certificate",
      "Marriage certificate / divorce decree",
      "State background check",
      "Power of Attorney for international use",
      "Other",
    ],
  },
  "General Notarization": {
    question: "What kind of document is this?",
    options: ["Affidavit", "Letter", "Agreement", "Other"],
  },
  "Vehicle Documentation": {
    question: "Is this for VIN verification, odometer verification, or registration paperwork?",
    options: ["VIN verification", "Odometer verification", "Registration paperwork", "Other"],
  },
  "Business Documents": {
    question: "What type of business document is this?",
    options: ["Contracts", "Corporate resolutions / minutes", "Other"],
  },
  "Wedding Officiant": {
    question: "What type of ceremony?",
    options: ["Wedding", "Elopement", "Vow renewal", "Other"],
  },
  "I-9 Verification": {
    question: "Is this for a new hire or an existing employee?",
    options: ["New hire", "Existing employee", "Not sure"],
  },
  "Witness Services": {
    question: "How many witnesses do you need us to provide?",
    options: ["1", "2", "3 or more"],
  },
  "Other Service": {
    question: "Briefly describe what you need notarized or officiated.",
  },
};

/**
 * BookingWizard implements a multi-step wizard for booking notary services.
 * It captures the selected service, a service-specific clarifier, an urgency band,
 * the user's contact information, appointment location, and a detailed note.
 *
 * On completion, the wizard displays a summary and provides two submission options:
 * - A mailto: link to send the request via the user's email client.
 * - A POST request to /api/book-notary for server-side handling (variant B).
 */
export default function BookingWizard() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<BookingState>({});

  // Update a specific field in the booking state.
  function update<K extends keyof BookingState>(key: K, value: BookingState[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function next() {
    setStep((s) => Math.min(7, s + 1));
  }
  function back() {
    setStep((s) => Math.max(1, s - 1));
  }

  // Validate that the current step's required fields are filled.
  function isStepComplete(): boolean {
    switch (step) {
      case 1:
        return !!data.service;
      case 2:
        return !!data.clarifier;
      case 3:
        return !!data.urgencyValue && !!data.urgencyLabel;
      case 4:
        return !!data.firstName && !!data.email && !!data.phone;
      case 5:
        return !!data.location;
      case 6:
        return !!data.note;
      default:
        return true;
    }
  }

  // Compose email subject for the booking request.
  function getEmailSubject() {
    return `New Booking Request: ${data.service} – ${data.urgencyLabel}`;
  }

  // Compose email body with all booking details.
  function getEmailBody() {
    return [
      "New booking request from the NotariesBy website",
      "",
      `Service: ${data.service}`,
      `Details: ${data.clarifier}`,
      `Urgency: ${data.urgencyLabel}`,
      "",
      `${`Name: ${data.firstName ?? ""} ${data.lastName ?? ""}`.trim()}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Preferred contact method: ${data.contactPref || "Not specified"}`,
      `Location: ${data.location}`,
      "",
      "Extra details and possible days/times:",
      data.note ?? "",
      "",
      "Please respond directly to the client to confirm an appointment time within their requested timeframe.",
    ].join("\n");
  }

  // Trigger a mailto: link for Variant A. Encodes subject and body.
  function handleMailTo() {
    const subject = encodeURIComponent(getEmailSubject());
    const body = encodeURIComponent(getEmailBody());
    window.location.href = `mailto:info@notariesby.com?subject=${subject}&body=${body}`;
  }

  // POST booking data to the custom API endpoint for Variant B.
  async function handleSubmitApi() {
    const res = await fetch("/api/book-notary", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      alert("Your booking request has been sent!");
      // Optionally reset wizard or navigate to thank-you page
    } else {
      alert("Error sending booking request. Please try again later.");
    }
  }

  return (
    <div className="booking-wizard">
      {step === 1 && (
        <div>
          <h2 className="mb-2 text-lg font-semibold">What do you need help with?</h2>
          <select
            className="w-full p-2 border rounded"
            value={data.service ?? ""}
            onChange={(e) => update("service", e.target.value as ServiceOption)}
          >
            <option value="" disabled>
              Select a service…
            </option>
            {(Object.keys(serviceClarifiers) as ServiceOption[]).map((srv) => (
              <option key={srv} value={srv}>
                {srv}
              </option>
            ))}
          </select>
        </div>
      )}

      {step === 2 && data.service && (
        <div>
          <h2 className="mb-2 text-lg font-semibold">{serviceClarifiers[data.service].question}</h2>
          {serviceClarifiers[data.service].options ? (
            <select
              className="w-full p-2 border rounded"
              value={data.clarifier ?? ""}
              onChange={(e) => update("clarifier", e.target.value)}
            >
              <option value="" disabled>
                Choose an option…
              </option>
              {serviceClarifiers[data.service].options!.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : (
            <input
              className="w-full p-2 border rounded"
              type="text"
              value={data.clarifier ?? ""}
              onChange={(e) => update("clarifier", e.target.value)}
              placeholder="Describe your need"
            />
          )}
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="mb-2 text-lg font-semibold">How soon do you need this?</h2>
          <div className="flex flex-col gap-2">
            <label>
              <input
                type="radio"
                name="urgency"
                value="1-3"
                onChange={() => {
                  update("urgencyValue", "1-3");
                  update("urgencyLabel", "Within 1–3 days (Urgent)");
                }}
                checked={data.urgencyValue === "1-3"}
              />
              <span className="ml-2">Within 1–3 days (Urgent)</span>
            </label>
            <label>
              <input
                type="radio"
                name="urgency"
                value="3-7"
                onChange={() => {
                  update("urgencyValue", "3-7");
                  update("urgencyLabel", "Within 3–7 days (Soon)");
                }}
                checked={data.urgencyValue === "3-7"}
              />
              <span className="ml-2">Within 3–7 days (Soon)</span>
            </label>
            <label>
              <input
                type="radio"
                name="urgency"
                value="7-21"
                onChange={() => {
                  update("urgencyValue", "7-21");
                  update("urgencyLabel", "Within 7–21 days (Flexible)");
                }}
                checked={data.urgencyValue === "7-21"}
              />
              <span className="ml-2">Within 7–21 days (Flexible)</span>
            </label>
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <h2 className="mb-2 text-lg font-semibold">How can we reach you?</h2>
          <input
            className="w-full mb-2 p-2 border rounded"
            type="text"
            placeholder="First name"
            value={data.firstName ?? ""}
            onChange={(e) => update("firstName", e.target.value)}
            required
          />
          <input
            className="w-full mb-2 p-2 border rounded"
            type="text"
            placeholder="Last name (optional)"
            value={data.lastName ?? ""}
            onChange={(e) => update("lastName", e.target.value)}
          />
          <input
            className="w-full mb-2 p-2 border rounded"
            type="email"
            placeholder="Your email"
            value={data.email ?? ""}
            onChange={(e) => update("email", e.target.value)}
            required
          />
          <input
            className="w-full mb-2 p-2 border rounded"
            type="tel"
            placeholder="Your phone number"
            value={data.phone ?? ""}
            onChange={(e) => update("phone", e.target.value)}
            required
          />
          <fieldset className="mt-2">
            <legend className="text-sm mb-1">Best way to reach you (optional)</legend>
            <label className="mr-4">
              <input
                type="radio"
                name="pref"
                value="Call"
                onChange={(e) => update("contactPref", e.target.value)}
                checked={data.contactPref === "Call"}
              />
              <span className="ml-1">Call</span>
            </label>
            <label className="mr-4">
              <input
                type="radio"
                name="pref"
                value="Text"
                onChange={(e) => update("contactPref", e.target.value)}
                checked={data.contactPref === "Text"}
              />
              <span className="ml-1">Text</span>
            </label>
            <label>
              <input
                type="radio"
                name="pref"
                value="Email"
                onChange={(e) => update("contactPref", e.target.value)}
                checked={data.contactPref === "Email"}
              />
              <span className="ml-1">Email</span>
            </label>
          </fieldset>
        </div>
      )}

      {step === 5 && (
        <div>
          <h2 className="mb-2 text-lg font-semibold">Where is the appointment?</h2>
          <input
            className="w-full p-2 border rounded"
            type="text"
            placeholder="City or area (e.g., Tampa, Palm Harbor, Wesley Chapel)"
            value={data.location ?? ""}
            onChange={(e) => update("location", e.target.value)}
            required
          />
        </div>
      )}

      {step === 6 && (
        <div>
          <h2 className="mb-2 text-lg font-semibold">Extra details and your best days/times</h2>
          <textarea
            className="w-full p-2 border rounded"
            placeholder="Tell us anything else we should know, and list a few possible days and times when we can call you within your urgency window."
            value={data.note ?? ""}
            onChange={(e) => update("note", e.target.value)}
            required
          />
        </div>
      )}

      {step === 7 && (
        <div>
          <h2 className="mb-2 text-lg font-semibold">Review your request</h2>
          <ul className="mb-4 list-disc list-inside">
            <li>
              <strong>Service:</strong> {data.service}
            </li>
            <li>
              <strong>Details:</strong> {data.clarifier}
            </li>
            <li>
              <strong>Urgency:</strong> {data.urgencyLabel}
            </li>
            <li>
              <strong>Name:</strong> {data.firstName} {data.lastName}
            </li>
            <li>
              <strong>Email:</strong> {data.email}
            </li>
            <li>
              <strong>Phone:</strong> {data.phone}
            </li>
            <li>
              <strong>Location:</strong> {data.location}
            </li>
            <li>
              <strong>Preferred contact method:</strong> {data.contactPref || "Not specified"}
            </li>
            <li>
              <strong>Extra details / days & times:</strong> {data.note}
            </li>
          </ul>
          <div className="flex gap-4">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded"
              onClick={handleMailTo}
            >
              Send Booking Request (Mailto)
            </button>
            <button
              className="px-4 py-2 bg-green-600 text-white rounded"
              onClick={handleSubmitApi}
            >
              Send Booking Request (API)
            </button>
          </div>
        </div>
      )}

      {/* Navigation buttons */}
      <div className="mt-4 flex justify-between">
        {step > 1 && step <= 7 && (
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 rounded"
            onClick={back}
          >
            Back
          </button>
        )}
        {step < 7 && (
          <button
            type="button"
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={next}
            disabled={!isStepComplete()}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
