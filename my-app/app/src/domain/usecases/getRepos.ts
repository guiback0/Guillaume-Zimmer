
import axios from 'axios';
import { RepositoryProps } from "@/app/src/domain/types/repository";

export const getRepos = async (owner: string): Promise<RepositoryProps[]> => {
  const response = await axios.get<RepositoryProps[]>(
    `https://api.github.com/users/${owner}/repos`
  );
  return response.data;
};
