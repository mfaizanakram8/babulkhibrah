"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Framer Motion for animations

const banners = [
  {
    id: 1,
    text: "Welcome to Babulkhirbah. Build your perfect House.",
    image: "/12.jpg", // Replace with actual image paths
  },
  {
    id: 2,
    text: "Discover the power of design with Babulkhibrah.",
    image: "/13.jpg", // Replace with actual image paths
  },
];

const cards = [
  {
    id: 1,
    image: "/1c.jpg", // Replace with the actual image path
    heading: "Risk Management",
    subHeading: "Plan, Prepare, Protect",
    paragraph:
      "Identify potential risks and ensure your project stays on track with expert risk management strategies.",
  },
  {
    id: 2,
    image: "/1c1.jpg", // Replace with the actual image path
    heading: "Effective Planning",
    subHeading: "Strategize for Success",
    paragraph:
      "Ensure the success of your project with our meticulous and detail-oriented planning techniques.",
  },
  {
    id: 3,
    image: "/1c2.jpg", // Replace with the actual image path
    heading: "Skilled Professionals",
    subHeading: "Experts at Your Service",
    paragraph:
      "Work with experienced professionals who bring expertise and dedication to every project.",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Slider */}
      <div className="w-full h-[500px] md:h-screen relative">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {banners.map((banner, index) => (
            <motion.div
              key={banner.id}
              className="min-w-full h-[500px] md:h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${banner.image})`,
                }}
                animate={{
                  scale: currentSlide === index ? 1.1 : 1, // Zoom effect
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <motion.div
                className="relative z-10 bg-white bg-opacity-10 p-6 rounded-lg text-center text-white mx-auto max-w-md"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-4xl font-bold">{banner.text}</h1>
              </motion.div>
            </motion.div>
          ))}
        </div>
        <button
          onClick={prevSlide}
             title="arrow"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-50 p-3 rounded-full shadow-lg text-gray-800 z-10"
        >
         <Image src="/1.png" alt="arrow" width={20} height={20}/>
        </button>
        <button
        title="arrow"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-50 p-3 rounded-full shadow-lg text-gray-800 z-10"
        >
         <Image src="/2.png" alt="arroq" width={20} height={20} />
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {banners.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-gray-500"
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* Cards Section */}
      <div className="mt-32 py-12 px-6 sm:px-8 md:px-20 grid grid-cols-1 sm:grid-cols-2 min-[641px]:grid-cols-3  gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-transparent shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
          >
            <Image
              src={card.image}
              alt={card.heading}
              width={200}
              height={200}
              className="w-full h-44 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                {card.heading}
              </h2>
              <h3 className="text-gray-600 text-sm md:text-base mb-3">
                {card.subHeading}
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                {card.paragraph}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
