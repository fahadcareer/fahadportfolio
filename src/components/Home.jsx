import Typewriter from "typewriter-effect";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Home = () => {
  return (
    <div id="home" className="bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-screen">
        <div className="order-2 md:order-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            I'm <span className="text-orange-500">Mohammed Fahad</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold flex gap-2 justify-center md:justify-start">
            <span className="text-orange-500">I'm a</span>
            <Typewriter
              options={{
                strings: ["Mobile App Developer"],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Mobile app developer specializing in Flutter, experienced in building cross-platform applications with responsive UI
            design, API integration, and performance optimization. Proficient in state management using Provider and BLoC, and
            skilled in collaborating with teams using Git.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start text-gray-700">
            {[
              { Icon: FaLocationDot, text: "Chennai" },
              { Icon: FaPhoneAlt, text: "8778341217" },
              { Icon: FaEnvelope, text: "fahadcareer29@gmail.com" }
            ].map(({ Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon className="text-orange-500" size={20} />
                <span className="font-medium">{text}</span>
              </div>
            ))}
          </div>

          <button
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition-colors duration-300 inline-block"
            onClick={() => window.open("/FahadCV.pdf", "_blank")}
          >
            Download CV
          </button>

        </div>

        <div className="order-1 md:order-2">
          <img
            className="w-[85%] mx-auto rounded-3xl shadow-xl"
            src="/profile.png"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
