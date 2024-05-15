import React, { useRef, useState } from "react"

import HeaderComponent from "./HeaderComponent"
import { checkValidData } from "../utils/validation"

const LoginComponent = () => {
	const [isSignInForm, setIsSignInForm] = useState(true)
	const [errormessage, setErrorMessage] = useState(null)
	const email = useRef(null)
	const password = useRef(null)
	const name = useRef(null)

	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm)
	}

	const handleButtonClick = () => {
		//validate the form data using regex written in validation.jsx
		const message = checkValidData(
			email.current.value,
			password.current.value,
			name.current.value
		)
		console.log(message)
		setErrorMessage(message)
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
						placeholder=" Email or mobile number"
						className="p-4 my-1 w-full opacity bg-gray-900 bg-opacity-80 border  border-slate-700"
					></input>

					<input
						ref={password}
						type="Password"
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

					<h1 className=" p-2  text-center font-normal text-gray-400">OR</h1>
					<button className="p-3 my-3 text-white bg-gray-700 font-bold  w-full  rounded-lg bg-opacity-80">
						Use a sign-in code
					</button>
					<h1 className="text-white p-1 my-1 text-center">Forgot Password?</h1>

					<div class="inline-flex items-center p-2 my-1 ">
						<label
							class="relative flex items-center p-3 rounded-full cursor-pointer "
							htmlFor="checkbox"
						>
							<input
								type="checkbox"
								class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-black before:opacity-0 before:transition-opacity checked:border-bg-white checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
								id="checkbox"
								checked
							/>
							<span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-3.5 w-3.5"
									viewBox="0 0 20 20"
									fill="currentColor"
									stroke="currentColor"
									stroke-width="1"
								>
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									></path>
								</svg>
							</span>
						</label>
						<label>Remember me</label>
					</div>
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
