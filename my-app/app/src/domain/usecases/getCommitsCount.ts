import axios from 'axios';

export const getCommitsCount = async (owner: string, repo: string): Promise<number> => {
  const response = await axios.get(
    `https://api.github.com/repos/${owner}/${repo}/commits`,
    {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    }
  );
  return response.data.length;
};
