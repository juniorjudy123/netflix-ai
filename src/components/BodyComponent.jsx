import React, { useEffect } from "react"
import BrowseComponent from "./BrowseComponent"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import LoginComponent from "./LoginComponent"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../utils/firebase"
import { addUser, removeUser } from "../utils/userSlice"
import { useDispatch } from "react-redux"

export const BodyComponent = () => {
	const dispatch = useDispatch()

	const appRouter = createBrowserRouter([
		{
			path: "/",
			element: <LoginComponent />,
		},
		{
			path: "/browse",
			element: <BrowseComponent />,
		},
	])

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName } = user
				dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
			} else {
				// User is signed out
				dispatch(removeUser())
			}
		})
	}, [])

	return (
		<div>
			<RouterProvider router={appRouter} />
		</div>
	)
}
