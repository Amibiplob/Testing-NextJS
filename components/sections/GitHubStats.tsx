import { siteConfig } from "@/data/config";

async function getGitHubStats() {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${siteConfig.username}`, {
        next: { revalidate: 3600 },
        headers: process.env.GITHUB_TOKEN
          ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          : {},
      }),
      fetch(`https://api.github.com/users/${siteConfig.username}/repos?per_page=100`, {
        next: { revalidate: 3600 },
        headers: process.env.GITHUB_TOKEN
          ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          : {},
      }),
    ]);

    const user = await userRes.json();
    const repos = await reposRes.json();

    const totalStars = Array.isArray(repos)
      ? repos.reduce((sum: number, r: any) => sum + r.stargazers_count, 0)
      : 0;

    const langCount: Record<string, number> = {};
    if (Array.isArray(repos)) {
      repos.forEach((r: any) => {
        if (r.language) langCount[r.language] = (langCount[r.language] || 0) + 1;
      });
    }

    const totalLangRepos = Object.values(langCount).reduce((a, b) => a + b, 0);
    const topLangs = Object.entries(langCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([lang, count]) => ({
        lang,
        pct: Math.round((count / totalLangRepos) * 100),
      }));

    return {
      repos: user.public_repos ?? 42,
      stars: totalStars,
      followers: user.followers ?? 3,
      topLangs,
    };
  } catch {
    return { repos: 42, stars: 0, followers: 3, topLangs: [{ lang: "JavaScript", pct: 60 }, { lang: "HTML", pct: 27 }, { lang: "TypeScript", pct: 13 }] };
  }
}

const langColors: Record<string, string> = {
  JavaScript: "#F59E0B",
  TypeScript: "#3B82F6",
  HTML: "#F97316",
};

export default async function GitHubStats() {
  const stats = await getGitHubStats();

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-100">
      <p className="font-mono text-sm text-teal-600 mb-1">// github</p>
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        Code & Contributions{" "}
        <span className="text-base font-normal text-gray-400">@{siteConfig.username}</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Repositories", value: stats.repos },
          { label: "Total Stars", value: stats.stars },
          { label: "Followers", value: stats.followers },
          { label: "Years Active", value: 4 },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
          Top Languages
        </h3>
        <div className="space-y-3">
          {stats.topLangs.map(({ lang, pct }) => (
            <div key={lang} className="flex items-center gap-3">
              <span className="text-sm text-gray-700 w-24">{lang}</span>
              <div className="flex-1 bg-gray-100 rounded-full h-2">
                <div
                  className="h-2 rounded-full"
                  style={{ width: `${pct}%`, background: langColors[lang] ?? "#6B7280" }}
                />
              </div>
              <span className="text-xs text-gray-400 w-8 text-right">{pct}%</span>
            </div>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
          <p className="text-xs text-gray-400">42 public repositories · Active since Jul 2022</p>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-teal-600 hover:text-teal-800"
          >
            View on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
