import { Button, Card } from "flowbite-react";

export default function ProductPage() {
	const cardContent = [
		{
			img: "https://images.pexels.com/photos/6612601/pexels-photo-6612601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			heading: "Institution/ Corporate/ Bulk cooking",
			text: "Middleby Celfrost empowers you to excel in institutional and bulk cooking",
		},
		{
			img: "https://images.pexels.com/photos/4099350/pexels-photo-4099350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			heading: "Institution/ Corporate/ Bulk cooking",
			text: "Middleby Celfrost empowers you to excel in institutional and bulk cooking",
		},
		{
			img: "https://images.pexels.com/photos/6946068/pexels-photo-6946068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			heading: "Institution/ Corporate/ Bulk cooking",
			text: "Middleby Celfrost empowers you to excel in institutional and bulk cooking",
		},
		{
			img: "https://images.pexels.com/photos/9019389/pexels-photo-9019389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			heading: "Institution/ Corporate/ Bulk cooking",
			text: "Middleby Celfrost empowers you to excel in institutional and bulk cooking",
        },
        {
			img: "https://images.pexels.com/photos/29080604/pexels-photo-29080604/free-photo-of-modern-kitchen-interior-with-stainless-steel-appliances.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			heading: "Institution/ Corporate/ Bulk cooking",
			text: "Middleby Celfrost empowers you to excel in institutional and bulk cooking",
		},
		{
			img: "https://images.pexels.com/photos/27706867/pexels-photo-27706867/free-photo-of-a-stove-top-with-a-tea-pot-on-it.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
			heading: "Institution/ Corporate/ Bulk cooking",
			text: "Middleby Celfrost empowers you to excel in institutional and bulk cooking",
		},
		{
			img: "https://images.pexels.com/photos/6248774/pexels-photo-6248774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			heading: "Institution/ Corporate/ Bulk cooking",
			text: "Middleby Celfrost empowers you to excel in institutional and bulk cooking",
		},
		{
			img: "https://images.pexels.com/photos/6612601/pexels-photo-6612601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			heading: "Institution/ Corporate/ Bulk cooking",
			text: "Middleby Celfrost empowers you to excel in institutional and bulk cooking",
		},
	];

	const ProductCard = ({
		img,
		heading,
		text,
	}: {
		img: string;
		heading: string;
		text: string;
	}) => {
		return (
			<Card className="max-w-sm bg-secondary border-secondary" imgAlt="not available" imgSrc={img}>
				<h5 className="text-2xl font-bold tracking-tight text-accent">
					{heading}
				</h5>
				<p className="font-normal text-text">
					{text}
				</p>
			</Card>
		);
	};

	return (
		<div className="p-10">
			<h1 className="text-text font-extrabold text-3xl text-center h-fit">
				Explore Our Product!!
			</h1>
			<div className="grid items-end grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
				{cardContent.map((elem, index) => {
					return (
						<div key={index}>
							<ProductCard
								img={elem.img}
								heading={elem.heading}
								text={elem.text}
							/>
						</div>
					);
				})}
            </div>
            
            <Button className="bg-accent mx-auto my-4 border border-accent hover:bg-transparent hover:scale-110 transition cursor-pointer">View more</Button>
		</div>
	);
}
