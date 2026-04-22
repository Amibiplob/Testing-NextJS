import { siteConfig } from "@/data/config";

const groups = [
  { label: "Frontend", key: "frontend" as const, color: "text-teal-700 bg-teal-50 border-teal-200" },
  { label: "Backend", key: "backend" as const, color: "text-blue-700 bg-blue-50 border-blue-200" },
  { label: "Tools", key: "tools" as const, color: "text-purple-700 bg-purple-50 border-purple-200" },
];

export default function TechStack() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-100">
      <p className="font-mono text-sm text-teal-600 mb-1">// skills</p>
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Tech Stack</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {groups.map((group) => (
          <div key={group.label} className="bg-white rounded-xl border border-gray-200 p-5">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {siteConfig.skills[group.key].map((skill) => (
                <span
                  key={skill}
                  className={`text-xs font-medium px-2.5 py-1 rounded-md border ${group.color}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
