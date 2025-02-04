import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: 'Blog Website',
      description: 'A multipage website built with Next.js, featuring a responsive layout and dynamic routing. It allows for easy blog creation and viewing.',
      imageUrl: '/blog website project.PNG', 
      demoLink: 'https://blog-web-omega-five.vercel.app/profile', 
      githubLink: 'https://github.com/laibanoor101/blog-web', // GitHub link
    },
    {
      title: 'E-commerce Website',
      description: 'A replica of a Figma design, created using Next.js. The project showcases a clean, responsive layout',
      imageUrl: '/project 2.png',
      demoLink: 'https://funiro-web.vercel.app/',
      githubLink: 'https://github.com/laibanoor101/funiro-web',
    },
    {
      title: 'Dynamic Shareable Resume',
      description: 'Project involves creating dynamic resume using HTML CSS and TypeScript where users can edit and get a unique shareable link',
      imageUrl: '/project 3.png',
      demoLink: 'https://milestone-no-5.vercel.app/',
      githubLink: 'https://github.com/laibanoor101/milestone-no-5',
    },
    
  
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-semibold text-green-500 text-center mb-8">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={500}
              height={300}
              className="rounded-lg mb-4"
            />
            <h3 className="text-2xl text-white mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex justify-between">
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:underline"
                >
                  Live Demo
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:underline"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
