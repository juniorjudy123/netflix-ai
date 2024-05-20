import BrowseComponent from "./BrowseComponent"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import LoginComponent from "./LoginComponent"

export const BodyComponent = () => {
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

	return (
		<div>
			<RouterProvider router={appRouter} />
		</div>
	)
}
