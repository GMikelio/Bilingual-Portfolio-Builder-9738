import React from 'react';
import { motion } from 'framer-motion';

const Home = ({ isGreek }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          {isGreek ? 'Ιωάννης Γκουγκούσης' : 'Ioannis Gougousis'}
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          {isGreek
            ? 'Χτίζοντας μακροχρόνιες σχέσεις με πελάτες και επιτυγχάνοντας εξαιρετικά αποτελέσματα.'
            : 'Building long-term relationships with customers and delivering exceptional results.'}
        </p>
      </div>
    </motion.div>
  );
};

export default Home;