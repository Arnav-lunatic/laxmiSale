import ProductPageTemplate from "./ProductPageTemplate";

export default function CommercialKitchenSink() {
	const DescriptionContent = () => {
		return (
			<div className="flex-1">
				<h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">
					Commercial Kitchen Sink
				</h2>

				<p className="text-gray-700 dark:text-gray-300 mb-4">
					A robust and spacious sink unit designed for heavy-duty
					cleaning and washing in commercial kitchens.
				</p>

				<p className="text-gray-700 dark:text-gray-300 mb-4">
					Made with corrosion-resistant stainless steel, this sink is
					perfect for cleaning utensils, washing ingredients, and
					maintaining hygiene in restaurants, sweet shops, and other
					food establishments.
				</p>

				<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
					Key Features
				</h3>
				<ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1 mb-4">
					<li>
						<strong>Stainless Steel Body:</strong> Rust-proof and
						built for daily commercial use.
					</li>
					<li>
						<strong>Deep Basin Design:</strong> Fits large pots,
						trays, and kitchenware easily.
					</li>
					<li>
						<strong>Optional Drainboard:</strong> Space for drying
						or sorting items.
					</li>
					<li>
						<strong>Adjustable Legs:</strong> Customizable height
						for user comfort.
					</li>
					<li>
						<strong>Easy Maintenance:</strong> Smooth surface and
						rounded edges for quick cleaning.
					</li>
				</ul>

				<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
					Customer Benefits
				</h3>
				<ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
					<li>
						<strong>Efficient Workflow:</strong> Keeps dishwashing
						organized and fast.
					</li>
					<li>
						<strong>Durability:</strong> Withstands wear and tear
						from constant use.
					</li>
					<li>
						<strong>Space Saving Options:</strong> Choose from
						single, double, or triple basin styles.
					</li>
					<li>
						<strong>Sanitary Use:</strong> Helps meet food safety
						and hygiene standards.
					</li>
				</ul>
			</div>
		);
    };
    
    const image = "https://res.cloudinary.com/dfqjxrcaj/image/upload/v1746475113/commercial_kitchen_sink_xxgomu.jpg"

    return (
        <>
            <ProductPageTemplate DescriptionComponent={DescriptionContent} image={image} />
        </>
    );
}
