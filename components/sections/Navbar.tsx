"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/config";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
  { label: "GitHub", href: siteConfig.links.github, external: true },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8f9fa]/90 backdrop-blur-sm border-b border-gray-200">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-mono text-sm font-semibold text-teal-700 flex items-center gap-1">
          <span className="text-teal-500">&gt;_</span> Biplob
        </Link>

        <ul className="flex items-center gap-1">
          {navLinks.map((link) =>
            link.external ? (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-sm text-gray-600 hover:text-teal-700 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                    pathname === link.href
                      ? "bg-teal-50 text-teal-700 font-medium"
                      : "text-gray-600 hover:text-teal-700"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
}
