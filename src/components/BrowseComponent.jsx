import React from "react"
import HeaderComponent from "./HeaderComponent"
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies"
import MainContainerComponent from "./MainContainerComponent"
import SecondaryContainerComponent from "./SecondaryContainerComponent"

const BrowseComponent = () => {
	useNowPlayingMovies()
	return (
		<div>
			<HeaderComponent />
			<MainContainerComponent />
			<SecondaryContainerComponent />
		</div>
	)
}

export default BrowseComponent
