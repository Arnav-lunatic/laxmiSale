import BrandComponents from "./BrandComponents";
import { Header } from "./Hearder";
import {ProductComponent} from "./ProductComponent";
import FloatingActionButtons from "./FloatingActionButtons";

export default function () {
	return (
		<div className="relative">
			<Header />
			<BrandComponents />
			<ProductComponent />
			<FloatingActionButtons/>
		</div>
	);
}
