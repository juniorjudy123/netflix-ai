import React, { useRef, useState } from "react"
import HeaderComponent from "./HeaderComponent"
import { checkValidData } from "../utils/validation"
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { addUser } from "../utils/userSlice"
import { useDispatch } from "react-redux"

const LoginComponent = () => {
	const [isSignInForm, setIsSignInForm] = useState(true)
	const [errormessage, setErrorMessage] = useState(null)
	const dispatch = useDispatch()
	const email = useRef(null)
	const password = useRef(null)
	const name = useRef(null)
	const navigate = useNavigate()

	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm)
	}

	const handleButtonClick = () => {
		//validate the form data using regex written in validation.jsx

		const message = checkValidData(email.current.value, password.current.value)
		console.log(message)
		setErrorMessage(message)

		if (message) return

		if (!isSignInForm) {
			//signup logic
			createUserWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					const user = userCredential.user

					updateProfile(user, {
						displayName: name.current.value,
						photoURL: "https://avatars.githubusercontent.com/u/119035261?v=4",
					})
						.then(() => {
							const { uid, email, displayName, photoURL } = auth.currentUser
							//update store
							dispatch(
								addUser({
									uid: uid,
									email: email,
									displayName: displayName,
									photoURL: photoURL,
								})
							)
							navigate("/browse")
						})
						.catch((error) => {
							setErrorMessage(error.message)
						})

					console.log(user)
				})
				.catch((error) => {
					const errorCode = error.code
					const errorMessage = error.message
					setErrorMessage(errorCode + "-" + errorMessage)
				})
		} else {
			//sign in logic
			signInWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					const user = userCredential.user
					console.log(user)
					navigate("/browse") //if successful navigated
				})
				.catch((error) => {
					const errorCode = error.code
					const errorMessage = error.message
					setErrorMessage(errorCode + "-" + errorMessage)
				})
		}
	}

	return (
		<div>
			<HeaderComponent />
			<div className="absolute">
				<img
					src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg"
					alt="bg-img"
				/>
			</div>

			<form
				className="absolute p-5 bg-black w-3/12 my-12 text-white mx-auto right-0 left-0  rounded-lg bg-opacity-85 shadow-xl"
				onSubmit={(e) => e.preventDefault()}
			>
				<div className=" p-15 m-8">
					<h1 className=" py-4 font-bold text-3xl">
						{isSignInForm ? "Sign In" : "Sign Up"}
					</h1>
					{!isSignInForm && (
						<input
							ref={name}
							type="text"
							placeholder=" Full Name"
							className="p-4 my-1 w-full opacity bg-gray-900 bg-opacity-80 border  border-slate-700  "
						></input>
					)}

					<input
						ref={email}
						type="text"
						placeholder=" Email ID"
						className="p-4 my-1 w-full opacity bg-gray-900 bg-opacity-80 border  border-slate-700"
					></input>

					<input
						ref={password}
						type="password"
						placeholder=" Password"
						className="p-3 my-1 w-full  bg-gray-900 bg-opacity-80 border border-slate-700 "
					></input>

					<button
						className="p-3 my-4 bg-red-600 w-full rounded-lg"
						onClick={handleButtonClick}
					>
						{isSignInForm ? "Sign In" : "Sign Up"}
					</button>
					<p className=" text-red-700 text-lg font font-bold p-2">
						{errormessage}
					</p>

					<div>
						<p
							className="text-gray-400 py-2 cursor-pointer "
							onClick={toggleSignInForm}
						>
							{isSignInForm
								? "New to Netflix? Sign Up Now"
								: "Already registered user.Sign In Now"}
						</p>
						<div className="py-2 ">
							<p className="text-sm  text-gray-400">
								This page is protected by Google reCAPTCHA to ensure you're not
								a bot.
								<a href="https://www.example.com" className=" text-blue-500">
									{" "}
									Learn more .
								</a>
							</p>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}

export default LoginComponent
