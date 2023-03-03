import { useEffect, useState } from "react";
import { Repo } from "../@types/Repo";
import { githubClient } from "../api";

function getRandomInt() {
  return Math.floor(Math.random() * 1000000);
}

export function useRepos(amount: number) {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [isReposLoading, setIsReposLoading] = useState(false);

  useEffect(() => {
    setIsReposLoading(true);

    githubClient
      .request("GET /search/repositories", {
        q: `is:public stars:>1000 fork:false`,
        sort: "stars",
        order: "desc",
        per_page: amount,
        since: getRandomInt(),
        page: 1,
      })
      .then((response) => {
        setRepos(response.data.items as Repo[]);
        setIsReposLoading(false);
      });
  }, [amount]);

  return { repos, isReposLoading };
}
