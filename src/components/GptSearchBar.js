import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";


const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang)
    return (
        <div className="pt-[12%] flex justify-center">
            <form className="w-1/2 bg-black/80 grid grid-cols-12">
                <input 
                    type="text" 
                    className="p-4 m-4 col-span-9 rounded-md"  
                    placeholder={lang[langKey].gptSearchPlaceholder}>

                </input>
                <button className="py-2 px-4 m-4 bg-red-600 text-white rounded-md col-span-3">{lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar;