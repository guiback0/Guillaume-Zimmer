// src/config/chartConfig.ts

import { ChartConfig } from "@/src/components/ui/chart";

export const chartConfig: ChartConfig = {
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
