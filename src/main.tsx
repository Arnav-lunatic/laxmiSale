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
import { ProductPage, AboutUs, ContactUs, CommercialBhatti, PizzaMakingCounter, SweetDisplayCounter, CommercialKitchenSink } from "./components";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="" element={<Home />} />
			<Route path="products">
				<Route path=""  element={<ProductPage />}/>
				<Route path="commercial-bhatti" element={<CommercialBhatti />} />
				<Route path="pizza-making-counter" element={<PizzaMakingCounter />} />
				<Route path="sweet-display-counter" element={<SweetDisplayCounter />} />
				<Route path="commercial-kitchen-sink" element={<CommercialKitchenSink />} />
				
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
