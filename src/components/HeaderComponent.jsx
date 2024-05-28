import React, { useEffect } from "react"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addUser, removeUser } from "../utils/userSlice"
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants"
import { toggeGptSearchView } from "../utils/gptSlice"
import lang from "../utils/languageConstants"
import { changeLanguage } from "../utils/configSlice"

const HeaderComponent = () => {
	const navigate = useNavigate()
	const user = useSelector((store) => store.user)
	const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

	const dispatch = useDispatch()
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				//if user is signed in
				const { uid, email, displayName, photoURL } = user
				//update store
				dispatch(
					addUser({
						uid: uid,
						email: email,
						displayName: displayName,
						photoURL: photoURL,
					}),
					navigate("/browse")
				)
			} else {
				// if User is signed out
				dispatch(removeUser())
				navigate("/")
			}
		})
		//unsubscribe when component unmounts
		return () => unsubscribe()
	}, [])

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

	const handleGptSearchClick = () => {
		//Toggle functionality
		dispatch(toggeGptSearchView())
	}
	const handleLanguageChange = (e) => {
		dispatch(changeLanguage(e.target.value))
	}

	return (
		<div className=" absolute px-4 py-2 bg-gradient-to-b from-black z-10 opacity-85 w-full flex justify-between h-24">
			{/* // <div className="absolute top-0 left-0 w-full z-10 bg-opacity-50 bg-black  flex justify-between "> */}
			<img className=" w-40 pl-4 " src={LOGO} alt="logo-img" />

			{user && (
				<div className="flex p-2">
					{showGptSearch && (
						<select
							className="p-2 m-2 bg-gray-900 text-white rounded-sm "
							onChange={handleLanguageChange}
						>
							{SUPPORTED_LANGUAGES.map((lang) => (
								<option key={lang.identifier} value={lang.identifier}>
									{lang.name}
								</option>
							))}
						</select>
					)}
					<button
						className={`py-2 px-2 m-1 mx-20 rounded-lg bg-opacity-50 shadow-lg text-white font-medium bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:bg-gradient-to-br shadow-purple-300/50 dark:shadow-lg dark:shadow--800/80 ${
							!showGptSearch ? "animate-bounce" : ""
						}`}
						onClick={handleGptSearchClick}
					>
						{showGptSearch ? "HomePage" : "GPT search"}
					</button>
					<img
						className="w12 h-11 rounded-full m-1  bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 "
						alt="userLogo"
						src={user.photoURL}
					/>

					<button
						type="button"
						onClick={handleSignOut}
						className="text-white m-1 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center "
					>
						Sign Out
					</button>
				</div>
			)}
		</div>
	)
}

export default HeaderComponent
