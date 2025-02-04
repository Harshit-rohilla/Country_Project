import { Link } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoCloseSharp } from "react-icons/io5"
import { useState } from "react"



function Header(){
    const[ham,changeHam]=useState(true)
    return(
        <>
        <nav className="w-full bg-[#313743]">
            <div className="sm:max-w-2/3 sm:mx-auto w-full flex justify-between px-4 sm:px-0 sm:justify-between items-center py-4">
                <div className="text-[#cbe957] text-lg font-semibold"><Link to="/">Countries</Link></div>
                <div onClick={()=>{changeHam((prev)=>(!prev))}} className="sm:hidden text-[#cbe957] text-xl">
                    {ham?<GiHamburgerMenu/>:<div className="text-2xl"><IoCloseSharp/></div>}
                </div>
                <div className="hidden sm:block">
                    <ul className="flex justify-center text-base items-center gap-8 text-[#cbe957]">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/country">Country</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className={`${ham?("hidden w-full"):("block w-full")}`}>
                    <ul className="sm:flex w-full flex flex-col gap-2  items-center sm:justify-center text-lg sm:items-center sm:gap-8 text-[#cbe957]">
                        <li onClick={()=>{changeHam((prev)=>(!prev))}}><Link to="/">Home</Link></li>
                        <li onClick={()=>{changeHam((prev)=>(!prev))}}><Link to="/about">About</Link></li>
                        <li onClick={()=>{changeHam((prev)=>(!prev))}}><Link to="/country">Country</Link></li>
                        <li onClick={()=>{changeHam((prev)=>(!prev))}}><Link to="/contact">Contact</Link></li>
                    </ul>
            </div>
        </nav>
        </>
    )
}
export default Header