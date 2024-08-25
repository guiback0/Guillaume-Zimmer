import { getLanguagesForRepo } from './getLanguagesForRepo';

type LanguageData = {
  [language: string]: number;
};

export const getAllLanguages = async (
  owner: string,
  repos: string[]
): Promise<LanguageData> => {
  const allLanguages: LanguageData = {};

  for (const repo of repos) {
    const languages = await getLanguagesForRepo(owner, repo);
    for (const language in languages) {
      if (allLanguages[language]) {
        allLanguages[language] += languages[language];
      } else {
        allLanguages[language] = languages[language];
      }
    }
  }

  return allLanguages;
};
