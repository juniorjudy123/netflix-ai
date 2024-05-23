import React from "react"
import HeaderComponent from "./HeaderComponent"
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies"
import MainContainerComponent from "./MainContainerComponent"
import SecondaryContainerComponent from "./SecondaryContainerComponent"
import usePopularMovies from "../customHooks/usePopularMovies.jsx"
import useUpComingMovies from "../customHooks/useUpComingMovies.jsx"
import useTopRated from "../customHooks/useTopRated.jsx"

const BrowseComponent = () => {
	useNowPlayingMovies()
	usePopularMovies()
	useUpComingMovies()
	useTopRated()

	return (
		<div>
			<HeaderComponent />
			<MainContainerComponent />
			<SecondaryContainerComponent />
		</div>
	)
}

export default BrowseComponent
