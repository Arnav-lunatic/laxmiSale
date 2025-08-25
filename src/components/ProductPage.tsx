import { ProductCard } from "./Cards/ProductCard";
import { cardContent } from "./Contents/ProductsCardsContents";

export const ProductPage = () => {

	return (
		<div className="p-2 md:p-8">
			<h1 className="text-text font-extrabold text-3xl text-center h-fit">
				Explore Our Product!!
			</h1>
			<div className="grid items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
				{cardContent.map((elem, index) => {
					return (
						<div
							key={index}>
							<ProductCard
								img={elem.img}
								heading={elem.heading}
								text={elem.text}
								link={elem.link}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};
