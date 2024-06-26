"use client"
import * as React from "react";
import Image from 'next/image';

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

interface CarouselDApiDemoProps {
  slug1: string;
  slug2?: string; // Make slug2 optional
  slug3?: string; // Make slug3 optional
}

export default function CarouselDApiDemo({ slug1, slug2, slug3 }: CarouselDApiDemoProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const imageSlugs = [slug1, slug2, slug3].filter(Boolean); // Filter out undefined values

  return (
    <div>
      <Carousel setApi={setApi} className="w-fit mx-auto max-w-[28rem]">
        <CarouselContent>
          {imageSlugs.map((slug, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <figure className="w-fit mx-auto">
                    <Image
                      src={`${slug}.svg`}
                      alt={`${slug} borh model`}
                      priority={true}
                      quality={100}
                      width={300}
                      height={300}
                      className=""
                    />
                  </figure>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-4 text-center text-sm text-muted-foreground">
        <p className="text-sm max-w-[30rem]"> <strong>Simplified 2D Bohr model:</strong>Central red circle is the nucleus (proton). Blue ring represents the electron&apos;s orbit. Small blue dot is the electron. Note: This basic model doesn&apos;t show quantum behavior.</p>
      </div>
    </div>
  );
}