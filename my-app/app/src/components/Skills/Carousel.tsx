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
import { Badge } from "../ui/badge";

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
               {/* {Array.from({ length: 10 }).map((_, index) => ( */}
               <CarouselItem
                  /*  key={index} */
                  className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                     <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                           <div>
                              <div className="flex flex-col gap-4">
                                 <HTMLIcon size={42} className=" m-auto" />

                                 <h3 className="text-2xl font-semibold tracking-tight mb-2 m-auto">
                                    HTML 5
                                 </h3>
                                 <p className="text-sm text-muted-foreground">
                                    Pour des structures web solides
                                 </p>
                              </div>
                           </div>
                        </CardContent>
                     </Card>
                  </div>
               </CarouselItem>
               <CarouselItem
                  /*  key={index} */
                  className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                     <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                           <div>
                              <div className="flex flex-col gap-4">
                                 <CSSIcon size={42} className=" m-auto" />

                                 <h3 className="text-2xl font-semibold tracking-tight mb-2 m-auto">
                                    CSS 3
                                 </h3>
                                 <p className="text-sm text-muted-foreground">
                                    Je sublime les interfaces avec <Badge>CSS</Badge>
                                 </p>
                              </div>
                           </div>
                        </CardContent>
                     </Card>
                  </div>
               </CarouselItem>
               <CarouselItem
                  /*  key={index} */
                  className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                     <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                           <div>
                              <div className="flex flex-col gap-4">
                                 <JavascriptIcon
                                    size={42}
                                    className=" m-auto"
                                 />

                                 <h3 className="text-2xl font-semibold tracking-tight mb-2 m-auto">
                                    Javascript
                                 </h3>
                                 <p className="text-sm text-muted-foreground">
                                    Pour donner vie à mes pages web
                                 </p>
                              </div>
                           </div>
                        </CardContent>
                     </Card>
                  </div>
               </CarouselItem>
               <CarouselItem
                  /*  key={index} */
                  className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                     <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                           <div>
                              <div className="flex flex-col gap-4">
                                 <TypescriptIcon
                                    size={42}
                                    className=" m-auto"
                                 />

                                 <h3 className="text-2xl font-semibold tracking-tight mb-2 m-auto">
                                    Typescript
                                 </h3>
                                 <p className="text-sm text-muted-foreground">
                                    Je sécurise et optimise avec <Badge>TypeScript</Badge> 
                                 </p>
                              </div>
                           </div>
                        </CardContent>
                     </Card>
                  </div>
               </CarouselItem>
               <CarouselItem
                  /*  key={index} */
                  className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                     <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                           <div>
                              <div className="flex flex-col gap-4">
                                 <ReactIcon
                                    size={42}
                                    className="animate-spin m-auto"
                                    style={{ animationDuration: "10s" }}
                                 />

                                 <h3 className="text-2xl font-semibold tracking-tight mb-2 m-auto">
                                    React
                                 </h3>
                                 <p className="text-sm text-muted-foreground">
                                    Pour des interfaces dynamiques et réactives
                                 </p>
                              </div>
                           </div>
                        </CardContent>
                     </Card>
                  </div>
               </CarouselItem>
               <CarouselItem
                  /*  key={index} */
                  className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                     <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                           <div>
                              <div className="flex flex-col gap-4">
                                 <SassIcon size={42} className=" m-auto" />

                                 <h3 className="text-2xl font-semibold tracking-tight mb-2 m-auto">
                                    Sass
                                 </h3>
                                 <p className="text-sm text-muted-foreground">
                                    Je perfectionne les styles avec <Badge>Sass</Badge> 
                                 </p>
                              </div>
                           </div>
                        </CardContent>
                     </Card>
                  </div>
               </CarouselItem>
               <CarouselItem
                  /*  key={index} */
                  className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                     <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                           <div>
                              <div className="flex flex-col gap-4">
                                 <TailwindIcon size={42} className=" m-auto" />

                                 <h3 className="text-2xl font-semibold tracking-tight mb-2 m-auto">
                                    Tailwind
                                 </h3>
                                 <p className="text-sm text-muted-foreground">
                                    Pour des design plus simples et accessibles
                                 </p>
                              </div>
                           </div>
                        </CardContent>
                     </Card>
                  </div>
               </CarouselItem>
               <CarouselItem
                  /*  key={index} */
                  className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                     <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                           <div>
                              <div className="flex flex-col gap-4">
                                 <NodeIcon
                                    size={42}
                                    className=" m-auto"
                                 />

                                 <h3 className="text-2xl font-semibold tracking-tight mb-2 m-auto">
                                    Node
                                 </h3>
                                 <p className="text-sm text-muted-foreground">
                                 Pour le développement <Badge>back-end</Badge> 
                                 </p>
                              </div>
                           </div>
                        </CardContent>
                     </Card>
                  </div>
               </CarouselItem>
               <CarouselItem
                  /*  key={index} */
                  className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                     <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                           <div>
                              <div className="flex flex-col gap-4">
                                 <MongoDBIcon
                                    size={42}
                                    className=" m-auto"
                                 />

                                 <h3 className="text-2xl font-semibold tracking-tight mb-2 m-auto">
                                    Mongo DB
                                 </h3>
                                 <p className="text-sm text-muted-foreground">
                                 Pour la gestion de données
                                 </p>
                              </div>
                           </div>
                        </CardContent>
                     </Card>
                  </div>
               </CarouselItem>
               {/*  ))} */}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
         </Carousel>
      </Section>
   );
}
