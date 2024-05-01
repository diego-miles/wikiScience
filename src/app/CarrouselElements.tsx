"use client"
import * as React from "react"
import { type CarouselApi } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
} from "@/components/ui/carousel"
import chemicalElements from '@/components/elementsData.json'; 
import Link from "next/link";

export default function CarouselSpacing() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div>
      <Carousel className="w-[75vw] md:max-w-3xl" setApi={setApi}>
        <CarouselContent className="-ml-1" >
          {chemicalElements.map((element, index) => (
            <CarouselItem key={element.atomicNumber} className="pl-1 basis-1/3">
              <div className="p-1">
                <Link href={`periodic-table/${element.name.toLowerCase()}`}>   
                <Card >
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div>
                      <p className="text-xl font-extrabold">{element.symbol}</p>
                      <p className="text-xs font-base py-0 my-0">Atomic #: <strong>{element.atomicNumber}</strong></p>
                      <p className=" font-bold py-0">{element.name}</p>
                      <p className="font-medium text-xs py-1 ">{element.family}</p>
                    </div>
                  </CardContent>
                </Card>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-4 text-center text-sm text-muted-foreground">
        Slide {current} of {chemicalElements.length} 
      </div>
    </div>
  );
}