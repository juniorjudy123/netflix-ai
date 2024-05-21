import React from "react"

function VideoTitle({ title, overview }) {
	return (
		<div className="pt-36 px-10 my-6 w-1/4 ">
			<h1 className="font-bold text-4xl">{title}</h1>
			<p className="text-xl my-4 py-6">{overview}</p>
			<div className="flex">
				<button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mx-2">
					▶️Play
				</button>

				<button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mx-2">
					❕More Info
				</button>
			</div>
		</div>
	)
}

export default VideoTitle
