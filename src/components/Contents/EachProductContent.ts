export const eachProductContent: Array<{
	id: string;
	heading: string;
	text1: string;
	text2: string;
	key_features: { [key: string]: string }[];
	customer_benefits: { [key: string]: string }[];
	link: string;
}> = [
	{
		id: "commercial-bhatti",
		heading: "Commercial Bhatti",
		text1: "A powerful and reliable gas stove built to handle the rigorous demands of commercial kitchens.",
		text2: "The Commercial Bhatti is a heavy-duty cooking appliance specifically designed for sweet shops, restaurants, catering units, and other food businesses. It delivers high flame output for fast and efficient cooking of large quantities.",
		key_features: [
			{
				"Industrial-Grade Build":
					"Built with premium materials for long-term durability.",
			},
			{
				"Powerful Flame Control":
					"High heat output with precise flame regulation.",
			},
			{
				"Spacious Cooking Surface":
					"Supports large commercial cookware with ease.",
			},
			{
				"Safe & Stable Operation":
					"Anti-skid, well-balanced structure ensures stability.",
			},
			{
				"Low Maintenance Design":
					"Easy to clean, reducing kitchen downtime.",
			},
		],
		customer_benefits: [
			{
				"Improved Cooking Speed":
					"Enables faster service during busy hours.",
			},
			{
				"Energy Efficient":
					"Saves on fuel costs with smart flame usage.",
			},
			{
				"Versatile Use":
					"Perfect for various dishes from sweets to savory meals.",
			},
			{
				"Long-Term Investment":
					"A rugged, reliable addition to any commercial kitchen.",
			},
		],
		link: "/products/commercial-bhatti",
	},
	{
		id: "sweet-display-counter",
		heading: "Sweet Display Counter",
		text1: "A temperature-controlled counter designed to beautifully showcase and preserve sweets in retail environments.",
		text2: "Ideal for sweet shops and bakeries, this glass-fronted counter ensures sweets are displayed attractively while staying fresh, clean, and easily accessible for serving.",
		key_features: [
			{
				"Elegant Glass Display":
					"Clear visibility with curved or flat designs.",
			},
			{
				"Temperature Control": "Refrigerated and dry models available.",
			},
			{
				"Stainless Steel Body": "Hygienic and easy to clean.",
			},
			{
				"LED Lighting": "Enhances product visibility and appeal.",
			},
			{
				"Multiple Shelves": "Tiered layout for organized presentation.",
			},
		],
		customer_benefits: [
			{
				"Enhanced Presentation": "Attracts customers and boosts sales.",
			},
			{
				"Preserves Freshness":
					"Keeps sweets safe and at ideal temperature.",
			},
			{
				"Hygienic Display":
					"Shields products from external contamination.",
			},
			{
				"Space-Saving": "Compact design with high storage efficiency.",
			},
		],
		link: "/products/sweet-display-counter",
	},
	{
		id: "pizza-making-counter",
		heading: "Pizza Making Counter",
		text1: "A specialized counter designed for efficient pizza preparation and ingredient storage in commercial kitchens.",
		text2: "The Pizza Making Counter combines a large prep surface with built-in refrigeration to keep ingredients fresh and accessible—ideal for pizzerias, cafes, and fast food outlets.",
		key_features: [
			{
				"Refrigerated Storage":
					"Maintains freshness of toppings and sauces.",
			},
			{
				"Spacious Prep Surface":
					"Ideal for assembling pizzas and rolling dough.",
			},
			{
				"Topping Rail with GN Pans":
					"Hygienic and organized ingredient access.",
			},
			{
				"Stainless Steel Body":
					"Durable, easy to clean, and rust-resistant.",
			},
			{
				"Adjustable Shelving":
					"Customizable space for trays and tools.",
			},
		],
		customer_benefits: [
			{
				"Improved Workflow":
					"Faster pizza prep and better kitchen efficiency.",
			},
			{
				"Food Safety Compliance":
					"Ensures cold chain maintenance and hygiene.",
			},
			{
				"Space-Saving":
					"Combines prep and storage into one compact unit.",
			},
			{
				"Professional Appeal":
					"Sleek design adds value to customer-facing areas.",
			},
		],
		link: "/products/pizza-making-counter",
	},
	{
		id: "commercial-kitchen-sink",
		heading: "Commercial Kitchen Sink",
		text1: "A robust and spacious sink unit designed for heavy-duty cleaning and washing in commercial kitchens.",
		text2: "Made with corrosion-resistant stainless steel, this sink is perfect for cleaning utensils, washing ingredients, and maintaining hygiene in restaurants, sweet shops, and other food establishments.",
		key_features: [
			{
				"Stainless Steel Body":
					"Rust-proof and built for daily commercial use.",
			},
			{
				"Deep Basin Design":
					"Fits large pots, trays, and kitchenware easily.",
			},
			{
				"Optional Drainboard": "Space for drying or sorting items.",
			},
			{
				"Adjustable Legs": "Customizable height for user comfort.",
			},
			{
				"Easy Maintenance":
					"Smooth surface and rounded edges for quick cleaning.",
			},
		],
		customer_benefits: [
			{
				"Efficient Workflow": "Keeps dishwashing organized and fast.",
			},
			{
				Durability: "Withstands wear and tear from constant use.",
			},
			{
				"Space Saving Options":
					"Choose from single, double, or triple basin styles.",
			},
			{
				"Sanitary Use": "Helps meet food safety and hygiene standards.",
			},
		],
		link: "/products/commercial-kitchen-sink",
	},
	{
		id: "pizza-oven",
		heading: "Pizza Oven",
		text1: "A high-performance oven designed for baking pizzas quickly and evenly.",
		text2: "The Pizza Oven is a must-have for restaurants, cafes, and bakeries. Built for efficiency and consistent results, it delivers perfect crusts and evenly cooked pizzas in every batch.",
		key_features: [
			{
				"High Heat Capacity":
					"Reaches optimal baking temperatures quickly.",
			},
			{
				"Even Heat Distribution":
					"Ensures pizzas are baked evenly throughout.",
			},
			{
				"Durable Build":
					"Constructed from robust materials for long-term use.",
			},
			{
				"Compact Design": "Fits well in both small and large kitchens.",
			},
			{
				"User-Friendly Controls":
					"Simple operation for fast, efficient baking.",
			},
		],
		customer_benefits: [
			{
				"Consistent Quality": "Delivers perfect pizzas every time.",
			},
			{
				"Time Saving": "Quick heating and baking reduce wait times.",
			},
			{
				"Versatile Use":
					"Can also be used for breads, pastries, and flatbreads.",
			},
			{
				"Reliable Investment":
					"Supports long-term operations in food businesses.",
			},
		],
		link: "/products/pizza-oven",
	},
	{
		id: "electric-deep-fryer",
		heading: "Electric Deep Fryer",
		text1: "An efficient fryer designed for fast, safe, and consistent deep frying.",
		text2: "The Electric Deep Fryer is ideal for restaurants, fast-food outlets, and catering units. With precise temperature controls and a sturdy build, it ensures crispy, golden results with every batch.",
		key_features: [
			{
				"Precise Temperature Control":
					"Allows accurate heat adjustment for various foods.",
			},
			{
				"High-Capacity Tank": "Suitable for bulk frying requirements.",
			},
			{
				"Durable Construction": "Built to withstand heavy daily use.",
			},
			{
				"Energy Efficient":
					"Consumes less power without compromising performance.",
			},
			{
				"Safe Operation":
					"Equipped with overheat protection and safety features.",
			},
		],
		customer_benefits: [
			{
				"Consistent Frying": "Ensures uniform crispiness and taste.",
			},
			{
				"Faster Service": "Reduces cooking time during peak hours.",
			},
			{
				"Cost Saving": "Energy-efficient design helps lower bills.",
			},
			{
				"Reliable Equipment":
					"Long-lasting appliance for commercial kitchens.",
			},
		],
		link: "/products/electric-deep-fryer",
	},
	{
		id: "manual-gas-fryer",
		heading: "Manual Gas Fryer",
		text1: "A sturdy gas-powered fryer for high-volume frying needs in commercial kitchens.",
		text2: "The Manual Gas Fryer is designed for restaurants, street food vendors, and catering units. It delivers quick heating and consistent frying while being easy to operate and maintain.",
		key_features: [
			{
				"Gas-Powered Efficiency":
					"Provides rapid heating and strong flame output.",
			},
			{
				"Heavy-Duty Build":
					"Made from durable materials for long-term use.",
			},
			{
				"Large Capacity": "Can fry large batches at once.",
			},
			{
				"Easy to Operate": "Manual controls allow straightforward use.",
			},
			{
				"Low Maintenance": "Simple design makes cleaning easy.",
			},
		],
		customer_benefits: [
			{
				"Time Saving": "Quick frying improves service speed.",
			},
			{
				"Cost Efficient":
					"Gas-powered system reduces electricity expenses.",
			},
			{
				"Reliable Output":
					"Delivers crispy and uniform frying results.",
			},
			{
				"Long-Term Durability": "Built for continuous commercial use.",
			},
		],
		link: "/products/manual-gas-fryer",
	},
	{
		id: "gas-range-with-oven",
		heading: "Gas Range with Oven",
		text1: "A versatile cooking appliance that combines a gas stove with a powerful oven.",
		text2: "The Gas Range with Oven is perfect for restaurants, hotels, and catering units. It provides efficient flame cooking on top while the oven below ensures even baking and roasting.",
		key_features: [
			{
				"Dual Functionality":
					"Combines stovetop cooking with oven baking.",
			},
			{
				"High Flame Control": "Adjustable burners for precise cooking.",
			},
			{
				"Spacious Oven": "Large capacity oven for multiple dishes.",
			},
			{
				"Durable Structure":
					"Built with strong materials for heavy-duty use.",
			},
			{
				"User-Friendly Design": "Easy operation for busy kitchens.",
			},
		],
		customer_benefits: [
			{
				"Space Saving": "Combines two appliances into one.",
			},
			{
				"Time Efficiency":
					"Allows multitasking with cooking and baking together.",
			},
			{
				"Versatile Cooking":
					"Supports frying, boiling, baking, and roasting.",
			},
			{
				"Long-Term Reliability":
					"A strong investment for commercial kitchens.",
			},
		],
		link: "/products/gas-range-with-oven",
	},
	{
		id: "cotton-candy-machine",
		heading: "Cotton Candy Machine",
		text1: "A fun and efficient machine for preparing fresh cotton candy in seconds.",
		text2: "The Cotton Candy Machine is popular for sweet shops, fairs, and events. Easy to operate and built with durable materials, it delivers consistent results with fluffy, colorful cotton candy.",
		key_features: [
			{
				"Fast Operation":
					"Prepares cotton candy in just a few seconds.",
			},
			{
				"Durable Build": "Made for long-lasting and continuous use.",
			},
			{
				"User-Friendly Controls":
					"Simple to operate for quick results.",
			},
			{
				"Compact Design": "Portable and easy to carry for events.",
			},
			{
				"Low Maintenance": "Easy-to-clean structure for regular use.",
			},
		],
		customer_benefits: [
			{
				"Attracts Customers":
					"Creates a fun experience at shops and events.",
			},
			{
				"Boosts Sales":
					"Generates high demand in sweet shops and fairs.",
			},
			{
				"Quick Service": "Delivers cotton candy instantly.",
			},
			{
				"Cost Efficient": "Low running costs with high returns.",
			},
		],
		link: "/products/cotton-candy-machine",
	},
	{
		id: "visi-cooler",
		heading: "Visi Cooler",
		text1: "A transparent glass-door cooler designed for storing and displaying beverages.",
		text2: "The Visi Cooler is widely used in restaurants, retail shops, and cafes. With its sleek design and efficient cooling system, it ensures beverages remain fresh and visible to customers.",
		key_features: [
			{
				"Transparent Glass Doors":
					"Provides clear visibility of stored items.",
			},
			{
				"Fast Cooling": "Maintains consistent low temperatures.",
			},
			{
				"Durable Structure": "Built for heavy-duty commercial use.",
			},
			{
				"Adjustable Shelves": "Flexible storage for various beverages.",
			},
			{
				"Energy Saving": "Efficient cooling reduces electricity usage.",
			},
		],
		customer_benefits: [
			{
				"Boosts Sales":
					"Attractive display encourages impulse purchases.",
			},
			{
				Convenience: "Keeps beverages chilled and ready to serve.",
			},
			{
				"Reliable Cooling": "Ensures long-lasting freshness.",
			},
			{
				"Practical Investment":
					"Durable and efficient for food businesses.",
			},
		],
		link: "/products/visi-cooler",
	},
	{
		id: "bread-slicer",
		heading: "Bread Slicer",
		text1: "A precision machine designed to slice loaves of bread quickly and evenly.",
		text2: "The Bread Slicer is ideal for bakeries, restaurants, and hotels. With its sharp blades and sturdy build, it ensures uniform slices, saving time and effort during preparation.",
		key_features: [
			{
				"Sharp Blades": "Provides clean and even slices of bread.",
			},
			{
				"High-Speed Operation":
					"Slices multiple loaves in minimal time.",
			},
			{
				"Durable Build":
					"Crafted from high-quality materials for long life.",
			},
			{
				"Safe Design": "Equipped with safety guards for secure use.",
			},
			{
				"Easy Maintenance": "Simple to clean and maintain daily.",
			},
		],
		customer_benefits: [
			{
				"Time Saving": "Speeds up bread preparation in bakeries.",
			},
			{
				"Consistent Results":
					"Delivers perfectly uniform slices every time.",
			},
			{
				"Labor Efficient": "Reduces manual effort and errors.",
			},
			{
				"Profitable Investment":
					"Enhances productivity and customer satisfaction.",
			},
		],
		link: "/products/bread-slicer",
	},
	{
		id: "bakery-mixer",
		heading: "Bakery Mixer",
		text1: "A heavy-duty mixer built for kneading, whipping, and blending bakery ingredients.",
		text2: "The Bakery Mixer is a key appliance for bakeries, sweet shops, and restaurants. With its powerful motor and durable build, it ensures efficient preparation of dough, batter, and creams.",
		key_features: [
			{
				"Powerful Motor": "Handles large volumes with ease.",
			},
			{
				"Multiple Attachments":
					"Supports kneading, whipping, and mixing.",
			},
			{
				"Sturdy Construction": "Made for heavy-duty commercial use.",
			},
			{
				"User-Friendly Controls":
					"Simple to operate for staff convenience.",
			},
			{
				"Low Maintenance": "Easy-to-clean design for daily use.",
			},
		],
		customer_benefits: [
			{
				"Improved Productivity":
					"Speeds up preparation of bakery items.",
			},
			{
				"Consistent Quality":
					"Delivers uniform results for every batch.",
			},
			{
				"Labor Saving":
					"Reduces manual effort and dependency on workers.",
			},
			{
				"Long-Term Reliability":
					"Durable investment for commercial kitchens.",
			},
		],
		link: "/products/bakery-mixer",
	},
];
