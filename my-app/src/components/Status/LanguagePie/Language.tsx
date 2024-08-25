"use client";

import { useEffect, useState } from "react";
import { getRepos } from "@/src/domain/usecases/getRepos";
import { getAllLanguages } from "@/src/domain/usecases/getAllLanguages";
import { getTotalCommits } from "@/src/domain/usecases/getTotalCommits";
import { updatedChartData, LanguagePie } from "./LanguagePieChart";
import { Card } from "../../ui/card";
import { LoadingIndicator } from "../../Shared/LoadingIndicator";
import { GithubStateProps } from "@/src/domain/types/githubState";

export const Language = () => {
   const [loading, setLoading] = useState(true);
   const [chartData, setChartData] = useState<GithubStateProps[]>([]); // Explicitly set the type

   useEffect(() => {
      const fetchData = async () => {
         const owner = "guiback0";
         const repos = await getRepos(owner);
         const repoNames = repos.map((repo) => repo.name);

         const allLanguages = await getAllLanguages(owner, repoNames);
         const commits = await getTotalCommits(owner, repoNames);

         console.log("Total Bytes for Each Language:", allLanguages);

         const newChartData = updatedChartData(allLanguages) as GithubStateProps[]; // Typecast if necessary
         setChartData(newChartData);
         setLoading(false);
      };

      fetchData();
   }, []);

   return (
      <div>
         {loading ? (
            <Card className="w-full p-4 flex flex-1 flex-col gap-2">
               <p className="text-lg text-muted-foreground ml-4 mt-4">
                  Github stats
               </p>
               <LoadingIndicator />
            </Card>
         ) : (
            <LanguagePie chartData={chartData} />
         )}
      </div>
   );
};
