import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";

interface props {
	img: string;
	heading: string;
	text: string;
	link? : string;
}

export const ProductCard = ({ img, heading, text, link }: props) => {
    const navigate = useNavigate();
	return (
		<Card
			onClick={() => {
				link ? navigate(link) : navigate('')
			}}
			className="w-full bg-secondary border-secondary"
			imgAlt="not available"
			imgSrc={img}
		>
			<h5 className="text-2xl font-bold tracking-tight text-accent">
				{heading}
			</h5>
			<p className="font-normal text-text">{text}</p>
		</Card>
	);
};
