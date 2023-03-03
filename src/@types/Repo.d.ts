export interface Repo {
  id: number;
  name: string;
  description: string;
  full_name: string;
  stargazers_count: number;
  topics: string[];
  owner: {
    avatar_url: string;
  };
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
}
