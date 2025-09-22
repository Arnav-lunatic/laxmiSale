import { FaChevronLeft } from "react-icons/fa";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "./Cards/ProductCard";
import { eachProductContent } from "./Contents/EachProductContent";
import { PhotoProvider, PhotoView } from 'react-photo-view';

interface props {
	id: string;
	heading: string;
	text1?: string;
	text2?: string;
	key_features?: { [key: string]: string }[];
	customer_benefits?: { [key: string]: string }[];
	number_of_other_images?: number;
}

function ProductPageTemplate({
	id,
	heading,
	text1,
	text2,
	key_features,
	customer_benefits,
	number_of_other_images
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
		<div className="relative p-1">
			<div className="px-0 lg:px-4 mb-4">
				<button
					onClick={() => navigate(-1)}
					className="cursor-pointer flex items-center gap-1 text-text"
				>
					<FaChevronLeft />
					<span className="text-lg">Back</span>
				</button>
			</div>

			<div className="relative flex flex-col lg:flex-row items-center w-full xl:w-[90%] mx-auto">
				<div className="relative w-3/4 md:w-1/2 cursor-pointer">
					<PhotoProvider>
						<PhotoView src={`https://res.cloudinary.com/laxmisales/image/upload/${id}.png`}>
							<img className="w-full aspect-square object-cover rounded-lg" src={`https://res.cloudinary.com/laxmisales/image/upload/${id}`} alt="..." />
						</PhotoView>
					</PhotoProvider>

					<div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-2 py-1 border border-white/20 rounded-sm bg-white/20 backdrop-blur-md text-white text-xs pointer-events-none opacity-80">
						view image
					</div>
				</div>
				<div className="p-8 mr-0 lg:mr-16 xl:mr-24">
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
				<div className="bg-secondary/50 absolute lg:top-0 bottom-0 right-0 h-13/14 sm:h-7/8 md:h-4/5 lg:h-full w-full lg:w-5/6 -z-1 rounded-lg"></div>
			</div>

			<div className="w-full max-w-[1300px] m-auto py-8 p-4">
				<h2 className="text-2xl font-bold mb-4 text-text text-center">View Other Images</h2>
				{number_of_other_images && number_of_other_images > 0 && (
					<PhotoProvider>
						<div className="w-full max-w-[1300px] m-auto border-secondary flex justify-center-safe gap-4 overflow-x-auto">
							{Array.from({ length: number_of_other_images }, (_, index) => (
								<PhotoView key={index} src={`https://res.cloudinary.com/laxmisales/image/upload/${id}-${index + 1}`}>
									<img className="cursor-pointer w-52 aspect-square object-cover rounded-lg" src={`https://res.cloudinary.com/laxmisales/image/upload/q_20/${id}-${index + 1}`} alt="" />
								</PhotoView>
							))}
						</div>
					</PhotoProvider>
				)}
			</div>

			<div className="w-full max-w-[1300px] m-auto py-8 p-4 border-t border-secondary">
				<h1 className="text-text text-4xl font-bold text-center">
					More Products
				</h1>
				<div className="mt-4 grid items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
					<ProductCard
						id={eachProductContent[randomNumbers[0]].id}
						heading={eachProductContent[randomNumbers[0]].heading}
						text={eachProductContent[randomNumbers[0]].text1}
					/>

					<ProductCard
						id={eachProductContent[randomNumbers[1]].id}
						heading={eachProductContent[randomNumbers[1]].heading}
						text={eachProductContent[randomNumbers[1]].text1}
					/>

					<ProductCard
						id={eachProductContent[randomNumbers[2]].id}
						heading={eachProductContent[randomNumbers[2]].heading}
						text={eachProductContent[randomNumbers[2]].text1}
					/>
				</div>

				<Button
					onClick={() => navigate("/products/category/all")}
					className="bg-accent mx-auto my-4 border border-accent hover:bg-transparent hover:scale-110 transition cursor-pointer"
				>
					View more
				</Button>
			</div>
		</div>
	);
}

export default ProductPageTemplate;