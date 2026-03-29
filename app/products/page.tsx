import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { products, CATEGORIES, type Category } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse our full range of precast concrete connection hardware: pile splice plates, tunnel segment couplers, prestress anchors, steel strands, and railway fastener sleeves.",
};

interface Props {
  searchParams: { category?: string };
}

export default function ProductsPage({ searchParams }: Props) {
  const activeCategory = searchParams.category as Category | undefined;

  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header */}
      <div className="bg-primary-900 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-blue-300 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Products</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3">Our Products</h1>
          <p className="text-blue-200 max-w-xl">
            Precision-engineered connection hardware for precast concrete
            structures across civil, railway, bridge, and underground applications.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Category filter */}
        <div className="flex flex-wrap gap-3 mb-10">
          <Link
            href="/products"
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              !activeCategory
                ? "bg-primary-900 text-white border-primary-900"
                : "bg-white text-gray-600 border-gray-200 hover:border-primary-300"
            }`}
          >
            All Products
          </Link>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href={`/products?category=${encodeURIComponent(cat)}`}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                activeCategory === cat
                  ? "bg-primary-900 text-white border-primary-900"
                  : "bg-white text-gray-600 border-gray-200 hover:border-primary-300"
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all"
            >
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-primary-900/85 text-white text-xs font-medium rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors leading-snug">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {product.applications.slice(0, 2).map((app) => (
                    <span
                      key={app}
                      className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {app}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent-700 transition-colors">
                    View Details <ChevronRight className="h-4 w-4" />
                  </span>
                  <span className="text-xs text-gray-400">
                    {product.standards[0]}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center text-gray-400">
            No products found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
