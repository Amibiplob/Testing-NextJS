import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/config";

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-32 pb-20">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          {siteConfig.available && (
            <span className="inline-flex items-center gap-2 text-xs font-medium text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              Available for work
            </span>
          )}

          <div>
            <p className="font-mono text-sm text-teal-600 mb-2">// hello world</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Hi, I'm{" "}
              <span className="text-teal-600">Md Biplob</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-500 mt-2">
              Frontend · React · Next.js · Full-Stack
            </h2>
          </div>

          <p className="text-gray-600 leading-relaxed max-w-lg">
            {siteConfig.bio}
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white text-sm font-medium rounded-lg transition-colors"
            >
              View Projects
            </Link>
            <Link
              href="/about"
              className="px-5 py-2.5 border border-gray-300 hover:border-teal-600 hover:text-teal-700 text-sm font-medium rounded-lg transition-colors"
            >
              About Me
            </Link>
            <a
              href={siteConfig.links.email}
              className="px-5 py-2.5 border border-gray-300 hover:border-teal-600 hover:text-teal-700 text-sm font-medium rounded-lg transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href={siteConfig.links.email} className="text-gray-400 hover:text-teal-600 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="w-48 h-48 rounded-2xl overflow-hidden border-2 border-teal-100 bg-teal-50 flex items-center justify-center">
            <img
              src="https://avatars.githubusercontent.com/u/103816819?v=4"
              alt="Md Biplob Hosain"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-3 text-center">
            <p className="font-mono text-xs text-gray-400">@Amibiplob</p>
          </div>
        </div>
      </div>
    </section>
  );
}
