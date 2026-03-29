"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Layers } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary-900/20 bg-primary-900 shadow-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-white">
            <Layers className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <span className="block text-base font-bold text-white tracking-wide">
              JoinTech
            </span>
            <span className="block text-[10px] font-medium text-accent-300 tracking-widest uppercase">
              Precast
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-blue-100 hover:text-white hover:bg-primary-800 rounded-md transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 px-5 py-2 text-sm font-semibold bg-accent text-white rounded-md hover:bg-accent-700 transition-colors shadow"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2 rounded-md hover:bg-primary-800 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-primary-800 bg-primary-900 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm font-medium text-blue-100 hover:text-white hover:bg-primary-800 rounded-md transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block mt-2 px-4 py-2.5 text-sm font-semibold bg-accent text-white rounded-md hover:bg-accent-700 text-center transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
