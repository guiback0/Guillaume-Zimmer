import { RepositoryProps } from "../domain/types/repository";

export const transformRepositories = (repositories: RepositoryProps[]) => {
   return repositories.map((repo) => ({
      name: repo.name,
      description: repo.description || "Aucune description.",
      html_url: repo.html_url,
      language: repo.language,
   }));
};
