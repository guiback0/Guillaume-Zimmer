"use client"

import { useEffect, useState } from "react";
import axios from "axios";

type LanguageData = {
   [language: string]: number;
}

type Repo = {
   name: string;
}

async function getLanguagesForRepo(
   owner: string,
   repo: string
): Promise<LanguageData> {
   const response = await axios.get<LanguageData>(
      `https://api.github.com/repos/${owner}/${repo}/languages`
   );
   return response.data;
}

async function getAllLanguages(
   owner: string,
   repos: string[]
): Promise<LanguageData> {
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
}

async function getRepos(owner: string): Promise<Repo[]> {
   const response = await axios.get<Repo[]>(
      `https://api.github.com/users/${owner}/repos`
   );
   return response.data;
}

async function getCommitsCount(owner: string, repo: string): Promise<number> {
   const response = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/commits`,
      {
         headers: {
            Accept: "application/vnd.github.v3+json",
         },
      }
   );
   return response.data.length;
}

async function getTotalCommits(
   owner: string,
   repos: string[]
): Promise<number> {
   let totalCommits = 0;

   for (const repo of repos) {
      const commitsCount = await getCommitsCount(owner, repo);
      totalCommits += commitsCount;
   }

   return totalCommits;
}

export const Language = () => {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchData = async () => {
         const owner = "guiback0";
         const repos = await getRepos(owner);
         const repoNames = repos.map((repo) => repo.name);

         const allLanguages = await getAllLanguages(owner, repoNames);
         const commits = await getTotalCommits(owner, repoNames);

         // Log the total bytes for each language to the console
         console.log("Total Bytes for Each Language:", allLanguages);

         setLoading(false);
      };

      fetchData();
   }, []);

   if (loading) {
      return <div>Loading...</div>;
   }

   return <div>Data fetched and logged to console.</div>;
};
