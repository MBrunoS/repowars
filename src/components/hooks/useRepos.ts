import { useEffect, useState } from "react";
import { Repo } from "../../@types/Repo";

export function useRepos(amount: number) {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [isReposLoading, setIsReposLoading] = useState(false);

  useEffect(() => {
    setIsReposLoading(true);

    const repos = [
      {
        id: 1,
        name: "Repo 1",
        html_url: "https://github.com",
        description: "This is a new repo",
        stargazers_count: 250,
        full_name: "Repo 1 Full Name",
      },
      {
        id: 2,
        name: "Repo 2",
        html_url: "https://github.com",
        description: "This is another new repo",
        stargazers_count: 250,
        full_name: "Repo 2 Full Name",
      },
    ];
    setRepos(repos);
    setTimeout(() => {
      setIsReposLoading(false);
    }, 5000);
  }, [amount]);

  return { repos, isReposLoading };
}
