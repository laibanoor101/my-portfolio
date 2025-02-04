import Head from 'next/head';

const Contact: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Contact Me - Get in touch" />
      </Head>

      <div className="bg-black min-h-screen flex justify-center items-center py-12 px-6">
        <div className="w-full max-w-7xl text-white">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-semibold text-green-500 mb-4">Contact Me</h1>
            <p className="text-lg text-gray-300 mb-6">
              I'm always open to new opportunities, collaborations, or just connecting with like-minded individuals.
              Whether you want to discuss tech, design, or something else, feel free to reach out. I would love to hear from you!
            </p>
            <p className="text-lg text-gray-300 mb-8">
              If you're looking to collaborate, have questions about my work, or simply want to chat about the latest trends in tech,
              don't hesitate to get in touch using the links below.
            </p>
          </div>

          {/* Contact Links */}
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-semibold text-green-500 mb-4">Connect with Me</h2>
            <p className="text-lg text-gray-300 mb-6">
              You can find me on various platforms. Feel free to connect with me via the following links:
            </p>

            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/laibanoor101"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-green-500"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/laiba-noor-1ba8332b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-green-500"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>

          {/* Additional Contact Info */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold text-green-500 mb-4">Other Ways to Reach Me</h2>
            <p className="text-lg text-gray-300">
              You can also reach out to me via email or through any of my social media accounts. I'm always open to interesting conversations!
            </p>
            <div className="mt-4 text-gray-300">
              <p>Email: <a href="mailto:your-email@example.com" className="hover:text-green-500">positivethought256@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
