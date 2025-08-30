import React, { useState } from 'react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Brand Identity Design',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      description: 'Complete brand identity package for a tech startup',
      tags: ['Logo Design', 'Brand Guidelines', 'Typography']
    },
    {
      id: 2,
      title: 'E-commerce Website',
      category: 'web-projects',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      description: 'Modern e-commerce platform with seamless user experience',
      tags: ['React', 'E-commerce', 'Responsive Design']
    },
    {
      id: 3,
      title: 'Social Media Campaign',
      category: 'digital-marketing',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      description: 'Comprehensive social media marketing campaign',
      tags: ['Social Media', 'Content Strategy', 'Analytics']
    },
    {
      id: 4,
      title: 'Magazine Layout Design',
      category: 'graphics-design',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop',
      description: 'Editorial design for lifestyle magazine',
      tags: ['Print Design', 'Typography', 'Layout']
    },
    {
      id: 5,
      title: 'Corporate Website',
      category: 'web-projects',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      description: 'Professional corporate website with CMS integration',
      tags: ['WordPress', 'CMS', 'Corporate']
    },
    {
      id: 6,
      title: 'Product Packaging',
      category: 'graphics-design',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      description: 'Creative packaging design for consumer products',
      tags: ['Packaging', '3D Design', 'Product Design']
    },
    {
      id: 7,
      title: 'Digital Ad Campaign',
      category: 'digital-marketing',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop',
      description: 'Multi-platform digital advertising campaign',
      tags: ['Google Ads', 'Facebook Ads', 'Campaign Management']
    },
    {
      id: 8,
      title: 'Restaurant Branding',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      description: 'Complete branding solution for restaurant chain',
      tags: ['Restaurant', 'Menu Design', 'Brand Identity']
    },
    {
      id: 9,
      title: 'Mobile App UI/UX',
      category: 'web-projects',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      description: 'User interface design for mobile application',
      tags: ['Mobile App', 'UI/UX', 'Prototyping']
    },
    {
      id: 10,
      title: 'Poster Design Series',
      category: 'graphics-design',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=400&fit=crop',
      description: 'Creative poster series for music festival',
      tags: ['Poster Design', 'Event Marketing', 'Typography']
    },
    {
      id: 11,
      title: 'SEO Strategy Implementation',
      category: 'digital-marketing',
      image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&h=400&fit=crop',
      description: 'Comprehensive SEO strategy and implementation',
      tags: ['SEO', 'Content Marketing', 'Analytics']
    },
    {
      id: 12,
      title: 'Luxury Brand Identity',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      description: 'Premium brand identity for luxury fashion brand',
      tags: ['Luxury Branding', 'Fashion', 'Premium Design']
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'graphics-design', label: 'Graphics Design' },
    { key: 'web-projects', label: 'Web Projects' },
    { key: 'digital-marketing', label: 'Digital Marketing' },
    { key: 'branding', label: 'Branding' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-800 text-sm font-medium rounded-full mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Featured
            <span className="block text-primary-600">Work & Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore a curated selection of my best work across graphic design, web development, 
            digital marketing, and branding projects.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 shadow-md hover:shadow-lg'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || 'https://placehold.co/600x400/e2e8f0/64748b?text=Portfolio+Image'}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded-full">
                    {filters.find(f => f.key === item.category)?.label}
                  </span>
                  <button className="text-gray-400 hover:text-primary-600 transition-colors duration-200">
                    <i className="bi bi-arrow-up-right text-lg"></i>
                  </button>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Interested in working together? Let's create something amazing!
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Start a Project
            <i className="bi bi-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
