
'use client';

import { Carousel } from 'flowbite-react';
import Image from 'next/image';

function HomeCarousel() {
  return (
    <div className="w-[90vw] h-[50vh] md:h-[70vh] xl:h-[90vh] m-auto">
      <Carousel slideInterval={5000}>
        <Image width={500} height={500} className="object-cover" src="/assets/bannerImg.jpg" alt="..." />
        {/* <Image 
width={100} height={100} src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." /> */}
        
        
      </Carousel>
    </div>
  );
}

export default HomeCarousel