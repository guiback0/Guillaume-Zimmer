"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "../ui/card";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "../ui/carousel";
import { Section } from "../Section";
import { ReactIcon } from "../../icons/ReactIcon";
import { CSSIcon } from "../../icons/CSSIcon";
import { HTMLIcon } from "../../icons/HTMLIcon";
import { JavaIcon } from "../../icons/JavaIcon";
import { JavascriptIcon } from "../../icons/Javascript";
import { SassIcon } from "../../icons/SassIcon";
import { TailwindIcon } from "../../icons/TailwindIcon";
import { TypescriptIcon } from "../../icons/Typescript";
import { MongoDBIcon } from "../../icons/MongoDBIcon";
import { NodeIcon } from "../../icons/NodeIcon";


export function SkillsCarousel() {
   const plugin = React.useRef(
      Autoplay({ delay: 2000, stopOnInteraction: false })
   );

   return (
      <Section className="w-full">
         <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-screen-md"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}>
            <CarouselContent>
               {Array.from({ length: 10 }).map((_, index) => (
                  <CarouselItem
                     key={index}
                     className="md:basis-1/2 lg:basis-1/3">
                     <div className="p-1">
                        <Card>
                           <CardContent className="flex aspect-square items-center justify-center p-6">
                              <div>
                                 <div className="flex flex-col gap-4">
                                    <NodeIcon
                                       size={42}
                                       className="animate-spin m-auto"
                                       style={{ animationDuration: "10s" }}
                                    />

                                    <h3 className="text-2xl font-semibold tracking-tight mb-2 m-auto">
                                       React
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                    Pour des interfaces dynamiques et réactives.
                                    </p>
                                 </div>
                              </div>
                           </CardContent>
                        </Card>
                     </div>
                  </CarouselItem>
               ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
         </Carousel>
      </Section>
   );
}
