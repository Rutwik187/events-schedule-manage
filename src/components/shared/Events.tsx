"use client"
import Script from "next/script"
import Heading from "../ui/Heading"
const Events = () => {
  
  
  return (
    <div>
       <Script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-rcore defer
        strategy="afterInteractive"
        onLoad={() => console.log('Elfsight script loaded!')}
      />
      <Heading heading="Upcoming Events"/>
        
<div className="elfsight-app-ca5cc4bf-776c-4a8b-94b6-f8058d346983 mt-4" data-elfsight-app-lazy></div>
    </div>
  )
}

export default Events