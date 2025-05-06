import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { cardContent } from "../ProductsContents";
import { ProductCard } from "../Cards/ProductCard";
import { Button } from "flowbite-react";

interface props {
	image: string;
	DescriptionComponent: React.FC;
}

function ProductPageTemplate({ image, DescriptionComponent }: props) {
	const navigate = useNavigate();

	function generateThreeUniqueRandomNumbers(
		min: number,
		max: number
	): number[] {
		const numbers = new Set<number>();

		while (numbers.size < 3) {
			const random = Math.floor(Math.random() * (max - min + 1)) + min;
			numbers.add(random);
		}

		return [...numbers];
	}

	const randomNumbers = generateThreeUniqueRandomNumbers(
		1,
		cardContent.length
	);

	return (
		<div className="mt-28">
			<div className="relative flex flex-col lg:flex-row items-center mx-8 my-20">
				<button
					onClick={() => navigate(-1)}
					className="cursor-pointer absolute -top-8 md:-top-4 -left-4 flex items-center gap-1 text-text"
				>
					<FaChevronLeft />
					<span className="text-lg">Back</span>
				</button>
				<img className="w-3/4 lg:w-1/3" src={image} alt="..." />
				<div className="p-8 mr-0 lg:mr-24">
					<DescriptionComponent />
				</div>
				<div className="bg-secondary/50 absolute lg:top-0 bottom-0 right-0 h-13/14 sm:h-7/8 md:h-4/5 lg:h-full w-full lg:w-5/6 -z-1"></div>
			</div>

			<div className="py-20 p-4 border-t border-secondary">
				<h1 className="text-text text-4xl font-bold text-center">
					More Products
				</h1>
				<div className="mt-4 flex flex-col sm:flex-row gap-4">
					<ProductCard
						img={cardContent[randomNumbers[0]].img}
						heading={cardContent[randomNumbers[0]].heading}
						text={cardContent[randomNumbers[0]].text}
						link={cardContent[randomNumbers[0]].link}
					/>

					<ProductCard
						img={cardContent[randomNumbers[1]].img}
						heading={cardContent[randomNumbers[1]].heading}
						text={cardContent[randomNumbers[1]].text}
						link={cardContent[randomNumbers[1]].link}
					/>

					<ProductCard
						img={cardContent[randomNumbers[2]].img}
						heading={cardContent[randomNumbers[2]].heading}
						text={cardContent[randomNumbers[2]].text}
						link={cardContent[randomNumbers[2]].link}
					/>
				</div>

				<Button
					onClick={() => navigate("/products")}
					className="bg-accent mx-auto my-4 border border-accent hover:bg-transparent hover:scale-110 transition cursor-pointer"
				>
					View more
				</Button>
			</div>
		</div>
	);
}

export default ProductPageTemplate;
