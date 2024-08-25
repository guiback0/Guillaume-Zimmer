// LanguagePie.tsx

"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import { Card, CardContent, CardFooter } from "@/src/components/ui/card";
import {
   ChartContainer,
   ChartLegend,
   ChartLegendContent,
   ChartTooltip,
   ChartTooltipContent,
} from "@/src/components/ui/chart";
import { GithubLink } from "../../Shared/GithubLink";
import { GithubStateProps } from "@/src/domain/types/githubState";
import { LanguageProps } from "@/src/domain/types/language";
import { chartConfig } from "../../../utils/chartConfig";

export const updatedChartData = (allLanguages: LanguageProps) => {
   return Object.keys(allLanguages).map((language) => ({
      language: language.toLowerCase(),
      bytes: allLanguages[language],
      fill: `var(--color-${language.toLowerCase()})`,
   }));
};

export function LanguagePie({
   chartData = [],
}: {
   chartData: GithubStateProps[];
}) {
   const totalbytes = React.useMemo(() => {
      return chartData.reduce((acc, curr) => acc + curr.bytes, 0);
   }, [chartData]);

   return (
      <Card className="flex flex-col flex-1 ">
         <p className="text-lg text-muted-foreground ml-4 mt-4">Github Stats</p>
         <CardContent className="flex-1 pb-0">
            <ChartContainer
               config={chartConfig}
               className="mx-auto aspect-square max-h-[250px]">
               <PieChart className="h-full w-full">
                  <ChartTooltip
                     cursor={false}
                     content={<ChartTooltipContent hideLabel />}
                  />
                  <Pie
                     data={chartData}
                     dataKey="bytes"
                     nameKey="language"
                     innerRadius={55}
                     outerRadius={85}
                     strokeWidth={10}>
                     <Label
                        content={({ viewBox }) => {
                           if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                              return (
                                 <text
                                    x={viewBox.cx}
                                    y={viewBox.cy}
                                    textAnchor="middle"
                                    dominantBaseline="middle">
                                    <tspan
                                       x={viewBox.cx}
                                       y={viewBox.cy}
                                       className="fill-foreground text-xl font-bold">
                                       {totalbytes.toLocaleString()}
                                    </tspan>
                                    <tspan
                                       x={viewBox.cx}
                                       y={(viewBox.cy || 0) + 24}
                                       className=" fill-muted-foreground">
                                       bytes
                                    </tspan>
                                 </text>
                              );
                           }
                        }}
                     />
                  </Pie>
                  <ChartLegend
                     content={<ChartLegendContent nameKey="language" />}
                     className="mt-1 -translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
                  />
               </PieChart>
            </ChartContainer>
         </CardContent>
         <CardFooter className="flex-col gap-2 text-sm"></CardFooter>
         <div className=" w-full p-4 pt-0 flex flex-col gap-2">
            <GithubLink />
         </div>
      </Card>
   );
}
