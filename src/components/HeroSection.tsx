"use client";
import { motion } from "framer-motion";

interface HeroSectionProps {
  name: string;
  title: string;
  description: string;
  greeting: string;
}

const HeroSection = ({ data }: { data: HeroSectionProps }) => {
  return (
    <div className="min-h-screen pt-24 px-6 md:px-12 flex items-center relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Circle */}
        <div className="absolute top-20 left-0 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-40" />
        {/* Square */}
        <div className="absolute bottom-40 right-20 w-64 h-64 bg-blue-50 rounded-lg -rotate-12 mix-blend-multiply filter blur-xl opacity-40" />
        {/* Triangle */}
        <div
          className="absolute top-1/3 left-1/2 w-0 h-0 
          border-l-[100px] border-l-transparent
          border-b-[150px] border-blue-50
          border-r-[100px] border-r-transparent
          mix-blend-multiply filter blur-xl opacity-40"
        />
      </div>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.span
            className="text-xl text-blue-600 mb-4 block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hey there! 👋
          </motion.span>
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {data.greeting} {data.name}
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl text-gray-600 mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {data.title}
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {data.description}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
