function Contact(){
    function handleForm(){
        // formData will be received in handleForm function as an argument
        // below is the react 19 code to get formData now we can send this data to backend 
        // const data=Object.fromEntries(FormData.entries())
    }
    return (
        <>
        <div className="w-2/3 mx-auto text-[#cbe957] flex flex-col items-center flex-grow">
            <h1 className="text-4xl font-semibold mt-20 mb-10">Contact Us</h1>
            <form className="flex flex-col w-full sm:w-2/5 gap-6">
                <input required name="username" className="px-2 py-2 outline-none w-full border border-[#cbe957] rounded-md" placeholder="Enter Your Name" type="text" name="" id="" />
                <input required name="email" className="px-2 py-2 outline-none w-full border border-[#cbe957] rounded-md" placeholder="Enter Your Email" type="email" name="" id="" />
                <textarea required name="message" className="px-2 py-2 h-30 outline-none w-full border border-[#cbe957] rounded-md" placeholder="Enter Your Message" name="" id=""></textarea>
                <button className="w-full border cursor-pointer border-[#cbe957] py-2 rounded-md">SEND</button>
            </form>
        </div>
        </>
    )
}
export default Contact