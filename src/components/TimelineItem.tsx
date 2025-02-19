"use client";

interface TimelineItemProps {
  date: string;
  company: string;
  position: string;
  description: string[];
  technologies: string[];
  isLast?: boolean;
}

const TimelineItem = ({
  date,
  company,
  position,
  description,
  technologies,
  isLast = false,
}: TimelineItemProps) => {
  return (
    <div className="relative pl-12 md:pl-24 pb-12">
      {/* Timeline Line & Circle */}
      <div className="absolute left-[11px] top-0 h-full">
        {!isLast && (
          <div className="absolute left-0 top-8 h-[calc(100%-32px)] w-px bg-blue-200" />
        )}
        <div className="absolute left-[-5px] top-[7px] h-4 w-4 rounded-full border-2 border-blue-600 bg-white" />
      </div>

      {/* Date */}
      <div className="absolute left-8 md:left-12 top-0 inline-flex items-center justify-center text-sm font-semibold text-blue-600 w-auto">
        {date}
      </div>

      {/* Content Card */}
      <div className="ml-8 md:ml-12">
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900">{position}</h3>
            <p className="text-blue-600 font-medium">{company}</p>
          </div>

          <div className="space-y-3">
            {description.map((item, index) => (
              <p key={index} className="text-gray-600">
                • {item}
              </p>
            ))}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
