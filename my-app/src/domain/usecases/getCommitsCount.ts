import axios from 'axios';

export const getCommitsCount = async (owner: string, repo: string): Promise<number> => {
  // Clé pour stocker les données dans localStorage
  const storageKey = `commits_count_${owner}_${repo}`;

  // Vérifiez si les données sont déjà présentes dans localStorage
  const storedData = localStorage.getItem(storageKey);

  if (storedData) {
    // Si les données sont présentes, retournez-les
    return JSON.parse(storedData);
  } else {
    // Si les données ne sont pas présentes, faites la requête à l'API GitHub
    const response = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/commits`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );

    // Stockez les données dans localStorage
    localStorage.setItem(storageKey, JSON.stringify(response.data.length));

    // Retournez les données
    return response.data.length;
  }
};
