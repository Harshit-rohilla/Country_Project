function GridBox({obj}){
    return(
        <>
        <div className="w-full h-60 flex flex-col justify-center py-2 px-2 sm:px-4 sm:py-6 border border-[#cbe957] rounded-tl-4xl rounded-br-4xl">
            <h1 className="text-lg font-semibold mb-2">{obj.countryName}</h1>
            <div className="flex items-center"><h1 className="text-base sm:text-lg">Capital:</h1><p className="text-[#7d892d] text-xs sm:text-sm">{obj.capital}</p></div>
            <div className="flex items-center"><h1 className="text-base sm:text-lg">Population:</h1><p className="text-[#7d892d] text-xs sm:text-sm">{obj.population}</p></div>
            <div className="flex items-center"><p className="text-[#7d892d] text-xs"><span className="text-[#cbe957] text-base sm:text-lg">InterestingFact:</span> {obj.interestingFact}</p></div>
        </div>
        </>
    )
}
export default GridBox