import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClicked = (sectionId) => {
    setIsOpen(false); // Close menu first
    const isMobile = window.innerWidth < 768;

    const scrollToSection = () => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      setActiveSection(sectionId);
    };

    if (isMobile) {
      setTimeout(scrollToSection, 300); // delay for mobile
    } else {
      scrollToSection();
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
          isScrolled
            ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="bg-transparent text-white flex justify-between items-center">
          {/* For logo */}
          <div className="text-lg py-5 font-semibold cursor-pointer">
            <span className="text-[#8245ec]">&lt;</span>
            <span>Tanuj</span>
            <span className="text-[#8245ec]">/</span>
            <span>Gupta</span>
            <span className="text-[#8245ec]">&gt;</span>
          </div>

          <div className="">
            <ul
              className={`${
                isOpen ? "block" : "hidden"
              } absolute top-full left-0 w-full bg-[#050414] md:flex md:static md:w-auto md:bg-transparent space-y-4 md:space-y-0 md:space-x-8 text-gray-300 px-4 py-4 md:py-0`}
            >
              {menuItems.map((items) => (
                <li
                  key={items.id}
                  className={`cursor-pointer hover:text-[#8245ec] ${
                    activeSection === items.id
                      ? "text-[#8245ec]"
                      : "text-gray-300"
                  }`}
                >
                  <button
                    className="hover:cursor-pointer"
                    onClick={() => handleClicked(items.id)}
                  >
                    {items.label}
                  </button>
                </li>
              ))}

              {/* For Mobile GitHub & LinkedIn icons */}
              <li className="flex md:hidden space-x-6 pt-2">
                <a
                  className="hover:text-[#8245ec]"
                  href="https://github.com/tanujgupta2802"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  className="hover:text-[#8245ec]"
                  href="https://www.linkedin.com/in/tanuj-gupta-45903b290"
                >
                  <FaLinkedin size={24} />
                </a>
              </li>
            </ul>
          </div>

          {/* Desktop GitHub & LinkedIn icons */}
          <div className="hidden md:flex space-x-6">
            <a
              className="hover:text-[#8245ec]"
              href="https://github.com/tanujgupta2802"
            >
              <FaGithub size={24} />
            </a>
            <a
              className="hover:text-[#8245ec]"
              href="https://www.linkedin.com/in/tanuj-gupta-45903b290"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* For mobile menu icon */}
          <div className="md:hidden">
            {isOpen ? (
              <FiX
                className="text-3xl text-[#8245ec] cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <FiMenu
                className="text-3xl text-[#8245ec] cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
