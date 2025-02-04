import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Error(){
    const[time,setTime]=useState(3)
    const navigate=useNavigate()
    useEffect(()=>{
        const interval=setInterval(()=>{setTime((prev)=>(prev-1))},1000)
        const timeout=setTimeout(()=>{
            navigate("/")
        },3000)
        return ()=>{clearInterval(interval);
            clearTimeout(timeout)
        }
    },[])
    return(
        <>
        <div className="flex flex-grow flex-col justify-center items-center gap-4 text-[#cbe957] text-2xl w-full">
            <h1>404 - Page Not Found!!</h1>
            <h1>Redirecting to home in {time}</h1>
        </div>
        </>
    )
}
export default Error