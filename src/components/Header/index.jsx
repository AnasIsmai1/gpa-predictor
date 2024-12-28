import logo from "../../assets/images/UEIT_Logo.png"
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
    const [isDark, setIsDark] = useState(true)
    const [isActive, setIsActive] = useState(true)

    return (
        <header className="w-[95%] relative mx-auto py-4 flex items-center justify-between text-white">
            <img src={logo} alt="KFUEIT Logo" />
            <div className="absolute left-[50%] -translate-x-1/2">
                <ul className="relative shadow-xl overflow-hidden list-none flex items-center justify-between gap-2 text-black bg-[rgba(255,255,255,0.8)] p-3 rounded-full w-[150px]">
                    <div className={`bg-gray-800 h-[40px] w-[40%] rounded-full transition-all ease duration-150 absolute ${isActive ? 'left-1' : 'left-[57%]'} z-0`}></div>
                    <li className={`hover:cursor-pointer relative z-10 transition-all ease duration-150 ${isActive && 'text-white'}`} onClick={() => setIsActive(true)}>Mids</li>
                    <li className={`hover:cursor-pointer relative z-10 transition-all ease duration-150 ${!isActive && 'text-white'}`} onClick={() => setIsActive(false)}>Finals</li>
                </ul >
            </div>
            <div onClick={() => setIsDark(prev => !prev)} className="text-[rgba(215,215,215,1)] bg-white p-2 rounded-full hover:cursor-pointer hover:text-gray-500 transition-all ease duration-150">
                {
                    isDark ?
                        <FaSun size={32} /> :
                        <FaMoon size={32} />
                }

            </div>
        </header >
    )
}

export default Header
