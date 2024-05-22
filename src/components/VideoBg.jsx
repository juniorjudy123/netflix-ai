// import React from "react"
// import { useSelector } from "react-redux"
// import useBrowseBg from "../customHooks/useBrowseBg"

// const VideoBg = ({ movieId }) => {
// 	const trailerVideos = useSelector((store) => store.movies?.trailerVideos)
// 	useBrowseBg(movieId)

// 	return (
// 		<div className="">
// 			<iframe
// 				className="w-screen aspect-video absolute"
// 				src={
// 					"https://www.youtube.com/embed/" +
// 					trailerVideos?.key +
// 					"?&autoplay=1&mute=1"
// 				}
// 				title="YouTube video player"
// 				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// 				referrerpolicy="strict-origin-when-cross-origin"
// 			></iframe>
// 		</div>
// 	)
// }

// export default VideoBg
import React from "react"
import { useSelector } from "react-redux"
import useBrowseBg from "../customHooks/useBrowseBg"

const VideoBg = ({ movieId }) => {
	const trailerVideos = useSelector((store) => store.movies?.trailerVideos)
	useBrowseBg(movieId)

	return (
		<div className="relative">
			<iframe
				className="w-full h-auto aspect-video"
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
