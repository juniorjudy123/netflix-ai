import React from "react"
import { useSelector } from "react-redux"
import VideoBg from "./VideoBg"
import VideoTitle from "./VideoTitle"

const MainContainerComponent = () => {
	const movies = useSelector((store) => store.movies?.nowPlayingMovies)

	if (!movies) return //early return

	const MainMovie = movies[0]
	console.log("MainMovie", MainMovie)

	const { original_title, overview, id } = MainMovie

	return (
		<div>
			<VideoBg movieId={id} />
			<VideoTitle title={original_title} overview={overview} />
		</div>
	)
}

export default MainContainerComponent
