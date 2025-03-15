import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = ({ isGreek }) => {
  const portfolioItems = [
    {
      title: isGreek ? 'Εκπαίδευση' : 'Education',
      description: isGreek
        ? 'Βιομηχανική Πληροφορική, Σχολή Τεχνολογικών Εφαρμογών - Καβάλα'
        : 'Industrial Informatics, School of Technological Applications - Kavala'
    },
    {
      title: isGreek ? 'Πιστοποιήσεις' : 'Certifications',
      description: isGreek
        ? 'ChatGPT AI, Ψηφιακό Μάρκετινγκ, Διαφημίσεις στα Μέσα Κοινωνικής Δικτύωσης'
        : 'ChatGPT AI, Digital Marketing, Social Media Ads'
    },
    {
      title: isGreek ? 'Διαχείριση Έργων' : 'Project Management',
      description: isGreek
        ? 'Αποτελεσματικός συντονισμός και παράδοση έργων πελατών'
        : 'Effective coordination and delivery of client projects'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {isGreek ? 'Χαρτοφυλάκιο' : 'Portfolio'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;