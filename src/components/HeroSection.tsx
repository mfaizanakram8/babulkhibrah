"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const banners = [
  {
    id: 1,
    text: "Welcome to Babulkhirbah. Build your perfect House.",
    image: "/12.jpg", // replace with actual image paths
  },
  {
    id: 2,
    text: "Discover the power of design with Babulkhibrah.",
    image: "/13.jpg",
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

  // Function to handle the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  // Function to handle the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Slider */}
      <div className="w-full h-[500px] relative">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="min-w-full h-[500px] flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              <div className="bg-black bg-opacity-50 p-6 rounded-lg w-[370px] text-white text-center mx-auto">
                <h1 className="text-4xl font-bold mb-4">{banner.text}</h1>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-gray-800"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-gray-800"
        >
          &#8594;
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-gray-500"}`}
            ></span>
          ))}
        </div>
      </div>

      {/* Cards Section */}
      <div className="mt-20 p-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{card.heading}</h2>
              <h3 className="text-gray-600 text-sm mb-3">{card.subHeading}</h3>
              <p className="text-gray-700 text-sm">{card.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
