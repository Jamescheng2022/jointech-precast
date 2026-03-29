import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight } from "lucide-react";
import { getProductsByIndustry, type IndustryKey } from "@/lib/products";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "JoinTech Precast serves civil engineering, railway & metro, bridge construction, and underground tunnel projects worldwide.",
};

const industries = [
  {
    id: "civil" as IndustryKey,
    title: "Civil Engineering",
    subtitle: "Foundation & General Precast",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    color: "from-blue-600 to-blue-900",
    description:
      "Precast concrete is the backbone of modern civil infrastructure. Our pile splice plates and connection hardware ensure structural integrity from foundation to superstructure in residential towers, industrial buildings, and coastal protection works.",
    highlights: [
      "PHC and PC pile end plate connections",
      "Sheet pile interlocking hardware",
      "Precast wall panel embeds",
      "Corrosion-resistant coatings for marine environments",
    ],
  },
  {
    id: "railway" as IndustryKey,
    title: "Railway & Metro",
    subtitle: "High-Speed Rail & Urban Transit",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&q=80",
    color: "from-emerald-600 to-emerald-900",
    description:
      "Railways demand the highest dimensional precision and fatigue resistance. Our embedded sleeper fastener sleeves and tunnel lining couplers are designed to meet EN 13481, TB/T, and UIC standards for both high-speed and heavy-haul operations.",
    highlights: [
      "HSR sleeper embedded anchor sleeves",
      "Shield tunnel segment coupler sleeves",
      "Slab track fastening inserts",
      "Compatible with Pandrol, Vossloh, Nabla systems",
    ],
  },
  {
    id: "bridge" as IndustryKey,
    title: "Bridge Construction",
    subtitle: "Prestressed Concrete & Post-Tensioning",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80",
    color: "from-amber-600 to-amber-900",
    description:
      "Long-span bridges rely on precision post-tensioning systems. We supply complete anchor assemblies and low-relaxation strand that meet PTI, GB/T, and EN standards, backed by full mill test certificates and factory proof-testing.",
    highlights: [
      "Complete post-tensioning anchor sets (3T – 19T)",
      "Low-relaxation Ø12.7mm & Ø15.2mm strands",
      "Corrugated HDPE post-tensioning ducts",
      "Grout caps and vent accessories",
    ],
  },
  {
    id: "underground" as IndustryKey,
    title: "Underground Works",
    subtitle: "Shield Tunnels & Deep Excavations",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    color: "from-purple-600 to-purple-900",
    description:
      "Shield-driven tunnels require watertight, load-bearing connections at every segment joint. Our coupler sleeves are cast into segment molds at the precast plant, providing reliable rebar continuity across the gasket-sealed joint face.",
    highlights: [
      "Longitudinal and circumferential segment couplers",
      "Ductile iron or nodular cast iron material",
      "Compatible with Ø4m – Ø14m shield tunnels",
      "Suitable for water, road, metro, and utility tunnels",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary-900 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-blue-300 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Industries</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3">Industries We Serve</h1>
          <p className="text-blue-200 max-w-2xl">
            From high-speed rail to deep-sea tunnels — our connection hardware is
            embedded in critical infrastructure projects across 40+ countries.
          </p>
        </div>
      </div>

      {/* Industry sections */}
      <div className="container mx-auto px-4 md:px-6 py-16 space-y-20">
        {industries.map((ind, idx) => {
          const relatedProducts = getProductsByIndustry(ind.id);
          return (
            <section key={ind.id} id={ind.id}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image — alternating sides */}
                <div
                  className={`relative h-80 rounded-2xl overflow-hidden shadow-xl ${
                    idx % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${ind.color} opacity-60`}
                  />
                  <div className="absolute bottom-6 left-6">
                    <p className="text-xs font-semibold text-white/80 uppercase tracking-widest mb-1">
                      {ind.subtitle}
                    </p>
                    <h2 className="text-2xl font-bold text-white">{ind.title}</h2>
                  </div>
                </div>

                {/* Content */}
                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {ind.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-6">
                    {ind.description}
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {ind.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <span className="h-5 w-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center shrink-0 mt-0.5">
                          ✓
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {relatedProducts.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                        Related Products
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {relatedProducts.map((p) => (
                          <Link
                            key={p.id}
                            href={`/products/${p.slug}`}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white rounded-lg border border-gray-200 text-sm text-gray-700 hover:border-primary-300 hover:text-primary-700 transition-colors"
                          >
                            {p.shortName}
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <div className="bg-primary-900 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Working on a project in one of these sectors?
          </h2>
          <p className="text-blue-200 mb-8 max-w-lg mx-auto">
            Tell us your specifications. Our engineers will recommend the right
            products and supply chain solution.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-700 transition-colors"
          >
            Get Technical Support <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
