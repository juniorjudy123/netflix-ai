import React, { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addTrailerVideos } from "../utils/moviesSlice"

const VideoBg = ({ movieId }) => {
	const dispatch = useDispatch(null)
	const trailerVideos = useSelector((store) => store.movies?.trailerVideos)
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
		dispatch(addTrailerVideos(trailer))
	}

	useEffect(() => {
		getMovieVideos()
	}, [])

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
