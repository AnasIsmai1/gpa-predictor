import logo from "../../assets/images/UEIT_Logo.png";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";

const Header = () => {
  const [isDark, setIsDark] = useState(true); // Set default to true
  const [isActive, setIsActive] = useState(true);

  // Set the initial theme based on the state
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const handleThemeClick = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <header className="w-[95%] relative mx-auto py-4 flex items-center justify-between text-white dark:text-black">
      <img src={logo} alt="KFUEIT Logo" className="w-[55px]" />
      <div
        onClick={handleThemeClick}
        className="text-[rgba(215,215,215,1)] dark:bg-[rgba(40,40,40,1)] bg-white dark:bg-black p-2 shadow-xl rounded-full hover:cursor-pointer hover:text-gray-500 dark:hover:text-gray-100 transition-all ease duration-150"
      >
        {isDark ? <FaSun size={32} /> : <FaMoon size={32} />}
      </div>
    </header>
  );
};

export default Header;
