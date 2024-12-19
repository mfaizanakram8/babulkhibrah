import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  description: string;
  imageSrc: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Advancements in Steel Manufacturing',
    date: '11 Mar 2024',
    author: 'John Smith',
    description:
      'Explore the latest technologies transforming steel production processes with higher efficiency and quality.',
    imageSrc: '/sa21.jpg',
  },
  {
    id: 2,
    title: 'Sustainable  Modern Steel Solutions',
    date: '18 Apr 2024',
    author: 'Steel Insights',
    description:
      'How sustainable practices are being integrated into modern steel production to reduce environmental impact.',
    imageSrc: '/sa21.jpg',
  },
  {
    id: 3,
    title: 'Why Steel is Essential for Modern Infrastructure',
    date: '06 Aug 2024',
    author: 'Jane Doe',
    description:
      'Understand the critical role steel plays in building durable and sustainable modern infrastructure.',
    imageSrc: '/sa21.jpg',
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h4 className="text-orange-500 font-semibold uppercase tracking-wide">Latest Articles</h4>
          <h2 className="text-4xl font-bold text-gray-800 mt-3">
            Recently From <span className="text-blue-500">Our Blog</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Stay updated with the latest insights, advancements, and trends in the steel manufacturing industry.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 min-[641px]:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative w-full h-60">
                <Image
                  src={post.imageSrc}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-0 hover:opacity-70 transition-opacity"></div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300 mb-3">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  By {post.author} • {post.date}
                </p>
                <p className="text-gray-600 line-clamp-3">{post.description}</p>
              </div>

              {/* Read More Button */}
              <div className="p-6 pt-0">
                <a
                  href="#"
                  className="inline-block px-5 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;