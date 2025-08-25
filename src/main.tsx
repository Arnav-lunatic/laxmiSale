import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import Home from "./components/Home.tsx";
import { ProductPage, AboutUs, ContactUs} from "./components";
import EachProductPage from "./components/EachProductPage.tsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="" element={<Home />} />
			<Route path="products">
				<Route path=""  element={<ProductPage />}/>
				<Route path=":id" element={<EachProductPage />} />
			</Route>
			<Route path="about" element={<AboutUs />} />
			<Route path="contact" element={<ContactUs />} />
		</Route>
	)
);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
