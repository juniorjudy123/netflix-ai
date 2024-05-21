import React, { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"

const VideoBg = ({ movieId }) => {
	const getMovieVideos = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/823464/videos?language=en-US",
			API_OPTIONS
		)
		const json = await data.json()

		const filteredTrailers = json.results.filter(
			(video) => video.type === "Trailer"
		)
		console.log("filteredtrailers", filteredTrailers)
		//if no filteredTrailers
		const trailer = filteredTrailers.length
			? filteredTrailers[0]
			: json.results[0]
		console.log("trailer", trailer)
	}

	useEffect(() => {
		getMovieVideos()
	}, [])

	return (
		<div>
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/9bS5XN7xx2U?si=ZZVsX8Gxk9m79VW3"
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
			></iframe>
		</div>
	)
}

export default VideoBg
