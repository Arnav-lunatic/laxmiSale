import { Button, Carousel } from "flowbite-react";

export function Header() {
	const carouselData = [
		{
			img: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg",
		},
		{
			img: "https://images.pexels.com/photos/5864291/pexels-photo-5864291.jpeg",
		},
		{
			img: "https://images.pexels.com/photos/5531043/pexels-photo-5531043.jpeg",
		},
		{
			img: "https://images.pexels.com/photos/4947388/pexels-photo-4947388.jpeg",
		},
		{
			img: "https://images.pexels.com/photos/10104424/pexels-photo-10104424.jpeg",
		},
	];

	return (
		<div className="h-[90dvh] max-h-[960px] m-auto w-full relative">
			<Carousel className="p-2 h-full ">
				{carouselData.map((eachElem, index) => {
					return (
						<div key={index} className="h-full">
							<img
								className="h-full w-full object-cover"
								src={eachElem.img}
								alt="..."
							/>
							<div className="absolute bottom-0 right-0 left-0 via-black/60 text-text text-sm p-10 px-2 md:text-md lg:text-lg bg-gradient-to-b from-transparent to-black">
								<div className="w-full max-w-[1200px] m-auto">
									<h1 className="font-extrabold text-4xl h-12">
										Find Your Perfect Equipment Match!
									</h1>
									<p>
										Welcome to your one-stop shop for
										optimizing your commercial kitchen!
										Middleby Celfrost offers a comprehensive
										toolbox of innovative solutions designed
										to meet the specific needs of your
										business. Whether you run a bustling
										restaurant, a thriving supermarket, or a
										high-volume takeaway operation, we have
										the tools to elevate your efficiency,
										boost profitability, and impress your
										customers.
									</p>
									<Button className="bg-accent font-bold ml-auto mr-8">
										Visit
									</Button>
								</div>
							</div>
						</div>
					);
				})}
			</Carousel>
		</div>
	);
}
