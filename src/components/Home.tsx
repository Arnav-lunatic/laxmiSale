import BrandComponents from "./BrandComponents";
import { Header } from "./Hearder";
import {ProductComponent} from "./ProductComponent";
import ScrollToTopButton from "./ScrollToTopButton";

export default function () {
	return (
		<div className="relative">
			<Header />
			<BrandComponents />
			<ProductComponent />
			<ScrollToTopButton/>
		</div>
	);
}
