import React, { useEffect } from "react"
import HeaderComponent from "./HeaderComponent"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/moviesSlice"

const BrowseComponent = () => {
	const dispatch = useDispatch()
	const getNowPlayingMovies = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/now_playing?page=1",
			API_OPTIONS
		)
		const json = await data.json()
		console.log("movieList-", json.results)
		dispatch(addNowPlayingMovies(json.results))
	}

	useEffect(() => {
		getNowPlayingMovies()
	}, [])

	return (
		<div>
			<HeaderComponent />
		</div>
	)
}

export default BrowseComponent
