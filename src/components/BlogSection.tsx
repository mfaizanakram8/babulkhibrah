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
    title: 'Sustainable Steel Solutions',
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
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h4 className="text-orange-400 font-semibold uppercase">Latest Articles</h4>
          <h2 className="text-3xl font-bold text-gray-800 mt-2">Recently From the Blog</h2>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative w-full h-52">
                <Image
                  src={post.imageSrc}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-4">
                  By {post.author} • {post.date}
                </p>
                <p className="text-gray-600">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
