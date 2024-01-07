'use'
import Awards from '@/components/shared/Awards'
import Events from '@/components/shared/Events'
import FAQs from '@/components/shared/FAQs'
import Footer from '@/components/shared/Footer'
import HistoryGallery from '@/components/shared/HistoryGallery'
import HomeCarousel from '@/components/shared/HomeCarousel'
import News from '@/components/shared/News'
import RegisterSingIn from '@/components/shared/RegisterSingIn'
import Teams from '@/components/shared/Teams'
import Image from 'next/image'

import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col items-center gap-8 m-4 '>

        <Image width={800} height={800} className="object-cover w-[95vw] rounded-sm pt-20" src="/assets/bannerImg.jpg" alt="..." />

        {/* <HomeCarousel/> */}
        
        <News/>
        <Events/>
        <Teams/>
        <HistoryGallery/>
        <Awards/>
        <FAQs/>
        <RegisterSingIn/>
        <Footer/>
    </div>
  )
}

export default Home