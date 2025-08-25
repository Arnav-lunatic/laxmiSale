import ProductPageTemplate from "./ProductPageTemplate";
import { eachProductContent } from "./Contents/EachProductContent";
import { useParams } from "react-router-dom";


export default function EachProductPage() {
    const { id } = useParams();
    const product = eachProductContent.find(product => id  === product.id);

    return (
        product && (
            <ProductPageTemplate
                image={product.image}
                heading={product.heading}
                text1={product.text1}
                text2={product.text2}
                key_features={product.key_features}
                customer_benefits={product.customer_benefits}
            />
        )
    );
}
