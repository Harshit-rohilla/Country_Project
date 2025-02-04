import { Route, Routes } from "react-router-dom"
import Parent from "./pages/Parent"
import Home from "./pages/Home"
import About from "./pages/About"
import Country from "./pages/Country"
import Contact from "./pages/Contact"
import Error from "./pages/Error"
import SingleCountry from "./pages/SingleCountry"

function App(){
  return(
    <>
    <Routes>
      <Route path="/" element={<Parent/>}>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/country" element={<Country/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/country/:id" element={<SingleCountry/>}/>
        <Route path="*" element={<Error/>}/>
      </Route>
    </Routes>
    </>
  )
}
export default App