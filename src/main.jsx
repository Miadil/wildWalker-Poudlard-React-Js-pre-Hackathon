import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";

import App from "./App.jsx";
import Home from "./pages/Home/Home.jsx";
import Characters from "./pages/Characters/Characters.jsx";
import CharacterDetails from "./pages/CharacterDetails/CharacterDetails.jsx";

// router creation

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/characters",
				element: <Characters />,
			},
			{
				path: "/characters/:pouletId",
				element: <CharacterDetails />,
			},
		],
	},
]);

// rendering

const rootElement = document.getElementById("root");

if (rootElement != null) {
	createRoot(rootElement).render(<RouterProvider router={router} />);
}
