import React from "react"
import HeaderComponent from "./HeaderComponent"
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies"

const BrowseComponent = () => {
	useNowPlayingMovies()
	return (
		<div>
			<HeaderComponent />
		</div>
	)
}

export default BrowseComponent
