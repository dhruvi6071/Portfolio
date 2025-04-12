import { useState, useEffect, useRef } from "react";
import { navLinks } from "../constants/texts";

const NavBar = () => {
  const [isTab, setIsTab] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsTab((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsTab(false);
      }
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsTab(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // const scrollToSection = (event, sectionId) => {
  //   event.preventDefault();

  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth", block: "start" });

  //     // Add a small delay before closing the menu
  //     setTimeout(() => setIsTab(false), 200);
  //   }
  // };

  return (
    <header className="py-5 fixed z-20 w-full bg-gradient-to-t from-primary to-secondary shadow-lg">
      <nav className="flex justify-between items-center text-xl text-text1 px-6 lg:px-28">
        {/* Brand Name */}
        <a href="/" className="font-bold text-2xl">
          Dhruvi Raj
        </a>

        {/* Mobile Menu Button */}
        <div className="lg:hidden relative" ref={menuRef}>
          <button
            className="text-text1 text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            &#9776; {/* Unicode for hamburger icon */}
          </button>

          {/* Mobile Dropdown */}
          <div
            className={`absolute right-0 mt-3 w-48 bg-secondary shadow-lg rounded-lg transform transition-all duration-300 ${
              isTab ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
            }`}
          >
            <ul className="flex flex-col text-center py-2">
              {navLinks.map((item) => (
                <li key={item.label} className="py-2 hover:bg-gray-300 rounded-md">
                  <a
                    href={item.href}
                    className="block text-lg font-roboto text-text1"
                    // onClick={(e) => scrollToSection(e, item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-roboto text-lg text-text1 hover:underline">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
