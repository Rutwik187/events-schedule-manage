import Calender from '@/components/shared/Calender'
import HomeCarousel from '@/components/shared/HomeCarousel'
import News from '@/components/shared/News'
import Teams from '@/components/shared/Teams'
import Image from 'next/image'

import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col items-center gap-8 m-4 '>

        <Image width={800} height={800} className="object-cover w-[95vw] rounded-sm pt-20" src="/assets/bannerImg.jpg" alt="..." />

        {/* <HomeCarousel/> */}
        
        <News/>
        <Calender/>
        {/* <Teams/> */}
    </div>
  )
}

export default Home