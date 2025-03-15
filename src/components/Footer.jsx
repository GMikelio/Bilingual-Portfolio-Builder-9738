import React from 'react';

const Footer = ({ isGreek }) => {
  return (
    <footer className="bg-white dark:bg-gray-900 shadow-inner">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-700 dark:text-gray-300">
          <p>
            {isGreek 
              ? '© 2024 Ιωάννης Γκουγκούσης. Με επιφύλαξη παντός δικαιώματος.'
              : '© 2024 Ioannis Gougousis. All rights reserved.'}
          </p>
          <div className="mt-2">
            <a href="mailto:contact@example.com" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
              {isGreek ? 'Επικοινωνήστε μαζί μου' : 'Get in touch'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;