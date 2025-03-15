import React from 'react';
import { motion } from 'framer-motion';

const About = ({ isGreek }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          {isGreek ? 'Σχετικά με εμένα' : 'About Me'}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {isGreek
            ? 'Ως απόφοιτος Βιομηχανικής Πληροφορικής, ανακάλυψα το πάθος μου για το συνδυασμό τεχνικών γνώσεων με στρατηγικές εστιασμένες στον πελάτη κατά τη διάρκεια της εμπειρίας μου στις πωλήσεις λογισμικού. Ειδικεύομαι στη δημιουργία συνέργειας μεταξύ αυτών των τομέων, αξιοποιώντας τις δεξιότητές μου για την αποτελεσματική αντιμετώπιση επιχειρηματικών προκλήσεων. Αυτός ο δυναμικός συνδυασμός οδηγεί τη δέσμευσή μου για τη δημιουργία αποτελεσμάτων που διακρίνονται τόσο στη μορφή όσο και στη λειτουργία.'
            : 'As an Industrial Informatics graduate, I discovered my passion for combining technical knowledge with customer-focused strategies during my experience in software sales. I specialize in creating synergy between these areas, leveraging my skills to effectively address business challenges. This dynamic combination drives my commitment to creating results that excel in both form and function.'}
        </p>
      </div>
    </motion.div>
  );
};

export default About;