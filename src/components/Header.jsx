import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="max-w-[90%] mx-auto py-4 flex items-center justify-between font-inter">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 hover:text-orange-500 transition-colors duration-300">
            Fahad
          </h1>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-orange-500 transition-all duration-300"
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>

        <nav
          className={`${isMenuOpen ? "block" : "hidden"
            } absolute top-[70px] left-0 w-full bg-white shadow-lg lg:shadow-none lg:relative lg:block lg:w-auto lg:top-0`}
        >
          <ul className="flex flex-col lg:flex-row items-center gap-6 p-6 lg:p-0 text-gray-700">
            {["home", "about", "experience", "project", "contact"].map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                className="hover:text-orange-500 cursor-pointer transition-all duration-300 capitalize font-medium"
              >
                {item}
              </Link>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          {[
            { href: "https://github.com/fahadcareer", Icon: FaGithub },
            { href: "https://www.linkedin.com/in/m-mohamed-fahad/", Icon: FaLinkedin },
            { href: "https://www.instagram.com/itzme_fahad_/", Icon: FaInstagram }
          ].map(({ href, Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-orange-500 transition-colors duration-300"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Header;
