import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Mail, Phone, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact & Inquiry",
  description:
    "Send a technical inquiry to JoinTech Precast. Our engineering team responds within 24 hours.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@jointechprecast.com",
    href: "mailto:info@jointechprecast.com",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+86 xxx-xxxx-xxxx",
    href: "tel:+86xxxxxxxxxx",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "No. 88 Industrial Zone, Zhejiang Province, China",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours (business days)",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary-900 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-blue-300 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Contact</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3">Send an Inquiry</h1>
          <p className="text-blue-200 max-w-xl">
            Share your product requirements or drawings. Our engineering team
            will respond with product recommendations and pricing within 24 hours.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact info sidebar */}
          <div className="space-y-5">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Get in Touch
            </h2>
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary-100 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-primary-700" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-400 mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-gray-700 hover:text-primary-700 transition-colors font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-700 font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              );
            })}

            <div className="p-5 bg-primary-900 rounded-xl text-blue-100 text-sm leading-relaxed">
              <p className="font-semibold text-white mb-2">Tip for faster response:</p>
              Include the product name, quantity, applicable standard, and your
              country in the message. Attach drawings if available.
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Product Inquiry Form
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
