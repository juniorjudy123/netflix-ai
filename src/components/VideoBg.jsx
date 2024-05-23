// export default VideoBg
import React from "react"
import { useSelector } from "react-redux"
import useBrowseBg from "../customHooks/useBrowseBg"

const VideoBg = ({ movieId }) => {
	const trailerVideos = useSelector((store) => store.movies?.trailerVideos)
	useBrowseBg(movieId)

	return (
		<div className="relative z-5">
			<iframe
				className="w-full  aspect-video "
				// className=" w-full aspect-video"
				src={`https://www.youtube.com/embed/${trailerVideos?.key}?autoplay=1&mute=1`}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				style={{ zIndex: -1 }}
			></iframe>
		</div>
	)
}

export default VideoBg
