import axios from 'axios';

import { LanguageProps } from "@/app/src/domain/types/language";

export const getLanguagesForRepo = async (
  owner: string,
  repo: string
): Promise<LanguageProps> => {
  const response = await axios.get<LanguageProps>(
    `https://api.github.com/repos/${owner}/${repo}/languages`
  );
  return response.data;
};
