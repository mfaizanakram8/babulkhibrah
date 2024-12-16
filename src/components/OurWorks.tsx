import Image from 'next/image';
import React from 'react';

interface CardProps {
  image: string;
  heading: string;
  subheading: string;
}

const Card: React.FC<CardProps> = ({ image, heading, subheading }) => (
  <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white ">
    <Image src={image} alt={heading} className="w-full h-48 object-cover" width={200} height={200}/>
    <div className="p-4">
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
      subheading: 'Precision-crafted steel for every need.'
    },
    {
      image: '/sa4.jpg',
      heading: 'Reliable Steel',
      subheading: 'Long-lasting materials for the toughest projects.'
    },
    {
      image: '/sa3.jpg',
      heading: 'Strength & Precision',
      subheading: 'Steel that’s built to last with perfection.'
    },
    {
      image: '/sa2.jpg',
      heading: 'Advanced Manufacturing',
      subheading: 'Leveraging cutting-edge technology for excellence.'
    },
    {
      image: '/sa1.jpg',
      heading: 'Sustainable Steel',
      subheading: 'Eco-friendly solutions for a greener future.'
    },
    {
      image: '/sa.jpg',
      heading: 'Building Tomorrow',
      subheading: 'Innovative steel products shaping the future.'
    }
  ];

  return (
    <section className="py-12 mx-auto  bg-gray-50  bg-cover bg-center "
              style={{ backgroundImage: `url(/ss.pg)` }}>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Latest <span className='text-orange-500'>Work</span></h2>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
