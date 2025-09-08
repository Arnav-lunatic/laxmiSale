export const eachProductContent: Array<{
	id: string;
	categories?: string[];
	heading: string;
	text1: string;
	text2: string;
	key_features: { [key: string]: string }[];
	customer_benefits: { [key: string]: string }[];
	link: string;
}> = [
	{
		id: "single-deck-pizza-oven",
		categories: ["Commercial Kitchen Equipment", "Ovens"],
		heading: "Single Deck Pizza Oven",
		text1: "Compact and efficient oven designed specifically for baking pizzas with uniform heat distribution.",
		text2: "Ideal for small pizzerias and restaurants, offering easy operation and consistent baking results.",
		key_features: [
			{ "High-Temperature Heating": "Perfect for crispy pizza crusts." },
			{ "Stainless Steel Body": "Durable and easy to clean." },
			{ "Adjustable Thermostat": "Precise temperature control." },
			{ "Single Deck Design": "Space-efficient for small kitchens." },
			{ "Energy Efficient": "Lower power consumption." },
		],
		customer_benefits: [
			{ "Consistent Baking Quality": "Uniformly cooked pizzas." },
			{ "Compact Design": "Fits limited kitchen space." },
			{ "Durable and Hygienic": "Built for continuous use." },
			{ "Easy Operation": "Minimal training required." },
		],
		link: "/products/single-deck-pizza-oven",
	},

	{
		id: "ss-body-deep-fat-fryer",
		categories: ["Commercial Kitchen Equipment", "Fryers"],
		heading: "SS Body Deep Fat Fryer",
		text1: "Stainless steel deep fat fryer designed for heavy-duty frying in commercial kitchens.",
		text2: "Ideal for frying snacks, fast food items, and other fried dishes with precise temperature control and easy maintenance.",
		key_features: [
			{ "Stainless Steel Body": "Corrosion-resistant and durable." },
			{ "Temperature Control": "Accurate and adjustable heating." },
			{ "Large Oil Capacity": "Suitable for high-volume frying." },
			{ "Safety Features": "Thermal cut-off and indicator lights." },
			{ "Easy Drain System": "Convenient oil change and cleaning." },
		],
		customer_benefits: [
			{ "Crispy Food Output": "Perfect frying results." },
			{
				Durability:
					"Built for long-term use in commercial environments.",
			},
			{ "Safety Assurance": "Protects operators from overheating." },
			{
				"Simple Maintenance":
					"Hassle-free cleaning and oil management.",
			},
		],
		link: "/products/ss-body-deep-fat-fryer",
	},

	{
		id: "ss-commercial-hood-ducting",
		categories: ["Commercial Kitchen Equipment"],
		heading: "SS Commercial Hood & Ducting",
		text1: "Efficient ventilation system for removing smoke, heat, and grease from commercial kitchens.",
		text2: "Stainless steel construction with powerful extraction capability, ensuring a clean and safe kitchen environment.",
		key_features: [
			{
				"Stainless Steel Construction":
					"Durable and corrosion-resistant.",
			},
			{
				"High Extraction Capacity":
					"Efficiently removes smoke and odors.",
			},
			{ "Customizable Size": "Fits various kitchen layouts." },
			{
				"Easy Cleaning Access":
					"Removable filters and accessible panels.",
			},
			{ "Energy Efficient Fans": "Low power consumption." },
		],
		customer_benefits: [
			{
				"Healthier Kitchen Environment":
					"Removes airborne grease and odors.",
			},
			{ "Improved Safety": "Reduces fire risks." },
			{ "Low Maintenance": "Easy to clean and service." },
			{
				"Regulatory Compliance":
					"Meets hygiene and ventilation standards.",
			},
		],
		link: "/products/ss-commercial-hood-ducting",
	},

	{
		id: "stainless-steel-water-cooler",
		categories: ["Water Coolers"],
		heading: "Stainless Steel Water Cooler",
		text1: "Robust water cooler designed to provide chilled drinking water in commercial and institutional settings.",
		text2: "Durable stainless steel body with energy-efficient refrigeration ensures long-term use and hygiene.",
		key_features: [
			{ "Stainless Steel Body": "Hygienic and durable." },
			{ "Energy Efficient Cooling": "Low power consumption." },
			{ "Large Storage Capacity": "Meets high-demand environments." },
			{ "Push Button Dispenser": "Easy access to water." },
			{ "Safety Features": "Temperature regulation and auto shut-off." },
		],
		customer_benefits: [
			{ "Reliable Cold Water Supply": "Consistent chilled water." },
			{ "Hygienic Design": "Prevents bacterial growth." },
			{ Durability: "Long-lasting performance." },
			{ "Cost-Efficient Operation": "Saves energy." },
		],
		link: "/products/stainless-steel-water-cooler",
	},

	{
		id: "sweet-display",
		categories: ["Display Counters"],
		heading: "Sweet Display",
		text1: "Attractive display counter designed to showcase sweets and desserts in shops and bakeries.",
		text2: "Features glass panels and built-in refrigeration to maintain freshness and enhance product visibility.",
		key_features: [
			{ "Glass Display Panels": "Clear visibility of sweets." },
			{ "Refrigerated Storage": "Keeps items fresh." },
			{ "Stainless Steel Construction": "Durable and easy to clean." },
			{ "Adjustable Shelving": "Customizable display space." },
			{ "Energy Efficient": "Low power consumption." },
		],
		customer_benefits: [
			{ "Enhanced Visual Appeal": "Attracts customers." },
			{ "Fresh Product Presentation": "Maintains quality of sweets." },
			{ "Durable Build": "Long-lasting for commercial use." },
			{ "Ease of Use": "Simple display and restocking." },
		],
		link: "/products/sweet-display",
	},

	{
		id: "tandoor",
		categories: ["Commercial Kitchen Equipment", "Ovens"],
		heading: "Tandoor",
		text1: "Traditional clay or steel tandoor for preparing authentic Indian tandoori dishes in commercial kitchens.",
		text2: "Suitable for restaurants and catering services, offering consistent high-temperature cooking for meats, breads, and more.",
		key_features: [
			{
				"Durable Construction":
					"Steel or clay-based for heat retention.",
			},
			{ "High-Temperature Operation": "Perfect for tandoori cooking." },
			{ "Adjustable Grates": "For versatile cooking options." },
			{ "Easy Cleaning": "Simple ash removal system." },
			{ "Compact Design": "Fits various kitchen spaces." },
		],
		customer_benefits: [
			{ "Authentic Flavor": "Traditional cooking style." },
			{ "Versatile Cooking": "Prepare meats, breads, and vegetables." },
			{ "Efficient Heating": "Consistent high temperatures." },
			{ "Durable Build": "Designed for long-term commercial use." },
		],
		link: "/products/tandoor",
	},

	{
		id: "under-counter-refrigerator",
		categories: ["Commercial Kitchen Equipment", "Refrigerators"],
		heading: "Under Counter Refrigerator",
		text1: "Compact refrigerator designed to fit beneath countertops for convenient access in commercial kitchens.",
		text2: "Offers efficient storage of perishable items, keeping ingredients fresh and easily accessible during food preparation.",
		key_features: [
			{ "Compact Design": "Fits under counters." },
			{ "Adjustable Shelves": "Customizable storage space." },
			{ "Energy Efficient Cooling": "Reduces power usage." },
			{ "Stainless Steel Body": "Durable and hygienic." },
			{ "Easy Temperature Control": "Simple thermostat settings." },
		],
		customer_benefits: [
			{ "Convenient Storage": "Accessible during cooking." },
			{ "Fresh Ingredients": "Maintains optimal temperature." },
			{ "Durable and Long-Lasting": "Built for heavy use." },
			{ "Space Saving": "Utilizes kitchen space effectively." },
		],
		link: "/products/under-counter-refrigerator",
	},

	{
		id: "vertical-bun-toaster",
		heading: "Vertical Bun Toaster",
		categories: ["Commercial Kitchen Equipment"],
		text1: "Specialized toaster for heating buns uniformly and quickly in commercial food outlets.",
		text2: "Vertical design ensures even heat distribution, ideal for fast-food restaurants and bakeries.",
		key_features: [
			{ "Vertical Heating Elements": "Uniform toasting of buns." },
			{ "Stainless Steel Body": "Durable and hygienic." },
			{ "Adjustable Timer": "Precise toasting control." },
			{ "Compact Design": "Fits limited space." },
			{ "Energy Efficient": "Low power usage." },
		],
		customer_benefits: [
			{ "Consistent Toasting": "Uniformly heated buns." },
			{ "Fast Operation": "Speeds up service time." },
			{ "Durable Design": "Built for commercial use." },
			{ "Easy to Operate": "Minimal training required." },
		],
		link: "/products/vertical-bun-toaster",
	},

	{
		id: "wet-grinding-machine",
		categories: ["Commercial Kitchen Equipment"],
		heading: "Wet Grinding Machine",
		text1: "Heavy-duty machine for grinding wet ingredients like spices, grains, and lentils in commercial kitchens.",
		text2: "Ensures smooth and consistent grinding for dosa, idli, and other batter-based dishes, widely used in restaurants and food production units.",
		key_features: [
			{ "Powerful Motor": "Efficient grinding of tough ingredients." },
			{ "Stainless Steel Drum": "Durable and hygienic." },
			{ "Adjustable Grinding Speed": "Customizable as per ingredient." },
			{ "Easy Cleaning": "Removable parts for thorough cleaning." },
			{ "Safety Mechanisms": "Prevents overheating and misuse." },
		],
		customer_benefits: [
			{ "Consistent Batter Texture": "Uniform grinding results." },
			{ "High Efficiency": "Large quantities processed quickly." },
			{ "Durable and Reliable": "Built for long-term use." },
			{ "Hygienic Operation": "Reduces contamination risk." },
		],
		link: "/products/wet-grinding-machine",
	},
	{
		id: "food-and-catering-services",
		categories: ["Food Services"],
		heading: "Food And Catering Services",
		text1: "Comprehensive food and catering services tailored for events, corporate functions, and large gatherings.",
		text2: "We specialize in delivering high-quality meals with professional service, ensuring hygiene and customer satisfaction for weddings, parties, and corporate events.",
		key_features: [
			{
				"Custom Menu Options":
					"Wide variety of cuisines to suit every event.",
			},
			{ "Professional Staff": "Trained chefs and service personnel." },
			{
				"Hygienic Preparation":
					"Strict food safety standards maintained.",
			},
			{ "On-Time Delivery": "Reliable service to meet your schedule." },
			{
				"Event Planning Support":
					"Guidance for seamless event execution.",
			},
		],
		customer_benefits: [
			{
				Convenience:
					"All-in-one service for food and event management.",
			},
			{
				"High-Quality Meals":
					"Delicious and hygienically prepared dishes.",
			},
			{
				"Professional Experience":
					"Smooth operation from setup to service.",
			},
			{
				"Flexible Packages":
					"Customizable according to budget and needs.",
			},
		],
		link: "/products/food-and-catering-services",
	},

	{
		id: "gas-range",
		categories: ["Commercial Kitchen Equipment"],
		heading: "Gas Range",
		text1: "Robust gas range designed for high-efficiency cooking in commercial kitchens.",
		text2: "Equipped with multiple burners, durable construction, and safety features, ideal for restaurants, hotels, and catering services.",
		key_features: [
			{ "Multiple Burners": "Simultaneous cooking of multiple dishes." },
			{ "Stainless Steel Body": "Durable and easy to clean." },
			{ "Safety Valves": "Prevents gas leakage for safe operation." },
			{ "High Heat Output": "Efficient and fast cooking." },
			{ "Adjustable Flame Control": "Precision in cooking temperature." },
		],
		customer_benefits: [
			{ "Increased Kitchen Efficiency": "Faster meal preparation." },
			{ Durability: "Built to withstand commercial use." },
			{ "Safety Assurance": "Minimized risk of accidents." },
			{ "Cost-Effective Operation": "Efficient fuel usage." },
		],
		link: "/products/gas-range",
	},

	{
		id: "glass-door-visi-cooler",
		categories: ["Refrigerators"],
		heading: "Glass Door Visi Cooler",
		text1: "Refrigeration unit with glass doors designed to display beverages and perishable items clearly while maintaining optimal temperature.",
		text2: "Perfect for convenience stores, cafes, and restaurants, it enhances product visibility and accessibility.",
		key_features: [
			{ "Glass Doors": "Clear visibility of stored items." },
			{ "Efficient Cooling System": "Stable temperature control." },
			{ "Stainless Steel Interior": "Hygienic and easy to clean." },
			{ "Energy Efficient": "Optimized compressor for low power use." },
			{ "LED Lighting": "Bright illumination for product display." },
		],
		customer_benefits: [
			{
				"Enhanced Product Display":
					"Boosts sales with attractive visibility.",
			},
			{ "Long-Term Preservation": "Keeps products fresh longer." },
			{ "Energy Savings": "Reduces electricity costs." },
			{ "User Convenience": "Easy access for customers and staff." },
		],
		link: "/products/glass-door-visi-cooler",
	},

	{
		id: "hard-top-freezer",
		categories: ["Freezers"],
		heading: "Hard Top Freezer",
		text1: "Commercial freezer designed with a solid top lid for bulk freezing and storage of food products.",
		text2: "Ideal for ice cream parlors, supermarkets, and commercial kitchens needing reliable cold storage solutions.",
		key_features: [
			{ "Robust Lid": "Secure storage with easy access." },
			{
				"Efficient Cooling System":
					"Maintains consistent low temperatures.",
			},
			{ "Stainless Steel Interior": "Durable and hygienic." },
			{
				"Energy Efficient Compressor":
					"Optimized for lower power consumption.",
			},
			{
				"Large Storage Capacity":
					"Stores significant quantities of frozen goods.",
			},
		],
		customer_benefits: [
			{
				"Reliable Preservation":
					"Maintains product quality for longer periods.",
			},
			{ "Low Maintenance": "Simple cleaning and upkeep." },
			{ "Cost-Effective": "Reduces energy expenses." },
			{ "User-Friendly Design": "Easy loading and unloading of items." },
		],
		link: "/products/hard-top-freezer",
	},

	{
		id: "ice-machine",
		categories: ["Commercial Kitchen Equipment", "Freezers"],
		heading: "Ice Machine",
		text1: "Industrial-grade ice maker for producing large volumes of ice efficiently and reliably.",
		text2: "Ideal for hotels, hospitals, restaurants, and bars, delivering clean ice for multiple applications.",
		key_features: [
			{
				"High Production Capacity":
					"Generates large amounts of ice daily.",
			},
			{ "Stainless Steel Build": "Durable and hygienic." },
			{ "Automatic Operation": "Simple user interface and controls." },
			{ "Energy Efficient": "Optimized for low power usage." },
			{ "Compact Design": "Fits in limited spaces." },
		],
		customer_benefits: [
			{ "Reliable Ice Supply": "Meets high-demand requirements." },
			{ "Hygienic Ice Production": "Safe for consumption." },
			{ "Reduced Labor": "Fully automatic process." },
			{ "Long-Term Durability": "Built for commercial environments." },
		],
		link: "/products/ice-machine",
	},

	{
		id: "manual-paneer-press-machine",
		categories: ["Commercial Kitchen Equipment"],
		heading: "Manual Paneer Press Machine",
		text1: "Simple yet efficient machine for pressing paneer (cottage cheese) in commercial dairy and food production setups.",
		text2: "Allows for controlled pressing to achieve consistent texture and moisture content, suitable for small-scale operations.",
		key_features: [
			{
				"Stainless Steel Construction":
					"Hygienic and corrosion-resistant.",
			},
			{
				"Adjustable Pressure Settings":
					"Customizable for different paneer types.",
			},
			{ "Compact Design": "Easy to fit in limited spaces." },
			{ "Easy Operation": "Manual press for precise control." },
			{ "Durable Build": "Long-lasting with minimal maintenance." },
		],
		customer_benefits: [
			{ "Consistent Quality": "Uniform paneer texture and moisture." },
			{
				"Low Initial Investment":
					"Cost-effective compared to automatic machines.",
			},
			{ "Ease of Use": "Simple manual operation." },
			{ "Hygienic Process": "Reduces contamination risk." },
		],
		link: "/products/manual-paneer-press-machine",
	},

	{
		id: "meat-mincer-machine",
		categories: ["Commercial Kitchen Equipment"],
		heading: "Meat Mincer Machine",
		text1: "Heavy-duty machine for grinding meat efficiently in butcheries, restaurants, and food processing units.",
		text2: "Designed for consistent output with stainless steel parts and easy cleaning features, ideal for high-volume operations.",
		key_features: [
			{ "High-Power Motor": "Efficient grinding of meat." },
			{ "Stainless Steel Construction": "Durable and hygienic." },
			{ "Multiple Plate Sizes": "Choose different grinding textures." },
			{ "Safety Features": "Prevents accidents during operation." },
			{ "Easy Disassembly": "Facilitates quick cleaning." },
		],
		customer_benefits: [
			{ "Consistent Meat Texture": "Uniform mincing for recipes." },
			{ "High Efficiency": "Handles large quantities quickly." },
			{ "Hygienic Design": "Reduces contamination risk." },
			{ "Durable and Long-Lasting": "Built for commercial use." },
		],
		link: "/products/meat-mincer-machine",
	},

	{
		id: "minibar",
		categories: ["Refrigerators"],
		heading: "Minibar",
		text1: "Compact refrigeration unit designed to store beverages and snacks for hotels, lounges, and private spaces.",
		text2: "Offers efficient cooling in a small form factor, with transparent doors for easy access and product display.",
		key_features: [
			{ "Compact Design": "Fits into small spaces." },
			{ "Energy Efficient Compressor": "Low power consumption." },
			{ "Glass Door Option": "Visibility of stored items." },
			{ "Adjustable Shelves": "Customizable storage space." },
			{ "Silent Operation": "Quiet cooling for hotel rooms." },
		],
		customer_benefits: [
			{ "Convenient Access": "Easy access to chilled items." },
			{ "Hygienic Storage": "Prevents contamination." },
			{ "Space Saving": "Compact unit suitable for limited space." },
			{ "Cost Savings": "Energy-efficient operation." },
		],
		link: "/products/minibar",
	},

	{
		id: "multipurpose-coffee-machine",
		categories: ["Commercial Kitchen Equipment"],
		heading: "Multipurpose Coffee Machine",
		text1: "Versatile coffee machine capable of making espresso, cappuccino, latte, and more, designed for commercial use.",
		text2: "Built for cafes, offices, and restaurants, combining multiple brewing technologies into a single robust machine.",
		key_features: [
			{ "Multiple Brewing Options": "Supports various coffee styles." },
			{ "Stainless Steel Build": "Durable and hygienic." },
			{
				"Adjustable Settings":
					"Customize brew strength and temperature.",
			},
			{
				"User-Friendly Interface":
					"Touch controls and automated cycles.",
			},
			{ "Energy Efficient": "Reduces power consumption." },
		],
		customer_benefits: [
			{
				"Wide Range of Coffee Varieties":
					"Meets diverse customer preferences.",
			},
			{ "Consistent Quality": "Professional-grade coffee output." },
			{ "Low Maintenance": "Easy cleaning and minimal upkeep." },
			{ Durability: "Designed for heavy commercial use." },
		],
		link: "/products/multipurpose-coffee-machine",
	},

	{
		id: "plain-awning",
		categories: ["Other Products"],
		heading: "Plain Awning",
		text1: "Simple and durable awning designed for commercial spaces, providing shade and protection from weather elements.",
		text2: "Made with high-quality materials, suitable for shop fronts, cafes, and outdoor service areas.",
		key_features: [
			{ "Weather-Resistant Fabric": "Protects against sun and rain." },
			{ "Sturdy Frame": "Supports heavy fabric and wind loads." },
			{ "Customizable Sizes": "Fit various shop dimensions." },
			{ "Easy Installation": "Simple mounting mechanism." },
			{ "Minimal Maintenance": "Durable materials for long life." },
		],
		customer_benefits: [
			{ "Enhanced Customer Comfort": "Provides shelter for customers." },
			{ "Attractive Appearance": "Neat look for business fronts." },
			{ "Durable and Reliable": "Long-term protection." },
			{ "Cost-Effective Solution": "Affordable weather protection." },
		],
		link: "/products/plain-awning",
	},
	{
		id: "buffet-counter",
		categories: ["Display Counters"],
		heading: "Buffet Counter",
		text1: "A well-designed buffet counter ideal for displaying and serving food in commercial settings.",
		text2: "Constructed with durable materials, it ensures efficient food service while maintaining hygiene in restaurants, catering services, and banquet halls.",
		key_features: [
			{
				"Stainless Steel Construction":
					"Durable and easy to clean for daily use.",
			},
			{
				"Adjustable Shelves":
					"Customizable space for various serving needs.",
			},
			{ "Built-in Heating Options": "Keeps food warm during service." },
			{ "Glass Display": "Clear visibility of food items." },
			{ "Easy Mobility": "Optional caster wheels for portability." },
		],
		customer_benefits: [
			{
				"Efficient Food Display":
					"Enhances presentation and access to food items.",
			},
			{ "Hygienic Design": "Prevents contamination during service." },
			{ Durability: "Long-lasting for commercial environments." },
			{ "Space Optimization": "Compact yet spacious serving area." },
		],
		link: "/products/buffet-counter",
	},

	{
		id: "bulk-milk-cooling-tank",
		categories: ["Dairy Equipment"],
		heading: "Bulk Milk Cooling Tank",
		text1: "Essential equipment for dairy businesses to store large quantities of milk under optimal conditions.",
		text2: "Designed with stainless steel and advanced cooling technology, it maintains milk quality and extends shelf life, suitable for dairy farms and milk collection centers.",
		key_features: [
			{ "Stainless Steel Body": "Hygienic and corrosion-resistant." },
			{
				"Efficient Cooling System":
					"Maintains consistent low temperatures.",
			},
			{
				"Digital Temperature Controller":
					"Precise temperature management.",
			},
			{ "Large Capacity": "Ideal for bulk storage needs." },
			{ "Easy Cleaning": "Smooth surfaces prevent bacterial buildup." },
		],
		customer_benefits: [
			{
				"Milk Quality Preservation":
					"Prevents spoilage by maintaining low temperature.",
			},
			{ "Cost-Effective": "Reduces wastage with efficient storage." },
			{ "Reliable Performance": "Consistent cooling under heavy use." },
			{ "Ease of Operation": "Simple controls for efficient use." },
		],
		link: "/products/bulk-milk-cooling-tank",
	},

	{
		id: "chicken-sorma-machine",
		categories: ["Commercial Kitchen Equipment"],
		heading: "Chicken Sorma Machine",
		text1: "Specialized machine for evenly marinating and tenderizing chicken pieces in large quantities.",
		text2: "Perfect for food processing units, restaurants, and catering services, ensuring uniform flavor distribution and reduced manual effort.",
		key_features: [
			{ "Stainless Steel Drum": "Durable and hygienic." },
			{ "Variable Speed Control": "Adjust rotation speed as needed." },
			{ "Large Capacity": "Handles bulk quantities effectively." },
			{ "Easy Cleaning Design": "Prevents bacterial buildup." },
			{ "Energy Efficient Motor": "Reduces operating costs." },
		],
		customer_benefits: [
			{ "Uniform Marination": "Ensures consistent taste and texture." },
			{ "Increased Productivity": "Processes large batches faster." },
			{ "Hygienic Processing": "Reduces contamination risk." },
			{ "Low Maintenance": "Reliable machine with minimal upkeep." },
		],
		link: "/products/chicken-sorma-machine",
	},

	{
		id: "coffee-manchine",
		categories: ["Commercial Kitchen Equipment"],
		heading: "Coffee Machine",
		text1: "Commercial-grade coffee machine designed for making espresso, cappuccino, and other coffee varieties efficiently.",
		text2: "Built for cafes, restaurants, and office setups, it ensures consistent coffee quality with user-friendly controls and robust build.",
		key_features: [
			{
				"High-Pressure Pump":
					"Extracts rich flavor from coffee grounds.",
			},
			{ "Stainless Steel Body": "Durable and easy to clean." },
			{ "Temperature Control": "Consistent brewing temperature." },
			{
				"Multiple Brewing Options":
					"Supports espresso, cappuccino, latte, etc.",
			},
			{ "Easy Maintenance": "Detachable drip tray and filter holder." },
		],
		customer_benefits: [
			{
				"Consistent Coffee Quality":
					"Professional-level output every time.",
			},
			{ "Time Efficient": "Faster brewing for busy environments." },
			{ "Simple Operation": "User-friendly interface for ease of use." },
			{ "Durable Design": "Long-lasting for heavy usage." },
		],
		link: "/products/coffee-manchine",
	},

	{
		id: "commercial-dough-mixer",
		categories: ["Commercial Kitchen Equipment"],
		heading: "Commercial Dough Mixer",
		text1: "Powerful mixer designed for kneading large quantities of dough in bakeries and food processing units.",
		text2: "Equipped with variable speed and robust build, it ensures thorough mixing of ingredients for consistent dough quality.",
		key_features: [
			{ "Heavy-Duty Motor": "Handles tough dough with ease." },
			{ "Stainless Steel Bowl": "Durable and hygienic." },
			{
				"Multiple Speed Settings":
					"Adjust mixing speed per requirement.",
			},
			{ "Safety Features": "Emergency stop and safety lock included." },
			{ "Easy Cleaning": "Detachable components for quick wash." },
		],
		customer_benefits: [
			{ "Improved Productivity": "Mixes large batches efficiently." },
			{ "Consistent Dough Quality": "Uniform mixing results." },
			{ "Time Saving": "Reduces manual labor and processing time." },
			{
				"Durable Construction":
					"Built for continuous use in industrial settings.",
			},
		],
		link: "/products/commercial-dough-mixer",
	},

	{
		id: "commercial-ice-cream-freezer",
		categories: ["Freezers"],
		heading: "Commercial Ice Cream Freezer",
		text1: "Specially designed freezer for storing and displaying ice creams in retail and food service environments.",
		text2: "Features transparent sliding lids and strong cooling capabilities, perfect for maximizing product visibility and maintaining product quality.",
		key_features: [
			{
				"Transparent Sliding Lids":
					"Easy product access and visibility.",
			},
			{
				"Efficient Cooling System":
					"Maintains stable freezing temperatures.",
			},
			{ "Stainless Steel Body": "Resistant to rust and easy to clean." },
			{ "Energy Efficient": "Optimized for low power consumption." },
			{ "Spacious Storage": "Holds large ice cream quantities." },
		],
		customer_benefits: [
			{
				"Enhanced Product Display":
					"Attracts customers with clear visibility.",
			},
			{ "Maintains Product Quality": "Prevents melting and spoilage." },
			{ "Cost Savings": "Lower power bills due to efficiency." },
			{ "Easy Operation": "Simple controls for daily use." },
		],
		link: "/products/commercial-ice-cream-freezer",
	},

	{
		id: "commercial-tray-single-deck-lpg-oven",
		categories: ["Commercial Kitchen Equipment", "Ovens"],
		heading: "Commercial Tray Single Deck LPG Oven",
		text1: "Compact LPG-powered oven designed for baking and roasting in small to medium-sized commercial kitchens.",
		text2: "Equipped with uniform heat distribution and easy controls, it is perfect for bakeries, hotels, and restaurants.",
		key_features: [
			{ "Stainless Steel Body": "Durable and hygienic." },
			{ "Uniform Heat Distribution": "Ensures even baking." },
			{ "Adjustable Temperature Control": "Precise baking settings." },
			{ "Single Tray Capacity": "Suitable for small-scale production." },
			{ "Energy Efficient LPG Use": "Cost-effective heating solution." },
		],
		customer_benefits: [
			{
				"Reliable Baking Quality":
					"Consistent results for pastries, bread, etc.",
			},
			{ "Compact Design": "Saves kitchen space." },
			{ "Low Operating Cost": "Efficient LPG usage." },
			{ "Easy Maintenance": "Simple cleaning and upkeep." },
		],
		link: "/products/commercial-tray-single-deck-lpg-oven",
	},

	{
		id: "dosa-maker",
		categories: ["Commercial Kitchen Equipment"],
		heading: "Dosa Maker",
		text1: "Electric dosa maker designed for quick and uniform preparation of dosas in commercial food outlets.",
		text2: "Non-stick surface and precise temperature control allow for perfect dosas every time, ideal for restaurants and street vendors.",
		key_features: [
			{ "Non-Stick Surface": "Prevents sticking and eases cleaning." },
			{
				"Adjustable Temperature Control":
					"Consistent cooking temperature.",
			},
			{ "Compact Design": "Fits limited kitchen space." },
			{ "Energy Efficient": "Quick heating and low power consumption." },
			{ "Durable Build": "Built for continuous commercial use." },
		],
		customer_benefits: [
			{ "Consistent Quality": "Perfect dosa texture and color." },
			{ "Fast Preparation": "Improves service speed." },
			{ "Easy to Operate": "Simple controls for staff." },
			{ "Hygienic Cooking": "Non-stick prevents food residue buildup." },
		],
		link: "/products/dosa-maker",
	},

	{
		id: "double-deck-automatic-lpg-oven",
		categories: ["Commercial Kitchen Equipment", "Ovens"],
		heading: "Double Deck Automatic LPG Oven",
		text1: "High-capacity LPG-powered oven with two baking decks for large-scale baking operations.",
		text2: "Designed for bakeries and commercial kitchens, it offers automatic temperature control and uniform heating across decks.",
		key_features: [
			{ "Dual Decks": "Double the baking capacity." },
			{
				"Automatic Temperature Control":
					"Consistent heat without manual intervention.",
			},
			{ "Stainless Steel Construction": "Durable and hygienic." },
			{
				"Energy Efficient LPG Operation":
					"Cost-effective baking solution.",
			},
			{ "User-Friendly Interface": "Easy to program baking cycles." },
		],
		customer_benefits: [
			{
				"Increased Production":
					"Bake larger quantities simultaneously.",
			},
			{ "Consistent Results": "Uniform baking across decks." },
			{ "Reduced Labor": "Automatic controls reduce manual work." },
			{ Durability: "Long-lasting performance in commercial setups." },
		],
		link: "/products/double-deck-automatic-lpg-oven",
	},

	{
		id: "dough-sheeter",
		categories: ["Commercial Kitchen Equipment"],
		heading: "Dough Sheeter",
		text1: "Industrial machine designed to roll and flatten dough to uniform thickness for bakery and food production purposes.",
		text2: "Ideal for large bakeries and pastry production, ensuring efficiency and consistency in dough preparation.",
		key_features: [
			{
				"Adjustable Thickness Control":
					"Precisely sets desired dough thickness.",
			},
			{ "Heavy-Duty Rollers": "Durable for continuous industrial use." },
			{ "Stainless Steel Frame": "Hygienic and corrosion-resistant." },
			{ "Safety Guards": "Protects operator during use." },
			{ "Easy Cleaning Design": "Simple maintenance." },
		],
		customer_benefits: [
			{ "Consistent Dough Thickness": "Perfect for uniform baking." },
			{ "Time Saving": "Faster than manual rolling." },
			{ "Durable and Reliable": "Built for heavy commercial use." },
			{ "Ease of Use": "Minimal training needed for operators." },
		],
		link: "/products/dough-sheeter",
	},
	{
		id: "pizza-oven",
		categories: ["Commercial Kitchen Equipment", "Ovens"],
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
		categories: ["Commercial Kitchen Equipment", "Fryers"],
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
		categories: ["Commercial Kitchen Equipment", "Fryers"],
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
		categories: ["Commercial Kitchen Equipment", "Ovens"],
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
		categories: ["Commercial Kitchen Equipment", "Other Products"],
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
		categories: ["Refrigerators"],
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
		categories: ["Commercial Kitchen Equipment"],
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
		categories: ["Commercial Kitchen Equipment"],
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
		categories: ["Display Counters"],
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
		categories: ["Display Counters", "Ovens", "Commercial Kitchen Equipment"],
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
		categories: ["Commercial Kitchen Equipment"],
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
];
