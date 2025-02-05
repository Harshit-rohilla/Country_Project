import { useState } from "react"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";


function AllCountry({data,setData}){
  const[filterRegion,setFilterRegion]=useState("All")
  const[searchCountry,setSearchCountry]=useState("")
  const[filteredData,setFilteredData]=useState(data)

  function filterCountry(e){
    const cont=e.target.value
    setSearchCountry(cont)
    const newData=data.filter((obj)=>(obj.name.common.toLowerCase().includes(cont.toLowerCase())))
    setFilteredData(newData)
  }
  function filterWithRegion(e){
    const filRegion=e.target.value
    setFilterRegion(filRegion)
    if(filRegion!=="All"){
      const newData=data.filter((obj)=>(obj.region===filRegion))
      setFilteredData(newData)
    }
    else{
      setFilteredData(data)
    }
  }
    return(
        <>
        <div className="w-full px-4 sm:px-0 mt-10 sm:mx-auto sm:w-2/3 flex justify-between items-center">
          <input onChange={filterCountry} type="text" value={searchCountry} placeholder="search your country" className="text-[#cbe953] border border-[#cbe953] outline-none py-1 px-2 rounded-sm"/>
          <select onChange={filterWithRegion} value={filterRegion} className="text-[#cbe953] bg-black py-1 px-2 border border-[#cbe953] outline-none">
            <option>All</option>
            <option>Africa</option>
            <option>Americas</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
          </select>
        </div>
        <div className="flex-grow mt-10 w-full px-4 sm:px-0 sm:w-2/3 grid gap-x-6 gap-y-10 grid-cols-2 md:grid-cols-4 mx-auto">
          {filteredData.map((obj, index) => (
            // Main container that handles hover state
            <div key={index} className="sm:relative w-full h-72 sm:[perspective:1000px]  sm:hover:[&>div]:[transform:rotateY(180deg)]">
              {/* Card container - handles the flip animation */}
              <div className="sm:relative w-full h-full duration-500 [transform-style:preserve-3d] sm:pointer-events-none">
                {/* Front of the card */}
                <div className="sm:absolute w-full h-full sm:[backface-visibility:hidden]">
                  <div className="w-full h-full flex flex-col justify-center text-[#cbe957] border border-[#7d892d] rounded-3xl">
                    <div className="w-4/5 mx-auto">
                      <div className="w-full h-20">
                        <img 
                          className="w-full h-full object-cover" 
                          src={obj.flags.png} 
                          alt="country-flag"
                        />
                      </div>
                      <div className="sm:hidden">
                        <h1 className="mt-1 mb-2 text-lg font-semibold">
                          {obj.name.common}
                        </h1>
                        <p className="text-[#7d892d] text-sm">
                          <span className="font-semibold text-[#cbe957]">Population: </span>
                          {obj.population}
                        </p>
                        <p className="text-[#7d892d] text-sm">
                          <span className="font-semibold text-[#cbe957]">Region: </span>
                          {obj.region}
                        </p>
                        <p className="text-[#7d892d] text-sm">
                          <span className="font-semibold text-[#cbe957]">Capital: </span>
                          {obj.capital[0]}
                        </p>
                        <div className="w-full mt-2">
                          <Link to={`/country/${obj.name.common}`}><button className="border flex items-center gap-2 h-9  border-[#cbe953] px-2 "><p>know more</p><MdOutlineKeyboardDoubleArrowRight/></button></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Back of the card */}
                <div className="sm:absolute hidden sm:block w-full h-full sm:[backface-visibility:hidden] sm:[transform:rotateY(180deg)]">
                  <div className="w-full h-full flex flex-col justify-center text-[#cbe957] border border-[#7d892d] rounded-3xl">
                    <div className="w-4/5 mx-auto">
                      <h1 className="mt-1 mb-2 text-xl font-semibold">
                        {obj.name.common}
                      </h1>
                      <p className="text-[#7d892d]">
                        <span className="font-semibold text-[#cbe957]">Population: </span>
                        {obj.population}
                      </p>
                      <p className="text-[#7d892d]">
                        <span className="font-semibold text-[#cbe957]">Region: </span>
                        {obj.region}
                      </p>
                      <p className="text-[#7d892d]">
                        <span className="font-semibold text-[#cbe957]">Capital: </span>
                        {obj.capital[0]}
                      </p>
                      <div className="w-full mt-2">
                        <Link to={`/country/${obj.name.common}`}><button className="border pointer-events-auto cursor-pointer flex items-center gap-2 h-9  border-[#cbe953] px-2 "><p>know more</p><MdOutlineKeyboardDoubleArrowRight/></button></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </>
    )
}
export default AllCountry