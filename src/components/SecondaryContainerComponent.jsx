import React from "react"
import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainerComponent = () => {
	const movies = useSelector((store) => store.movies)

	return (
		<div className=" bg-black">
			<div className="relative z-20  -mt-[25%] pt-12 pl-6">
				<MovieList
					title={"Now Playing Movies"}
					movies={movies?.nowPlayingMovies}
				/>
				<MovieList title={"Top Rated"} movies={movies?.topRated} />
				<MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />

				<MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
			</div>
		</div>
	)
}

export default SecondaryContainerComponent
