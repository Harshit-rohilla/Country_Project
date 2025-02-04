import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Parent(){

    return(
        <>
        <div className="w-full flex flex-col min-h-screen overflow-hidden">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
        </>
    )
}
export default Parent