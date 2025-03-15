import React from 'react';
import { Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar = ({ toggleLanguage, toggleTheme, isGreek, isDark }) => {
  const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link to="/" className="flex items-center px-3 py-2 text-gray-700 dark:text-white hover:text-blue-600">
              {isGreek ? 'Αρχική' : 'Home'}
            </Link>
            <Link to="/about" className="flex items-center px-3 py-2 text-gray-700 dark:text-white hover:text-blue-600">
              {isGreek ? 'Σχετικά' : 'About Me'}
            </Link>
            <Link to="/services" className="flex items-center px-3 py-2 text-gray-700 dark:text-white hover:text-blue-600">
              {isGreek ? 'Υπηρεσίες' : 'Services'}
            </Link>
            <Link to="/portfolio" className="flex items-center px-3 py-2 text-gray-700 dark:text-white hover:text-blue-600">
              {isGreek ? 'Χαρτοφυλάκιο' : 'Portfolio'}
            </Link>
            <Link to="/contact" className="flex items-center px-3 py-2 text-gray-700 dark:text-white hover:text-blue-600">
              {isGreek ? 'Επικοινωνία' : 'Contact'}
            </Link>
          </div>
          
          <div className="relative">
            <button
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <FiSettings className="w-6 h-6 text-gray-700 dark:text-white" />
            </button>
            
            {isSettingsOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
              >
                <div className="p-2">
                  <button
                    onClick={toggleLanguage}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                  >
                    {isGreek ? 'English' : 'Ελληνικά'}
                  </button>
                  <button
                    onClick={toggleTheme}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                  >
                    {isDark ? 'Light Mode' : 'Dark Mode'}
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;