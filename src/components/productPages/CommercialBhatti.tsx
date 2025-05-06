import ProductPageTemplate from "./ProductPageTemplate";

export function CommercialBhatti() {

  const DescriptionComponent = () => {
    return (
      <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">
            Commercial Bhatti
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            A powerful and reliable gas stove built to handle the rigorous demands of commercial kitchens.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The Commercial Bhatti is a heavy-duty cooking appliance specifically designed for sweet shops, restaurants, catering units, and other food businesses. It delivers high flame output for fast and efficient cooking of large quantities.
          </p>

          <h3 className="text-2xl font-bold text-text mt-12 mb-4">Key Features</h3>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1 mb-4">
            <li><strong>Industrial-Grade Build:</strong> Built with premium materials for long-term durability.</li>
            <li><strong>Powerful Flame Control:</strong> High heat output with precise flame regulation.</li>
            <li><strong>Spacious Cooking Surface:</strong> Supports large commercial cookware with ease.</li>
            <li><strong>Safe & Stable Operation:</strong> Anti-skid, well-balanced structure ensures stability.</li>
            <li><strong>Low Maintenance Design:</strong> Easy to clean, reducing kitchen downtime.</li>
          </ul>

          <h3 className="text-2xl font-bold text-text mt-12 mb-4">Customer Benefits</h3>
          <ul className="list-disc pl-6 text-text space-y-1">
            <li><strong>Improved Cooking Speed:</strong> Enables faster service during busy hours.</li>
            <li><strong>Energy Efficient:</strong> Saves on fuel costs with smart flame usage.</li>
            <li><strong>Versatile Use:</strong> Perfect for various dishes from sweets to savory meals.</li>
            <li><strong>Long-Term Investment:</strong> A rugged, reliable addition to any commercial kitchen.</li>
          </ul>
        </div>
    )
  }

  const image = "https://res.cloudinary.com/dfqjxrcaj/image/upload/v1746475111/commercial_bhatti_zv80wd.jpg"

	return (
		<>
      <ProductPageTemplate DescriptionComponent={DescriptionComponent} image={image} />
    </>
	);
}
