import { Button } from "flowbite-react";
import { ProductCard } from "./Cards/ProductCard";
import { cardContent } from "./ProductsContents";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { InfoWindows } from "./InfoWindow";

export const ProductComponent = () => {
	const [openModal, setOpenModal] = useState(false);
	const navigate = useNavigate();
	return (
		<div className="p-2 md:p-8">
			<h1 className="text-text font-extrabold text-3xl text-center h-fit">
				Explore Our Product!!
			</h1>
			<div className="grid items-end grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
				{cardContent.slice(0, 8).map((elem, index) => {
					return (
						<div
							onClick={()=>{setOpenModal(true)}}						
							key={index}>
							<ProductCard
								img={elem.img}
								heading={elem.heading}
								text={elem.text}
							/>
						</div>
					);
				})}
			</div>
			<InfoWindows openModal={openModal} setOpenModal={setOpenModal} />

			<Button
				onClick={() => navigate("/products")}
				className="bg-accent mx-auto my-4 border border-accent hover:bg-transparent hover:scale-110 transition cursor-pointer">
				View more
			</Button>
		</div>
	);
};
