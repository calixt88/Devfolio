import React from 'react';

const projects = [
  {
    title: 'Runescape Quest Chatbot',
    description: 'A chatbot that answers questions about Runescape quests.',
    tags: ['Python'],
    image: '/images/msoe.png',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal website to demonstrate full stack capabilities.',
    tags: ['TypeScript', 'React'],
    image: '/images/msoe.png',
  },
  {
    title: 'xClicker',
    description: 'An xClicker clone written in Java.',
    tags: ['Java', 'JavaFX', 'Scene Builder'],
    image: '/images/autoclicker.png',
  },
  {
    title: 'Runescape Quest Chatbot',
    description: 'A chatbot that answers questions about Runescape quests.',
    tags: ['Python'],
    image: '/images/msoe.png',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal website to demonstrate full stack capabilities.',
    tags: ['TypeScript', 'React'],
    image: '/images/msoe.png',
  },
  {
    title: 'xClicker',
    description: 'An xClicker clone written in Java.',
    tags: ['Java', ''],
    image: '/images/msoe.png',
  },
];

const Projects = () => {
  return (
    <section className="py-16 mt-80">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Selected Projects</h2>
        <p className="text-center text-gray-400 mb-16">Explore some of my work across various domains</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-t-lg h-40 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-green-600 text-white text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <a href="#" className="text-green-400 hover:underline">View Project &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
