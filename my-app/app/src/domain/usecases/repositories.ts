import axios from "axios";
import { RepositoryProps } from "@/app/src/domain/types/repository";

export const fetchRepositories = async (
   username: string
): Promise<RepositoryProps[]> => {
   try {
      const response = await axios.get(
         `https://api.github.com/users/${username}/repos`
      );
      return response.data;
   } catch (error) {
      console.error("Error fetching repositories:", error);
      return [];
   }
};
