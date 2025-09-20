import { useState } from "react";
import { ProductCard } from "./Cards/ProductCard";
import { eachProductContent } from "./Contents/EachProductContent";
import { Dropdown, DropdownItem } from "flowbite-react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";

export const ProductPage = () => {
	const navigate = useNavigate();
	const { category } = useParams();

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

	const [selectedCategory, setSelectedCategory] = useState(
		category === "all" ?
			"Categories" :
			category ?
				category
					.replace(/-/g, " ")
					.split(' ')
					.map(word => word.charAt(0).toUpperCase() + word.slice(1))
					.join(' ') :
				"Categories"
	);

	const categoryButton = (
		<span className="text-text flex items-center cursor-pointer border-2 border-secondary px-2 py-1 rounded-lg">
			<p className="font-semibold">{selectedCategory}</p>
			<MdKeyboardArrowDown className="text-2xl" />
		</span>
	);

	const handleCategorySelect = (selectedCategory: string) => {
		setSelectedCategory(selectedCategory === "All" ? "Categories" : selectedCategory);
		navigate(`/products/category/${selectedCategory === "All" ? "all" : selectedCategory.toLowerCase().replace(/\s+/g, "-")}`);
	};

	const [searchTerm, setSearchTerm] = useState("");
	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	}


	return (
		<div className="w-full max-w-[1300px] m-auto relative px-2 md:px-4">
			<h1 className="text-text font-extrabold text-3xl text-center h-fit">
				Explore Our Product!!
			</h1>

			<div className="flex flex-col sm:flex-row justify-between my-4 gap-1">
				<div className="relative">
					<input
						type="text"
						value={searchTerm}
						onChange={handleSearchChange}
						placeholder="Search products..."
						className="w-full px-4 py-2 text-text bg-background border-2 border-secondary rounded-lg focus:outline-none focus:border-primary"
					/>
					<svg
						className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary w-5 h-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</div>
				<div className="flex justify-end">
					<Dropdown
						label="Categories"
						dismissOnClick={true}
						className="bg-background border-2 border-secondary"
						renderTrigger={() => categoryButton}>
						{Categories.map((selectedCategory, index) => (
							<DropdownItem
								onClick={() => {
									handleCategorySelect(selectedCategory);
								}}
								className="text-text bg-background hover:bg-secondary focus:bg-secondary focus:text-primary font-semibold text-md" key={index}>{selectedCategory}</DropdownItem>
						))}
					</Dropdown>
				</div>
			</div>

			<div className="grid items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
				{eachProductContent
					.filter((elem) => {
						if (searchTerm === "") return true;
						return elem.heading.toLowerCase().includes(searchTerm.toLowerCase()) ||
							elem.text1.toLowerCase().includes(searchTerm.toLowerCase()) ||
							(elem.text2 && elem.text2.toLowerCase().includes(searchTerm.toLowerCase())) ||
							(elem.categories && elem.categories.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase())));
					})
					.filter((elem) => {
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
								/>
							</div>
						);
					})}
			</div>
		</div>
	);
};
