import Head from 'next/head';

const About: React.FC = () => {
  return (
    <div>
      <Head>
        <title>About Me</title>
        <meta name="description" content="About Me - Your name and profession" />
      </Head>

      <div className="bg-black min-h-screen flex justify-center items-center py-12 px-6">
        <div className="w-full max-w-7xl text-white">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-semibold text-green-500 mb-4">About Me</h1>
            <p className="text-lg text-gray-300">
              A little bit about who I am and what I do.
            </p>
          </div>

          <div className="flex items-center justify-center space-x-8">
            {/* Profile Image */}
            <div className="w-1/3">
              <img
                src="/profile picture.jpeg"
                alt="Profile Picture"
                className="rounded-full shadow-xl"
                height={300}
              />
            </div>

            {/* Text Content */}
            <div className="w-2/3">
              <p className="text-lg text-gray-300 mb-4">
                Hi, I’m <span className="font-semibold text-green-500">Laiba Noor</span>, a passionate developer. Currently, I am pursuing my BSSE at Sindh Madressatul Islam University. In addition to this, I am also a student of GIAIC. I specialize in creating responsive and user-friendly websites, and my skills include HTML, CSS, Tailwind CSS, Next.js, and TypeScript, focusing on delivering seamless, clean, and modern designs.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                When I'm not coding, you can find me exploring new technologies, working on creative design projects, or discovering new places through travel. I love collaborating on meaningful projects and continuously improving my skills.
              </p>
              <p className="text-lg text-gray-300">
                My goal is to bring value through the projects I work on, whether it’s by improving user experience or solving real-world problems through innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
