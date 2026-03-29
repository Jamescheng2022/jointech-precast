import Link from "next/link";
import { Layers, Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const productLinks = [
  { label: "Pile Splice Plates", href: "/products/pile-splice-plates" },
  { label: "Tunnel Segment Couplers", href: "/products/tunnel-segment-couplers" },
  { label: "Prestress Anchors", href: "/products/prestress-anchors" },
  { label: "Steel Strands", href: "/products/steel-strands" },
  { label: "All Products", href: "/products" },
];

const industryLinks = [
  { label: "Civil Engineering", href: "/industries#civil" },
  { label: "Railway & Metro", href: "/industries#railway" },
  { label: "Bridge Construction", href: "/industries#bridge" },
  { label: "Underground Works", href: "/industries#underground" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-white">
                <Layers className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <span className="block text-base font-bold text-white">JamesSplice</span>
                <span className="block text-[10px] font-medium text-accent-400 tracking-widest uppercase">Precast</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Precision-engineered connection hardware for precast concrete structures. Serving civil, railway, and infrastructure projects worldwide.
            </p>
            <div className="flex gap-3 pt-1">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-md text-gray-400 hover:text-white hover:bg-primary-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="/"
                className="p-2 bg-gray-800 rounded-md text-gray-400 hover:text-white hover:bg-primary-700 transition-colors"
                aria-label="Website"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Products</h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-accent-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Industries</h3>
            <ul className="space-y-2.5">
              {industryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-accent-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent-400" />
                <span>No. 88 Industrial Zone, Zhejiang, China</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="h-4 w-4 shrink-0 text-accent-400" />
                <a href="tel:+86xxxxxxxxxx" className="hover:text-white transition-colors">
                  +86 xxx-xxxx-xxxx
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="h-4 w-4 shrink-0 text-accent-400" />
                <a href="mailto:info@JamesSpliceprecast.com" className="hover:text-white transition-colors">
                  info@JamesSpliceprecast.com
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center px-4 py-2 text-sm font-semibold bg-accent text-white rounded-md hover:bg-accent-700 transition-colors"
            >
              Send Inquiry
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} JamesSplice. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
