import Image from "next/image"
import { Button } from "../ui/button"
import { ArrowBigRight,  } from "lucide-react"
import Heading from "../ui/Heading"
const News = () => {
  return (
    <>
        <Heading heading="News Room"/>
        <div className="flex flex-wrap gap-4 items-center justify-center">
        {
            [1,2,3,4].map((item)=>(

  <a
  key={item}
    href="#"
    className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
  >
    <img
      src="https://punekabaddiassociation.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-05-at-10.23.56-PM.jpeg"
      alt="Event"
      className="object-cover w-full rounded-t-lg h-60 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
    />
    <div className="flex flex-col p-4">
    <span className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        Date: September 5, 2023
      </span>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Junior Category/ कुमार गट
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Selection Trail 2023 :- Sub-Junior <br /> Selection Trail 2023
      </p>
      
      <Button
        variant="link"
        className="mt-2 text-md font-bold justify-start px-0"
      >
        Read More <ArrowBigRight/>
      </Button>
    </div>
  </a>

            ))
        }
         
         </div>
    </>
   
  )
}

export default News