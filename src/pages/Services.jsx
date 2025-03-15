import React from 'react';
import { motion } from 'framer-motion';

const Services = ({ isGreek }) => {
  const services = [
    {
      title: isGreek ? 'Σχέσεις με Πελάτες' : 'Client Relations',
      description: isGreek 
        ? 'Δημιουργία και διατήρηση ισχυρών, μακροχρόνιων συνεργασιών με πελάτες'
        : 'Creating and maintaining strong, long-term partnerships with clients'
    },
    {
      title: isGreek ? 'Ανάπτυξη Λογαριασμών' : 'Account Growth',
      description: isGreek
        ? 'Στρατηγικός σχεδιασμός για βιώσιμη ανάπτυξη λογαριασμών'
        : 'Strategic planning for sustainable account growth'
    },
    {
      title: isGreek ? 'Διαχείριση Έργων' : 'Project Management',
      description: isGreek
        ? 'Αποτελεσματικός συντονισμός και παράδοση έργων πελατών'
        : 'Effective coordination and delivery of client projects'
    },
    {
      title: isGreek ? 'Επικοινωνία' : 'Communication',
      description: isGreek
        ? 'Σαφής και αποτελεσματική επικοινωνία με τους ενδιαφερόμενους'
        : 'Clear and effective communication with stakeholders'
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
          {isGreek ? 'Υπηρεσίες' : 'Services'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;