import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  FileDown,
  Send,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import { products, getProductBySlug } from "@/lib/products";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-primary-900 py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-blue-300 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">{product.shortName}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Image + quick CTA */}
          <div className="lg:col-span-2 space-y-5">
            <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden bg-gray-200 shadow-lg">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 bg-primary-900/85 text-white text-xs font-semibold rounded-full">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Action buttons */}
            <Link
              href={`/contact?product=${encodeURIComponent(product.name)}`}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent-700 transition-colors shadow"
            >
              <Send className="h-4 w-4" />
              Request a Quote
            </Link>
            <button
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-white text-gray-700 font-medium rounded-xl border border-gray-200 hover:border-primary-300 hover:bg-gray-50 transition-colors"
              title="Technical datasheet (coming soon)"
            >
              <FileDown className="h-4 w-4 text-primary-700" />
              Download Datasheet (PDF)
            </button>

            {/* Standards */}
            <div className="p-5 bg-white rounded-xl border border-gray-200">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                <BookOpen className="h-4 w-4 text-primary-700" />
                Applicable Standards
              </div>
              <ul className="space-y-1.5">
                {product.standards.map((std) => (
                  <li key={std} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                    {std}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Details */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <p className="text-sm font-medium text-accent mb-2">{product.category}</p>
              <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                {product.name}
              </h1>
              <p className="text-gray-500 leading-relaxed">{product.longDescription}</p>
            </div>

            {/* Specs table */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Technical Specifications</h2>
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {product.specs.map((spec, i) => (
                      <tr
                        key={spec.label}
                        className={`border-b border-gray-100 last:border-0 ${
                          i % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }`}
                      >
                        <td className="px-5 py-3.5 font-medium text-gray-700 w-2/5">
                          {spec.label}
                        </td>
                        <td className="px-5 py-3.5 text-gray-600">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Applications */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Typical Applications</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {product.applications.map((app) => (
                  <li
                    key={app}
                    className="flex items-start gap-2.5 px-4 py-3 bg-white rounded-xl border border-gray-200 text-sm text-gray-700"
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary-600 shrink-0 mt-0.5" />
                    {app}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="p-6 bg-primary-50 rounded-2xl border border-primary-100">
              <h3 className="font-semibold text-primary-900 mb-2">
                Need custom dimensions or volume pricing?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Our engineering team can manufacture to your drawings. Send your
                specifications and we'll respond within 24 hours.
              </p>
              <Link
                href={`/contact?product=${encodeURIComponent(product.name)}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-900 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors text-sm"
              >
                Contact Technical Team <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
