import React from "react"
import GptSearchBarComponent from "./GptSearchBarComponent"
import GptMovieSuggestionsComponent from "./GptMovieSuggestionsComponent"
import { bgimg_URL } from "../utils/constants"

const GptsearchPageComponent = () => {
	return (
		<div>
			<div className="absolute -z-10">
				<img src={bgimg_URL} alt="bg-img" className="object-cover" />
			</div>
			<GptSearchBarComponent />
			<GptMovieSuggestionsComponent />
		</div>
	)
}

export default GptsearchPageComponent
