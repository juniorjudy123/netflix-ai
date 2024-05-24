import React from "react"
import HeaderComponent from "./HeaderComponent"
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies"
import MainContainerComponent from "./MainContainerComponent"
import SecondaryContainerComponent from "./SecondaryContainerComponent"
import usePopularMovies from "../customHooks/usePopularMovies.jsx"
import useUpComingMovies from "../customHooks/useUpComingMovies.jsx"
import useTopRated from "../customHooks/useTopRated.jsx"
import GptsearchComponent from "./GptsearchComponent.jsx"
import { useSelector } from "react-redux"

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
				<GptsearchComponent />
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
