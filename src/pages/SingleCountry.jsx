import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loader from "../components/Loader"
import axios from "axios"

function SingleCountry(){
    
    const {id}=useParams()
    const[data, setData]=useState([])
    const[loading,setLoading]=useState(true)
    const API_COUNTRY=`${import.meta.env.VITE_API_BASE}${id}${import.meta.env.VITE_API_COUNTRY}`
    useEffect(()=>{
        setLoading(true)
        axios.get(`${API_COUNTRY}`)
        .then((res)=>{setData(res.data)})
        .catch((err)=>{console.log("error aai hai singleCountryPage mein"+err)})
        .finally(()=>{setLoading(false)})
    },[id])
    return(
        <>
        {loading?<Loader/>:
            <div className="flex-grow flex items-center w-full">
                <div className="h-4/5 w-full border border-[#cbe953]">
                    {/* <h1>{data.name.official}</h1> */}
                    <p><span>{data.name.common}</span></p>
                    <p><span>{data.population}</span></p>
                    <p><span>{data.region}</span></p>
                    <p><span>{data.subregion}</span></p>
                    <p><span>{data.capital.join(', ')}</span></p>
                    {/* <p><span>{data.}</span></p>
                    <p><span>{data.}</span></p>
                    <p><span>{data.}</span></p> */}
                </div>
            </div>}
        </>
    )
}
export default SingleCountry