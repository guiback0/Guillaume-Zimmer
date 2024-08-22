"use client";

import * as React from "react";
import Link from "next/link";
import { Label, Pie, PieChart } from "recharts";

import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import {
   ChartConfig,
   ChartContainer,
   ChartLegend,
   ChartLegendContent,
   ChartTooltip,
   ChartTooltipContent,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";
import { GithubIcon } from "@/public/icons/GithubIcon";
import { buttonVariants } from "../../ui/button";
import { GithubLink } from "../../Shared/GithubLink";

export const updatedChartData = (allLanguages) => {
   return Object.keys(allLanguages).map((language) => ({
      language: language.toLowerCase(), // Convertir les noms de langages en minuscules pour correspondre aux noms de variables CSS
      bytes: allLanguages[language],
      fill: `var(--color-${language.toLowerCase()})`, // Assurez-vous que les variables CSS correspondent aux noms de langages en minuscules
   }));
};

const chartConfig = {
   bytes: {
      label: "bytes",
   },
   html: {
      label: "html",
      color: "hsl(var(--chart-1))",
   },
   css: {
      label: "css",
      color: "hsl(var(--chart-2))",
   },
   typescript: {
      label: "typescript",
      color: "hsl(var(--chart-3))",
   },
   javascript: {
      label: "javascript",
      color: "hsl(var(--chart-4))",
   },
   java: {
      label: "java",
      color: "hsl(var(--chart-5))",
   },
   scss: {
      label: "scss",
      color: "hsl(var(--chart-6))",
   },
} satisfies ChartConfig;

export function LanguagePie({ chartData = [] }) {
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
                                       className="fill-foreground text-3xl font-bold">
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
            <GithubLink/>
         </div>
      </Card>
   );
}
