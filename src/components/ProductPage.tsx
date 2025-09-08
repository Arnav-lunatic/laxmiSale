import { useState } from "react";
import { ProductCard } from "./Cards/ProductCard";
import { eachProductContent } from "./Contents/EachProductContent";
import { Dropdown, DropdownItem } from "flowbite-react";
import { MdKeyboardArrowDown } from "react-icons/md";

export const ProductPage = () => {

	const Categories = [
		"All",
		"Commercial Kitchen Equipment",
		"Refrigerators",
		"Ovens",
		"Display Counters",
		"Fryers",
		"Water Coolers",
		"Other Products"
	];

	const [selectedCategory, setSelectedCategory] = useState("Categories");

	const categoryButton = (
		<span className="text-text flex items-center cursor-pointer border-2 border-secondary px-2 py-1 rounded-lg">
			<p className="font-semibold">{selectedCategory}</p>
			<MdKeyboardArrowDown className="text-2xl" />
		</span>
	);

	return (
		<div className="p-2 md:p-8">
			<h1 className="text-text font-extrabold text-3xl text-center h-fit">
				Explore Our Product!!
			</h1>

			<div className="flex justify-end">
				<Dropdown
					label="Categories"
					dismissOnClick={true}
					className="bg-background border-2 border-secondary"
					renderTrigger={() => categoryButton}>
					{Categories.map((category, index) => (
						<DropdownItem
							onClick={() => {
								setSelectedCategory(category === "All" ? "Categories" : category);
							}}
							className="text-text bg-background hover:bg-secondary focus:bg-secondary focus:text-primary font-semibold text-md" key={index}>{category}</DropdownItem>
					))}
				</Dropdown>
			</div>

			<div className="grid items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
				{eachProductContent.filter((elem) => {
					if (selectedCategory === "Categories") return true;
					return elem.categories?.includes(selectedCategory);
				}).map((elem, index) => {
					return (
						<div
							key={index}>
							<ProductCard
								id={elem.id}
								heading={elem.heading}
								text={elem.text1}
								link={elem.link}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};
