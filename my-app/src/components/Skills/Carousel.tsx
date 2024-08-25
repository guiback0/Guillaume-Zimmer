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
import { Section } from "../Shared/Section";
import { ICON_MAP } from "../../utils/skillIconsMap";
import { SkillsProps } from "../../domain/types/skill";

export function SkillsCarousel({ skills }: { skills: SkillsProps[] }) {
   const plugin = React.useRef(
      Autoplay({ delay: 2000, stopOnInteraction: false })
   );

   const renderIcon = (iconName: string) => {
      const IconComponent = ICON_MAP[iconName];
      return IconComponent ? (
         <IconComponent size={42} className="m-auto" />
      ) : null;
   };

   return (
      <Section className="w-full">
         <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-screen-md"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}>
            <CarouselContent>
               {skills.map((skill, index) => (
                  <CarouselItem
                     key={index}
                     className="md:basis-1/2 lg:basis-1/3">
                     <div className="p-1">
                        <Card>
                           <CardContent className="flex aspect-square items-center justify-center p-6">
                              <div className="flex flex-col gap-4">
                                 {renderIcon(skill.icon)}
                                 <h3 className="text-2xl font-semibold tracking-tight mb-2 m-auto">
                                    {skill.title}
                                 </h3>
                                 <p className="text-sm text-muted-foreground">
                                    {skill.description}
                                 </p>
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
