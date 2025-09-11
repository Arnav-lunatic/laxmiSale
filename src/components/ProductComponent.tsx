import { Button } from "flowbite-react";
import { ProductCard } from "./Cards/ProductCard";
import { useNavigate } from "react-router-dom";
import { eachProductContent } from "./Contents/EachProductContent";

export const ProductComponent = () => {
	const navigate = useNavigate();
	return (
		<div className="px-2 md:px-4 w-full max-w-[1300px] m-auto">
			<h1 className="text-text font-extrabold text-3xl text-center h-fit">
				Explore Our Product!!
			</h1>
			<div className="grid items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-10">
				{eachProductContent.slice(0, 6).map((elem, index) => {
					return (
						<div
							key={index}
						>
							<ProductCard
								id={elem.id}
								heading={elem.heading}
								text={elem.text1}
							/>
						</div>
					);
				})}
			</div>

			<Button
				onClick={() => navigate("/products/category/all")}
				className="bg-accent mx-auto my-4 border border-accent hover:bg-transparent hover:scale-110 transition cursor-pointer"
			>
				View more
			</Button>
		</div>
	);
};
