import { useEffect, useState } from "react"
import AllCountry from "../components/AllCountry"
import Loader from "../components/Loader"
import axios from "axios"

function Country(){
    const API_ALL=import.meta.env.VITE_API_ALL
    const [data,setData]=useState([])
    const[loading,setLoading]=useState(true)
    useEffect(()=>{
        setLoading(true)
        axios.get(`${API_ALL}`)
        .then((res)=>{setData(res.data)})
        .catch((err)=>{console.log("error aai hai"+`${err}`)})
        .finally(()=>{setLoading(false)})
    },[])
    return(
        <>
        {loading?<Loader/>:<AllCountry data={data} setData={setData}/>}
        </>
    )
}
export default Country