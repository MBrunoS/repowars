import { Repo } from "../@types/Repo";
import { useRandomRepos } from "./useRandomRepos";

describe("useRandomRepos", () => {
  it("generate returns two random repos from the given array", () => {
    const randomRepos = useRandomRepos();
    const [repoA, repoB] = randomRepos.generate([
      { id: 1, name: "repo-a" } as Repo,
      { id: 2, name: "repo-b" } as Repo,
      { id: 3, name: "repo-c" } as Repo,
    ]);

    expect(repoA).toBeDefined();
    expect(repoB).toBeDefined();
    expect(repoA).not.toMatchObject(repoB as Repo);
  });

  it("generate returns undefined when given an empty array or a single-element array", () => {
    const randomRepos = useRandomRepos();
    const [repoA, repoB] = randomRepos.generate([]);

    expect(repoA).toBeUndefined();
    expect(repoB).toBeUndefined();

    const repo = { name: "Test Repo", owner: { avatar_url: "" } } as Repo;
    const [repoC, repoD] = randomRepos.generate([repo]);

    expect(repoC).toBeUndefined();
    expect(repoD).toBeUndefined();
  });
});
