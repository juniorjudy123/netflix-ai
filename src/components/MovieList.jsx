import React from "react"
import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }) => {
	console.log("MovieList:", movies)
	return (
		movies && (
			<div className="p-2 bg-black">
				<h1 className="text-2xl font-semibold py-2 text-white">{title}</h1>
				<div className="flex overflow-x-scroll  hide-scrollbar">
					<div className="flex">
						{movies.map((movie) => (
							<MovieCard key={movie.id} posterPath={movie.poster_path} />
						))}
					</div>
				</div>
			</div>
		)
	)
}

export default MovieList
