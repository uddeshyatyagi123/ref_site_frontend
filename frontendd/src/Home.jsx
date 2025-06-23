// src/HomePage.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
  };

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-700 to-purple-500"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="p-8 bg-white shadow-md rounded-md w-full max-w-md"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-extrabold mb-4 text-gray-800">
          Welcome to Your Web App
        </h1>
        <p className="text-gray-600 mb-6">
          Choose your role below to get started with an amazing learning
          experience.
        </p>
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link to="/refreesignup">
            <motion.button
              className="py-3 px-6 bg-indigo-500 text-white rounded-md w-full focus:outline-none"
              whileHover="hover"
              variants={buttonVariants}
              onClick={() => alert("Redirecting to Refree page...")}
            >
              Become a Referee
            </motion.button>
          </Link>
          <Link to="/studentsignup">
            <motion.button
              className="py-3 px-6 bg-green-500 text-white rounded-md w-full focus:outline-none"
              whileHover="hover"
              variants={buttonVariants}
              onClick={() => alert("Redirecting to Student page...")}
            >
              Enroll as a Student
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
