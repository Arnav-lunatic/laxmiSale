import { Button } from "flowbite-react";
import { ProductCard } from "./Cards/ProductCard";
import { useNavigate } from "react-router-dom";
import { eachProductContent } from "./Contents/EachProductContent";

export const ProductComponent = () => {
	const navigate = useNavigate();
	return (
		<div className="p-2 md:p-8">
			<h1 className="text-text font-extrabold text-3xl text-center h-fit">
				Explore Our Product!!
			</h1>
			<div className="grid items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
				{eachProductContent.slice(0, 8).map((elem, index) => {
					return (
						<div
							key={index}
						>
							<ProductCard
								img={elem.image}
								heading={elem.heading}
								text={elem.text1}
								link={elem.link}
							/>
						</div>
					);
				})}
			</div>

			<Button
				onClick={() => navigate("/products")}
				className="bg-accent mx-auto my-4 border border-accent hover:bg-transparent hover:scale-110 transition cursor-pointer"
			>
				View more
			</Button>
		</div>
	);
};
