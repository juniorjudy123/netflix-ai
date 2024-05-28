import React from "react"
import { IoIosPlay } from "react-icons/io"
import { FaCircleInfo } from "react-icons/fa6"

function VideoTitle({ title, overview }) {
	return (
		<div className="absolute top-0 left-0  pt-[8%] w-full aspect-video bg-gradient-to-r from-black text-white p-10 z-0">
			<h1 className="font-bold text-4xl w-1/4">{title}</h1>
			<p className="text-lg py-6 w-1/4 ">{overview}</p>
			<div className="flex mt-3">
				<button className="flex items-center bg-white hover:bg-opacity-60 text-black font-semibold p-2 px-8 rounded-lg text-xl w-45">
					<IoIosPlay className="mr-2" />
					<span>Play</span>
				</button>
				<button className=" flex items-center bg-gray-500 hover:bg-opacity-60 mx-2 text-black font-semibold p-2 px-8 rounded-lg text-xl w-45">
					<FaCircleInfo className="mr-2" />
					<span>More Info</span>
				</button>
			</div>
		</div>
	)
}

export default VideoTitle
