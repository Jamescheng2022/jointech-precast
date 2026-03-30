import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Shield,
  Globe2,
  Settings2,
  ChevronRight,
  Factory,
  Train,
  BrickWall,
  Mountain,
} from "lucide-react";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Precision Connections for Precast Concrete Structures",
  description:
    "JamesSplice 鈥?global B2B supplier of pile splice plates, tunnel segment couplers, prestress anchors and more. Technical expertise meets reliable supply.",
};

const advantages = [
  {
    icon: Shield,
    title: "Technical Expertise",
    desc: "20+ years engineering experience in precast connection design. We speak the language of structural engineers.",
  },
  {
    icon: Globe2,
    title: "Global Supply",
    desc: "Export to 40+ countries across SE Asia, Middle East, Europe, and Africa. Reliable logistics from Chinese manufacturing hubs.",
  },
  {
    icon: Settings2,
    title: "Custom Solutions",
    desc: "OEM and bespoke manufacturing available. From drawing to delivery 鈥?full traceability and mill test certificates.",
  },
];

const industries = [
  {
    key: "civil",
    icon: Factory,
    label: "Civil Engineering",
    desc: "Foundation piles, retaining walls, and general precast structure connections.",
    color: "from-blue-600 to-blue-800",
  },
  {
    key: "railway",
    icon: Train,
    label: "Railway & Metro",
    desc: "HSR sleeper inserts, tunnel lining couplers, and track-slab fastening systems.",
    color: "from-emerald-600 to-emerald-800",
  },
  {
    key: "bridge",
    icon: BrickWall,
    label: "Bridge Construction",
    desc: "Post-tensioning anchors, steel strands, and precast girder connection hardware.",
    color: "from-amber-600 to-amber-800",
  },
  {
    key: "underground",
    icon: Mountain,
    label: "Underground Works",
    desc: "Shield tunnel segment couplers and embedded connection systems for deep excavations.",
    color: "from-purple-600 to-purple-800",
  },
];

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-[#0d2340]">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-900/40" />

        <div className="container relative mx-auto px-4 md:px-6 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 bg-accent/20 border border-accent/30 rounded-full text-accent-400 text-sm font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse" />
              B2B Global Export Supplier
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Precision Connections for{" "}
              <span className="text-accent-400">Precast Concrete</span>{" "}
              Structures
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-10 max-w-2xl">
              From pile foundations to tunnel linings and bridge post-tensioning
              鈥?we supply the engineered hardware that holds precast structures
              together, shipped to over 40 countries.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-700 transition-colors shadow-lg"
              >
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
              >
                Get a Quote
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Why Engineers Choose JamesSplice
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We combine manufacturing depth with structural engineering know-how
              to supply hardware that meets the most demanding project specs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((adv) => {
              const Icon = adv.icon;
              return (
                <div
                  key={adv.title}
                  className="group p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:border-primary-200 hover:bg-primary-50 transition-all"
                >
                  <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-primary-100 text-primary-700 mb-5 group-hover:bg-primary-200 transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {adv.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Core Product Lines
              </h2>
              <p className="text-gray-500">
                Engineered for demanding structural applications worldwide.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-900 transition-colors shrink-0"
            >
              View All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-primary-900/80 text-white text-xs font-medium rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 mb-1.5 group-hover:text-primary-700 transition-colors leading-snug">
                    {product.shortName}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium text-accent hover:text-accent-700 gap-1">
                    View Details <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Industries We Serve
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              From metro tunnels to high-speed rail 鈥?our hardware is embedded
              in critical infrastructure globally.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <Link
                  key={ind.key}
                  href={`/industries#${ind.key}`}
                  className="group relative overflow-hidden rounded-2xl p-8 text-white"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${ind.color} transition-transform group-hover:scale-105 duration-300`}
                  />
                  <div className="relative">
                    <Icon className="h-8 w-8 mb-4 opacity-90" />
                    <h3 className="text-lg font-bold mb-2">{ind.label}</h3>
                    <p className="text-sm opacity-80 leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-800">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
            Send us your drawings or specifications. Our technical team will
            respond within 24 hours with product recommendations and pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-700 transition-colors shadow-lg"
            >
              Send an Inquiry <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
