"use client";
import { motion } from "framer-motion";

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  description: string[];
  isLast: boolean;
}

const ExperienceCard = ({
  title,
  company,
  duration,
  description,
  isLast,
}: ExperienceCardProps) => {
  return (
    <div className="relative flex flex-col items-center md:items-start">
      {/* Timeline Line & Dot */}
      <>
        {/* Mobile: Center line */}
        {!isLast && (
          <div
            className="absolute left-1/2 md:left-[7px] h-full w-0.5 bg-blue-100"
            style={{ top: "2rem" }}
          />
        )}

        {/* Desktop: Dot - Show for all cards */}
        <div
          className="hidden md:block absolute left-0 w-3.5 h-3.5 rounded-full border-2 border-blue-600 bg-white"
          style={{ top: "2rem" }}
        />
      </>

      {/* Card Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full md:w-[calc(100%-2rem)] mb-8 z-10 md:ml-8"
      >
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
              <p className="text-blue-600">{company}</p>
            </div>
            <p className="text-sm text-gray-500 mt-1 md:mt-0">{duration}</p>
          </div>
          <div className="space-y-2">
            {description.map((item, index) => (
              <p key={index} className="text-gray-600">
                {item}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceCard;
