import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { useState } from "react"

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
            <Footer />
        </>
    )
}

export default Home
