import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 dark:bg-[#1e1e1e] text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="mb-6 md:mb-0 flex-1 text-center md:text-left">
                    <h4 className="text-2xl font-semibold mb-2">About the Project</h4>
                    <p className="text-sm text-gray-400 max-w-sm mx-auto md:mx-0">
                        A GPA predictor with a fun twist and features to help you achieve
                        your academic goals!
                    </p>
                </div>

                <div className="flex-1 text-center">
                    <h4 className="text-2xl font-semibold mb-4">Creators</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {/* Anas */}
                        <div className="text-center">
                            <p className="font-medium text-lg mb-2">Anas</p>
                            <div className="flex justify-center space-x-6 mt-2">
                                <a
                                    href="https://www.instagram.com/a_ismail.ai"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400  hover:text-pink-500 transition duration-300"
                                >
                                    <span className="inline-block">
                                        <FaInstagram size={24} />
                                    </span>
                                </a>
                                <a
                                    href="https://github.com/AnasIsmai1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-gray-300 transition duration-300"
                                >
                                    <FaGithub size={24} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/anas-ismail-9220b41b1?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=android_app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-blue-700 transition duration-300"
                                >
                                    <FaLinkedin size={24} />
                                </a>
                            </div>
                        </div>

                        {/* Hamza */}
                        <div className="text-center">
                            <p className="font-medium text-lg mb-2">Hamza</p>
                            <div className="flex justify-center space-x-6 mt-2">
                                <a
                                    href="https://instagram.com/its_h.a.r"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-pink-500 transition duration-300"
                                >
                                    <FaInstagram size={24} />
                                </a>
                                <a
                                    href="https://github.com/HHARC"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-gray-300 transition duration-300"
                                >
                                    <FaGithub size={24} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/hamza-abdul-rauf?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=android_app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-blue-700 transition duration-300"
                                >
                                    <FaLinkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
                <p>© {new Date().getFullYear()} GPA Predictor | All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
