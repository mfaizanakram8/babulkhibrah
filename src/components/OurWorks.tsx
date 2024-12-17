import Image from 'next/image';
import React from 'react';

interface CardProps {
  image: string;
  heading: string;
  subheading: string;
}

const Card: React.FC<CardProps> = ({ image, heading, subheading }) => (
  <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="relative">
      <Image
        src={image}
        alt={heading}
        className="w-full h-48 object-cover"
        width={300}
        height={200}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-0 hover:opacity-70 transition-opacity"></div>
    </div>
    <div className="p-4 text-center">
      <h3 className="text-xl font-semibold text-gray-800">{heading}</h3>
      <p className="text-gray-600">{subheading}</p>
    </div>
  </div>
);

const LatestWork: React.FC = () => {
  const workData = [
    {
      image: '/sa.jpg',
      heading: 'Quality Fabrication',
      subheading: 'Precision-crafted steel for every need.',
    },
    {
      image: '/sa4.jpg',
      heading: 'Reliable Steel',
      subheading: 'Long-lasting materials for the toughest projects.',
    },
    {
      image: '/sa3.jpg',
      heading: 'Strength & Precision',
      subheading: 'Steel that’s built to last with perfection.',
    },
    {
      image: '/sa2.jpg',
      heading: 'Advanced Manufacturing',
      subheading: 'Leveraging cutting-edge technology for excellence.',
    },
    {
      image: '/sa1.jpg',
      heading: 'Sustainable Steel',
      subheading: 'Eco-friendly solutions for a greener future.',
    },
    {
      image: '/sa.jpg',
      heading: 'Building Tomorrow',
      subheading: 'Innovative steel products shaping the future.',
    },
  ];

  return (
    <section
      className="py-16 bg-cover bg-center relative text-white"
      style={{ backgroundImage: `url(/8493.jpg)` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-transparent bg-opacity-50"></div>
      <div className="relative z-10 max-w-screen-xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center mb-10 text-black">
          Our Latest <span className="text-orange-500">Work</span>
        </h2>
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {workData.map((work, index) => (
            <Card
              key={index}
              image={work.image}
              heading={work.heading}
              subheading={work.subheading}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
