import { getCommitsCount } from './getCommitsCount';

export const getTotalCommits = async (
  owner: string,
  repos: string[]
): Promise<number> => {
  let totalCommits = 0;

  for (const repo of repos) {
    const commitsCount = await getCommitsCount(owner, repo);
    totalCommits += commitsCount;
  }

  return totalCommits;
};
