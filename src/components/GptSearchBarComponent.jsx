import React from "react"
import lang from "../utils/languageConstants"
import { useSelector } from "react-redux"

const GptSearchBarComponent = () => {
	const langKey = useSelector((store) => store.config.lang)
	console.log("langKey:", langKey)
	return (
		<div className="pt-[10%] flex justify-center ">
			<form className="w-1/2 bg-black  items-center grid grid-cols-12 ">
				<input
					type="text"
					className="col-span-9 p-4 m-3  rounded-lg"
					placeholder={lang[langKey]?.gptSearchPlaceholder}
				/>
				<button className="col-span-3 p-4 m-2 bg-red-700 text-white rounded-lg ">
					{lang[langKey]?.search}
				</button>
			</form>
		</div>
	)
}

export default GptSearchBarComponent
