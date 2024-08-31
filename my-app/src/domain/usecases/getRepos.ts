import axios from "axios";
import { RepositoryProps } from "@/src/domain/types/repository";

export const getRepos = async (owner: string): Promise<RepositoryProps[]> => {
   // Clé pour stocker les données dans sessionStorage
   const storageKey = `repos_${owner}`;

   // Vérifiez si les données sont déjà présentes dans sessionStorage
   const storedData = sessionStorage.getItem(storageKey);

   if (storedData) {
      // Si les données sont présentes, retournez-les
      return JSON.parse(storedData);
   } else {
      // Si les données ne sont pas présentes, faites la requête à l'API GitHub
      const response = await axios.get<RepositoryProps[]>(
         `https://api.github.com/users/${owner}/repos`
      );

      // Stockez les données dans sessionStorage
      sessionStorage.setItem(storageKey, JSON.stringify(response.data));

      // Retournez les données
      return response.data;
   }
};

export const getTop10ReposBySize = async (
   owner: string
): Promise<RepositoryProps[]> => {
   // Utilisez la fonction getRepos pour obtenir les dépôts
   const repos = await getRepos(owner);

   // Triez les dépôts par taille (size) et retournez les 10 premiers
   return repos.sort((a, b) => (b.size || 0) - (a.size || 0)).slice(0, 8);
};

export const getTop3ReposBySize = async (
   owner: string
): Promise<RepositoryProps[]> => {
   // Utilisez la fonction getRepos pour obtenir les dépôts
   const repos = await getRepos(owner);

   // Triez les dépôts par taille (size) et retournez les 10 premiers
   return repos.sort((a, b) => (b.size || 0) - (a.size || 0)).slice(0, 3);
};
