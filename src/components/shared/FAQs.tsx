import React from "react";
import Heading from "../ui/Heading";

const FAQs = () => {
  const data = [
    {
      question: " What are nutraceutical products?",
      answer:
        "Nutraceutical products are supplements or dietary components that offer health and beauty benefits, promoting well-being through their nutritional properties.",
    },
    {
      question: "How do your products promote hair growth?",
      answer:
        "Our products support hair growth by providing essential nutrients that strengthen hair follicles and encourage the growth of new healthy hair.",
    },
    {
      question: "Can your products prevent hair loss?",
      answer:
        "Yes, our products can help reduce hair loss by addressing the underlying causes, such as nutrient deficiencies and scalp health.",
    },
];

  return (
    <>
    <Heading heading="Frequently Asked Questions"/>
  
    <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto">
    
      <div className="space-y-4">
        {data.map((item, index) => {
          return (
            <details
              key={index}
              className="group border-s-4 border-blue-5=600 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                <h2 className="text-lg font-medium text-gray-900">
                  {item.question}
                </h2>

                <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700">
                {item.answer}
              </p>
            </details>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default FAQs;