import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video absolute pt-40 px-10 text-white bg-gradient-to-r from-slate-900">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>

        <div className="flex">
            <button className="bg-white text-black px-8 py-2 rounded-md hover:bg-opacity-80 text-xl flex items-center gap-2">
                <FaPlay className="text-lg" />
                Play
            </button>
            <button className="bg-black text-white px-8 py-2 rounded-md ml-4 hover:bg-opacity-80 text-xl bg-opacity-50 flex items-center gap-2">
                <IoMdInformationCircleOutline className="text-2xl" />
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle  