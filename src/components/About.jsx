import {
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
  FaFigma,
  FaNode,
} from "react-icons/fa";
import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiMongodb,
  SiPostman,
  SiFigma,
  SiCanva,
  SiAndroidstudio

} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { IoLogoNpm } from "react-icons/io5";

const About = () => {
  const skills = [
    { Icon: SiFlutter, name: "Flutter", color: "text-blue-500" },
    { Icon: SiDart, name: "Dart", color: "text-blue-400" },
    { Icon: SiFirebase, name: "Firebase", color: "text-yellow-500" },
    { Icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
    { Icon: SiPostman, name: "RESTful APIs", color: "text-orange-500" },
    { Icon: SiFigma, name: "Figma", color: "text-purple-500" },
    { Icon: SiCanva, name: "Canva", color: "text-blue-400" },
    { Icon: SiAndroidstudio, name: "Android Studio", color: "text-green-500" }
  ];

  return (
    <div id="about" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-orange-500">
          About Me
        </h1>

        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
          I'm <span className="font-bold text-orange-500">Mohamed Fahad</span>,
          a passionate Mobile app developer specializing in Flutter. I build cross-platform applications
          with responsive UI design, seamless API integration, and optimal performance.
        </p>

        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-orange-500 text-center">
            My Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map(({ Icon, name, color }) => (
              <div key={name} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col items-center gap-3">
                  <Icon size={40} className={color} />
                  <span className="font-medium text-gray-800">{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
