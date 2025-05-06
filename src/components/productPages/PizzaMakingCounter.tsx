import ProductPageTemplate from "./ProductPageTemplate";

export default function PizzaMakingCounter() {
	const DescriptionContent = () => {
		return (
			<div className="flex-1">
				<h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">
					Pizza Making Counter
				</h2>

				<p className="text-gray-700 dark:text-gray-300 mb-4">
					A specialized counter designed for efficient pizza
					preparation and ingredient storage in commercial kitchens.
				</p>

				<p className="text-gray-700 dark:text-gray-300 mb-4">
					The Pizza Making Counter combines a large prep surface with
					built-in refrigeration to keep ingredients fresh and
					accessible—ideal for pizzerias, cafes, and fast food
					outlets.
				</p>

				<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
					Key Features
				</h3>
				<ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1 mb-4">
					<li>
						<strong>Refrigerated Storage:</strong> Maintains
						freshness of toppings and sauces.
					</li>
					<li>
						<strong>Spacious Prep Surface:</strong> Ideal for
						assembling pizzas and rolling dough.
					</li>
					<li>
						<strong>Topping Rail with GN Pans:</strong> Hygienic and
						organized ingredient access.
					</li>
					<li>
						<strong>Stainless Steel Body:</strong> Durable, easy to
						clean, and rust-resistant.
					</li>
					<li>
						<strong>Adjustable Shelving:</strong> Customizable space
						for trays and tools.
					</li>
				</ul>

				<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
					Customer Benefits
				</h3>
				<ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
					<li>
						<strong>Improved Workflow:</strong> Faster pizza prep
						and better kitchen efficiency.
					</li>
					<li>
						<strong>Food Safety Compliance:</strong> Ensures cold
						chain maintenance and hygiene.
					</li>
					<li>
						<strong>Space-Saving:</strong> Combines prep and storage
						into one compact unit.
					</li>
					<li>
						<strong>Professional Appeal:</strong> Sleek design adds
						value to customer-facing areas.
					</li>
				</ul>
			</div>
		);
	};

	const image =
		"https://res.cloudinary.com/dfqjxrcaj/image/upload/v1746475112/sweet_display_counter_sgxroo.jpg";
	return (
		<>
			<ProductPageTemplate
				DescriptionComponent={DescriptionContent}
				image={image}
			/>
		</>
	);
}
