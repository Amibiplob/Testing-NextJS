import { siteConfig } from "@/data/config";

const experience = [
  {
    role: "Freelance Frontend Developer",
    company: "Self-employed · Remote",
    period: "2023 — Present",
    description:
      "Building React and Next.js web applications for clients. Delivering full-stack solutions with Node.js backends, MongoDB databases, and Vercel deployments.",
    tags: ["React", "Next.js", "Node.js", "MongoDB"],
  },
  {
    role: "Full-Stack Developer (Self-taught)",
    company: "Open Source · Personal Projects",
    period: "Jul 2022 — 2023",
    description:
      "Started from HTML/CSS basics, progressed to React, then built full MERN stack apps. Published 42 public repos with 30+ live-deployed projects on Vercel.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Firebase"],
  },
];

const skillGroups = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Firebase"],
  },
  {
    label: "Tools",
    items: ["Git & GitHub", "VS Code", "Figma", "Vercel", "Netlify", "Docker"],
  },
];

const interests = [
  "Web Development",
  "Open Source",
  "UI Design",
  "SaaS Products",
  "Next.js",
  "Developer Tools",
];

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-28 pb-20">
      <p className="font-mono text-sm text-teal-600 mb-2">// about</p>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6 items-start">
        <div className="flex flex-col gap-5">
          <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 text-xs font-medium text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              Available for work
            </span>
            <img
              src="https://avatars.githubusercontent.com/u/103816819?v=4"
              alt={siteConfig.name}
              className="w-20 h-20 rounded-full border-2 border-teal-100 mb-3"
            />
            <p className="font-semibold text-gray-900">{siteConfig.name}</p>
            <p className="text-sm text-gray-500 mt-0.5">{siteConfig.title}</p>
            <p className="text-xs text-gray-400 flex items-center gap-1 mt-1">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {siteConfig.location}
            </p>
            <p className="text-xs text-gray-500 leading-relaxed mt-3">{siteConfig.bio}</p>

            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full py-2 bg-teal-700 hover:bg-teal-800 text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              View GitHub
            </a>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <p className="text-xs font-semibold text-teal-600 font-mono mb-3">Interests</p>
            <div className="flex flex-wrap gap-2">
              {interests.map((i) => (
                <span key={i} className="text-xs px-2.5 py-1 bg-gray-50 border border-gray-200 text-gray-600 rounded-md">
                  {i}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <p className="text-xs font-semibold text-teal-600 font-mono mb-3">GitHub Stats</p>
            <div className="grid grid-cols-2 gap-2">
              {[{ label: "Repos", val: 42 }, { label: "Followers", val: 3 }, { label: "Stars", val: 0 }, { label: "Years", val: 4 }].map((s) => (
                <div key={s.label} className="bg-gray-50 rounded-lg p-2 text-center">
                  <p className="text-lg font-bold text-gray-900">{s.val}</p>
                  <p className="text-xs text-gray-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
              <h2 className="font-semibold text-gray-900">Skills</h2>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{group.label}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span key={item} className="text-xs px-2 py-0.5 bg-gray-50 border border-gray-200 text-gray-600 rounded-md">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
              <h2 className="font-semibold text-gray-900">Experience</h2>
            </div>
            <div className="space-y-5">
              {experience.map((exp, i) => (
                <div key={i} className={i < experience.length - 1 ? "pb-5 border-b border-gray-100" : ""}>
                  <div className="flex items-start gap-3">
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-teal-500 mt-1.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">{exp.role}</p>
                      <p className="text-xs text-gray-500">{exp.company}</p>
                      <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                        {exp.period}
                      </p>
                      <p className="text-xs text-gray-500 mt-2 leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2 py-0.5 bg-teal-50 text-teal-700 border border-teal-100 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              <h2 className="font-semibold text-gray-900">Education</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-mono text-sm font-medium text-gray-900">B.Sc. Computer Science / Engineering</p>
                  <p className="text-xs text-gray-500 mt-0.5">{siteConfig.university}</p>
                </div>
                <span className="text-xs text-gray-400 whitespace-nowrap">2022 — Present</span>
              </div>
              <div className="flex justify-between items-start border-t border-gray-100 pt-4">
                <div>
                  <p className="font-mono text-sm font-medium text-gray-900">Self-taught Web Development</p>
                  <p className="text-xs text-gray-500 mt-0.5">Official docs, YouTube, hands-on projects</p>
                </div>
                <span className="text-xs text-gray-400 whitespace-nowrap">2022 — Present</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
