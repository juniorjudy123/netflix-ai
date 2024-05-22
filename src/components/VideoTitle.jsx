// import React from "react"

// function VideoTitle({ title, overview }) {
// 	return (
// 		<div className=" w-screen aspect-video pt-[15%] px-20  absolute bg-gradient-to-r  from-black text-white ">
// 			<h1 className="font-bold text-4xl w-1/4 ">{title}</h1>
// 			<p className="text-lg py-6 w-1/4">{overview}</p>
// 			<div className="">
// 				<button class="bg-white hover:bg-opacity-70 text-black font-semibold p-2 px-10  rounded-lg text-xl">
// 					▶️Play
// 				</button>

// 				<button class="bg-gray-600 hover:bg-opacity-70 mx-2 text-black font-semibold p-2 px-10 rounded-lg  text-xl">
// 					❕More Info
// 				</button>
// 			</div>
// 		</div>
// 	)
// }

// export default VideoTitle
import React from "react"

function VideoTitle({ title, overview }) {
	return (
		<div className="absolute top-0 left-0  pt-[15%] w-full aspect-video bg-gradient-to-r from-black text-white p-10 z-0">
			<h1 className="font-bold text-4xl w-1/4">{title}</h1>
			<p className="text-lg py-6 w-1/4">{overview}</p>
			<div>
				<button className="bg-white hover:bg-opacity-70 text-black font-semibold p-2 px-10 rounded-lg text-xl">
					▶️ Play
				</button>
				<button className="bg-gray-600 hover:bg-opacity-70 mx-2 text-black font-semibold p-2 px-10 rounded-lg text-xl">
					❕ More Info
				</button>
			</div>
		</div>
	)
}

export default VideoTitle
