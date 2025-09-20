import BrandComponents from "./BrandComponents";
import { Header } from "./Hearder";
import {ProductComponent} from "./ProductComponent";

export default function () {
	return (
		<div className="relative">
			<Header />
			<BrandComponents />
			<ProductComponent />
		</div>
	);
}
