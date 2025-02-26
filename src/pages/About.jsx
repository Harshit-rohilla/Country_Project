function About(){
    return(
        <>
        <div className="bg-black text-white min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Title */}
        <h1 className="text-4xl font-bold text-[#cbe953] text-center">
          About This Project 🌍
        </h1>

        {/* Introduction */}
        <p className="text-lg text-gray-300 leading-relaxed text-center">
          This project is a <span className="text-[#cbe953] font-semibold">React-based web application</span> 
          that dynamically fetches and displays details about a selected country 
          using the <span className="text-[#cbe953] font-semibold">REST Countries API</span>.
        </p>

        {/* Technologies Used */}
        <div className="border-l-4 border-[#cbe953] pl-4">
          <h2 className="text-2xl font-semibold text-[#cbe953]">🔹 Key Technologies Used</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
            <li><span className="text-[#cbe953] font-semibold">React.js</span> – For building UI components.</li>
            <li><span className="text-[#cbe953] font-semibold">React Router DOM</span> – Handles dynamic routing.</li>
            <li><span className="text-[#cbe953] font-semibold">Axios</span> – Fetches data from an API.</li>
            <li><span className="text-[#cbe953] font-semibold">Tailwind CSS</span> – For modern styling.</li>
            <li><span className="text-[#cbe953] font-semibold">Environment Variables</span> – Secure API URLs.</li>
            <li><span className="text-[#cbe953] font-semibold">Loader Component</span> – Shows a spinner while loading.</li>
          </ul>
        </div>

        {/* How it Works */}
        <div className="border-l-4 border-[#cbe953] pl-4">
          <h2 className="text-2xl font-semibold text-[#cbe953]">🔹 How It Works</h2>
          <p className="text-gray-300 mt-2 leading-relaxed">
            The application retrieves country data based on the URL parameter 
            using <span className="text-[#cbe953] font-semibold">useParams()</span>, 
            fetches data with <span className="text-[#cbe953] font-semibold">Axios</span>, 
            and updates state using <span className="text-[#cbe953] font-semibold">useState()</span>.
          </p>
        </div>

        {/* Displayed Information */}
        <div className="border-l-4 border-[#cbe953] pl-4">
          <h2 className="text-2xl font-semibold text-[#cbe953]">🔹 What’s Displayed?</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
            <li>🇮🇳 <span className="text-[#cbe953] font-semibold">Flag</span> – Displayed using `data[0]?.flags?.png`.</li>
            <li>📜 <span className="text-[#cbe953] font-semibold">Official & Common Name</span>.</li>
            <li>🌍 <span className="text-[#cbe953] font-semibold">Region & Subregion</span>.</li>
            <li>🏙️ <span className="text-[#cbe953] font-semibold">Capital City</span>.</li>
            <li>💰 <span className="text-[#cbe953] font-semibold">Currency Information</span>.</li>
            <li>🏴 <span className="text-[#cbe953] font-semibold">Bordering Countries</span>.</li>
            <li>🌐 <span className="text-[#cbe953] font-semibold">Top-Level Domain (TLD)</span>.</li>
          </ul>
        </div>

        {/* Error Handling */}
        <div className="border-l-4 border-[#cbe953] pl-4">
          <h2 className="text-2xl font-semibold text-[#cbe953]">🔹 Handling Errors & Edge Cases</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
            <li><span className="text-[#cbe953] font-semibold">Image Not Showing?</span> Used optional chaining (`?.`).</li>
            <li><span className="text-[#cbe953] font-semibold">Undefined API Response?</span> Console logs help debug.</li>
            <li><span className="text-[#cbe953] font-semibold">Grid Alignment Issues?</span> Fixed with `flex` and `items-center`.</li>
          </ul>
        </div>

        {/* Conclusion */}
        <p className="text-lg text-gray-300 leading-relaxed text-center">
          This project demonstrates <span className="text-[#cbe953] font-semibold">React’s capability</span> 
          in handling **API requests, dynamic routing, and state management**, 
          making it a robust, modern web application! 🚀
        </p>

        {/* ChatGPT Disclaimer */}
        <div className="mt-10 text-center border-t border-gray-600 pt-4">
          <p className="text-sm text-gray-500">
            This response is generated by <span className="text-[#cbe953] font-semibold">ChatGPT</span> 😊
          </p>
        </div>
      </div>
    </div>
        </>
    )
}
export default About