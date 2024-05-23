import React, { useRef, useState } from "react"
import HeaderComponent from "./HeaderComponent"
import { checkValidData } from "../utils/validation"
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth"
import { auth } from "../utils/firebase"

import { addUser } from "../utils/userSlice"
import { useDispatch } from "react-redux"
import { USER_AVATAR, bgimg_URL } from "../utils/constants"

const LoginComponent = () => {
	const [isExpanded, setIsExpanded] = useState(false)
	const [isSignInForm, setIsSignInForm] = useState(true)
	const [errormessage, setErrorMessage] = useState(null)
	const dispatch = useDispatch()
	const email = useRef(null)
	const password = useRef(null)
	const name = useRef(null)

	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm)
	}

	const toggeExpand = () => {
		setIsExpanded(!isExpanded)
	} //expanding the learn more button in login page

	const handleButtonClick = () => {
		//validate the form data using regex written in validation.jsx

		const message = checkValidData(email.current.value, password.current.value)

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
						photoURL: USER_AVATAR,
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
						})
						.catch((error) => {
							setErrorMessage(error.message)
						})
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
				<img src={bgimg_URL} alt="bg-img" />
			</div>

			<form
				className="absolute p-5 bg-black w-3/12 my-16 text-white mx-auto right-0 left-0  rounded-lg bg-opacity-85 shadow-xl"
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
						className="p-3 my-6 bg-red-600 w-full rounded-lg"
						onClick={handleButtonClick}
					>
						{isSignInForm ? "Sign In" : "Sign Up"}
					</button>
					<p className=" text-red-700 text-lg font font-bold p-2">
						{errormessage}
					</p>

					<div>
						{/* <p
							className="text-white py-2 cursor-pointer "
							onClick={toggleSignInForm}>
							{isSignInForm
								? "New to Netflix? Sign Up Now"
								: "Already registered user.Sign In Now"}
						</p> */}
						{isSignInForm ? (
							<p className="text-white py-2 ">
								New to Netflix?{" "}
								<span
									className=" text-white font-bold hover:underline cursor-pointer"
									onClick={toggleSignInForm}
								>
									Sign Up Now
								</span>
							</p>
						) : (
							<p className="text-white py-2 ">
								Already registered user?{" "}
								<span
									className="text-white hover:underline font-bold cursor-pointer"
									onClick={toggleSignInForm}
								>
									Sign In
								</span>
							</p>
						)}

						<div className="py-2 ">
							<p className="text-sm  text-gray-400">
								This page is protected by Google reCAPTCHA to ensure you're not
								a bot.{" "}
								<span
									className="text-blue-400  py-2 cursor-pointer hover:underline"
									onClick={toggeExpand}
								>
									Learn more.
								</span>
							</p>

							{isExpanded && (
								<div className="mt-2 text-gray-400 text-sm">
									<p>
										The information collected by Google reCAPTCHA is subject to
										the Google Privacy Policy and Terms of Service, and is used
										for providing, maintaining, and improving the reCAPTCHA
										service and for general security purposes (it is not used
										for personalised advertising by Google).
									</p>
								</div>
							)}
							<div>
								<p className="text-sm font-bold font-serif text-gray-400 pt-3">
									@Powered by GPT
								</p>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}

export default LoginComponent
