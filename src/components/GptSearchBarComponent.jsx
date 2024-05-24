import React from "react"

const GptSearchBarComponent = () => {
	return (
		<div className="pt-[5%] ">
			<form className="w-1/2 bg-black items-center ">
				<input
					type="text"
					className="p-4 m-4 bg-white bg-opacity-80 border  border-slate-700"
					placeholder="what would you like to watch today"
				/>
				<button className="py-4 px-6 bg-red-700 text-white">Search</button>
			</form>
		</div>
	)
}

export default GptSearchBarComponent
