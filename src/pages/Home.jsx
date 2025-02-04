import { FaArrowRightLong } from "react-icons/fa6";
import {homePageData} from "../homePageData"
import GridBox from "../components/GridBox"
import { useNavigate } from "react-router-dom";

function Home(){
    const navigate=useNavigate()
    function moveToCountry(){
        navigate("/country")
    }
    return(
        <>
        <div className="sm:w-2/3 w-full px-4 sm:px-0 mx-auto text-[#cbe957] flex-grow">
            <div className="w-full grid sm:gap-0 gap-10 sm:grid-cols-2 mt-16">
                <div className="flex flex-col justify-end">
                    <h1 className="sm:text-4xl text-3xl font-medium">Explore the World, One Country at a Time</h1>
                    <h1 className="text-sm mt-4">Discover the history, culture and beauty of every nation. sort, search and filter through countries to find details tou need.</h1>
                    <button onClick={moveToCountry} className="border hover:cursor-pointer max-w-36 px-2 py-1 rounded-xl mt-4 flex items-center gap-2"><p>start exploring</p> <FaArrowRightLong/></button>
                </div>
                <div className="flex justify-center items-center order-1 sm:order-none">
                    <img className="sm:w-5/6 w-full aspect-auto" src="/world.png" alt="earth-image" />
                </div>
            </div>
            <div className="w-full mt-20">
                <p className="text-center text-2xl sm:text-3xl font-medium">Here are the interesting Facts</p>
                <p className="text-center text-2xl sm:text-3xl font-medium">we're proud of</p>
            </div>
            <div className="grid sm:grid-cols-3 grid-cols-2 gap-4 sm:gap-6 mt-10">
                {homePageData.map((obj,index)=>(<GridBox key={index} obj={obj}/>))}
            </div>
        </div>
        </>
    )
}
export default Home