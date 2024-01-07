"use client"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Heading from "../ui/Heading"
import Image from "next/image"

const Awards =() => {
  return (
    < >
    <Heading heading="Awards"/>
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm md:max-w-3xl"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 basis-5/6">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6 flex-col gap-2">
                  <Image src="/assets/awards.jpeg" width={500} height={500} alt="team-logo"/>
                  <span className="text-xl font-semibold">Pooja Shelar</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext/>
    </Carousel>

    </>
  )
}
export default Awards