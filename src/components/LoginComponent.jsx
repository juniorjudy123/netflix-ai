import React from "react"
import HeaderComponent from "./HeaderComponent"

const LoginComponent = () => {
	return (
		<div>
			<HeaderComponent />
			<div className="absolute">
				<img
					src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg"
					alt="bg-img"
				/>
			</div>
			<form className="absolute p-8 bg-black w-3/12 m-32 text-white mx-auto right-0 left-0  rounded-lg bg-opacity-80">
				<h1 className=" py-4 font-bold text-3xl">Sign In</h1>
				<input
					type="text"
					placeholder=" Email or mobile number"
					className="p-4 my-2 w-full opacity bg-gray-900 bg-opacity-80"
				></input>
				<input
					type="Password"
					placeholder=" Password"
					className="p-4 my-2 w-full  bg-gray-900 bg-opacity-80"
				></input>
				<button className="p-4 my-4 bg-red-700 w-full rounded-lg">
					Sign In
				</button>
				<h1 className=" p-2  text-center font-normal text-gray-400">OR</h1>
				<button className="p-4 my-4 text-white bg-gray-700 font-bold  w-full  rounded-lg bg-opacity-80">
					Use a sign-in code
				</button>
				<h1 className="text-white p-2 m-2 text-center">Forgot Password?</h1>

				<div class="inline-flex items-center p-2 ">
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
				<div className="flex">
					<p className="text-gray-400 py-4">New to Netflix? Sign Up Now</p>
				</div>
			</form>
		</div>
	)
}

export default LoginComponent
