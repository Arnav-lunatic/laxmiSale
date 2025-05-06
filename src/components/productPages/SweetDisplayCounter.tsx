import ProductPageTemplate from "./ProductPageTemplate"

export default function SweetDisplayCounter() {
    const DescriptionContent = () => {
        return (
            <div className="flex-1">
                <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">
                    Sweet Display Counter
                </h2>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                    A temperature-controlled counter designed to beautifully showcase and preserve sweets in retail environments.
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Ideal for sweet shops and bakeries, this glass-fronted counter ensures sweets are displayed attractively while staying fresh, clean, and easily accessible for serving.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Features</h3>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1 mb-4">
                    <li><strong>Elegant Glass Display:</strong> Clear visibility with curved or flat designs.</li>
                    <li><strong>Temperature Control:</strong> Refrigerated and dry models available.</li>
                    <li><strong>Stainless Steel Body:</strong> Hygienic and easy to clean.</li>
                    <li><strong>LED Lighting:</strong> Enhances product visibility and appeal.</li>
                    <li><strong>Multiple Shelves:</strong> Tiered layout for organized presentation.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Customer Benefits</h3>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-1">
                    <li><strong>Enhanced Presentation:</strong> Attracts customers and boosts sales.</li>
                    <li><strong>Preserves Freshness:</strong> Keeps sweets safe and at ideal temperature.</li>
                    <li><strong>Hygienic Display:</strong> Shields products from external contamination.</li>
                    <li><strong>Space-Saving:</strong> Compact design with high storage efficiency.</li>
                </ul>
            </div>
        )
    }

    const image = "https://res.cloudinary.com/dfqjxrcaj/image/upload/c_crop,ar_1:1/v1746475112/sweet_display_counter_sgxroo.jpg"

    return (
        <ProductPageTemplate DescriptionComponent={DescriptionContent} image={image} />
  )
}
