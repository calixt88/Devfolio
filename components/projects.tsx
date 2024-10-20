import React from 'react';

const projects = [
  {
    title: 'Runescape Quest Chatbot',
    description: 'A chatbot that answers questions about Runescape quests.',
    tags: ['Python'],
    image: '/images/runescapechatbot.png',
    link: 'https://github.com/calixt88/RunescapeQuestChatbot'
  },
  {
    title: 'Portfolio Website',
    description: 'A personal website to demonstrate full stack capabilities.',
    tags: ['TypeScript', 'React'],
    image: '/images/devfolio.png',
    link: 'https://github.com/calixt88/Devfolio',
  },
  {
    title: 'xClicker',
    description: 'An xClicker clone written in Java.',
    tags: ['Java', 'JavaFX', 'Scene Builder'],
    image: '/images/xclicker.png',
    link: 'https://github.com/calixt88/xClicker'
  },
  {
    title: 'Study App',
    description: 'App that promotes studying by collecting rewards for study time.',
    tags: ['Flutter', 'Dart'],
    image: '/images/space.png',
  },
  {
    title: 'Runescape Botting Scripts',
    description: 'A chatbot that answers questions about Runescape quests.',
    tags: ['Python'],
    image: '/images/scripting.png',
  },
  {
    title: 'Spotify Clone',
    description: 'Spotify clone written using flutter and the dart programming language.',
    tags: ['Flutter', 'Dart'],
    image: '/images/spotify.jpg',
  },
];

const Projects = () => {
  return (
    <section className="py-16 mt-80">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-6">Notable Projects</h2>
        <p className="text-center text-gray-400 mb-16">A curated selection of my work spanning multiple fields and technologies.</p>
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
                <a href={project.link} className="text-green-400 hover:underline">View Project &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
