import { useState } from "react"
import { IoIosChatbubbles } from "react-icons/io";
import { BiSolidHelpCircle } from "react-icons/bi";
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Card from "../../components/Card"

const Home = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <Header />
            <div className="mx-auto w-fit text-center my-52">
                <h1 className="font-semibold text-5xl">This is the Home Page</h1>
                <button onClick={() => { setCount(prev => prev + 1) }} className="my-10 text-xl bg-blue-500 text-white rounded-md p-2 px-4">Click Me</button>
                <p className="text-2xl">Count: {count}</p>
            </div>
            <div className="flex justify-center gap-3">
                <Card
                    color="gray"
                    main="Help Center"
                    desc="Get support"
                    icon={<BiSolidHelpCircle size={26} className="group-hover:-translate-x-9 group-hover:opacity-0 transition-all ease duration-300" />} />
                <Card
                    color="red"
                    main="Blog"
                    desc="Insights and News from the Team"
                />
                <Card
                    color="blue"
                    main="Stay Connected"
                    desc="Follow us @X for more updates"
                    icon={<IoIosChatbubbles size={26} className="group-hover:-translate-x-9 group-hover:opacity-0 transition-all ease duration-300" />}
                />
            </div>
            <Footer />
        </>
    )
}

export default Home
