import { Repo } from "../@types/Repo";

export function useRandomRepos() {
  return {
    generate: (arr: Repo[]) => {
      const randomIndexA = Math.floor(Math.random() * arr.length);
      let randomIndexB = Math.floor(Math.random() * arr.length);

      while (randomIndexA === randomIndexB) {
        randomIndexB = Math.floor(Math.random() * arr.length);
      }

      return [arr[randomIndexA], arr[randomIndexB]];
    },
  };
}
