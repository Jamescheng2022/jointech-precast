import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Award,
  Users,
  PackageCheck,
  Globe2,
  BarChart3,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about JoinTech Precast — 20+ years of manufacturing precision connection hardware for precast concrete structures.",
};

const stats = [
  { label: "Years in Business", value: "20+" },
  { label: "Countries Served", value: "40+" },
  { label: "Products Shipped (tons/yr)", value: "5,000+" },
  { label: "Engineering Staff", value: "30+" },
];

const certifications = [
  { name: "ISO 9001:2015", desc: "Quality Management System" },
  { name: "ISO 14001:2015", desc: "Environmental Management" },
  { name: "CE Marking", desc: "European Conformity (select products)" },
  { name: "GB/T Standards", desc: "Chinese National Standards compliance" },
];

const team = [
  {
    name: "James Chen",
    title: "General Manager & Co-Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    desc: "15+ years in precast hardware export. Structural engineering background.",
  },
  {
    name: "Linda Wang",
    title: "Head of Technical Sales",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    desc: "Specializes in bridge post-tensioning and railway applications.",
  },
  {
    name: "Michael Li",
    title: "Chief Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    desc: "Expert in coupler sleeve design and prestress system engineering.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary-900 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-blue-300 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">About</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3">About JoinTech Precast</h1>
          <p className="text-blue-200 max-w-2xl">
            A specialist manufacturer and exporter of precast concrete connection
            hardware — built on two decades of structural engineering expertise.
          </p>
        </div>
      </div>

      {/* Company intro */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                Engineering the Connections That Hold Infrastructure Together
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Founded in Zhejiang, China, JoinTech Precast has grown from a
                  regional steel fabricator to a globally trusted supplier of
                  engineered connection hardware for precast concrete structures.
                </p>
                <p>
                  Our product range covers pile splice plates, tunnel segment
                  coupler sleeves, bridge prestress anchor systems, low-relaxation
                  steel strands, and railway sleeper fastener inserts — all
                  manufactured in-house under strict quality control.
                </p>
                <p>
                  We work directly with structural engineers, project procurement
                  teams, and EPC contractors to provide technically compliant
                  products with full traceability. Every shipment is backed by
                  mill test certificates and factory inspection reports.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary-900 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors"
              >
                Talk to Our Engineers <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
                alt="JoinTech factory"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-bold text-accent-400 mb-2">{s.value}</p>
                <p className="text-blue-200 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-14">
            Our Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {[
              {
                icon: PackageCheck,
                title: "In-House Manufacturing",
                desc: "CNC machining, forging, casting, and steel fabrication all under one roof. No subcontracting on critical components.",
              },
              {
                icon: Award,
                title: "Quality Assurance",
                desc: "ISO 9001:2015 certified. Every batch undergoes dimensional inspection, mechanical testing, and surface treatment verification.",
              },
              {
                icon: Users,
                title: "Technical Support",
                desc: "Our engineering team can review drawings, advise on product selection, and provide installation guidance in English.",
              },
              {
                icon: Globe2,
                title: "Export Experience",
                desc: "Regular shipments to SE Asia, the Middle East, East Africa, and Europe. Familiar with L/C, T/T, and project-based payment terms.",
              },
              {
                icon: BarChart3,
                title: "Custom Manufacturing",
                desc: "OEM orders accepted. From material selection to surface treatment and packaging — we adapt to your project specs.",
              },
              {
                icon: Award,
                title: "Full Documentation",
                desc: "Mill test certs, factory inspection reports, packing lists, and COA provided as standard with every order.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-7 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all"
                >
                  <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-primary-100 text-primary-700 mb-5">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-14">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative h-32 w-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary-100 shadow">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-accent font-medium mb-2">{member.title}</p>
                <p className="text-sm text-gray-500">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Quality Certifications
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="bg-white rounded-xl border border-gray-200 p-5 text-center hover:border-primary-300 hover:shadow transition-all"
              >
                <Award className="h-8 w-8 text-accent mx-auto mb-3" />
                <p className="font-bold text-gray-900 text-sm mb-1">{cert.name}</p>
                <p className="text-xs text-gray-500">{cert.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            * Copies of certificates available upon request.
          </p>
        </div>
      </section>
    </div>
  );
}
