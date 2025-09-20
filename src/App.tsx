import { Outlet, useLocation } from "react-router-dom";
import { Nav, Menu, FooterComponent } from "./components";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react"
import FloatingActionButtons from "./components/FloatingActionButtons";

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const { pathname } = useLocation();

	// Automatically scrolls to top whenever pathname changes
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [pathname]);

	return (
		<div className="w-full max-w-[1600px] m-auto mt-18">
			<Nav isOpen={isOpen} setIsOpen={setIsOpen} />
			<FloatingActionButtons />
			<Outlet />
			<Menu isOpen={isOpen} setIsOpen={setIsOpen} />
			<Analytics />
			<FooterComponent />
		</div>
	);
}

export default App;
