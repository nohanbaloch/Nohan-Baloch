import { ProjectCard } from "@/components/ui/GithubProjectCard";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
}

async function getRepos() {
  try {
    const res = await fetch("https://api.github.com/users/Mehrtek/repos?sort=updated&per_page=12", {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) {
      // Fallback if organization/user not found or rate limited
        console.error("Failed to fetch Github data");
        return [];
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function MehrtekPage() {
  const repos: Repository[] = await getRepos();

  return (
    <main className="min-h-screen pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal width="100%">
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              Mehrtek <span className="text-gradient">Labs</span>
            </h1>
            <p className="text-muted text-xl max-w-2xl">
              Exploring the frontiers of Artificial Intelligence and Open Source. 
              Automatically synced from our GitHub repositories.
            </p>
          </div>
        </Reveal>

        {repos.length === 0 ? (
           <div className="text-center py-20 border border-white/10 rounded-2xl bg-white/5">
             <p className="text-muted">Unable to load repositories at this time. Please visit <a href="https://github.com/Mehrtek" className="text-accent underline">github.com/Mehrtek</a> directly.</p>
           </div>
        ) : (
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <StaggerItem key={repo.id}>
                <ProjectCard 
                  title={repo.name}
                  description={repo.description || "No description provided."}
                  tags={[repo.language || "Code", ...repo.topics].slice(0, 3)}
                  link={repo.html_url}
                  stars={repo.stargazers_count}
                  forks={repo.forks_count}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </div>
    </main>
  );
}
