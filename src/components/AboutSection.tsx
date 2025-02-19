"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface AboutSectionProps {
  title: string;
  description: string;
  image_url: string;
  skills: string[];
}

// Function to generate random background color
const getRandomColor = () => {
  const colors = [
    "bg-blue-100 text-blue-800",
    "bg-green-100 text-green-800",
    "bg-yellow-100 text-yellow-800",
    "bg-purple-100 text-purple-800",
    "bg-pink-100 text-pink-800",
    "bg-indigo-100 text-indigo-800",
    "bg-red-100 text-red-800",
    "bg-orange-100 text-orange-800",
    "bg-teal-100 text-teal-800",
    "bg-cyan-100 text-cyan-800",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const AboutSection = ({ data }: { data: AboutSectionProps }) => {
  // Split description by newlines and filter out empty strings
  const descriptionParagraphs = data.description.split("\n").filter(Boolean);

  return (
    <section className="pb-16 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-40" />
        <div className="absolute bottom-40 left-20 w-64 h-64 bg-blue-50 rounded-lg rotate-12 mix-blend-multiply filter blur-xl opacity-40" />
        <div
          className="absolute top-40 left-1/2 w-0 h-0 
          border-l-[100px] border-l-transparent
          border-b-[150px] border-blue-50
          border-r-[100px] border-r-transparent
          mix-blend-multiply filter blur-xl opacity-40"
        />
      </div>

      <div className="container mx-auto">
        {/* Centered title with more bottom margin */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          About Me
        </h2>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center">
          {/* Image - Added padding in mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-[300px] md:h-[400px] w-full order-1 md:order-2 px-4 md:px-0"
          >
            <div className="relative h-full w-full">
              <Image
                src={data.image_url}
                alt="Avinash Kariya"
                fill
                className="object-cover rounded-2xl shadow-xl"
                style={{ objectPosition: "center" }}
              />
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-blue-600 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-600 rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="space-y-3 text-gray-600 mb-6 text-justify">
              {descriptionParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
            </div>
            {/* Skills Section */}
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <span
                  key={index}
                  className={`${getRandomColor()} px-3 py-1 rounded-full text-sm font-medium transition-transform hover:scale-105`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
