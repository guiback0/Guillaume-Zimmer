"use client";

import { useEffect, useState } from "react";
import { getRepos } from "@/src/domain/usecases/getRepos";
import { getAllLanguages } from "@/src/domain/usecases/getAllLanguages";
import { getTotalCommits } from "@/src/domain/usecases/getTotalCommits";
import { updatedChartData, LanguagePie } from "./LanguagePieChart";
import { Card } from "../../ui/card";
import { LoadingIndicator } from "../../Shared/LoadingIndicator";

interface ChartData {
   language: string;
   bytes: number;
   fill: string;
}

export const Language = () => {
   const [loading, setLoading] = useState(true);
   const [chartData, setChartData] = useState<ChartData[]>([]);

   useEffect(() => {
      const fetchData = async () => {
         const owner = "guiback0";
         const repos = await getRepos(owner);
         const repoNames = repos.map((repo) => repo.name);

         const allLanguages = await getAllLanguages(owner, repoNames);
         const commits = await getTotalCommits(owner, repoNames);

         // Log the total bytes for each language to the console
         console.log("Total Bytes for Each Language:", allLanguages);

         // Update chartData based on allLanguages
         const newChartData = updatedChartData(allLanguages);
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
