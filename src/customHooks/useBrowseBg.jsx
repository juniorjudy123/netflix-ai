import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addTrailerVideos } from "../utils/moviesSlice"

const useBrowseBg = (movieId) => {
	const dispatch = useDispatch()

	const getMovieVideos = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/" +
				movieId +
				"/videos?language=en-US",
			API_OPTIONS
		)
		const json = await data.json()

		const filteredTrailers = json.results.filter(
			(video) => video.type === "Trailer"
		)

		//if no filteredTrailers
		const trailer = filteredTrailers.length
			? filteredTrailers[1]
			: json.results[0]

		dispatch(addTrailerVideos(trailer))
	}

	useEffect(() => {
		getMovieVideos()
	}, [])
}

export default useBrowseBg
