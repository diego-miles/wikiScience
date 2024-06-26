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
import chemicalElements from '@/data/elementsData.json'; 
import Link from "next/link";



export default function ElementsCarousel() {
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
      <Carousel className="w-[75vw] " setApi={setApi}>
        <CarouselContent className="-ml-1 " >
          {chemicalElements.map((element, index) => (
            <CarouselItem key={element.atomicNumber} className="pl-1 basis-1/3 min-w-[11rem] max-w-[11rem]">
              <div className="p-1">
                <Link href={`periodic-table/${element.name.toLowerCase()}`}>   
                <Card className="bg-background1 dark:bg-background1dark  shadow-lg my-5 border-[2px] border-[#b2b2b2]"  >
                  <CardContent className="flex aspect-square items-center justify-center py-4 px-3">
                    <div>
                      <p className="text-2xs font-base py-0 my-0 text-slate-400"># <strong className="text-slate-400">{element.atomicNumber}</strong></p>
                      <p className="text-base font-extrabold py-0">{element.symbol}</p>
                      <p className=" font-bold text-xs py-0">{element.name}</p>
                      <p className="font-medium text-2xs  mt-2 h-2 mb-3 leading-5 text-[#7e729e]">{element.family}</p>
                      <div className=""></div>
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
      <div className="py-5 text-center text-xs text-muted-foreground font-medium text-[#8fa8a8]">
         {current} / {chemicalElements.length} 
      </div>
    </div>
  );
}