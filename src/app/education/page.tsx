"use client";
import EducationCard from "@/components/EducationCard";
import data from "@/data/data.json";

export default function Education() {
  const { education } = data;

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 md:px-12 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-0 w-48 md:w-72 h-48 md:h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-40" />
        <div className="absolute bottom-40 right-20 w-48 md:w-64 h-48 md:h-64 bg-blue-50 rounded-lg -rotate-12 mix-blend-multiply filter blur-xl opacity-40" />
      </div>

      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-medium mb-8 md:mb-12 text-gray-700 text-center md:text-left">
            Education
          </h1>

          {/* Education Timeline */}
          <div className="relative pl-4 md:pl-8">
            {education.map((edu, index) => (
              <EducationCard
                school={""}
                key={index}
                {...edu}
                isLast={index === education.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
