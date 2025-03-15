import React from 'react';
import { motion } from 'framer-motion';

const Contact = ({ isGreek }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          {isGreek ? 'Επικοινωνία' : 'Contact'}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          {isGreek
            ? 'Σαφής και αποτελεσματική επικοινωνία με τους ενδιαφερόμενους.'
            : 'Clear and effective communication with stakeholders.'}
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {isGreek ? 'Στοιχεία Επικοινωνίας' : 'Contact Information'}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Email: contact@example.com</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;