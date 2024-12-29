import PropTypes from "prop-types"
import { FaBookOpen, FaArrowRight } from "react-icons/fa6";

const Card = ({ color = "red", desc, main, icon }) => {
    return (
        <div className={`inline group my-10 w-[450px] bg-${color}-300 p-5 py-6 rounded-3xl flex flex-col justify-between`}>
            <div className={`px-5 py-3 w-fit flex items-center gap-3 bg-white text-${color}-400 rounded-full p-2`}>
                {!icon ?
                    <FaBookOpen size={24} className="group-hover:-translate-x-9 group-hover:opacity-0 transition-all ease duration-300" />
                    :
                    icon
                }

                <h3 className="font-semibold text-xl group-hover:-translate-x-9 transition-all ease duration-300">{main}</h3>
                <FaArrowRight size={24} className="group-hover:opacity-[1] group-hover:-translate-x-10 opacity-0 translate-y-[.125rem] translate-x-9 transition-all ease duration-300" />
            </div>
            <p className={`text-start font-sans font-semibold text-2xl mt-14 text-${color}-500`}>{desc}</p>
        </div>
    )
}

Card.propTypes = {
    color: PropTypes.string,
    desc: PropTypes.string,
    main: PropTypes.string,
    icon: PropTypes.element
}

export default Card
