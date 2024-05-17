import React from "react"
import { signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"

const HeaderComponent = () => {
	const navigate = useNavigate()
	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				navigate("/")
				// Sign-out successful.
			})
			.catch((error) => {
				navigate("/error")
			})
	}

	return (
		<div className=" absolute px-10 py-10 bg-gradient-to-b from-black z-10 opacity-85 w-full flex justify-between">
			<img
				className=" w-44"
				src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
				alt="logo-img"
			/>
			<div className="flex p-2 ">
				<img
					className="w12 h-10 rounded-sm m-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br cursor-pointer hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 "
					alt="userLogo"
					src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg"
				/>
				<button
					type="button"
					onClick={handleSignOut}
					className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-2"
				>
					Sign Out
				</button>
			</div>
		</div>
	)
}

export default HeaderComponent
