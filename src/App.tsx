import { Header, Nav, ProductPage, Menu, FooterComponent, AboutUs } from "./components";
import { useState } from "react";


function App() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className=" w-full max-w-[1600px] m-auto mt-20">
			<Nav isOpen={isOpen} setIsOpen={setIsOpen} />
			<Header />
			<ProductPage />
			<Menu isOpen={isOpen} setIsOpen={setIsOpen} />
			<AboutUs />
			<FooterComponent />
		</div>
	);
}

export default App;
