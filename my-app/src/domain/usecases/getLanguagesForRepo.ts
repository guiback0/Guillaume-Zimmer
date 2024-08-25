import axios from "axios";
import { LanguageProps } from "@/src/domain/types/language";

export const getLanguagesForRepo = async (
   owner: string,
   repo: string
): Promise<LanguageProps> => {
   // Clé pour stocker les données dans localStorage
   const storageKey = `languages_${owner}_${repo}`;

   // Vérifiez si les données sont déjà présentes dans localStorage
   const storedData = localStorage.getItem(storageKey);

   if (storedData) {
      // Si les données sont présentes, retournez-les
      return JSON.parse(storedData);
   } else {
      // Si les données ne sont pas présentes, faites la requête à l'API GitHub
      const response = await axios.get<LanguageProps>(
         `https://api.github.com/repos/${owner}/${repo}/languages`
      );

      // Stockez les données dans localStorage
      localStorage.setItem(storageKey, JSON.stringify(response.data));

      // Retournez les données
      return response.data;
   }
};
