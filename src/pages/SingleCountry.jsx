import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Loader from "../components/Loader"
import axios from "axios"

function SingleCountry(){
    const navigate=useNavigate()
    const {id}=useParams()
    const[data, setData]=useState([])
    const[loading,setLoading]=useState(true)
    const API_COUNTRY=`${import.meta.env.VITE_API_BASE}${id}${import.meta.env.VITE_API_COUNTRY}`
    
    useEffect(()=>{
        setLoading(true)
        axios.get(`${API_COUNTRY}`)
        .then((res)=>{setData(res.data)})
        .catch((err)=>{console.log("error aai hai singleCountryPage mein "+ err)})
        .finally(()=>{setLoading(false)})
    },[id])
    return(
        <>
        {loading?<Loader/>:<div className="flex-grow h-full flex flex-col gap-4 items-center justify-center w-full">
                <div className="py-20 grid grid-cols-2 w-2/3 text-[#cbe953] border border-[#cbe953]">
                    <div className="w-full flex justify-center items-center">
                        {data[0]?.flags?.png && <img className="w-1/2 aspect-auto" src={data[0].flags.png} alt="country-img" />}
                    </div>
                    <div className="w-full flex flex-col justify-center items-start gap-2">
                        <h1 className="text-3xl font-semibold mb-4">{data[0].name.official}</h1>
                        <p className="text-lg">Native Name: <span className="text-[#7d892d]">{data[0].name.common}</span></p>
                        <p className="text-lg">Population: <span className="text-[#7d892d]">{data[0].population}</span></p>
                        <p className="text-lg">Region: <span className="text-[#7d892d]">{data[0].region}</span></p>
                        <p className="text-lg">Sub Region: <span className="text-[#7d892d]">{data[0].subregion}</span></p>
                        <p className="text-lg">Capital: <span className="text-[#7d892d]">{data[0].capital.join(', ')}</span></p>
                        <p className="text-lg">Top Level Domain: <span className="text-[#7d892d]">{data[0].tld.join(", ")}</span></p>
                    </div>
                    
                </div>
                <div className="w-2/3 flex justify-end">
                    <button onClick={()=>{navigate(-1)}} className="text-[#cbe953] px-6 py-1 border cursor-pointer border-[#cbe953]">Back</button>
                </div>
            </div>
            }
        </>
    )
}
export default SingleCountry