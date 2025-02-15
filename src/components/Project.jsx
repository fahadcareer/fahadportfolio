import React from 'react';
import { SiFlutter, SiFirebase } from "react-icons/si";
import { FaCode, FaMicrophone } from "react-icons/fa";

const Projects = () => {
    const projects = [
        {
            title: "Smart Office App",
            description: "A cross-platform application for comprehensive office management and team collaboration",
            features: [
                "Task management and scheduling system",
                "Voice assistant with NLP for task creation",
                "Meeting scheduling via voice commands",
                "Real-time collaboration features"
            ],
            technologies: ["Flutter", "NLP", "Voice Integration", "State Management"],
            icons: [SiFlutter, FaMicrophone]
        },
        {
            title: "POS Application",
            description: "A comprehensive Point of Sale application built with Flutter",
            features: [
                "Barcode scanning functionality",
                "Customer information management",
                "Shopping cart management",
                "Efficient API integration with Provider state management"
            ],
            technologies: ["Flutter", "Provider", "REST API", "Firebase"],
            icons: [SiFlutter, SiFirebase]
        }
    ];

    const ProjectCard = ({ project }) => (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="p-8 space-y-6">
                {/* Project Header */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                        <div className="flex gap-3">
                            {project.icons.map((Icon, index) => (
                                <Icon key={index} className="text-orange-500" size={24} />
                            ))}
                        </div>
                    </div>
                    <p className="text-gray-600">{project.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-800">Key Features</h4>
                    <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <FaCode className="text-orange-500 mt-1 mr-2 flex-shrink-0" size={16} />
                                <span className="text-gray-600">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-sm font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div id="project" className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-orange-500">
                        Projects
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Here are some of the key projects I've worked on, showcasing my expertise in mobile app development
                        and problem-solving abilities.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;