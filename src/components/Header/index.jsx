import logo from "../../assets/images/UEIT_Logo.png";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
    const [isDark, setIsDark] = useState(true);

    const handleThemeClick = () => {
        const newTheme = isDark ? "light" : "dark";
        document.documentElement.classList.toggle("dark", !isDark);
        setIsDark(!isDark);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <header className="w-[95%] relative mx-auto py-4 flex items-center justify-between text-black dark:text-white">
            <img src={logo} alt="KFUEIT Logo" className="w-[65px]" />
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

