import React from 'react';

const About: React.FC = () => {
  const skills = [
    { name: 'Graphic Design', level: 95, icon: 'bi-palette' },
    { name: 'Web Development', level: 90, icon: 'bi-code-slash' },
    { name: 'Digital Marketing', level: 88, icon: 'bi-graph-up-arrow' },
    { name: 'Branding', level: 92, icon: 'bi-award' },
    { name: 'UI/UX Design', level: 87, icon: 'bi-phone' },
    { name: 'Adobe Creative Suite', level: 94, icon: 'bi-brush' },
  ];

  const services = [
    {
      icon: 'bi-palette',
      title: 'Graphic Design',
      description: 'Creating visually stunning designs that communicate your brand message effectively.',
    },
    {
      icon: 'bi-code-slash',
      title: 'Web Development',
      description: 'Building responsive, modern websites that deliver exceptional user experiences.',
    },
    {
      icon: 'bi-graph-up-arrow',
      title: 'Digital Marketing',
      description: 'Developing strategic campaigns that drive engagement and boost your online presence.',
    },
    {
      icon: 'bi-award',
      title: 'Brand Identity',
      description: 'Crafting unique brand identities that resonate with your target audience.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-800 text-sm font-medium rounded-full mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Passionate About Creating
            <span className="block text-primary-600">Exceptional Experiences</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With over a decade of experience in the creative industry, I specialize in transforming 
            ideas into compelling visual stories that engage and inspire audiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-playfair font-semibold text-gray-900 mb-6">
              My Journey in Design & Development
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My passion for design began over ten years ago, and since then, I have dedicated myself 
              to mastering the art of visual communication. From creating brand identities that tell 
              compelling stories to developing websites that deliver seamless user experiences, I bring 
              a unique blend of creativity and technical expertise to every project.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I believe that great design is not just about aesthetics—it is about solving problems, 
              communicating effectively, and creating meaningful connections between brands and their audiences. 
              This philosophy drives everything I do, from the initial concept to the final execution.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-gray-50 px-4 py-2 rounded-full">
                <i className="bi bi-check-circle-fill text-primary-600 mr-2"></i>
                <span className="text-sm font-medium">Creative Problem Solver</span>
              </div>
              <div className="flex items-center bg-gray-50 px-4 py-2 rounded-full">
                <i className="bi bi-check-circle-fill text-primary-600 mr-2"></i>
                <span className="text-sm font-medium">Detail Oriented</span>
              </div>
              <div className="flex items-center bg-gray-50 px-4 py-2 rounded-full">
                <i className="bi bi-check-circle-fill text-primary-600 mr-2"></i>
                <span className="text-sm font-medium">Client Focused</span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-playfair font-semibold text-gray-900 mb-8">
              Skills & Expertise
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <i className={`${skill.icon} text-primary-600 mr-3`}></i>
                      <span className="font-medium text-gray-900">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary-600 to-accent-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
            What I Do
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I offer comprehensive creative services to help your business stand out in today's competitive market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className={`${service.icon} text-2xl text-white`}></i>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
