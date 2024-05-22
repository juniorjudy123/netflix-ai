import React, { useEffect } from "react"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addUser, removeUser } from "../utils/userSlice"
import { LOGO } from "../utils/constants"

const HeaderComponent = () => {
	const navigate = useNavigate()
	const user = useSelector((store) => store.user)
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

	return (
		<div className=" absolute px-2 py-2 bg-gradient-to-b from-black z-10 opacity-85 w-full flex justify-between h-24">
			<img className=" w-40 p-2" src={LOGO} alt="logo-img" />

			{user && (
				<div className="flex p-2 m-2 ">
					<img
						className="w12 h-11 rounded-full m-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 "
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
