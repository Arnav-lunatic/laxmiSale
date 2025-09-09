import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";

interface props {
	id: string;
	heading: string;
	text: string;
	link?: string;
}

export const ProductCard = ({ id, heading, text, link }: props) => {
	const navigate = useNavigate();
	return (
		<Card
			onClick={() => {
				link ? navigate(link) : navigate('')
			}}
			className="w-full bg-secondary border-secondary cursor-pointer hover:scale-104 transition"
			renderImage={() => <img className="rounded-t-lg h-96 w-full object-cover" src={`https://res.cloudinary.com/laxmisales/image/upload/${id}.png`} alt={heading} />}
		>
			<div className="flex flex-col h-40">
				<h5 className="text-2xl font-bold tracking-tight text-accent">
					{heading}
				</h5>
				<p className="font-normal text-text">{text}</p>
			</div>
			<button className="mt-auto text-white py-2 rounded-md border border-accent">View Details</button>
		</Card>
	);
};
