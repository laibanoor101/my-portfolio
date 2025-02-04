'use client';  // This is important to mark this component as client-side rendered

import { useRouter } from 'next/navigation';  // Import from 'next/navigation'

const Footer: React.FC = () => {
  const router = useRouter(); // Using useRouter from next/navigation

  const handleNavigation = (url: string) => {
    window.open(url, '_blank'); // Opens links in a new tab
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <p className="text-xl font-semibold text-green-500">Laiba Noor</p>
          <p className="text-lg text-gray-300">
            Passionate Web Developer | Creator of Responsive Websites | Lifelong Learner
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-6">
          <span
            onClick={() => handleNavigation('https://github.com/laibanoor101')}
            className="text-gray-300 hover:text-green-500 text-2xl cursor-pointer"
          >
            <i className="fab fa-github"></i> GitHub
          </span>
          <span
            onClick={() => handleNavigation('https://www.linkedin.com/in/laiba-noor-1ba8332b7/')}
            className="text-gray-300 hover:text-green-500 text-2xl cursor-pointer"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </span>
        </div>

        <div>
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Laiba Noor. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
