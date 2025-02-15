import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Junior Mobile App Developer",
      company: "Meerana Technologies, Chennai, Tamil Nadu",
      period: "May 2024 - Present",
      responsibilities: [
        "Designed and developed intuitive, user-friendly mobile interfaces using Flutter",
        "Collaborated with designers and product teams to create seamless, responsive applications",
        "Integrated RESTful APIs for dynamic data synchronization and utilized Firebase and MongoDB for backend services",
        "Implemented state management with Flutter Provider and BLoC for clean and efficient architecture",
        "Delivered cross-platform apps with multilingual support",
        "Enhanced user experience through custom animations and transitions",
        "Worked in a cross-functional team using Git"
      ]
    },
    {
      title: "Business Development Executive (Intern)",
      company: "RINEX, Bengaluru, Tamil Nadu",
      period: "Jun 2023 - Sep 2024",
      responsibilities: [
        "Conducted outbound calls and sent messages to prospective students",
        "Converted leads into enrollments by effectively communicating course benefits",
        "Maintained a student database and ensured timely follow-ups"
      ]
    }
  ];

  return (
    <div id="experience" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-orange-500">
          Professional Experience
        </h1>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <h2 className="text-2xl font-bold text-orange-500">
                    {exp.title}
                  </h2>
                  <span className="text-gray-600 font-medium">
                    {exp.period}
                  </span>
                </div>
                <h3 className="text-xl text-gray-800 font-medium">
                  {exp.company}
                </h3>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span className="text-gray-700">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;