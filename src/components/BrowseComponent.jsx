import React from "react"
import HeaderComponent from "./HeaderComponent"
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies"
import MainContainerComponent from "./MainContainerComponent"
import SecondaryContainerComponent from "./SecondaryContainerComponent"
import usePopularMovies from "../customHooks/usePopularMovies.jsx"
import useUpComingMovies from "../customHooks/useUpComingMovies.jsx"
import useTopRated from "../customHooks/useTopRated.jsx"
import { useSelector } from "react-redux"
import GptsearchPageComponent from "./GptsearchPageComponent.jsx"

const BrowseComponent = () => {
	useNowPlayingMovies()
	usePopularMovies()
	useUpComingMovies()
	useTopRated()
	const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
	console.log(" GptSearch:", showGptSearch)

	return (
		<div>
			<HeaderComponent />
			{showGptSearch ? (
				<GptsearchPageComponent />
			) : (
				<>
					<MainContainerComponent />
					<SecondaryContainerComponent />
				</>
			)}
		</div>
	)
}

export default BrowseComponent
