import React from "react"
import { useSelector } from "react-redux"
import useBrowseBg from "../customHooks/useBrowseBg"

const VideoBg = ({ movieId }) => {
	const trailerVideos = useSelector((store) => store.movies?.trailerVideos)
	useBrowseBg(movieId)

	return (
		<div>
			<iframe
				width="560"
				height="315"
				src={"https://www.youtube.com/embed/" + trailerVideos?.key}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
			></iframe>
			<h1 className="font-bold text-4xl m-8 text-red-500">
				Site under construction .Please login later
			</h1>
		</div>
	)
}

export default VideoBg
