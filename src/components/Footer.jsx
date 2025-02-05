import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

function Footer(){
    return(
        <>
        <footer className="w-full bg-[#313743]">
            <div className="w-full sm:max-w-2/3 mx-auto flex items-center py-4 px-2 sm:px-0">
                <ul className="flex w-full justify-between">
                    <li className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-[#cbe957]">
                        <div className="sm:text-lg text-base"><FaLocationDot/></div>
                        <div>
                            <h1>Find us</h1>
                            <h1>Sikar, Rajasthan</h1>
                        </div>
                    </li>
                    <li className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-[#cbe957]">
                    <div className="sm:text-lg text-base"><IoCall/></div>
                        <div>
                            <h1>Call us</h1>
                            <h1>7627053692</h1>
                        </div>
                    </li>
                    <li className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-[#cbe957]">
                    <div className="sm:text-lg text-base"><IoIosMail/></div>
                        <div>
                            <h1>Mail us</h1>
                            <h1>harshitrohilla105@gmail.com</h1>
                        </div>
                    </li>
                </ul>
            </div>
        </footer>
        </>
    )
}
export default Footer