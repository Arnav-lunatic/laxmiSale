import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "./Cards/ProductCard";
import { Button } from "flowbite-react";
import { eachProductContent } from "./Contents/EachProductContent";

interface props {
	image: string;
	heading: string;
	text1?: string;
	text2?: string;
	key_features?: { [key: string]: string }[];
	customer_benefits?: { [key: string]: string }[];
}

function ProductPageTemplate({
	image,
	heading,
	text1,
	text2,
	key_features,
	customer_benefits,
}: props) {
	const navigate = useNavigate();

	function generateThreeUniqueRandomNumbers(
		min: number,
		max: number
	): number[] {
		const numbers = new Set<number>();

		while (numbers.size < 4) {
			const random = Math.floor(Math.random() * (max - min + 1)) + min;
			numbers.add(random);
		}

		return [...numbers];
	}

	const randomNumbers = generateThreeUniqueRandomNumbers(
		0,
		eachProductContent.length - 1
	);

	return (
		<div className=" relative mt-20">
			<button
				onClick={() => navigate(-1)}
				className="cursor-pointer flex items-center gap-1 text-text z-30"
			>
				<FaChevronLeft />
				<span className="text-lg">Back</span>
			</button>
			<div className="relative flex flex-col lg:flex-row items-center mb-20 w-full lg:w-[90%] mx-auto">
				<img className="w-3/4 lg:w-11/12 xl:w-4/5" src={image} alt="..." />

				<div className="p-8 mr-0 lg:mr-24">
					<div className="flex-1">
						<h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">
							{heading}
						</h2>

						<p className="text-gray-700 dark:text-gray-300 mb-4">
							{text1}
						</p>

						<p className="text-gray-700 dark:text-gray-300 mb-4">
							{text2}
						</p>

						<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
							Key Features
						</h3>
						<ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1 mb-4">
							{key_features?.map((feature, index) => {
								const key = Object.keys(feature)[0];
								const value = feature[key];
								return (
									<li key={index}>
										<strong>{key}:</strong> {value}
									</li>
								);
							})}
						</ul>

						<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
							Customer Benefits
						</h3>
						<ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
							{customer_benefits?.map((benefit, index) => {
								const key = Object.keys(benefit)[0];
								const value = benefit[key];
								return (
									<li key={index}>
										<strong>{key}:</strong> {value}
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				<div className="bg-secondary/50 absolute lg:top-0 bottom-0 right-0 h-13/14 sm:h-7/8 md:h-4/5 lg:h-full w-full lg:w-5/6 -z-1"></div>
			</div>

			<div className="py-20 p-4 border-t border-secondary">
				<h1 className="text-text text-4xl font-bold text-center">
					More Products
				</h1>
				<div className="mt-4 grid items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
					<ProductCard
						img={eachProductContent[randomNumbers[0]].image}
						heading={eachProductContent[randomNumbers[0]].heading}
						text={eachProductContent[randomNumbers[0]].text1}
						link={eachProductContent[randomNumbers[0]].link}
					/>

					<ProductCard
						img={eachProductContent[randomNumbers[1]].image}
						heading={eachProductContent[randomNumbers[1]].heading}
						text={eachProductContent[randomNumbers[1]].text1}
						link={eachProductContent[randomNumbers[1]].link}
					/>

					<ProductCard
						img={eachProductContent[randomNumbers[2]].image}
						heading={eachProductContent[randomNumbers[2]].heading}
						text={eachProductContent[randomNumbers[2]].text1}
						link={eachProductContent[randomNumbers[2]].link}
					/>
					<ProductCard
						img={eachProductContent[randomNumbers[3]].image}
						heading={eachProductContent[randomNumbers[3]].heading}
						text={eachProductContent[randomNumbers[3]].text1}
						link={eachProductContent[randomNumbers[3]].link}
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
