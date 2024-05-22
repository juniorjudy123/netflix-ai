// import React from "react"
// import MovieList from "./MovieList"
// import { useSelector } from "react-redux"

// const SecondaryContainerComponent = () => {
// 	const movies = useSelector((store) => store.movies)
// 	return (
// 		<div className="">
// 			<MovieList
// 				title={"Now Playing Movies"}
// 				movies={movies.nowPlayingMovies}
// 			/>
// 		</div>
// 	)
// }

// //movielist-inside eachmovielist(trending ,nowPlaying,Horror) we have  movieCards
// export default SecondaryContainerComponent
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
				<MovieList
					title={"Trending Movies"}
					movies={movies?.nowPlayingMovies}
				/>
				<MovieList title={"Popular Movies"} movies={movies?.nowPlayingMovies} />
				<MovieList title={"Horror Movies"} movies={movies?.nowPlayingMovies} />
				<MovieList title={"Action Movies"} movies={movies?.nowPlayingMovies} />
			</div>
		</div>
	)
}

export default SecondaryContainerComponent
